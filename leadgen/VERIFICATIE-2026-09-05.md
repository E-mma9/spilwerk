# Verificatie leads.csv — 2026-09-05

Elke website gecheckt met `curl -I -L` (HTTP status) + GET body scan + mailto-extract.

| # | Bedrijf | Website | HTTP | Email in csv | Email op site | Status |
|---|---------|---------|------|--------------|---------------|--------|
| 1 | Mufide Hair & Art | https://www.mufide.nl | 403→200 GET | info@mufide.nl | info@mufide.nl (footer) | ✅ live |
| 2 | Assink Pure Identity | https://assinkonline.nl | 200 | info@assinkonline.nl | geen mailto maar contactform/wachtlijst, bedrijf live sinds 1908 | ✅ live |
| 3 | AMI Kappers Hengelo Esrein | https://www.amikappers.nl/salons/hengelo-esrein | 200 | hengelo-esrein@amikappers.nl | geen mailto, keten-site live + Craft CMS | ✅ live |
| 4 | Stralend Huidzorg | https://www.stralendhengelo.nl | 200 | info@stralendhengelo.nl | info@stralendhengelo.nl?subject=… | ✅ live |
| 5 | Esthetiek Huidverbetering | https://esthetiekhuidverbetering.nl | 200 | info@esthetiekhuidverbetering.nl | info@esthetiekhuidverbetering.nl | ✅ live |
| 6 | Beauty by Hands of Gold | https://www.beautybyhandsofgold.nl | 200 | info@beautybyhandsofgold.nl | info@beautybyhandsofgold.nl (algemene voorwaarden) | ✅ live |
| 7 | Het Ahuis Schoonheidssalon | https://hetahuis.nl | 200 | info@hetahuis.nl | geen mailto (contactform), salon bestaat Stroinkslanden | ✅ live |
| 8 | Count-On | https://www.count-on.nl | 200 | info@count-on.nl | info@count-on.nl ×2 | ✅ live |
| 9 | 2.0 Accountants | https://nieuw.20accountants.nl | 200 | info@20accountants.nl | info@20accountants.nl | ✅ live |
| 10 | Hendriksen Accountants en Adviseurs | https://hendriksen.nl | 200 | info@hendriksen.nl | info@hendriksen.nl | ✅ live |
| 11 | Bilanx Accountants | https://www.bilanx.nl | 200 | info@bilanx.nl | info@bilanx.nl | ✅ live |
| 12 | TLC International Lawyers | https://tlcinternationallaw.com | 200 | info@tlcinternationallaw.com | info@tlcadvocaten.nl (alias domein) | ✅ live - email alias noteren |
| 13 | MRS Advocaten | https://www.mrs-advocaten.nl | 200 | info@mrs-advocaten.nl | geen mailto, site live | ✅ live |
| 14 | Blankestijn Advocaten & Mediators | https://www.blankestijnadvocaten.nl | 200 | info@blankestijnadvocaten.nl | ab@… / d.beuving@… / t.zwiers@… (info@ is algemeen) | ✅ live |
| 15 | Damsté Advocaten - Notarissen | https://www.damste.nl | 200 | info@damste.nl | geen mailto maar grote site live | ✅ live |
| 16 | Tandartspraktijk Hengelo | https://tandartspraktijk-hengelo.nl | 200 | info@tandartspraktijk-hengelo.nl | info@tandartspraktijk-hengelo.nl | ✅ live |
| 17 | Dental Clinics Hengelo Boerhaavelaan | https://www.dentalclinics.nl/vestigingen/hengelo-boerhaavelaan | 301→200 | hengelo@dentalclinics.nl | boerhaavelaan@dentalclinics.nl (nieuwe URL /tandarts/…) | ✅ live - redirect actief |
| 18 | Bright Tandheelkunde | https://www.bright-tandheelkunde.nl | NXDOMAIN | info@bright-tandheelkunde.nl | — | ❌ ONgeldig - domein bestaat niet (DNS NXDOMAIN), site offline, verwijderen uit outreach |
| 19 | Bouwbedrijf Vos | https://www.bouwbedrijfvosborne.nl | 200 | bouwbedrijfvosborne@kpnmail.nl | info@bouwbedrijfvosborne.nl (csv: kpnmail = oud) | ✅ live - email update noteren |
| 20 | Bouwbedrijf Poorthuis | https://www.poorthuis-bouw.nl | 200 | info@poorthuis-bouw.nl | info@poorthuis-bouw.nl | ✅ live |
| 21 | Kleinbouw Twente | https://www.kleinbouw-twente.nl | 200 | info@kleinbouw-twente.nl | geen mailto maar contactpagina live | ✅ live |
| 22 | Bouwbedrijf De Jong Twente | https://bouwbedrijf-dejong.nl | 200 | info@bouwbedrijf-dejong.nl | info@bouwbedrijf-dejong.nl | ✅ live |


## Conclusie
- **21 / 22 geverifieerd live** (95%)
- **1 ongeldig verwijderd**: Bright Tandheelkunde — domein NXDOMAIN, geen HTTP, niet opnemen in queue/outreach
- **0 horeca** (vereiste voldaan)
- **2 email-aliases bijwerken**: TLC (info@tlcadvocaten.nl) en Dental (boerhaavelaan@…) — beide genoteerd, oude adressen als fallback laten staan
- Alle overige sites geen 404/parked, geen domein-te-koop pagina.

Backup origineel: `leads.csv.bak`
Geupdate `leads.csv` bevat nu 21 rijen (Bright verwijderd).
`marketing/outreach-queue.csv` hieronder bijgewerkt naar 21 geverifieerde leads.