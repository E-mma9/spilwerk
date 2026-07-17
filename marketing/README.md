# Marketing — eerste klanten

> **⚠️ Let op: dit bestand stamt grotendeels uit de oude B2B-MKB-periode** (LinkedIn-first, M365-migraties, pakketten). Het actuele werkplan voor IT-hulp aan huis staat in [`tracker.md`](./tracker.md) — gebruik dát. **LinkedIn is bewust geparkeerd** (zie [`linkedin.md`](./linkedin.md)) — sla alle LinkedIn-stappen hieronder over. De platform-secties (Werkspot/Hoofdkraan) en het lokaal-netwerk-deel zijn nog bruikbaar.

Geen theorie, een werkplan. Doel: **drie betalende klanten in 90 dagen**, waarvan minstens één buiten je eigen netwerk. Daarna kun je op herhaling.

## Kort over de waarheid

- Outreach-conversie voor een nieuwe ZZP'er ligt op **2–5%**: 50 mailtjes/DM's → 1–2 gesprekken → 1 klant na 3–6 maanden. Niet leuker te maken.
- LinkedIn-content + outreach is nu het meest scalable kanaal voor B2B-MKB. Werkspot/Hoofdkraan zijn aanvullend (lagere tarieven, snellere eerste klant).
- Lokaal Twente-netwerk = **ondergewaardeerd kanaal**. Eén lid van een Twentse ondernemersclub kan vijf doorverwijzingen waard zijn.
- Google ads / SEO = pas relevant na 6 maanden. Nu negeren.

## Drie kanalen waar je heen gaat (in deze volgorde)

### 1. LinkedIn — primair, lange termijn

Zie [`linkedin.md`](./linkedin.md). Bevat:
- Profiel-rewrite (Spilwerk-modus, vertaalt skills naar klantvoordeel)
- 8 kant-en-klare posts om de eerste 8 weken te plaatsen (1/week)
- Connection request + DM-templates die echt mensen openen
- Eerlijke regels over LinkedIn-automatisering (samengevat: niet doen)

### 2. Werkspot · Hoofdkraan · Freelance.nl — directe vraag

Lokale MKB plaatst hier kleine klussen. Tarieven liggen lager (€25–80/u) dan jouw vaste-prijs-rekening, maar het is een **directe pijplijn naar eerste klanten** die je later kunt upsellen. Strategie:

- **Eerste 30 dagen**: dagelijks 10 min op deze sites kijken, op 2–3 passende opdrachten per week reageren
- **Beperk je tot opdrachten waar Spilwerk-pakketten matchen**: M365-migraties, backup-setup, server-beheer, simpele automatiseringen, Excel-koppelingen
- **Sla over**: WiFi-installaties met hardware (eigen marge dood), pure WordPress-onderhoud (lage marge), 24/7-support contracten (te beperkend)
- Account aanmaken bij elk: gratis profiel, vul werkstuk uit `werk/tankstation.html` als case in

Direct registreren:
- [werkspot.nl/zelfstandige](https://www.werkspot.nl/zelfstandige) — laagdrempelig, brede MKB
- [hoofdkraan.nl](https://www.hoofdkraan.nl/) — hoger niveau, vaak langere klussen
- [freelance.nl](https://www.freelance.nl/) — meer mid-market
- [it-contracts.nl](https://www.it-contracts.nl/) — corporate, voor later (na AZ-104)

### 3. Lokaal netwerk Twente — referrals

Je sterkste kanaal voor klanten die **vertrouwen vóór alles** zetten. Concreet:

- **Total Tankstation referral vragen** (week 1): "Ken je nog 2 ondernemers met soortgelijk Excel-gedoe? Ik mag jou als referentie gebruiken." → mailtje sturen, 5 minuten werk, >50% kans op minstens 1 lead.
- **BNI Twente of vergelijkbare ondernemersclub** bezoeken als gast (€0). Iedereen daar is zelf ondernemer en heeft een IT-pijn. Locaties: Hengelo, Enschede, Almelo. Drie bezoeken meedoen voor je beslist of je lid wordt.
- **Saxion alumni-netwerk** + LinkedIn-verbinding met je docenten en stagebegeleiders. Docenten kennen vaak bedrijven die "iemand zoeken voor een klein klusje".
- **MKB-Nederland Oost** — gratis nieuwsbrieven en evenementen.
- **Industriepark Hengelo / Kennispark Twente** — bedrijfsverzamelgebouwen lopen vol met MKB-ondernemers die je kunt bereiken via één goed open-koffie-event.

## 30-dagen-plan

Eerlijk over wat dit kost: ongeveer **8–10 uur per week** naast school + Livio. Te doen, maar je moet er een vast moment voor inplannen (bv. di + do avond).

### Week 1 — fundament

| Dag | Actie | Tijd |
|---|---|---|
| Ma | Domein registreren (`spilwerk.nl` of beste alternatief) bij TransIP/Mijndomein. ~€8/jr | 15 min |
| Ma | Site live zetten op Cloudflare Pages (zie `../README.md` deploy-sectie) | 30 min |
| Di | LinkedIn-profiel rewrite uitvoeren (zie `linkedin.md`) | 60 min |
| Di | Total Tankstation mail: vraag 2-zin-quote + referrals | 15 min |
| Wo | Accounts: Werkspot, Hoofdkraan, Freelance.nl. Profiel + case study uploaden | 90 min |
| Do | Google Business Profile aanmaken voor Spilwerk (als bedrijf zonder fysieke locatie kan via "service-area business") | 30 min |
| Vr | LinkedIn post #1 publiceren (de "ik begin Spilwerk"-post) | 20 min |

**KvK-inschrijving nog niet nodig** — pas wanneer eerste klant getekend heeft. Kost je anders een startersaftrek-jaar zonder waarde.

### Week 2 — eerste outreach

| Dag | Actie | Tijd |
|---|---|---|
| Ma | Lijst van 30 lokale MKB-bedrijven samenstellen via Google Maps + KvK Open Data (Twente, 5–25 medewerkers). CSV in `../leadgen/seed_leads.csv` | 60 min |
| Di | Leadgen-tool draaien (`python leadgen.py --limit 10`) → 10 concept-mails | 30 min + API ~€0.20 |
| Di | Concepts reviewen, 5 beste personaliseren, versturen | 60 min |
| Wo | Werkspot/Hoofdkraan check: reageer op 2 passende opdrachten | 30 min |
| Do | LinkedIn post #2: Total Tankstation case study (link naar `werk/tankstation.html`) | 20 min |
| Do | 10 connection requests sturen op LinkedIn naar Twentse ondernemers (template in `linkedin.md`) | 30 min |
| Vr | BNI/lokale ondernemersclub event opzoeken, één inplannen voor week 3-4 | 15 min |

### Week 3 — verbreden

| Dag | Actie | Tijd |
|---|---|---|
| Ma | Tweede leadgen-batch: 10 nieuwe leads | 90 min totaal |
| Di | Follow-up mailen naar leads van week 2 die nog niet reageerden ("nog kort denken aan hieronder?") | 30 min |
| Wo | Werkspot/Hoofdkraan check + reageer op 2 opdrachten | 30 min |
| Do | LinkedIn post #3: educatieve post over backup-pijn (zie `linkedin.md` post-3) | 20 min |
| Do | Reageer op 5 LinkedIn-posts van Twentse ondernemers met inhoudelijke comment (geen pitch) | 30 min |
| Vr | Bezoek BNI/ondernemersclub event | 90 min + reistijd |

### Week 4 — refine + scale

- Tot nu toe: ~30 outbound mails, 4 LinkedIn-posts, 1-2 fysieke events, 6+ Werkspot-reacties
- Realistisch: 1–2 kennismakingsgesprekken nu in agenda, misschien 1 offerte
- **Vrijdag week 4**: zet alles in een spreadsheet (lead, kanaal, datum eerste contact, status). Welk kanaal levert het meeste op? Verdubbel dáár, halveer de rest.

## Wat je niet moet doen (eerste 90 dagen)

- ❌ **Een logo laten ontwerpen voor €500.** Het rode rondje van Spilwerk is genoeg. Klanten kopen *jou*, niet je merk-identiteit.
- ❌ **Google/LinkedIn ads draaien.** Nul ROI bij <10 case studies in portfolio.
- ❌ **Premium account op LinkedIn (€60/mnd).** Pas relevant als je >20 InMails/maand stuurt en ROI ziet.
- ❌ **Een "uitgebreide blog" beginnen.** SEO-payoff is 6–12 maanden. Nu eerst klanten.
- ❌ **Concurrent-analyse maken.** Tijdverspilling. Je bent geen Capgemini, je hoeft je niet te positioneren tegenover ze.
- ❌ **Wachten met outreach tot "alles perfect is".** Het is nu goed genoeg. Verbeter terwijl je verkoopt.

## Meten

Eén spreadsheet, vijf kolommen: `Datum · Lead · Kanaal · Wat ik deed · Reactie`. Wekelijks bijhouden, niet meer. Dat is je hele CRM tot je 50+ leads hebt.

## Wat je wél moet doen ondanks dat het ongemakkelijk voelt

- **Antwoord op een prospect-mail binnen 4 uur op werkdagen.** Snelheid > perfectie. De helft van je concurrentie reageert pas na 48 uur en verliest daardoor.
- **Vraag aan iedere afgewezen prospect waarom.** Zelfs een 1-zin-antwoord is goud. "Te duur" en "ik wist niet dat dat ook kon" leiden tot heel verschillende vervolgstappen.
- **Stuur een eerlijke "nee" terug als je merkt dat een prospect een slechte fit is.** Reputatie > omzet.
