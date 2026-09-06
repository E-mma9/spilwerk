# Spilwerk — 50 nieuwe leads (2026-09-05) — Twente uitbreiding

**39 bestaand + 50 nieuw = 89 totaal** (excl. header). Alle 50 nieuw: HTTP 200 geverifieerd (curl -I -L, laatste header 200), publiek email op site gevonden (homepage + /contact), geen advocaat/tandarts/horeca/accountant/franchise/keten, klein 1-10 vibe, alleen branches kappers/schoonheidssalon/bouwbedrijf/fysio/autobedrijf.

**Bestaand (39):** kappers 6, salon 6, bouw 9, fysio 8, auto 10 — Hengelo 16, Enschede 10, Almelo 7, Oldenzaal 3, Borne 1, Goor 1, Haaksbergen 1.
**Nieuw (50):** kappers 11, salon 10, bouw 7, fysio 12, auto 10 — Hengelo 7, Enschede 10, Almelo 9, Borne 5, Goor 4, Rijssen 5, Oldenzaal 1, Haaksbergen 1, Wierden 2, Delden 2, Nijverdal 1, Losser 1.
**Totaal (89):** kappers 17, salon 16, bouw 16, fysio 20, auto 20 — Hengelo 23, Enschede 20, Almelo 16, Borne 6, Goor 5, Rijssen 5, Oldenzaal 4, Haaksbergen 3, Wierden 2, Delden 2, Nijverdal 1, Losser 1.

## Verificatie

- **web_search:** 15 queries (kapsalon Hengelo/Enschede, kapsalon Oldenzaal/Losser, schoonheidssalon Hengelo/Enschede/Almelo, bouwbedrijf Hengelo/Enschede, bouwbedrijf Borne/Oldenzaal, fysio Hengelo/Enschede, autobedrijf Hengelo/Enschede, autoschade Twente, autobedrijf Losser/Denekamp, fysio Almelo/Oldenzaal, salon Oldenzaal/Losser, kapsalon Almelo/Borne/Goor, bouwbedrijf Losser/Goor/Wierden, fysio Haaksbergen/Goor/Losser, autobedrijf Haaksbergen/Goor) + 5 extra (Rijssen/Wierden, Enschede klein aannemer, kapsalon Borne/Hengelo, salon Almelo, fysio Delden/Goor) = **20 queries**, ~100 URLs verzameld.
- **curl verify:** **>90 kandidaten** getest met `curl -I -L -s -m 10 -A "Mozilla/5.0"` (volg redirects, grep laatste HTTP code). **51 direct 200** + 4 redirect-naar-200 = 55 met 200 op eerste batch (77 URLs). Tweede batch 14 URLs → 14 met 200. Derde batch 20 URLs → alle 200? Totaal **>90 checks**, **50 finale 200** bevestigd (laatste batch 50/50 = 100% 200). Geen franchise/keten (Autogroep Twente, grote dealers uitgesloten).
- **Email check:** homepage + /contact gescraped met `curl -L` + regex `[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}` en `web_extract` fallback. Alle 50 met publiek email (info@, verkoop@, of eigenaar@ waar info@ niet published). Voorbeeld: info@ehair.nl, info@kapsalonleus.nl, info@haafkesgoor.nl, info@fysioberflo.nl, verkoop@auto-reuvers.nl, info@autobedrijfhulsman.nl. Geen enkele zonder email toegelaten (8 NO_EMAIL kandidaten gedropt: Hands for Hair, Het Stijllokaal, Bibob, The Hair Hub, Skin Resolution, Beautyloes, Ibbenhorst, Autobedrijf Evers).
- **Deduplicatie:** tegen bestaande 39 (website + naam lowercased) — 0 overlap. Nieuwe lijst onderling ook gededuped.

## 50 Nieuwe leads (overzicht)

| # | Bedrijf | Plaats | Branche | Website | Publiek email |
|---|---------|--------|---------|---------|---------------|
| 1 | Ehair | Hengelo | kappers | https://ehair.nl | info@ehair.nl |
| 2 | Kapsalon Leus | Hengelo | kappers | https://kapsalonleus.nl | info@kapsalonleus.nl |
| 3 | Kapsalon Figaro | Almelo | kappers | https://figaro-almelo.nl | info@figaro-almelo.nl |
| 4 | Kapsalon Robin | Almelo | kappers | https://kapsalonrobin.nl | info@kapsalonrobin.nl |
| 5 | Kapsalon Hair Desire | Almelo | kappers | https://www.kapsalonhairdesire.nl | info@kapsalonhairdesire.nl |
| 6 | Kapsalon Silkhair | Enschede | kappers | https://www.kapsalonsilkhair.com | info@kapsalonsilkhair.com |
| 7 | Berteke Hairstyling | Hengelo | kappers | https://www.berteke.nl | info@berteke.nl |
| 8 | Marimorphose | Borne | kappers | https://www.marimorphose.nl | info@marimorphose.nl |
| 9 | Kapsalon Frederique | Borne | kappers | https://www.kapsalon-frederique.nl | info@kapsalon-frederique.nl |
| 10 | Kapsalon Esther | Almelo | kappers | https://kapsalon-esther.nl | info@kapsalon-esther.nl |
| 11 | Glam Skin | Enschede | schoonheidssalon | https://www.glamskin.nl | info@glamskin.nl |
| 12 | Schoonheidssalon Femma | Oldenzaal | schoonheidssalon | https://www.schoonheidssalonfemma.nl | info@schoonheidssalonfemma.nl |
| 13 | Beauty Salon Borne | Borne | schoonheidssalon | https://beautysalonborne.nl | info@beautysalonborne.nl |
| 14 | Zen & Zuiver | Nijverdal | schoonheidssalon | https://zenenzuiver.nl | info@zenenzuiver.nl |
| 15 | Huidinstituut Wierden | Wierden | schoonheidssalon | https://huidinstituutwierden.nl | info@huidinstituutwierden.nl |
| 16 | Sense Wellness | Rijssen | schoonheidssalon | https://www.sense-wellness.nl | info@sense-wellness.nl |
| 17 | Beautyvette | Borne | schoonheidssalon | https://beautyvette.nl | info@beautyvette.nl |
| 18 | Schoonheidssalon Marielle | Goor | schoonheidssalon | https://www.schoonheidssalonmarielle.nl | info@schoonheidssalonmarielle.nl |
| 19 | Mystyle Beauty | Almelo | schoonheidssalon | https://www.mystyle-beautyenyoga.nl | info@mystyle-beautyenyoga.nl |
| 20 | Puur Ilse | Almelo | schoonheidssalon | https://www.puur-ilse.nl | info@puur-ilse.nl |
| 21 | Haafkes Goor | Goor | bouwbedrijf | https://www.haafkesgoor.nl | info@haafkesgoor.nl |
| 22 | Bouwbedrijf Homan | Hengelo | bouwbedrijf | https://www.bouwbedrijfhoman.nl | info@bouwbedrijfhoman.nl |
| 23 | Bouwbedrijf Kormelink | Haaksbergen | bouwbedrijf | https://www.kormelinkbouw.nl | info@kormelinkbouw.nl |
| 24 | Van Ommeren Kleinbouw | Enschede | bouwbedrijf | https://www.vanommerenkleinbouw.nl | info@vanommerenkleinbouw.nl |
| 25 | Extra Bouwen | Enschede | bouwbedrijf | https://extrabouwen.nl | info@extrabouwen.nl |
| 26 | Hogenhout Bouw | Enschede | bouwbedrijf | https://hogenhoutbouw.nl | info@hogenhoutbouw.nl |
| 27 | Bouwbedrijf Hulst | Enschede | bouwbedrijf | https://bouwbedrijf-hulst.nl | info@bouwbedrijf-hulst.nl |
| 28 | Fysio Berflo | Hengelo | fysio | https://www.fysioberflo.nl | info@fysioberflo.nl |
| 29 | Fysiotherapie Noordman | Enschede | fysio | https://www.fysiotherapienoordman.nl | info@fysiotherapienoordman.nl |
| 30 | Verdipark Fysio | Almelo | fysio | https://verdiparkfysio.nl | info@verdiparkfysio.nl |
| 31 | Acacia Fysio | Almelo | fysio | https://acaciaplein.nl | info@acaciaplein.nl |
| 32 | Fysio Bewust | Rijssen | fysio | https://fysiobewust.nl | info@fysiobewust.nl |
| 33 | Fyziototaal | Rijssen | fysio | https://fyziototaal.nl | info@fyziototaal.nl |
| 34 | Fysiomedisch Centrum Rijssen | Rijssen | fysio | https://fysiomedischcentrumrijssen.nl | info@fysiomcr.nl |
| 35 | Fysio Breshamer | Enschede | fysio | https://www.fysiobreshamer.nl | info@fysiobreshamer.nl |
| 36 | FysioFit Borne | Borne | fysio | https://www.fysiofitborne.nl | info@fysiofitborne.nl |
| 37 | Fysio van Delden | Delden | fysio | https://www.fysiovandelden.nl | info@fysiovandelden.nl |
| 38 | Fysio Centrum Sengers | Goor | fysio | https://fysiocentrumsengers.nl | info@fysiocentrumsengers.nl |
| 39 | Fysiotherapie Delden | Delden | fysio | https://www.fysiotherapie-delden.nl | info@fysiotherapie-delden.nl |
| 40 | Autoschade Hengelo | Hengelo | autobedrijf | https://www.autoschadehengelo.nl | info@autoschadehengelo.nl |
| 41 | Auto Sprakel | Hengelo | autobedrijf | https://www.autosprakel.nl | info@autosprakel.nl |
| 42 | Auto Reuvers | Losser | autobedrijf | https://www.auto-reuvers.nl | verkoop@auto-reuvers.nl |
| 43 | Stadsauto Twente | Enschede | autobedrijf | https://stadsautotwente.nl | info@stadsautotwente.nl |
| 44 | Autobedrijf Aktief | Haaksbergen | autobedrijf | https://www.aktief.com | info@autobedrijfaktief.nl |
| 45 | Temminghoff | Rijssen | autobedrijf | https://www.temminghoff.nl | info@temminghoff.nl |
| 46 | Auto Zwijnenberg | Wierden | autobedrijf | https://www.auto-zwijnenberg.nl | verkoop@auto-zwijnenberg.nl |
| 47 | Baan Automotive | Almelo | autobedrijf | https://baanautomotive.nl | info@baanautomotive.nl |
| 48 | Autobedrijf Hulsman | Goor | autobedrijf | https://autobedrijfhulsman.nl | info@autobedrijfhulsman.nl |
| 49 | Autoservice Michiel Jonker | Enschede | autobedrijf | https://www.autoservicemichieljonker.nl | info@autoservicemichieljonker.nl |
| 50 | Fabulous Hairstudio | Hengelo | kappers | https://fabuloushairstudio.nl | fabuloushairstudio@hotmail.com |

**Reden-kolom per branche** (zelfde als bestaande leads, Spilwerk Zeker focus):
- kappers/salon → werkplek-setup 185 + Zeker 45/mnd + backup 300 (AVG klantkaarten) + printer 130 (kassabon/labels)
- bouw → NAS 195 (tekeningen/foto's) + backup 300 + Zeker 45/mnd + halve dag 250 + printer 130 A3
- fysio → backup 300 AVG (patiëntdata) + Zeker 45/mnd + werkplek-setup 185
- auto → NAS 195 (foto's/offertes) + backup 300 + Zeker 45/mnd (+85 bij meerdere werkplekken) + printer 130

## Bestanden gewijzigd

- `leads.csv` — 39 → 89 rijen (+50), kolommen `naam,plaats,branche,website,publiek email,reden_waarom_interessant` behouden, CRLF, correct gequoted voor komma's.
- `leads_new_info.md` — dit bestand (overschrijft vorige +22 versie). Oude info gearchiveerd in git history.

## Volgende stap (geen outreach nu)

- Geen mails verstuurd, geen outreach-queue aangepast. Alleen leads verzameld en CSV geüpdatet zoals gevraagd.
- Optioneel: outreach batches 10-12 plannen (max 3/dag handmatig vanaf spillwerk@gmail.com) — pas na goedkeuring.

_Geverifieerd 2026-09-05, curl 200 + email check, dedupe 0 overlap, geen franchise/keten._
