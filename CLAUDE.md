# Spilwerk — project memory voor Claude Code

Dit bestand wordt automatisch geladen bij elke Claude Code-sessie in deze map. Houd 'm bondig.

## Wat dit project is

Werkmap voor **Spilwerk**, eenmanszaak (in voorbereiding) van Emmanuel Tekle. **Vriendelijke IT-hulp aan huis** voor particulieren en zelfstandige professionals in heel Overijssel. Heuvelshulp-achtig model — niet een MKB-consultant, wel een laagdrempelige "ik kom langs"-dienst.

## Wat dit project NIET is

- Niet een B2B IT-consultant met vaste-prijs pakketten voor MKB-bedrijven (eerdere positionering, bewust losgelaten)
- Niet specialistisch security- of compliance-werk (NIS2, ISO, pentests)
- Niet enterprise / mid-market detacheringswerk

| Map | Wat |
|---|---|
| `site/` | Website met vier pagina's: `index.html` (home + contact), `diensten/`, `prijzen/`, `over/`, plus de case study `werk/tankstation.html`. Statisch HTML/CSS/JS, **geen build-step** — header, footer en scripts staan dus in elk bestand apart. Wijzig je de nav, het telefoonnummer of de footer, doe dat in **alle vijf** de HTML-bestanden. |
| `leadgen/` | Python-tool voor outreach-concepten. Minder relevant voor B2C — vooral nuttig voor zelfstandige-professionals tier. |
| `marketing/` | Outreach-plan: Marktplaats, Google Business Profile, lokale Facebook-groepen, buurt-flyers. LinkedIn is **geparkeerd** — Emmanuel doet het bewust (nog) helemaal niet; niet in planning opnemen. |
| `business/` | Algemene voorwaarden, factuur-template, kostprijs. Discovery-script en offerte-template zijn vooral relevant voor zelfstandige-professionals tier. |

## Diensten — vijf herkenbare categorieën

Bij wijzigingen aan diensten **drie plekken synchroon houden**:

1. `site/diensten/index.html` — diensten-grid (en `site/prijzen/index.html` voor tarieven)
2. `leadgen/prompts/outreach.md` — system prompt voor Claude
3. `business/kostprijs.md` — marge-analyse

| Dienst | Tarief | Voor wie |
|---|---|---|
| Computer-hulp (traag, virus, herinstallatie) | vanaf €60/bezoek | Particulier |
| Wifi & internet | vanaf €60/bezoek | Particulier |
| Telefoon & tablet | vanaf €60/bezoek | Particulier (vaak senioren) |
| Veilig online | vanaf €60/bezoek | Particulier + zelfstandigen |
| Voor zelfstandigen (zakelijk e-mail, boekhouding-koppeling) | vanaf €250/halve dag | ZZP / zelfstandige professional |
| **Spilwerk Zeker** — maandabonnement (bewaakte back-up, voorrang) | €45/mnd Basis · €85/mnd Plus | ZZP / klein kantoor |

Plus optioneel: webapp-bouw zoals Total Tankstation (case study staat op `/werk/tankstation.html`) — niet als hoofdaanbod, wel als bewijs dat hij grotere dingen aankan.

**Spilwerk Zeker** (aug 2026, op verzoek van Emmanuel) is bewust géén terugkeer naar de MKB-consultantkoers: het is één product, verkocht aan klanten die hij al bezocht heeft, gebouwd op werk dat hij nu al doet. Het bestaansrecht is de stage vanaf september (40 u/wk, €400/mnd) — terugkerend inkomen uit gepland werk is dan het enige model dat past. Volledige propositie, marges, verkoopscript en technische opzet: `business/spilwerk-zeker.md`.

⚠️ **Reactietijd nooit korter beloven dan 1 werkdag.** Een MSP verkoopt beschikbaarheid en dat is precies wat hij tijdens de stage niet heeft. "Binnen 4 uur" of "altijd bereikbaar" is niet waar te maken. Wat er wél tegenover staat: het bezoek kan 's avonds of in het weekend, zonder toeslag.

## Tariefstructuur (uurbasis, niet pakket-prijs)

- **Bezoek aan huis in Twente (1e uur incl. voorrijden):** €60
- **Voorrijden buiten Twente** (Zwolle, Deventer, Kampen, Steenwijk, Hardenberg e.o.): +€30 — reistijd is daar te groot om gratis in te calculeren
- **Daarna per begonnen kwartier:** €15 (= €60/u)
- **Hulp op afstand:** €45/u
- **Klein klusje <30 min op afstand:** €30
- **Avond/weekend:** géén toeslag — zelfde tarief als doordeweeks (bewust afgeschaft juli 2026; Emmanuel kan door zijn Livio-baan alleen 's avonds en in het weekend, dus een toeslag zou altijd gelden en dat is geen toeslag maar een prijsverhoging)
- **Werkt het niet:** €0 voor de reparatiepoging — geldt niet voor voorrijden/diagnosetijd als hardware al kapot blijkt vóór het bezoek

**Zakelijke vaste prijzen** (zelfstandigen & kleine kantoren — bewust +30-40% boven particulier-niveau, want bedrijven kopen op "dit wordt opgelost en ik ben gedekt", niet op prijs):

- Werkplek-setup nieuwe medewerker: €185
- Gedeelde printer in netwerk (tot 5 werkplekken): €130
- Gedeelde mappen instellen: €170
- Bedrijfs-backup (3-2-1 + getest herstel): €300
- Synology / NAS basis-setup: €195
- Vertrekkende medewerker offboarden: €115
- Halve dag op locatie: €250 minimum

## Brand & toon

- **Naam:** Spilwerk (warm, gezellig, persoonlijk — net als Heuvelshulp)
- **Toon:** vriendelijk, jij/je, geen jargon, korte zinnen, "ik" niet "wij"
- **Visueel:** warme crème (#FBF6EE), zacht groen accent (#4A7C59), warm oranje voor CTAs (#E8865B), Manrope sans-serif. Ronde randen (border-radius), shadows zacht. **Niet** meer editorial-industrial.
- **Niet:** zakelijk u-aanspreking, IT-jargon, "wij geloven dat...", consultancy-praat

## Belangrijke contextpunten

- Domein `spilwerk.nl` is **geregistreerd** (met een i — niet "spelwerk"). Site wordt gedeployed vanuit déze repo via `.github/workflows/pages.yml` (GitHub Pages, `site/CNAME`). De oude repo `E-mma9/spilwerk.nl` is vervangen en onschadelijk gemaakt — niet meer gebruiken.
- **Google-accounts:** `emmanueltekle@gmail.com` is het stabiele hoofdaccount (Search Console + Marktplaats). `spilwerk@gmail.com` is juli 2026 verwijderd geweest en na bezwaar terug — bij Google Business Profile altijd **twee eigenaren** instellen, want een profiel sneuvelt met zijn account.
- **Reviewlink Google Business Profile:** `https://g.page/r/CahMjwgVmxX7EBM/review` — staat in de footer van de site en in `marketing/reviews.md` (script om erom te vragen, en wat niet mag).
- **Google Business Profile bestaat al en is geverifieerd** — categorie Computerservice, beheerd vanaf `emmanueltekle@gmail.com`. Niet opnieuw aanmaken (dubbele profielen = spam-signaal en schorsing). Openstaand: tweede eigenaar toevoegen, beschrijving/diensten/servicegebied invullen, foto van Emmanuel zelf toevoegen. Teksten staan in `marketing/google-business-profile.md`.
- **Google Ads draait** sinds juli 2026 — expertmodus, Zoeknetwerk-campagne. Advies over "nog niet starten" in `marketing/betaalde-promotie.md` is dus achterhaald; wat blijft gelden is het maandelijkse onderhoud (zoektermen-rapport nalopen, uitsluitingszoekwoorden toevoegen) en de stopregel na 30 dagen.
- **Google Search Console is verifieerd** (URL-prefix property `https://spilwerk.nl/`, account emmanueltekle@gmail.com). De `google-site-verification` metatag in `site/index.html` **moet blijven staan** — verwijderen verbreekt de verificatie. Homepage is geïndexeerd sinds juli 2026.
- KvK-inschrijving wordt opgepakt; Emmanuel wil dit voor expense-aftrek + officieel kunnen factureren.
- **Telefoonnummer is definitief: 06-87433537.** Besloten juli 2026 — dit blijft het zakelijke nummer en staat op site, drukwerk, Marktplaats, Google Business Profile en Ads. Wil Emmanuel werk/privé scheiden, dan komt er een nieuw *privé*nummer; dat deel je met een paar appjes en er hoeft niets herdrukt te worden. Drukwerk is dus **niet meer geblokkeerd**. `marketing/nummer-wissel.md` blijft bewaard voor het geval het zakelijke nummer ooit tóch wijzigt.
- ⚠️ **Google Ads blokkeert deze dienst** (aug 2026). De campagne is afgekeurd onder het beleid *"Technische support voor consumenten door derden"* — een categorie die Google standaard dichtzet vanwege scam-callcenters. Alleen gecertificeerde adverteerders mogen erin. **Nooit de advertentietekst herschrijven om de categorie te ontwijken** — Google beoordeelt ook de landingspagina en het bedrijf, en omzeiling kost het hele account. Certificering vereist KvK-inschrijving. Google Business Profile, organische resultaten en Marktplaats worden hier niet door geraakt.
- Werkgebied: **heel Overijssel**, maar met zone-tarief — Twente (Hengelo, Enschede, Almelo, Borne, Oldenzaal, Haaksbergen) incl. voorrijden, de rest van Overijssel (Zwolle, Deventer, Kampen, Steenwijk, etc.) +€30 voorrijkosten. Zonder die zone-splitsing kost een bezoek in Kampen of Zwolle meer reistijd dan er in het uurtarief zit.
- Total Tankstation case study staat live als `werk/tankstation.html` — gebruik 'm voor zelfstandige-professionals doelgroep, niet als hoofdverhaal voor particulieren.
- Emmanuel woont in Enschede, zit in zijn **3e jaar** HBO ICT (Cybersecurity & Cloud, Saxion, afstuderen 2028) en werkt bij Livio als **2e-lijns systeembeheerder** (sinds mei 2026; daarvoor 1e-lijns helpdesk). Deed eerder IT-hulp aan huis bij **Student aan Huis** (nov 2024–apr 2025) — sterk credibility-punt voor Spilwerk. Draait thuis een 3-node Proxmox-cluster. Bron voor deze feiten: emmanueltekle.nl (repo `E-mma9/E-mma9.github.io`, `content/about.md`) — let op: die about-pagina is van mei 2026 en zegt nog "second year"; per juli 2026 is dat 3e jaar (bevestigd door Emmanuel). Eerlijk over student-status op site — geen schande, juist credibility-boost.

## Werkwijze in deze repo

- Bij site-wijzigingen: lokaal openen via `Start-Process site\index.html` (geen Python lokaal beschikbaar).
- Bij CSS-wijzigingen: alle kleuren/typografie via `:root` custom properties in `site/assets/style.css`.
- Geen build-step, geen npm. Bewust simpel gehouden.

## Wat NIET doen zonder vraag

- Geen pakketten / diensten toevoegen die hij niet expliciet kan leveren (eerder fout: NIS2, M365-migraties, AI-werksessie, koppelingen — allemaal te ambitieus voor zijn niveau)
- Geen B2B / enterprise-koers voorstellen (dat pad is bewust losgelaten)
- Geen logo / branding-assets genereren (groen rondje + naam is genoeg)
- Geen Google Analytics of ander cookie-/profileringsgebaseerd tracking toevoegen. **GoatCounter staat wél op de site** (privacyvriendelijk, geen cookies) — sinds juli 2026, op verzoek van Emmanuel; niet verwijderen. Site-code: `spilwerk` (aan te maken/aangemaakt op goatcounter.com).
- Geen npm/build-tooling toevoegen aan `site/`
- Geen automatische LinkedIn / e-mail verzending bouwen — TOS-risico

## Geleerde lessen uit eerdere overshoot

Eerder werd Spilwerk gepositioneerd als 8-9 pakketten MKB-consultant (incl. NIS2-readiness). Te ambitieus voor een HBO-student. Pivot naar B2C IT-hulp aan huis is bewust kleiner, haalbaarder, sneller eerste klant. **Niet terug pivoten zonder expliciete vraag.**
