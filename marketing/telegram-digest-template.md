# Telegram digest template — Spilwerk outreach (wekelijks)

**Gebruik:** plak in Telegram (7533141775) elke maandag 09:00 via Hermes cron `spilwerk-marketing-dagelijks`. Vervang {{variabelen}}.

---

🚀 **Spilwerk outreach week {{WEEK_NUM}} ({{DATUM_RANGE}}) — Batch {{BATCH}}**

📊 Leads deze week: {{AANTAL}} | Geannuleerd/geen horeca | Gevierifieerd {{GEVERIFIEERD}}/{{TOTAAL}}
📧 Versturen vanaf: spillwerk@gmail.com (2 L) — max 3/dag, handmatig!

**Vandaag te doen ( {{VOLGENDE_ACTIE_DATUM}} ):**
{{LEAD_LIJST}}
— voorbeeld: `1. Bilanx Accountants (Almelo, accountant, score 5) — {{PITCH}} — te bellen (eerst) → leadgen/outreach/bilanx-accountants.md`

**Pitch per branche:**
- kappers/salon → `Zeker €45/mnd (kassa/agenda backup) vs halve dag €250`
- accountant/advocaat/tandarts → `Zeker €45/mnd (of €85 Plus) + backup €300 + NAS 195 vs halve dag €250` — hoog voor Zeker!
- bouw → `Halve dag €250 + Zeker €45/mnd (bouwtekeningen backup)`

**Check voor verzenden:**
- [ ] Site nog live? `curl -I {{WEBSITE}}` 200/301 (zie outreach-queue `http_status`)
- [ ] Mail op site klopt? (zie `email_op_site` in queue)
- [ ] Persoonlijke hook uit `reden_waarom_interessant` gebruikt?
- [ ] Vraag toegevoegd: “Geen druk om iets te beslissen” + “Hoe ben je bij me terechtgekomen?” loggen

**Opvolging:**
- Niet gereageerd na 5 dagen → vriendelijke bump (1×)
- Wel reactie → direct inplannen (avond/weekend kan zonder toeslag, reactie binnen 1 werkdag)
- Zeker pas verkopen NA eerste klus waar backup/mappen is ingericht

**Links:** `leadgen/outreach/_batch{{BATCH}}-week{{BATCH}}.md` | `marketing/outreach-queue.csv` | `leadgen/VERIFICATIE-2026-09-05.md`

— gegenereerd door leadgen.py + outreach-queue, reactie via Gmail OAuth (Calendar voor afspraak)


---
**Voorbeeld ingevuld week 1 (08-09-2026, Batch 1 — 7 leads):**
- Bilanx Accountants (Almelo, accountant, score 5) — Zeker €45/mnd + backup €300 + mappen €170 vs halve dag €250 — te bellen (eerst) — info@bilanx.nl
- Hendriksen Accountants en Adviseurs (Almelo, accountant, score 5) — Zeker €45/mnd + backup €300 + mappen €170 vs halve dag €250 — te bellen (eerst) — info@hendriksen.nl
- 2.0 Accountants (Enschede, accountant, score 5) — Zeker €45/mnd + backup €300 + mappen €170 vs halve dag €250 — te bellen (eerst) — info@20accountants.nl
- Count-On (Enschede, accountant, score 5) — Zeker €45/mnd + backup €300 + mappen €170 vs halve dag €250 — te bellen (eerst) — info@count-on.nl
- Damsté Advocaten - Notarissen (Enschede, advocaat, score 5) — Zeker €45/mnd (dossierplicht) + backup €300 vs halve dag €250 — te bellen (eerst) — info@damste.nl
- MRS Advocaten (Enschede, advocaat, score 5) — Zeker €45/mnd (dossierplicht) + backup €300 vs halve dag €250 — te bellen (eerst) — info@mrs-advocaten.nl
- TLC International Lawyers (Enschede, advocaat, score 5) — Zeker €45/mnd (dossierplicht) + backup €300 vs halve dag €250 — te bellen (eerst) — info@tlcinternationallaw.com
