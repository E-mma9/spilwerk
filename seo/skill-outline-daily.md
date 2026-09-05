# Hermes skill outline — spilwerk-seo-daily

> Voor Hermes Agent: dagelijkse SEO rank check voor Spilwerk.nl. Te draaien als cron `0 9 * * *` of als Hermes skill `spilwerk-seo`.

## Doel

Low-effort dagelijkse Local SEO monitoring (5 min) naast wekelijkse uitgebreide check (`seo/weekly-seo-check.sh`). Signaleert: site down, schema/GSC kwijt, ranking shifts, GBP taken.

## Bestanden

- **Script:** `seo/daily-seo-check.sh` (light, ~5 sec) + `seo/weekly-seo-check.sh` (uitgebreid, ~15 sec)
- **Logs:** `seo/daily-log.csv` (trend), `seo/weekly-log.csv` (uitgebreid), `seo/reports/daily-YYYY-MM-DD.md` + `weekly-YYYY-MM-DD.md`
- **Baseline:** `seo/seo-baseline.md` (nulmeting 2 sept 2026)
- **Cron instructie:** `seo/cron-instructie.md`

## Installatie (Hermes cron — aanrader)

Hermes cron leeft onder `~/.hermes/cron/jobs.json` (blijft bij herstart, notificeert via Telegram).

**Optie A — via jobs.json (direct):**
```bash
# Daily light check 09:00
cat > /tmp/job.json <<'JSON'
{
  "id": "spilwerk-daily-seo",
  "name": "spilwerk-daily-seo",
  "prompt": "Draai bash /root/spilwerk/seo/daily-seo-check.sh en rapporteer beknopt (<1500 chars) HTTP/schema/tel/GSC status + herinner aan SERP handmatig check (incognito Enschede) + GBP taken. Sla niks dubbel op.",
  "schedule": {"kind": "cron", "expr": "0 9 * * *", "display": "every day at 9:00"},
  "deliver": "telegram:7533141775",
  "enabled": true
}
JSON
# Voeg toe via Hermes API of handmatig in jobs.json (zie bestaande jobs: stage-scout-wekelijks, spilwerk-marketing-dagelijks)

# Of klassiek systeem cron als fallback:
# crontab -e → 0 9 * * * bash /root/spilwerk/seo/daily-seo-check.sh >> /root/spilwerk/seo/cron.log 2>&1
```

**Optie B — hergebruik bestaande marketing-dagelijks cron:**
De bestaande `spilwerk-marketing-dagelijks` (09:00) doet al marketing-todo + SEO baseline check. Deze daily-seo-check is dieper (HTTP/schema/tel). Combineer: laat marketing-cron `daily-seo-check.sh` aanroepen.

## Wat het script doet

1. `curl https://spilwerk.nl/` → HTTP 200? canonical/schema/GSC/telephone volledig?
2. Log naar `daily-log.csv`
3. Genereer `reports/daily-YYYY-MM-DD.md` met SERP tabel (placeholders — Google blokkeert scrapen)
4. Herinner aan handmatig SERP check (incognito) of SERP API (SerpAPI/ValueSERP met `SERPAPI_KEY`)

## SERP API upgrade (optioneel, €50/mnd)

```bash
export SERPAPI_KEY=...
# uncomment SerpAPI blok in daily-seo-check.sh (regel 25-35)
# Test: bash seo/daily-seo-check.sh && cat seo/reports/daily-$(date +%Y-%m-%d).md
```

Zonder API: gebruik gratis Search Console (Prestaties → zoekopdrachten) — betrouwbaarder dan scrapen en gratis. Filter op `computerhulp`, `wifi hulp`, `IT hulp aan huis`.

## Skill structuur (als je dit als Hermes skill wilt)

```
~/.hermes/skills/spilwerk-seo/
  SKILL.md          # dit bestand
  scripts/daily-seo-check.sh
  references/seo-baseline.md
```

SKILL.md frontmatter:
```yaml
---
name: spilwerk-seo
description: Use when checking Spilwerk.nl Local SEO, rankings, or site health — daily light check + weekly deep dive.
---
```

## Onderhoud

- Maandelijks: `daily-log.csv` vs `weekly-log.csv` vergelijken — stijgt positie na stad-pagina's + reviews?
- Bij site wijziging: `seo-baseline.md` updaten
- Log rotatie: `> seo/cron.log` maandelijks legen
