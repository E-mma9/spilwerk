# Offerte — eenpagina-template

Doel: één A4 dat een MKB-eigenaar in 3 minuten leest en op kan tekenen. Geen "we kunnen ook nog verder kijken naar uw cyberbeveiligingsstrategie"-padding.

## Hoe te gebruiken

1. Kopieer onderstaand blok naar een nieuw bestand (`offertes/2026-XX-XX-klantnaam.md`)
2. Vul `[BRACKETS]` in
3. Render naar PDF: open in Markdown-viewer / VS Code → "Print to PDF" — of kopieer naar Word
4. Mail de PDF + `algemene-voorwaarden.md` als bijlagen

Houd offertes in `offertes/` (deze map maak je zelf aan, sluit uit van git via `.gitignore`).

---

## Template

```markdown
---

# Offerte · [PAKKETNAAM]

**Voor:** [KLANT BEDRIJFSNAAM]
**T.a.v.:** [CONTACTPERSOON]
**Datum:** [27 april 2026]
**Geldig tot:** [27 mei 2026 — standaard 30 dagen]
**Offertenummer:** [2026-001]

---

## Wat we afspreken

[Eén paragraaf, 2-4 zinnen, in klant-taal. Wat het probleem is, wat de oplossing is, en welk concreet resultaat ze krijgen.]

> Voorbeeld: *"Total Tankstation circuleert maandelijks vier Excel-versies van het rooster, met versie-conflicten en ruil-chaos via WhatsApp tot gevolg. Ik vervang dit door één webapplicatie waarin de manager het rooster opbouwt en publiceert, en medewerkers via hun telefoon hun diensten zien, beschikbaarheid opgeven en diensten ruilen. Eén bron van waarheid, mobiel-vriendelijk, met automatische e-mail reminders."*

## Wat er concreet gebouwd / opgeleverd wordt

- [Bullet 1 — concreet, bv. "Webapplicatie met loginsysteem voor manager + medewerkers"]
- [Bullet 2 — bv. "Kalender-grid voor het opbouwen van het rooster"]
- [Bullet 3 — bv. "E-mail notificaties (dienstreminders, ruilverzoeken)"]
- [Bullet 4 — bv. "Mobile-first interface, werkt op iOS + Android via browser"]
- [Bullet 5 — bv. "Documentatie + 30 minuten teamuitleg na livegang"]

## Wat er buiten valt (bewust)

- [Bullet 1 — bv. "Native iOS/Android app"]
- [Bullet 2 — bv. "Koppeling met loonadministratie of bestaande HR-software"]
- [Bullet 3 — bv. "Integratie met kassasysteem"]

> Komen die punten alsnog in zicht: dan maken we daar een aparte vervolgafspraak voor.

## Tijdlijn

| Fase | Wat | Wanneer |
|---|---|---|
| 1. Discovery | Mee kijken, ontwerp, scope-confirmatie | Week 1 |
| 2. Build | Bouw, wekelijkse demo, bijsturen | Week 2-5 |
| 3. Productie | Deploy, data-import, training | Week 6 |
| 4. Na-support | Bug-fixes en kleine aanpassingen | Maand 2-4 |

**Start:** zodra deze offerte getekend is — typisch binnen 1 week na akkoord.

## Investering

| Onderdeel | Bedrag |
|---|---|
| [Pakketnaam] — vaste prijs | **€[XYZ],—** |
| Btw 21% | €[…],— |
| **Totaal incl. btw** | **€[…],—** |

> Vaste prijs. Tegenvallers in scope-uitvoering zijn voor mij, niet voor jou.

**Hosting (jouw kosten, los van mij):**
- Server bij Hetzner: ~€10/mnd
- Domein (als nog niet aanwezig): €8/jr

## Betaling

- 30% bij start van de werkzaamheden
- 70% bij oplevering productie-omgeving
- Betaaltermijn: 14 dagen na factuurdatum

## Voorwaarden

- Algemene voorwaarden Spilwerk versie [datum] — als bijlage en op spilwerk.nl/voorwaarden
- Bij akkoord: één regel mail terug ("akkoord, laten we starten") of getekende kopie van deze offerte volstaat
- Geheimhouding van jullie gegevens en werkprocessen — vanzelfsprekend, ook na afronding van het project

---

**Akkoord namens [klantnaam]:**

Naam: _______________________

Datum: ______________________

Handtekening: _______________

**Akkoord namens Spilwerk:**

Emmanuel Tekle · Spilwerk
KvK: [nummer] · BTW: [nummer]
emmanueltekle@gmail.com · spilwerk.nl

---
```

---

## Drie tips voor het schrijven

### 1. "Wat erbuiten valt" is even belangrijk als "wat erin zit"

Klanten respecteren scope-grenzen mits ze duidelijk zijn. Vager scope = scope-creep + jij voelt je verplicht om gratis werk te doen. Drie expliciete buiten-scope-punten zijn standaard.

### 2. Eén pagina. Niet anderhalve, niet twee.

Als het niet op één A4 past, snij in:
- Geen marketingpraat ("Wij geloven dat IT...")
- Geen lange CV-sectie ("Sinds mijn tweede jaar...")
- Geen 7-bullet "wat erin zit" — 5 is genoeg
- Geen FAQ-sectie

Eén pagina dwingt je tot helderheid. Die helderheid sluit deals.

### 3. De geldigheidsduur is een sales-tool

30 dagen geldig is standaard. Korter (14 dagen) als de klant getalmd heeft = prikkelt. Langer (60 dagen) lijkt vriendelijk maar verlengt het gehele beslis-proces — zelden in jouw voordeel.

## Wat je *niet* in een offerte zet

- ❌ Open uurtarief ("we maken kosten voor maatwerk; u krijgt achteraf een specificatie") — vermijdt elke vorm van vaste prijs en is waarom de klant je inhuurt om vaste prijzen te krijgen
- ❌ Disclaimer-blokken van 4 alinea's — staan in algemene voorwaarden, daar horen ze
- ❌ Logo's en plaatjes die je in een gratis Canva-template hebt gevonden — markdown of een simpel PDF zonder pretentie wint van slechte design
- ❌ "Indien u akkoord gaat..." — actief: "Bij akkoord stuur ik..."

## Hoe je de offerte verstuurt (e-mail)

```
Onderwerp: Spilwerk — offerte voor [pakketnaam] · [klantbedrijfsnaam]

Beste [Voornaam],

Zoals afgesproken na ons gesprek van [datum]: bijgaand mijn offerte voor
[korte beschrijving — bv. "het roostersysteem dat het maandelijkse Excel-
proces vervangt"].

Eén pagina, vaste prijs, scope helder. Lees 'm wanneer je tijd hebt —
heb je vragen, dan bel/mail je. Bij akkoord is één regel mail genoeg
("akkoord, laten we starten") of stuur de getekende versie terug.

De algemene voorwaarden zitten als tweede bijlage. Geen verrassende
clausules, alleen het noodzakelijke.

Geldig tot [datum].

Groet,
Emmanuel Tekle
Spilwerk · spilwerk.nl
```

## Een ingevulde voorbeeld-offerte (Total Tankstation als referentie)

> [Dit is hoe je offerte eruit ziet als-ie helemaal ingevuld is — als referentie. Niet versturen.]

```markdown
# Offerte · Excel-proces → webapplicatie

**Voor:** Total Tankstation
**T.a.v.:** [eigenaar-naam]
**Datum:** 14 maart 2026
**Geldig tot:** 14 april 2026
**Offertenummer:** 2026-001

## Wat we afspreken

Total Tankstation circuleert maandelijks vier Excel-versies van het rooster, met versie-conflicten en ruil-chaos via WhatsApp. Ik vervang dit door één webapplicatie waarin de manager het rooster opbouwt en publiceert, medewerkers via hun telefoon hun diensten zien, beschikbaarheid opgeven en diensten ruilen.

## Wat er gebouwd / opgeleverd wordt

- Webapplicatie met loginsysteem voor manager + medewerkers
- Kalender-grid voor het opbouwen van het rooster door de manager
- Beschikbaarheid + ruilverzoeken in-app, met goedkeuring-flow
- Mobile-first interface (werkt op telefoon zonder app-install)
- E-mail notificaties: dienstreminders + manager-reminders
- Productie-deployment (Hetzner, Docker, automatische backups)
- Documentatie + 30 minuten teamuitleg

## Wat er buiten valt (bewust)

- Native iOS / Android app
- Koppeling met loonadministratie of bestaande HR-software
- Integratie met kassasysteem of voorraadbeheer

## Tijdlijn

| Fase | Wat | Wanneer |
|---|---|---|
| 1. Discovery | Excel-analyse, ontwerp, scope-confirmatie | Week 1 |
| 2. Build | Bouw + wekelijkse demo | Week 2-6 |
| 3. Productie | Deploy + medewerker-onboarding | Week 7 |
| 4. Na-support | 3 maanden bugfix-garantie | Maand 2-4 |

## Investering

| Onderdeel | Bedrag |
|---|---|
| Excel-proces → webapplicatie (vaste prijs) | **€4.500,—** |
| Btw 21% | €945,— |
| **Totaal incl. btw** | **€5.445,—** |

Hosting (jouw eigen account):
- Hetzner-server: ~€10/mnd
- Domein (als nog niet aanwezig): €8/jr

## Betaling

- 30% bij start (€1.350 incl. btw)
- 70% bij oplevering productie (€4.095 incl. btw)
- Betaaltermijn: 14 dagen na factuurdatum

## Voorwaarden

- Algemene voorwaarden Spilwerk versie 2026.1 — als bijlage
- Akkoord: één regel mail of getekende kopie
- Geheimhouding van jullie gegevens en werkprocessen
```
