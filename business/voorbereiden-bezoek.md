# Voorbereiden bezoek — paklijst, intake, procedures

Geen klant blij met "oh, dat had ik even mee moeten nemen". Hieronder alles wat je moet doen voordat je in de auto stapt, en wat je tijdens en na het bezoek aanpakt.

## Vóór het bezoek — 24-48u tevoren

### Pre-call intake (telefoon, 5 min)

Vraag bij elke nieuwe klant:

1. **Wat is het probleem in één zin?** (bv. "laptop is heel langzaam geworden")
2. **Wanneer begon het?** (vandaag / een week / een maand)
3. **Wat hebben jullie zelf al geprobeerd?** (zoek naar "ik heb al een keer opnieuw opgestart" — bevestigt dat ze meedenken)
4. **Welk merk + model is het?** (Dell Latitude / MacBook Air M2 / etc.) — anders neem je de verkeerde tools mee
5. **Heb je het wachtwoord van het apparaat?** (ja/nee — mensen vergeten dit vaak en dan loopt het bezoek 2 uur uit)

Plus voor zelfstandigen / kleine bedrijven:

6. **Wie heeft administrator-rechten op de systemen?** (Klant / een externe IT-partij die nu vakantie heeft / niemand-weet-het)
7. **Welke software is bedrijfskritisch?** (boekhouding, kassa-systeem) — dat raak je niet aan zonder backup
8. **Hoe zijn jullie eigenlijk bij me terechtgekomen?** — je beste signaal welke marketing-kanalen werken

### Confirmation versturen

Direct na de telefoon: stuur de mini-opdrachtbevestiging (zie `contracten/opdrachtbevestiging.md`).

### Voorbereiding — avond ervoor

- ✅ Bevestig nogmaals tijd + adres
- ✅ Check route (bij 1e klant in een dorp: kijk waar je kan parkeren)
- ✅ Laad telefoon + laptop op
- ✅ Sync wachtwoordmanager naar je telefoon
- ✅ Maak een lege map `klanten/[datum]-[naam]/` op je laptop voor verslag + foto's

---

## In je tas — paklijst

### Standaard (altijd mee)

| Item | Waarvoor |
|---|---|
| **Eigen laptop** | Research, remote-toegang, downloads, documentatie schrijven |
| **Externe hub / dock** | USB-A, USB-C, HDMI, Ethernet — elke moderne laptop heeft maar 2 poorten |
| **Telefoon-oplader** (USB-C + Lightning) | Klant laptop is leeg = veelvoorkomend |
| **Lange ethernet-kabel (5m)** | Voor wifi-debug + snelheidstests |
| **USB-stick met Windows installer** (Rufus + ISO) | Herinstallatie |
| **USB-stick met Linux Mint Live** | Voor laptops die compleet vastlopen + data-redding |
| **USB-stick met portable tools** | Malwarebytes, CCleaner, AdwCleaner, Autoruns, MiniTool, etc. |
| **Externe schijf 1TB+** | Backup maken vóór ingrijpende wijzigingen — non-negotiable |
| **Schroevendraaier-set** (Phillips, Torx T5/T6/T8) | Laptop-schroeven |
| **Anti-statische polsband** | SSD/RAM-werk |
| **Pincet** | Kleine clips, schroeven |
| **Zaklamp / hoofdlamp** | Achter computers, onder bureau |
| **Visitekaartjes** | 5 stuks elke keer mee |
| **Pen + klein notitieboek** | Senioren waarderen pen-en-papier nog steeds |
| **Mondkapje** | Sommige klanten vragen dit nog |
| **Batterijset (AA / AAA)** | Toetsenborden, muizen, afstandsbedieningen |

### Bij hardware-bezoek extra

| Item | Waarvoor |
|---|---|
| **SSD's in voorraad** (1× 500GB, 1× 1TB Samsung 870 EVO of Crucial MX500) | Klanten willen vaak ter plekke beslissen |
| **2× DDR4 SODIMM 8GB** (universeel) | Laptop-RAM-upgrade |
| **2× DDR4 UDIMM 8GB** | Desktop-RAM |
| **Kabels-set**: HDMI 2m, DisplayPort 2m, USB-C-USB-C 1m, USB-A-Lightning, USB-A-USB-C | |
| **Multimeter** | Power-supply / kabel-tests |
| **Crimp-tool + RJ45-pluggen** (10 stuks) | Kabel maken on-site |

### Bij netwerkbezoek extra

| Item | Waarvoor |
|---|---|
| **Wifi-analyzer-app op telefoon** (NetSpot / WiFi Analyzer) | Dekking meten |
| **Klein 5-poort gigabit switch** (TP-Link of Netgear) | Tijdelijke uitbreiding |
| **Wifi-accesspoint** (TP-Link Omada EAP series, ~€55) | Versterking-bezoeken |
| **Lange ethernet-kabel (10m + 5m + 2m)** | Tijdelijke trekken |

### Voor bedrijfsbezoek (zelfstandige / klein kantoor)

| Item | Waarvoor |
|---|---|
| **Eigen schone laptop voor admin-werk** | Niet jouw privé-laptop op klantkantoor zetten |
| **Geprinte algemene voorwaarden + verwerkersovereenkomst** | Mocht klant willen ondertekenen |

### Auto-uitrusting (niet in tas, wel altijd in auto)

| Item | Waarvoor |
|---|---|
| Tas met UTP-kabels (5×, 3×2m + 1×5m + 1×10m) | |
| Doos met losse hardware (oude SSD's, RAM, kabels die je tegenkomt) | |
| Klein toolset met meer schroevendraaiers, soldeerbout | Voor als basis-set niet genoeg is |
| Powerbank 20.000 mAh | Voor jezelf én klanten |

---

## Tijdens het bezoek — procedures

### Eerste 5 minuten

1. **Schoenen aan/uit** — vraag eerst, sommige mensen vinden dat belangrijk
2. **Stel je voor + visitekaartje overhandigen** — ook al weet de klant je naam, dit zet de toon
3. **Vraag of je iets mag drinken** — beleefd en geeft 2 min voor de klant om te ontspannen
4. **Vraag waar je het beste kan zitten** — niet op de werkplek van klant zelf gaan zitten zonder vragen
5. **Vraag de klant om te laten zien wat het probleem is** — voor je iets aanraakt

### Voor je iets verandert

Drie regels — non-negotiable:

1. **Foto van het probleem** met je telefoon (de error-melding, het scherm, de kabels)
2. **Backup van data** als je iets ingrijpends gaat doen (Windows herinstalleren, SSD vervangen, harde schijf wisselen) — ZELFS als de klant zegt "is niet nodig"
3. **Vraag of er bestanden zijn die ze écht niet kunnen missen** — laat ze die specifiek noemen

### Tijdens werk

- **Werk hardop** — leg uit wat je doet terwijl je het doet, in normale woorden. Maakt de klant comfortabel + zorgt dat zij hun device zelf snappen
- **Maak nooit een dubieuze keuze namens de klant** — bv. "zal ik deze map weggooien?" → vraag het, ook al lijkt het overbodig
- **Geen "while I'm at it"** — als je voor wifi komt en je ziet dat de Windows-versie verouderd is, zeg het maar **doe het niet** zonder akkoord
- **Stuur niemand naar een dure aankoop** zonder reden ("u moet een nieuwe laptop kopen") — als-ie het nog 2-3 jaar prima doet, zeg dat
- **Bluf niet** — als je iets niet weet: "even uitzoeken, kost je geen tijd". Neem laptop / probleem digitaal mee mits klant akkoord.

### Stuck? Drie opties

1. **Google + StackOverflow ter plekke** (10 minuten ok, langer wordt awkward)
2. **Bel een collega** (Livio of een ZZP-medewerker met meer ervaring)
3. **Eerlijk zeggen**: "ik wil dit niet bluffen — kun je me 24 uur geven om het uit te zoeken? Geen extra kosten." Dat scoort meer vertrouwen dan worstelend doen alsof.

### Eerlijk niet-kunnen — doorverwijzen

Voor jou nu (2e jaar HBO, niet-elke-skill-perfect): wees comfortabel met "dit kan ik niet — ik verwijs je door naar X". Het versterkt je reputatie omdat het laat zien dat je geen geld pakt voor werk wat je niet kan.

Doorverwijs-lijst (vul aan met namen + nummers in jouw netwerk):

| Probleem | Doorverwijzen naar |
|---|---|
| MacBook scherm vervangen | Lokale Apple-reparateur (zoek "Apple reparatie [stad]") |
| Moederbord-reparatie laptop | iFixrepair, Computerhulp Twente, of merkservice |
| Data-recovery van fysiek kapotte schijf | Ontrack of OnTrack-vergelijkbare bureaus (€500-2000) |
| 24/7 IT-support contracten | Lokale ICT-bureaus (Connectworks, NEWMINDS) |
| ISO 27001 / NIS2-audits | Voorbeeldcontract.nl-jurist of audit-bureau |
| AVG-vragen (juridisch) | Kennedy van der Laan, AVG-helpdesk |
| Kassa-systeem van specifiek merk | Merk-leverancier zelf (Square, iZettle, etc.) |

---

## Na het bezoek — procedures

### Direct na het bezoek (bij de klant nog) — 5 min

1. **Wat is er gedaan?** — vat samen, klant knikt of corrigeert
2. **Werkt het nu echt?** — laat klant zelf testen (laptop opstarten, wifi proberen) — niet alleen jouw eigen test
3. **Wat eventueel later nodig is** — bv. "over 6 maanden zou je dit nog kunnen overwegen". Geen sales — wel transparantie.
4. **Hoe wil je betalen?** — factuur 14 dagen / Tikkie / contant
5. **Mag ik je nog wat tips geven over X?** — kleine extra waarde, gratis (5 min uitleg over phishing / wachtwoorden / etc.) — zorgt voor mond-tot-mond
6. **Visitekaartje x2 meegeven** — "voor jezelf en eentje voor iemand die je kent"

### Binnen 2 uur

1. **Korte samenvatting per WhatsApp / e-mail**:
   ```
   Hoi [Naam],
   Bezoek vandaag samengevat:
   - Wat ik deed: [punt 1, punt 2, punt 3]
   - Wat nu werkt: [bevestiging]
   - Tip voor later: [optioneel]

   Factuur volgt morgen per mail. Mochten er nog dingen niet kloppen,
   bel of app me direct.

   Tot ziens!
   Emmanuel
   ```

### Volgende dag

1. **Factuur sturen** (zie `factuur-template.md`)
2. **Verslag in `klanten/[naam]/`** opslaan: foto's, wat je deed, hoe lang, wat klant zei
3. **Update CRM-spreadsheet** (kanaal waarvia ze kwamen, klusje, omzet, datum)

### Een week later

1. **Korte check-in per WhatsApp**:
   ```
   Hoi [Naam], even checken — werkt alles nog goed sinds vorige
   week? Geen druk, gewoon nieuwsgierig.
   ```
   Klanten waarderen dit enorm. Maakt mond-tot-mond 3× zo waarschijnlijk.

### Een maand later

1. **Vraag een Google-review** (alleen als bezoek goed is verlopen):
   ```
   Hoi [Naam], heb je 2 minuten? Ik probeer mijn Google-pagina op
   te bouwen. Mocht je een review willen achterlaten — fijn, niet
   verplicht. [korte link naar Google review-pagina].

   Mocht je iemand kennen die ook hulp nodig heeft, mag je m'n
   nummer doorgeven. Visitekaartje stuur ik mee in de mail.
   ```

---

## Veiligheid voor jezelf

- **Eerste bezoek bij volledig vreemde particulier**: stuur een familielid / vriend de naam + adres + tijd. Standaard procedure. Niet eng, wel slim.
- **Vrouwen alleen thuis op vreemd adres**: idem
- **Cash betaling**: prima maar geef nooit visitekaartje af in een buurt waar je een onveilig gevoel hebt
- **Geen wachtwoorden van anderen onthouden zonder toestemming**: zelfs niet "voor het volgende bezoek". Klant slaat zelf op.

---

## Eerste-bezoek-eindcheck

Na 5-10 echte bezoeken weet je je eigen ritme. Tot die tijd, voordat je weggaat:

- [ ] Klant heeft mijn nummer + e-mail (visitekaartje gegeven)
- [ ] Klant kan zelf testen dat het werkt (niet alleen ik)
- [ ] Foto's van probleem + oplossing in mijn `klanten/`-map
- [ ] Backup van klant-data is ergens (extern of cloud) als ik iets ingrijpends deed
- [ ] Niets van de klant per ongeluk meegenomen (kabel, schroevendraaier, USB-stick)
- [ ] Schoenen weer aan, jas mee, deur achter me dicht

Dat klinkt vanzelfsprekend tot je een keer 30 min terugrijdt voor een vergeten dop.
