# Cron instructie — Wekelijkse SEO check voor Spilwerk.nl

## Wat draait er?

- **Script:** `/root/spilwerk/seo/weekly-seo-check.sh`
- **Output:** 
  - CSV log: `/root/spilwerk/seo/weekly-log.csv` (trend per week)
  - Markdown rapport: `/root/spilwerk/seo/reports/weekly-YYYY-MM-DD.md`
  - Baseline rapport: `/root/spilwerk/seo/seo-baseline.md` (nulmeting 2 sept 2026)
- **Duur:** ~10-15 seconden
- **Afhankelijkheden:** `curl` (aanwezig), `jq` optioneel voor toekomstige SERP API

## Optie A — Hermes ingebouwde cron (aanrader)

Hermes heeft een eigen cron-scheduler onder `~/.hermes/cron/` die ook bij herstart blijft werken en notificeert in de Hermes inbox.

**1. Maak cron entry aan:**

```bash
mkdir -p ~/.hermes/cron
cat > ~/.hermes/cron/spilwerk-seo.json <<'JSON'
{
  "id": "spilwerk-weekly-seo",
  "schedule": "0 9 * * 1",
  "command": "bash /root/spilwerk/seo/weekly-seo-check.sh >> /root/spilwerk/seo/cron.log 2>&1",
  "description": "Spilwerk wekelijkse Local SEO baseline check",
  "notify": true
}
JSON
```

> `0 9 * * 1` = elke maandag 09:00 (Europe/Amsterdam). Pas aan naar wens, bv. `0 8 * * 1` voor 08:00.

**2. Alternatief via Hermes CLI (als beschikbaar):**

```bash
hermes cron add --id spilwerk-weekly-seo --schedule "0 9 * * 1" --command "bash /root/spilwerk/seo/weekly-seo-check.sh"
hermes cron list
```

**3. Test handmatig:**

```bash
bash /root/spilwerk/seo/weekly-seo-check.sh
cat /root/spilwerk/seo/reports/weekly-$(date +%Y-%m-%d).md
cat /root/spilwerk/seo/weekly-log.csv
```

Hermes toont bij elke run een notificatie en het rapport verschijnt onder `seo/reports/`.

## Optie B — Systeem cron (klassiek)

Als Hermes cron niet beschikbaar is, gebruik systeem cron:

```bash
# Open crontab
crontab -e

# Voeg toe (maandag 09:00, log naar cron.log):
0 9 * * 1 bash /root/spilwerk/seo/weekly-seo-check.sh >> /root/spilwerk/seo/cron.log 2>&1

# Check:
crontab -l
```

## Handmatig SERP posities aanvullen (belangrijk!)

Het script checkt automatisch site health + concurrent-bereikbaarheid. **Google posities kunnen niet betrouwbaar gescraped worden zonder API** — daarom:

1. Na elke run: open `reports/weekly-YYYY-MM-DD.md` en vul de tabel aan:
   - Zoek incognito (Chrome gastmodus) met locatie Enschede
   - Of gebruik `https://search.google.com/search-console` → Prestaties → zoekopdrachten (echte data!)
2. Of koppel een SERP API:
   - **SerpAPI** (https://serpapi.com) — €50/mnd voor 5000 searches
   - **ValueSERP** — goedkoper alternatief
   - Zet key in env: `export SERPAPI_KEY=...` en uncomment de curl regel in het script (regel met `serpapi.com/search.json`)

## Search Console koppeling (gratis & essentieel)

1. Ga naar https://search.google.com/search-console (verificatie is al aanwezig via `NTVxji...`)
2. Koppel GA4 indien mogelijk
3. Elke week: exporteer *Prestaties → Zoekopdrachten* (filter: `computerhulp`, `wifi hulp`, `IT hulp aan huis`) → plak in weekly-log of apart sheet
4. Hermes kan dit later automatisch ophalen via GSC API (service account nodig)

## Notificatie naar Emmanuel

Wil je e-mail? Uncomment laatste regel in script:

```bash
cat "/root/spilwerk/seo/reports/weekly-$DATE.md" | mail -s "Spilwerk weekly SEO $DATE" emmanuel@spilwerk.nl
```

Of laat Hermes het via de app notificeren (`notify: true` in Hermes cron).

## Onderhoud

- **Maandelijks:** vergelijk `weekly-log.csv` trend — stijgen posities na stad-pagina's + reviews?
- **Bij grote site wijziging:** update `seo-baseline.md` sectie 1
- **Log rotatie:** `cron.log` groeit; maandelijks `> /root/spilwerk/seo/cron.log` legen

---

*Laatste update: 2 sept 2026 — werkend getest (HTTP 200, alle 8 concurrenten bereikbaar).*
