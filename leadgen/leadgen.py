"""Spilwerk leadgen — semi-automated MKB outreach drafter.

Reads seed_leads.csv, scrapes each company's website (homepage + about/contact pages
where reachable), asks Claude to assess fit and draft a personalized outreach email,
writes one markdown file per lead plus a combined report.

You review and send manually. No auto-send anywhere — that's the whole point.

Usage:
    python leadgen.py                        # process all leads in seed_leads.csv
    python leadgen.py --limit 3              # only first 3
    python leadgen.py --input my_leads.csv   # custom input

Env:
    ANTHROPIC_API_KEY must be set (or in a .env file in this directory).
"""

from __future__ import annotations

import argparse
import csv
import os
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

try:
    from anthropic import Anthropic
except ImportError:
    sys.exit("Install dependencies first: pip install -r requirements.txt")

ROOT = Path(__file__).parent
PROMPT_FILE = ROOT / "prompts" / "outreach.md"
DEFAULT_INPUT = ROOT / "seed_leads.csv"
OUTPUT_DIR = ROOT / "output"

MODEL = "claude-sonnet-4-6"
USER_AGENT = "SpilwerkLeadgen/0.1 (+https://spilwerk.nl)"
SCRAPE_TIMEOUT = 12
PAGE_KEYWORDS = ("over", "about", "contact", "team", "wie", "diensten", "services")
MAX_PAGE_CHARS = 8000


@dataclass
class Lead:
    company: str
    website: str
    contact_name: str = ""
    notes: str = ""


def slugify(s: str) -> str:
    s = re.sub(r"[^\w\-]+", "-", s.strip().lower())
    return re.sub(r"-+", "-", s).strip("-") or "lead"


def fetch(url: str) -> str | None:
    """Fetch a URL, return text or None on failure. Polite timeouts + UA."""
    try:
        r = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=SCRAPE_TIMEOUT, allow_redirects=True)
        if r.status_code != 200 or "text/html" not in r.headers.get("content-type", ""):
            return None
        return r.text
    except requests.RequestException:
        return None


def extract_text(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript", "svg", "iframe"]):
        tag.decompose()
    text = soup.get_text(separator="\n", strip=True)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text[:MAX_PAGE_CHARS]


def find_secondary_links(html: str, base_url: str, limit: int = 3) -> list[str]:
    soup = BeautifulSoup(html, "html.parser")
    base_host = urlparse(base_url).netloc
    found: list[str] = []
    seen: set[str] = set()
    for a in soup.find_all("a", href=True):
        text = (a.get_text(" ", strip=True) or "").lower()
        href = a["href"]
        full = urljoin(base_url, href)
        host = urlparse(full).netloc
        if host != base_host:
            continue
        if full in seen or full == base_url:
            continue
        if any(k in text or k in href.lower() for k in PAGE_KEYWORDS):
            seen.add(full)
            found.append(full)
            if len(found) >= limit:
                break
    return found


def scrape_company(url: str) -> tuple[str, list[str]]:
    """Return (combined_text, list_of_pages_actually_fetched)."""
    chunks: list[str] = []
    pages: list[str] = []
    home_html = fetch(url)
    if not home_html:
        return "", []
    chunks.append(f"## {url}\n\n{extract_text(home_html)}")
    pages.append(url)
    for sub in find_secondary_links(home_html, url):
        sub_html = fetch(sub)
        if sub_html:
            chunks.append(f"## {sub}\n\n{extract_text(sub_html)}")
            pages.append(sub)
        time.sleep(0.6)
    combined = "\n\n---\n\n".join(chunks)
    return combined[: MAX_PAGE_CHARS * 2], pages


def load_leads(path: Path) -> list[Lead]:
    leads: list[Lead] = []
    with path.open(encoding="utf-8") as f:
        for row in csv.DictReader(f):
            website = (row.get("website") or "").strip()
            if not website:
                continue
            leads.append(
                Lead(
                    company=(row.get("company") or "").strip(),
                    website=website,
                    contact_name=(row.get("contact_name") or "").strip(),
                    notes=(row.get("notes") or "").strip(),
                )
            )
    return leads


def draft_for_lead(client: Anthropic, system_prompt: str, lead: Lead, scraped: str) -> str:
    """Ask Claude for the YAML-structured assessment + outreach draft."""
    user_block = (
        f"# Lead\n\n"
        f"- Bedrijfsnaam: {lead.company or '(onbekend)'}\n"
        f"- Website: {lead.website}\n"
        f"- Contactnaam: {lead.contact_name or '(onbekend)'}\n"
        f"- Mijn notitie: {lead.notes or '(geen)'}\n\n"
        f"# Website-extract\n\n{scraped or '(kon site niet ophalen)'}\n"
    )
    resp = client.messages.create(
        model=MODEL,
        max_tokens=1500,
        system=[
            {
                "type": "text",
                "text": system_prompt,
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_block}],
    )
    return "".join(block.text for block in resp.content if block.type == "text")


def write_lead_report(lead: Lead, draft: str, pages: list[str]) -> Path:
    OUTPUT_DIR.mkdir(exist_ok=True)
    slug = slugify(lead.company or urlparse(lead.website).netloc)
    out = OUTPUT_DIR / f"{slug}.md"
    pages_md = "\n".join(f"- {p}" for p in pages) or "- (geen)"
    out.write_text(
        f"# {lead.company or lead.website}\n\n"
        f"- Website: {lead.website}\n"
        f"- Contact: {lead.contact_name or '—'}\n"
        f"- Eigen notitie: {lead.notes or '—'}\n\n"
        f"## Gescrapete pagina's\n{pages_md}\n\n"
        f"## Assessment & outreach-concept\n\n{draft}\n",
        encoding="utf-8",
    )
    return out


def write_combined(reports: list[Path]) -> Path:
    combined = OUTPUT_DIR / "_combined.md"
    parts = ["# Spilwerk — leadgen-rapport\n"]
    for r in reports:
        parts.append(r.read_text(encoding="utf-8"))
        parts.append("\n\n---\n\n")
    combined.write_text("".join(parts), encoding="utf-8")
    return combined


def main() -> None:
    load_dotenv(ROOT / ".env")
    parser = argparse.ArgumentParser(description="Spilwerk leadgen drafter")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--limit", type=int, default=0, help="0 = no limit")
    args = parser.parse_args()

    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit("ANTHROPIC_API_KEY not set. Put it in leadgen/.env")

    if not args.input.exists():
        sys.exit(f"Input not found: {args.input}")

    if not PROMPT_FILE.exists():
        sys.exit(f"Prompt file missing: {PROMPT_FILE}")

    system_prompt = PROMPT_FILE.read_text(encoding="utf-8")
    leads = load_leads(args.input)
    if args.limit:
        leads = leads[: args.limit]

    if not leads:
        sys.exit("No leads found in input file.")

    client = Anthropic()
    reports: list[Path] = []

    print(f"Processing {len(leads)} lead(s)...\n")
    for i, lead in enumerate(leads, 1):
        label = lead.company or lead.website
        print(f"[{i}/{len(leads)}] {label}")
        print(f"   scraping {lead.website} ...", flush=True)
        scraped, pages = scrape_company(lead.website)
        print(f"   {len(pages)} page(s) collected, asking Claude ...", flush=True)
        try:
            draft = draft_for_lead(client, system_prompt, lead, scraped)
        except Exception as e:
            print(f"   ! API error: {e}")
            continue
        report = write_lead_report(lead, draft, pages)
        reports.append(report)
        print(f"   → {report.relative_to(ROOT)}\n")
        time.sleep(0.4)

    if reports:
        combined = write_combined(reports)
        print(f"\nDone. Combined report: {combined.relative_to(ROOT)}")
        print("Review the drafts, edit what doesn't sound like you, and send manually.")


if __name__ == "__main__":
    main()
