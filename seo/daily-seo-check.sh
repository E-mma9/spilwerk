#!/bin/bash
# daily-seo-check.sh — Spilwerk light daily rank/health check
# Aanvulling op weekly-seo-check.sh (uitgebreid). Dit is low-effort dagelijks.
# Draait via Hermes cron dagelijks 09:00 of handmatig.
# Vereisten: curl, bash. Geen API key nodig (placeholders voor SERP).
set -e
DATE=$(date +%Y-%m-%d)
STAMP=$(date +"%Y-%m-%d %H:%M")
OUTDIR="/root/spilwerk/seo"
LOG="$OUTDIR/daily-log.csv"
REPORT="$OUTDIR/reports/daily-$DATE.md"
mkdir -p "$OUTDIR/reports"

echo "[$STAMP] Spilwerk daily SEO check..."

# 1. Site health (snel)
HTTP=$(curl -s -o /dev/null -w "%{http_code}" https://spilwerk.nl/ || echo "000")
CANON=$(curl -sL https://spilwerk.nl/ 2>/dev/null | grep -qi 'rel="canonical"' && echo "ja" || echo "nee")
SCHEMA=$(curl -sL https://spilwerk.nl/ 2>/dev/null | grep -q 'LocalBusiness' && echo "ja" || echo "nee")
TEL_FULL=$(curl -sL https://spilwerk.nl/ 2>/dev/null | grep -q '"telephone": "+31687433537"' && echo "ja" || echo "nee (masked +316****3537)")
GSC=$(curl -sL https://spilwerk.nl/ 2>/dev/null | grep -q 'google-site-verification' && echo "ja" || echo "nee")
echo "  HTTP $HTTP canonical:$CANON schema:$SCHEMA tel_full:$TEL_FULL gsc:$GSC"

# 2. SERP placeholders (handmatig of via SERP API aanvullen)
TERMS=("computerhulp Enschede" "computerhulp Hengelo" "wifi hulp aan huis Twente" "computer traag Enschede" "IT hulp aan huis Overijssel")
echo "  SERP terms (${#TERMS[@]}): handmatig of SERPAPI_KEY aanvullen"

# Voorbeeld met SerpAPI (uncomment als key beschikbaar):
# if [ -n "$SERPAPI_KEY" ]; then
#   for term in "${TERMS[@]}"; do
#     q=$(echo "$term" | sed 's/ /+/g')
#     pos=$(curl -s "https://serpapi.com/search.json?q=$q&location=Enschede,Overijssel,Netherlands&hl=nl&gl=nl&api_key=$SERPAPI_KEY" | jq -r '[.organic_results[] | select(.link | contains("spilwerk")) | .position] | first // "—"')
#     echo "    $term -> $pos"
#   done
# fi

# 3. GBP reminder (geen API, wel checklist)
echo "  GBP: check reviews via https://business.google.com (doel: 15 in 90 dagen)"

# 4. Log CSV
if [ ! -f "$LOG" ]; then
  echo "datum,http,schema,tel_full,gsc" > "$LOG"
fi
echo "$DATE,$HTTP,$SCHEMA,$TEL_FULL,$GSC" >> "$LOG"

# 5. Rapport
cat > "$REPORT" <<EOF
# Daily SEO Check — $DATE

**Tijd:** $STAMP · **Site:** https://spilwerk.nl

## Health
- HTTP: $HTTP (verwacht 200)
- Canonical: $CANON | Schema: $SCHEMA | Tel volledig: $TEL_FULL | GSC: $GSC

## SERP posities (aanvullen — incognito locatie Enschede of Search Console Prestaties)

| Zoekterm | Positie | Notities |
|----------|---------|----------|
| computerhulp Enschede | _te bepalen_ | baseline: buiten top 10 |
| computerhulp Hengelo | _te bepalen_ | baseline: buiten top 10 |
| wifi hulp aan huis Twente | _te bepalen_ | long-tail kans (geen concurrentie) |
| computer traag Enschede | _te bepalen_ | nieuw — blog live? |
| IT hulp aan huis Overijssel | _te bepalen_ | baseline #8 |

## Acties vandaag (5 min)
- [ ] Search Console → Prestaties → filter \`computerhulp\`/\`wifi\` checken
- [ ] GBP: review beantwoorden / foto/post?
- [ ] 1 micro-actie uit tracker.md

---
_Gegenereerd door daily-seo-check.sh — wekelijks uitgebreid rapport: weekly-seo-check.sh_
EOF

echo "  -> $REPORT | log $LOG"
echo "[$STAMP] Klaar."
