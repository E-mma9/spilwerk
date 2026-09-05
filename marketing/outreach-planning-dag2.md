# Outreach planning — Dag 2 (2026-09-05/06) — Ads-fallback

> Batches gekoppeld aan nieuwe mail templates. Drafts klaar in `marketing/outreach-drafts/`. Verzending handmatig vanaf `spillwerk@gmail.com`. Waar status = `te bellen (eerst)` eerst bellen, dan pas mailen. Max 90 woorden per mail, geen Spilwerk Zeker in eerste mail, geen sales-push.

## Overzicht batches (bron: `marketing/outreach-queue.csv` — 50 leads, 6 actieve batches)

| Batch | Datum | Aantal | Branches | Status | Volgende actie | Draft |
|-------|-------|--------|----------|--------|----------------|-------|
| **1** | 2026-09-08 | 10 | accountant 4, kappers 3, salon 3 | 4 te bellen (eerst), 2 te bellen, 4 te mailen | Week 1: eerst 4 bellen (Bilanx, Hendriksen, 2.0 Accountants, Count-On + Assink/Mufide), daarna 4 mailen | `01-accountant-batch1.txt` + `02-kapper-batch1.txt` |
| **2** | 2026-09-15 | 9 | salon 1, bouw 5, fysio 3 | 9 te mailen | Week 2: 9 mails (bouw + fysio focus) | `03-bouw-batch2.txt` + `04-fysio-batch2.txt` |
| **3** | 2026-09-22 | 9 | bouw 3, auto 6 | 9 te mailen | Week 3: 9 mails (auto/bouw) | hergebruik 03-bouw + auto-variant |
| **7** | 2026-10-20 | 7 | auto 7 | 7 te mailen | Week 7: auto-garages | hergebruik auto-variant |
| **8** | 2026-10-27 | 7 | bouw 1, kappers 4, salon 2 | 7 te mailen | Week 8: kappers/salon tweede golf | hergebruik 02-kapper |
| **9** | 2026-11-03 | 8 | fysio 5, accountant 3 | 8 te mailen | Week 9: fysio + accountant | hergebruik 01 + 04 |

> Batches 4-6 (2026-09-29 t/m 2026-10-13) staan in `leadgen/outreach/_batch4-6.md` (32 leads extra) — zelfde cadans, zelfde templates. Totaal outreach-queue 50 + 25 extra = 75 leads beschikbaar.

## Template-keuze per branche (dag 2 fix)

| Branche | Template | Hoek |
|---------|----------|------|
| Accountant | `01-accountant` | backup 3-2-1 + mappen €170 + werkplek-setup €185 — geen Zeker in mail 1 |
| Kappers | `02-kapper` | kassa/pin + wifi + online boeking (MijnSalon) — stability cheek |
| Bouw | `03-bouw` | tekeningen/foto's/offertes op 1 laptop, NAS €195 + printer A3 €130 |
| Fysio | `04-fysio` | agenda/patiëntdata backup €300 + werkplek-setup nieuwe therapeut |
| Salon | variant kappers | agenda + klantkaarten backup €300 |
| Auto | variant bouw | werkplaats-software + foto's/offertes, NAS + backup |

**Regels:**
- Max 90 woorden, jij/je, vriendelijk, 1 persoonlijke hook uit `leads.csv` ("ik zag dat jullie..."), 1 concrete suggestie "ik kan langskomen voor €60 1e uur in Twente incl voorrijden".
- Geen prijstabel in mail, alleen €60 noemen. Geen Spilwerk Zeker in eerste mail (verkoop pas na klus).
- Onderwerp: `[Bedrijf] — [1 pijnpunt]?` (kort, geen "Spilwerk" voorop bij koude mail).
- Afzender: `spillwerk@gmail.com` handmatig, groet Emmanuel Tekle · 06-87433537 · spilwerk.nl
- Vraag bij reactie: "Hoe ben je bij me terechtgekomen?" → log in `marketing/outreach-queue.csv` + `leads.csv`.

## Cadans (fallback, gratis)

- Maandag batch-dag: max 10 mails/week (spreiden, niet blasten — deliverability).
- Dinsdag: bellen waar nodig (4 leads batch 1).
- Vrijdag: opvolging alleen bij reactie, geen nag-mail.
- Leads met `geen mailto` → contactformulier of bellen, niet gokken.

## Bestanden klaar

- `marketing/outreach-drafts/01-accountant-batch1.txt` — accountant (Bilanx/Count-On voorbeeld)
- `marketing/outreach-drafts/02-kapper-batch1.txt` — kappers (Mufide/Assink)
- `marketing/outreach-drafts/03-bouw-batch2.txt` — bouw (Bouwbedrijf Vos/Kleinbouw)
- `marketing/outreach-drafts/04-fysio-batch2.txt` — fysio (Bewust/Driesprong)
- Volgende drafts: kopieer en vervang hook + plaatsnaam, verstuur handmatig.

## Budget & kanaal prioriteit (Dag 2)

Ads €0 tot KvK + certificering. Focus €0-30: GBP + reviews + outreach (gratis) + Marktplaats €9,90 (al live) + flyers 100 A6 €20 optioneel week 2. Weekblad pas week 3-4 indien reserve over.
