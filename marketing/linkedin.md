# LinkedIn — GEPARKEERD, nu niet doen

> **⏸️ Status juli 2026: Emmanuel doet LinkedIn bewust nog helemaal niet.** Geen profiel-rewrite, geen posts, geen outreach. Alle energie gaat naar de kanalen in [`tracker.md`](./tracker.md) (Google Business Profile, Marktplaats, buurt, doorverwijzers). Dit bestand blijft bewaard voor wanneer hij er ooit wél aan wil — niet zelf oppakken of ernaar verwijzen in planning.

**Eerst dit:** LinkedIn is *niet* je hoofdkanaal. Particulieren met een kapotte laptop zitten niet op LinkedIn — die vind je via Google Business Profile, Marktplaats en mond-tot-mond (zie [`tracker.md`](./tracker.md)). LinkedIn is nuttig voor precies twee dingen:

1. **De zelfstandige-professionals-tier** — kappers, accountants, makelaars, coaches met een klein kantoor zitten er wél
2. **Doorverwijzers** — jouw eigen netwerk (studiegenoten, Livio-collega's, familie) dat moet wéten dat Spilwerk bestaat

Tijdsbudget: **max 1 uur per week**. Eén post per 2-3 weken plus reageren op anderen is genoeg. Elke minuut meer gaat ten koste van kanalen die beter converteren.

## Eerlijk over LinkedIn-automatisering

**Niet doen.** Tools als Phantombuster, Dripify, Expandi, Apollo-LinkedIn-integraties zijn TOS-overtredingen. Een ban op LinkedIn = je hele professionele identiteit weg, vaak permanent, vaak zonder appel-route.

Wat wél mag en werkt:
- Connection requests handmatig sturen (max 100/week, op LinkedIn algoritme-veilig 20–25/week)
- DM's handmatig sturen
- AI gebruiken om concepten te schrijven (geen probleem, jij verstuurt)
- Inhoudelijk reageren op andermans posts (algoritme-boost gratis)

## 1 — Profiel

### Headline (220 tekens limiet)

```
Spilwerk · Vriendelijke IT-hulp aan huis — heel Overijssel
Voor particulieren en zelfstandigen · HBO ICT (Saxion) · 2e-lijns systeembeheerder @ Livio
```

### About-sectie

```
Ik help mensen aan huis met IT-problemen: trage laptops, wifi die de
slaapkamer niet haalt, foto's veiligstellen, telefoons instellen. En ik
help zelfstandigen (kappers, accountants, kleine kantoren) met alles
waarvoor je eigenlijk een eigen IT'er zou willen — op afspraak, tegen
vaste prijzen.

Geen jargon, geen verrassingen. Werkt het niet? Dan betaal je niets.

Achtergrond: HBO ICT Cybersecurity & Cloud bij Saxion (Enschede),
2e-lijns systeembeheerder bij Livio, en eerder ICT'er aan huis bij
Student aan Huis — dit werk is niet nieuw voor me. Thuis draait een
3-node Proxmox-cluster waarop ik elke configregel zelf heb gezet.

Groter werk kan ook: voor Total Tankstation verving ik hun maandelijkse
Excel-roosterchaos door één webapp (React + Node + Postgres, in
productie).

Werkgebied: heel Overijssel. Bel of app: 06-87433537.

🌐 spilwerk.nl
```

### Featured-sectie (3 items)

1. **Spilwerk — diensten + prijzen** → link naar `spilwerk.nl`
2. **Total Tankstation case** → link naar `spilwerk.nl/werk/tankstation.html`
3. **Mijn portfolio (technisch)** → link naar `emmanueltekle.nl`

### Skills-sectie

Top 3: **IT Support**, **Linux**, **Cybersecurity**. Daarnaast: Microsoft 365, Networking, Cloud Computing, Windows Server, Proxmox, Monitoring.

## 2 — Posts (1 per 2-3 weken, geen contentmachine)

Drie regels per post:

- **Begin met een haak.** Eerste 2 regels bepalen of mensen "see more" klikken.
- **Korte zinnen, korte regels.** Een lege regel tussen alinea's is je vriend.
- **Eindig met een vraag of CTA.** Zonder discussie geen algoritme-boost.

---

### Post 1 — De launch

```
Ik ben Spilwerk begonnen: vriendelijke IT-hulp aan huis, heel Overijssel.

Trage laptop. Wifi die de slaapkamer niet haalt. Foto's die al drie
jaar "een keer geback-upt moeten worden". Een printer die niemand in
het netwerk krijgt.

Ik kom langs, los het op, en leg uit wat ik doe — in normaal Nederlands,
in jouw tempo. Werkt het niet? Dan betaal je niets.

Dit werk is niet nieuw voor me: ik deed het eerder bij Student aan Huis,
en werk naast mijn studie (HBO ICT, Saxion) als 2e-lijns systeembeheerder
bij Livio.

Ook voor zelfstandigen en kleine kantoren: werkplek-setups, gedeelde
mappen, backups die écht getest zijn — vaste prijzen, geen retainer.

Ken je iemand die hulp kan gebruiken — je ouders, je buurvrouw, die ene
collega met z'n eeuwige wifi-verhaal? Stuur ze m'n nummer door:
06-87433537. Daar help je ze echt mee.

#Overijssel #Twente #ITHulp #ZZP
```

**Type:** tekst-only, met je foto. Pin deze post na publicatie. Dit is vooral een bericht aan je *eigen netwerk* — doorverwijzers, geen klanten.

---

### Post 2 — Total Tankstation case (voor de zelfstandigen-tier)

```
Vier Excel-versies per maand circuleerden bij Total Tankstation:

→ ROOSTER april v1.xlsx
→ ROOSTER april v2 DEFINITIEF.xlsx
→ ROOSTER april v2 DEFINITIEF AANGEPAST.xlsx
→ ROOSTER april FINAL_FINAL.xlsx

Ruilverzoeken via WhatsApp. Geen mobiel. Halverwege de maand wist
niemand meer wat de geldende waarheid was.

Ik heb het vervangen door één webapp:
- Manager bouwt het rooster in een kalender-grid
- Medewerkers zien hun diensten op hun telefoon
- Ruilen werkt met tweezijdige goedkeuring
- E-mailreminder de avond voor je dienst

In productie sinds 2026. Volledige case:
→ spilwerk.nl/werk/tankstation.html

Mijn dagelijkse werk is kleiner — IT-hulp aan huis en bij zelfstandigen.
Maar als er iets groters ligt: dit is het bewijs dat dat ook kan.

#Twente #Excel #Webapplicatie #ZZP
```

**Type:** tekst + screenshot van de webapp (met permissie van Total Tankstation), of carrousel-PDF.

---

### Post 3 — Homelab (credibility, af en toe herhalen met nieuwe foto)

```
Mijn 3-node Proxmox-cluster thuis draait 24/7.

Drie consumer mini-PC's. Ceph-storage, VLAN-segmentatie, Prometheus
scrapet elke 15 seconden, Alertmanager belt me wakker als er iets stuk
is. Elke configregel handmatig gezet — geen click-to-deploy.

Waarom dat relevant is als ik bij jou thuis of op kantoor kom:

De backups die ik voor klanten opzet, de netwerken die ik inricht, de
servers die ik beheer — dat draai ik zelf al jaren in productie. Ik
leer niet op jouw kosten.

Wat staat er bij jou thuis te knipperen in de meterkast? 👇

#Homelab #Proxmox #Linux #Twente
```

**Type:** echte foto van je cluster/rack. Werkt 5x beter dan een stockfoto.

---

### Post 4 — Vraag aan je netwerk (community, herhaalbaar format)

```
Vraag aan mijn Overijsselse netwerk:

Wat is het IT-klusje bij jou thuis dat al máánden op "moet ik een keer
doen" staat?

Foto-backup? Die trage laptop? Het wifi-punt dat nog in de doos zit?
Wachtwoorden eindelijk in een manager?

In de comments — ik geef bij elk antwoord eerlijk aan of het een
doe-het-zelfje is (dan zeg ik hoe) of iets waar je beter hulp bij
kunt halen.

Geen verkooppraat. Gewoon nieuwsgierig — en de antwoorden helpen mij
snappen waar mensen écht mee zitten.

#Overijssel #IT #VraagHetJeNetwerk
```

**Type:** tekst-only. Inhoudelijke antwoorden geven in de comments = gratis demonstratie van je toon en kennis.

---

## 3 — Connection requests + DM-templates (zelfstandigen-tier)

**Doelgroep:** zelfstandige professionals in Overijssel — kappers, accountants, fysiotherapeuten, makelaars, coaches, kleine kantoren. Geen particulieren (die bereik je hier niet), geen corporate.

### Connection request (cold) — zelfstandige in de regio

LinkedIn limit: 200 tekens. Persoonlijk maken per persoon.

```
Hoi [Voornaam], ik zag [bedrijf] via [waar]. Ik help zelfstandigen in
Overijssel met hun IT (Spilwerk, vanuit Enschede). Geen pitch — gewoon
nieuwsgierig om te connecten met ondernemers uit de regio.
```

**Niet:** "Ik wil graag mijn netwerk uitbreiden", "Ik zag uw profiel" — generiek = negeren.

### Connection accepted — follow-up (24-48u na acceptatie)

```
Hoi [Voornaam], dankjewel voor de connectie!

Ik doe IT-hulp aan huis en voor zelfstandigen in heel Overijssel —
denk aan werkplek-setups, gedeelde mappen, backups die echt getest
zijn. Vaste prijzen, je weet vooraf waar je aan toe bent.

Geen pitch (echt). Mocht je ooit ergens tegenaan lopen of iemand
kennen die ermee zit, dan weet je waar ik te vinden ben.

Hoe gaat het bij [bedrijf] op dit moment?
```

### DM bij specifieke aanleiding (zag een post / opmerking)

Trigger: ze plaatsten zelf iets over IT-frustratie / computer-gedoe / mail-problemen.

```
Hoi [Voornaam], las je post over [specifiek detail]. Heel herkenbaar —
ik werk in IT-support bij Livio en hoor letterlijk hetzelfde verhaal
elke week.

Daarnaast help ik met Spilwerk zelfstandigen in Overijssel precies
hiermee, tegen vaste prijzen. Voor [hun probleem] weet je met één
belletje van 5 minuten of het snel op te lossen is en wat het kost:
06-87433537.

Geen druk om iets te beslissen — eerste contact is gratis.
```

### Re-engagement (30+ dagen geen reactie)

```
Hoi [Voornaam], no worries als het niet uitkomt — wilde alleen even
checken. Stond [hun probleem] in de tussentijd nog op je lijst, of is
het opgelost? Beide is fijn om te weten.
```

---

## Algoritme-tips (wat aantoonbaar werkt op LinkedIn 2026)

- **Plaats op werkdagen 7:00-9:00 of 12:00-14:00** lokale tijd. Dinsdag/woensdag/donderdag het beste.
- **Carrousels (PDF document posts) krijgen 2-3x meer reach** dan tekst-posts. Voor lange-vorm content.
- **Antwoord op alle comments binnen 30 minuten van publicatie.** Algoritme weegt jouw antwoorden mee.
- **Gebruik hashtags spaarzaam** (3-5, niet 30). Te veel = pitchspam-signaal.
- **Geen externe links in de post-body** — algoritme suppresst je dan. Zet de link in de eerste comment.
- **Geen videos van jezelf** in de eerste 3 maanden (te hoog risico van afhaakvideo's, ze werken vooral als je al volgers hebt).
