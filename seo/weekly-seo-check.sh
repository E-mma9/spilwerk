#!/bin/bash
# weekly-seo-check.sh — Spilwerk.nl Local SEO monitor
# Draait wekelijks via cron (zie cron-instructie.md)
# Doel: baseline tracken voor 4 kerntermen + concurrenten + site health
# Auteur: Hermes Agent — 2 sept 2026
# Vereisten: curl, jq (optioneel), bash 4+

set -e
DATE=$(date +%Y-%m-%d)
STAMP=$(date +"%Y-%m-%d %H:%M")
OUTDIR="/root/spilwerk/seo"
LOGFILE="$OUTDIR/weekly-log.csv"
REPORT="$OUTDIR/reports/weekly-$DATE.md"
mkdir -p "$OUTDIR/reports"

echo "[$STAMP] Spilwerk SEO check gestart..."

# --- 1. Site health check ---
echo "1) Site health..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://spilwerk.nl/ || echo "000")
HAS_CANONICAL=$(curl -sL https://spilwerk.nl/ | grep -qi 'rel="canonical"' && echo "ja" || echo "nee")
HAS_SCHEMA=$(curl -sL https://spilwerk.nl/ | grep -q 'LocalBusiness' && echo "ja" || echo "nee")
HAS_GSC=$(curl -sL https://spilwerk.nl/ | grep -q 'google-site-verification' && echo "ja" || echo "nee")
echo "  HTTP $HTTP_CODE | canonical:$HAS_CANONICAL schema:$HAS_SCHEMA gsc:$HAS_GSC"

# --- 2. SERP placeholder checks ---
# Let op: Google blokkeert geautomatiseerd scrapen. Dit zijn placeholders.
# Vervang door handmatige check of betaalde SERP API (SerpAPI, ValueSERP, SERPWatcher) zodra API key beschikbaar is.
# Voor nu: loggen we dat de check draait, positie wordt handmatig aangevuld in weekly-log.csv
echo "2) SERP checks (placeholder - handmatig of via API aanvullen)..."
TERMS=(
  "computerhulp Enschede"
  "computerhulp Hengelo"
  "wifi hulp Twente"
  "IT hulp aan huis Overijssel"
)
for term in "${TERMS[@]}"; do
  echo "  - $term: positie handmatig/API checken"
done

# Tip: met SerpAPI zou het zo gaan:
# curl -s "https://serpapi.com/search.json?q=computerhulp+Enschede&location=Enschede,Overijssel,Netherlands&hl=nl&gl=nl&api_key=$SERPAPI_KEY" | jq '.organic_results[] | select(.link | contains("spilwerk")) | .position'

# --- 3. Concurrenten bereikbaarheid ---
echo "3) Concurrenten http checks..."
declare -A COMPETITORS=(
  ["computermantwente.nl"]="https://www.computermantwente.nl/"
  ["computerhulptwente.com"]="https://www.computerhulptwente.com/"
  ["pc2fix.nl"]="https://pc2fix.nl/"
  ["pcserviceenschede.nl"]="https://www.pcserviceenschede.nl/"
  ["computerrepairtwente.nl"]="https://www.computerrepairtwente.nl/"
  ["studentaanhuis.nl"]="https://www.studentaanhuis.nl/werkgebied/computerhulp-enschede"
  ["uwcomputerstudent.nl"]="https://uwcomputerstudent.nl/regio/enschede/"
  ["hulpstation.nl"]="https://www.hulpstation.nl/computerhulp-regios/enschede/"
)
COMP_STATUS=""
for name in "${!COMPETITORS[@]}"; do
  url="${COMPETITORS[$name]}"
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "$url" || echo "000")
  echo "  $name -> $code"
  COMP_STATUS+="$name:$code "
done

# --- 4. Log naar CSV (voor trend) ---
if [ ! -f "$LOGFILE" ]; then
  echo "datum,http_code,canonical,schema,gsc,competitors" > "$LOGFILE"
fi
echo "$DATE,$HTTP_CODE,$HAS_CANONICAL,$HAS_SCHEMA,$HAS_GSC,"$COMP_STATUS"" >> "$LOGFILE"
echo "  -> gelogd in $LOGFILE"

# --- 5. Genereer weekly markdown rapport ---
cat > "$REPORT" <<EOF
# Weekly SEO Check — $DATE

**Tijd:** $STAMP
**Site:** https://spilwerk.nl

## Site health
- HTTP status: $HTTP_CODE (verwacht 200)
- Canonical aanwezig: $HAS_CANONICAL
- LocalBusiness schema: $HAS_SCHEMA
- GSC verificatie: $HAS_GSC

## SERP posities (aanvullen)
> Deze zijn placeholders. Vul handmatig aan via Google (incognito, locatie Enschede) of koppel een SERP API.

| Zoekterm | Positie Spilwerk | Top concurrent #1 | Notities |
|---|---|---|---|
| computerhulp Enschede | _te bepalen_ | De Computerman Twente |  |
| computerhulp Hengelo | _te bepalen_ | De Computerman Twente |  |
| wifi hulp Twente | _te bepalen_ | — (long-tail kans) | Overweeg 'wifi hulp aan huis Twente' |
| IT hulp aan huis Overijssel | _te bepalen_ | (baseline was #8) |  |

## Concurrenten bereikbaarheid
$COMP_STATUS

## Acties deze week
- [ ] Handmatig SERP posities invullen in $LOGFILE of hierboven
- [ ] GBP check: reviews, posts, foto's (zie seo-baseline.md)
- [ ] Content: 1 stad- of dienstpagina vooruitgang?
- [ ] Search Console: prestaties → indrukken/kliks exporteren

---
_Gegenereerd door weekly-seo-check.sh — volgende run: volgende week via cron_
EOF

echo "  -> rapport: $REPORT"
echo "[$STAMP] Klaar. Log: $LOGFILE | Rapport: $REPORT"

# --- 6. Optioneel: notificeer Hermes/Emmanuel ---
# Hermes kan dit log uitlezen. Voor e-mail notificatie:
# cat "$REPORT" | mail -s "Spilwerk weekly SEO $DATE" emmanuel@spilwerk.nl
