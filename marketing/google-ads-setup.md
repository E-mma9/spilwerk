# Google Ads opzetten — klik-voor-klik

Volg dit van boven naar beneden. Reken op 25 minuten.
Account: `emmanueltekle@gmail.com` · [ads.google.com](https://ads.google.com)

> **Belangrijk:** doe dit in **expertmodus**. Zie je een simpel scherm met "Uw bedrijf beschrijven" en geen linker menubalk, dan zit je in de vereenvoudigde modus. Klik dan op het ⚙️-icoon rechtsboven → **Overschakelen naar expertmodus**.

---

## Stap 0 — De oude Performance Max-campagne weg

Campagne `Kennis van diverse compute…`, €3,60/dag, type Performance Max.

1. Linkermenu → **Campagnes**
2. Vinkje aanzetten voor die campagne
3. Bovenaan **⋮ (drie puntjes)** → **Verwijderen**

**Waarom weg:** bij Performance Max bepaalt Google zelf waar je advertentie verschijnt — YouTube, Gmail, Display, Discover. Dat zijn plekken waar niemand op dat moment een kapotte laptop heeft. Je krijgt bovendien geen zoektermen-rapport, dus je kunt nooit zien waar je geld heen ging. En PMax heeft conversiedata nodig om te leren; die heb jij niet. Op €3,60/dag krijgt het nooit genoeg signaal.

De historie blijft bewaard onder "Verwijderde campagnes". Je raakt niks kwijt.

---

## Stap 1 — Nieuwe campagne aanmaken

1. **Campagnes** → blauwe **+** → **Nieuwe campagne**
2. Onderaan de doelenlijst: **"Een campagne maken zonder doelstelling"** ← belangrijk
3. Campagnetype: **Zoeken**
4. Resultaten: alleen **Websitebezoeken** aanvinken, URL `https://spilwerk.nl`
5. Campagnenaam: `Spilwerk · Zoeken · Overijssel`

> Kies je wél een doelstelling, dan stelt Google halverwege voor om er Performance Max van te maken. Vandaar "zonder doelstelling".

---

## Stap 2 — Bieden

| Veld | Waarde |
|---|---|
| Waar wil je op focussen? | **Klikken** |
| Bod-limiet instellen | ✅ aanvinken, **€1,20** |

**Niet** "Conversies" kiezen. Dat vraagt Google wel, maar conversie-biedstrategieën hebben minstens ~30 geregistreerde conversies per maand nodig om te werken. Jij hebt er nul. Zonder die data geeft het algoritme je budget blind uit.

---

## Stap 3 — Campagne-instellingen (hier zitten de standaardfouten)

### Netwerken — klap dit open, het staat ingeklapt

- ❌ **Zoekpartners van Google opnemen** → **UIT**
- ❌ **Display-netwerk opnemen** → **UIT**

Beide staan standaard **aan**. Dat tweede vinkje is de Performance Max-fout in het klein: je betaalt dan voor banners bij mensen die niets zochten.

### Locaties

- Kies **"Andere locatie invoeren"** → `Overijssel, Nederland`
- Of, gerichter: straal **35 km** rond Enschede — dan zit Twente er volledig in en Zwolle/Deventer niet, wat past bij je zone-tarief

Klik daarna op **Locatie-opties** (staat als klein linkje eronder):

- ✅ **"Aanwezigheid: mensen in of regelmatig in uw doelgebieden"**
- ❌ NIET "Aanwezigheid of interesse" — dat is de standaard en levert klikken op uit heel Nederland van mensen die "Overijssel" ergens in hun zoektocht hadden

### Taal

Nederlands.

### Budget

**€4 per dag** (≈ €120/maand). Google rekent per maand af, dus sommige dagen wordt het €6 en andere €2 — dat is normaal, het maandtotaal klopt.

### Advertentieschema

Klik **Meer instellingen** → **Advertentieschema**:

- Maandag t/m vrijdag: **08:00 – 21:30**
- Zaterdag en zondag: **09:00 – 20:00**

Overdag adverteren mag: bij Livio kun je rustig opnemen. Bellen is het moment dat de klant boekt; het bezoek plan je daarna 's avonds of in het weekend.

### Automatisch gemaakte items

**Meer instellingen** → **Automatisch gemaakte items** → **UIT**. Anders verzint Google eigen advertentiekoppen en stuurt het mensen naar pagina's die jij niet gekozen hebt.

---

## Stap 4 — Zoekwoorden

**Zoektype omzetten van "Breed" naar "Woordgroep"** en ze **één voor één** invoeren (elk op een eigen regel/veld — niet allemaal in één vak plakken, dan krijg je de melding *"Mag niet meer dan tien woorden bevatten"*).

```
"computerhulp aan huis"
"computerhulp Enschede"
"computerhulp Hengelo"
"computer hulp aan huis"
"pc hulp aan huis"
"laptop reparatie aan huis"
"wifi probleem aan huis"
"computer traag hulp"
```

**Verwijder alle suggesties die Google zelf voorstelt** — zoals *router wifi, modem internet, wifi in huis, modem wifi*. Dat zijn mensen die apparatuur willen **kopen**. Jouw zoekwoorden bevatten allemaal een woord dat **iemand inhuren** betekent: "hulp", "aan huis", "reparatie" — vaak met een plaatsnaam erbij. Dat is precies het verschil.

### Negatieve zoekwoorden

Linkermenu → **Doelgroepen, zoekwoorden en content** → **Zoekwoorden** → tabblad **Negatieve zoekwoorden** → **+**:

```
gratis
vacature
baan
sollicitatie
cursus
opleiding
tweedehands
kopen
handleiding
zelf doen
review
stage
```

Dit bespaart direct geld: zonder deze lijst betaal je voor mensen die "gratis computerhulp" of "cursus computer" zoeken.

---

## Stap 5 — De advertentie

Vul zoveel mogelijk velden — Google roteert ze en test zelf welke combinatie werkt.

**Koppen** (max 30 tekens elk):

```
Computer Kapot? Ik Kom Langs
IT-hulp Aan Huis · Overijssel
Ook 's Avonds En In Weekend
Werkt Het Niet? Geen Kosten
Computerhulp Enschede
Computerhulp Hengelo
Wifi, Laptop Of Telefoon
```

**Beschrijvingen** (max 90 tekens):

```
Vriendelijke IT-hulp aan huis in heel Overijssel. Werkt het niet, dan betaal je niets.
Computer, wifi, telefoon of tablet. Ook 's avonds en in het weekend, zonder toeslag.
```

**Weergave-URL-pad:** `spilwerk.nl/it-hulp-aan-huis`

---

## Stap 6 — Extensies (Google noemt dit "Items")

| Item | Waarde | Waarom |
|---|---|---|
| **Bel-item** | 06-87433537 | Belangrijkste van allemaal. Senioren bellen, ze vullen geen formulier in |
| **Sitelink-items** | Tarieven → `spilwerk.nl/#tarieven` · Diensten → `spilwerk.nl/#diensten` · Over mij → `spilwerk.nl/#over` | Maakt je advertentie fysiek groter in de zoekresultaten |
| **Locatie-item** | Koppel je Google Business Profile | Laat zien dat je een echt lokaal bedrijf bent |
| **Highlight-items** | `Ook 's avonds` · `Geen voorrijkosten in Twente` · `Werkt het niet? Geen kosten` | |

---

## Stap 7 — Nog even NIET aanzetten

Zet de campagne na het opslaan op **onderbroken**.

Je advertentie stuurt mensen naar een bedrijf zonder één review. Dat is precies de klik waarvoor je betaalt en die vervolgens niet belt. Eerst dit:

1. Google Business Profile afmaken — beschrijving, openingstijden, diensten, foto's
2. Eerste review binnen (vraag Fred na het bezoek van zondag 9 augustus)
3. **Dán** pas de campagne aanzetten

Met €400/maand stagevergoeding vanaf september is elke euro die nu naar een reviewloze klik gaat, weggegooid.

---

## Maandelijks onderhoud — 20 minuten

1. **Inzichten en rapporten** → **Zoektermen**. Dit is wat mensen écht intypten, niet wat jij instelde.
2. Alles zonder inhuur-intentie → aanvinken → **Toevoegen als negatief zoekwoord**
3. Zoekwoorden met 0 klikken na 100 vertoningen → pauzeren
4. Controleer of het geld naar Twente gaat en niet naar de rest van het land

## Stopregel

- Na 30 dagen en ~€120: **geen enkele** aanvraag → pauzeren
- 1 klant → doorlopen op hetzelfde budget, alleen optimaliseren
- 3+ klanten in één maand → opschalen naar €7-10/dag
