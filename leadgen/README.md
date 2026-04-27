# Spilwerk Leadgen

Semi-autonome MKB-outreach drafter. Jij geeft een lijst van bedrijven, het script kijkt op hun site, en Claude schrijft per bedrijf een persoonlijke openingsmail. **Jij** beslist wat verstuurd wordt.

Niet wat dit doet: massaal connection requests sturen op LinkedIn. Dat is TOS-overtreding en killt je account. Dit script genereert *concepten* die jij handmatig kunt versturen.

## Setup (eenmalig)

```bash
cd leadgen
python -m venv .venv
.venv\Scripts\activate                # Windows
pip install -r requirements.txt
```

Maak een `.env` aan in deze map:

```
ANTHROPIC_API_KEY=sk-ant-...
```

API-key haal je bij console.anthropic.com. Kosten zijn verwaarloosbaar — een lead kost typisch <€0.02 dankzij prompt caching op de system prompt.

## Gebruik

1. Vul `seed_leads.csv` met bedrijven die je wil benaderen. Kolommen:
   - `company` — bedrijfsnaam (mag leeg, dan pakt 't de domeinnaam)
   - `website` — verplicht, met `https://`
   - `contact_name` — optioneel, voor persoonlijke aanhef
   - `notes` — optioneel, jouw eigen vermoeden over hun pijnpunt

2. Run:
   ```bash
   python leadgen.py --limit 3       # eerst klein proberen
   python leadgen.py                 # alle leads
   ```

3. Bekijk `output/<bedrijfsnaam>.md` per lead, of `output/_combined.md` voor alles in één bestand.

4. Per lead krijg je terug:
   - **fit_score** (1–5) — hoe goed past dit bij jouw doelgroep
   - **likely_pain_points** — wat Claude vermoedt op basis van hun site
   - **best_pakket** — welk Spilwerk-pakket past
   - **outreach_email_nl** — concept-mail in NL, max ~120 woorden

5. Knip eruit wat goed is, pas aan tot het écht klinkt als jou, en stuur handmatig vanuit je eigen mailprogramma.

## Bronnen voor leads

Goede plekken om de seed-CSV te vullen (allemaal handmatig, geen scraping van betaalde bronnen):

- **KvK Open Data** — gratis, maar beperkt. Voor uitgebreide branche-zoektocht: KvK Handelsregister API (~€0.10 per zoekopdracht).
- **Google Maps** — zoek op "tankstation Twente" / "transportbedrijf Hengelo" / "boekhouder Enschede" → bedrijfsnaam + website.
- **LinkedIn Sales Navigator** trial (1 maand gratis) — filter op bedrijfsgrootte 5–50, regio Overijssel.
- **Branchevereniging-ledenlijsten** — bv. KNV Logistiek, BOVAG.
- **Lokale netwerken** — Twentse ondernemersclubs, gemeentelijke ondernemersnieuwsbrieven.

Begin met **20–30 leads per ronde**. Genereer concepten, kies de 5–10 beste, stuur die. Wacht een week. Itereer op wat werkt.

## Wat het script bewust *niet* doet

- Geen automatische verzending. Bewust.
- Geen scraping van LinkedIn / Apollo / Sales Nav (TOS-issues, ban-risico).
- Geen e-mail enrichment / find-the-CEO-mailadres tools. Voor MKB werkt info@ of een contactformulier vaak prima, en eigenaars lezen die zelf.
- Geen CRM. Voor de eerste 50 leads is een markdown-bestand of Notion-pagina genoeg. Bij 200+ leads → Airtable of HubSpot Free.

## Iteratie

Pas `prompts/outreach.md` aan naarmate je leert wat werkt. Houd in een apart bestand bij welke openings-zinnen reactie kregen en welke niet. Het is jouw reputatie — niet die van Claude.
