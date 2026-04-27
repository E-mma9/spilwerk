# Factuur — template + NL wettelijke verplichtingen

In Nederland moet een factuur **9 specifieke velden** bevatten (Belastingdienst-eis). Mis er één en je btw-aftrek voor de klant is ongeldig. Hieronder de template + de complete checklist.

> **Praktisch:** doe dit niet in Word. Gebruik **Moneybird** (€19/mnd) of **e-Boekhouden** (€16/mnd) — die genereren correcte facturen, doen automatisch je btw-aangiftes, en houden je administratie 7 jaar bewaarplicht in orde. Onderstaande template gebruik je alleen als je je eerste factuur stuurt vóór je je boekhoudpakket actief hebt.

---

## Template (markdown → render naar PDF)

```markdown
---

# FACTUUR

**Spilwerk**
Emmanuel Tekle
[Adres conform KvK-inschrijving]
[Postcode + Plaats]
KvK: [nummer]
BTW: NL[BSN]B[01-99]
IBAN: NL[XX] [BANK] [12 cijfers]
emmanueltekle@gmail.com · spilwerk.nl

---

**Aan:**
[Klant bedrijfsnaam]
T.a.v. [Naam contactpersoon]
[Klant adres]
[Klant postcode + plaats]
[Klant KvK-nummer]
[Klant BTW-nummer — bij intra-EU verplicht]

---

| | |
|---|---|
| **Factuurnummer** | 2026-001 |
| **Factuurdatum** | 14 mei 2026 |
| **Vervaldatum** | 28 mei 2026 (14 dagen) |
| **Referentie / kenmerk** | [eventueel klant-PO-nummer] |

---

## Specificatie

| Omschrijving | Aantal | Prijs per stuk (excl. btw) | Subtotaal |
|---|---:|---:|---:|
| Excel-proces → webapplicatie · Eerste termijn (30%) bij start | 1 | € 1.350,00 | € 1.350,00 |

---

| | |
|---|---:|
| Subtotaal excl. btw | **€ 1.350,00** |
| Btw 21% | € 283,50 |
| **Totaal incl. btw** | **€ 1.633,50** |

---

## Betalingsgegevens

Gelieve bovenstaand bedrag binnen 14 dagen over te maken naar:

- **IBAN:** NL[XX] [BANK] [12 cijfers]
- **T.n.v.:** Emmanuel Tekle (Spilwerk)
- **Onder vermelding van:** Factuurnummer 2026-001

---

*Op deze factuur zijn de algemene voorwaarden van Spilwerk versie 2026.1 van toepassing, beschikbaar op spilwerk.nl/voorwaarden.*

*Spilwerk is een handelsnaam van Emmanuel Tekle, eenmanszaak ingeschreven bij de KvK onder nummer [KVK].*
```

---

## NL wettelijke verplichtingen — verplichte 9 velden

Volgens de Belastingdienst moet elke factuur deze 9 velden bevatten:

| # | Veld | Verplicht voor | Notitie |
|---|---|---|---|
| 1 | Volledige naam + adres jou | Altijd | Naam en handelsnaam mag in combinatie ("Emmanuel Tekle h.o.d.n. Spilwerk") |
| 2 | Volledige naam + adres klant | Altijd | Bij privépersonen mag het zonder, bij bedrijven verplicht |
| 3 | KvK-nummer (jouw) | Altijd voor zakelijke klant | |
| 4 | Btw-identificatienummer (jouw) | Altijd voor zakelijke klant | Format: NL + BSN + B01 (geen punten) |
| 5 | Btw-identificatienummer klant | Bij intra-EU diensten/levering | Niet verplicht voor NL→NL als klant geen ondernemer is |
| 6 | Factuurnummer (uniek, doorlopend) | Altijd | Geen gaten — sluit aan op vorige factuur |
| 7 | Factuurdatum | Altijd | Datum van uitschrijven, niet betaling |
| 8 | Beschrijving van goederen/diensten + aantallen | Altijd | "Consultancy" alleen niet voldoende — wel "Excel-proces → webapp · termijn 1" |
| 9 | Btw-tarief en btw-bedrag per tarief, en totaalbedrag | Altijd | Bij meerdere tarieven (21%, 9%, 0%) per tarief uitsplitsen |

## Vrijgesteld van btw of KOR — pas op

- Onder de **Kleineondernemersregeling (KOR)** ben je vrijgesteld van btw als je <€20.000 omzet/jaar verwacht. Voor jou als startend ZZP'er aantrekkelijk om eerste jaar mee te doen.
- Onder KOR vervalt veld 4 + 5 (geen btw-nummer nodig) en vermeld je: *"Btw verlegd op grond van de kleineondernemersregeling — geen btw verschuldigd."*
- **Nadeel KOR**: je kunt dan zelf ook geen btw aftrekken op zakelijke uitgaven (laptop, software, hosting). Voor IT-werk waar je ~€1.500/jaar btw-uitgaven doet weegt dat op tegen de administratieve eenvoud — dus **KOR is voor jouw eerste 1-2 jaar verstandig** mits omzet onder €20k.

> **Beslisregel:** Eerste jaar omzet richting €20k? Doe **niet** mee aan KOR (anders btw-aftrek kwijt en mogelijk over de €20k heen). Eerste jaar duidelijk onder €20k? KOR aanvragen.

KOR aanvragen via de Belastingdienst-portal: [belastingdienst.nl/kor](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/voor-wie-geldt-de-kleineondernemersregeling/kleineondernemersregeling-aanvragen)

## Factuurnummer-systeem

Eenvoudig: **JJJJ-NNN** (jaar-volgnummer, doorlopend, met 3 cijfers).

```
2026-001  (eerste factuur 2026)
2026-002
...
2026-012
2027-001  (resetten kan op 1 januari, mag ook gewoon doorlopend)
```

**Geen gaten** — als je een factuur intrekt, schrijf je een **creditfactuur** met negatief bedrag, niet "wis nummer 005". De Belastingdienst kan op gaten controleren.

## Wanneer factureren

| Situatie | Wanneer factuur |
|---|---|
| Vaste-prijs project met fasen | Bij elke fase-oplevering (zoals afgesproken in offerte) |
| Vaste-prijs eenmalig pakket (€295-€795) | Bij oplevering, of vooraf als gewenst — vooraf is gangbaar bij eerste klanten zonder relatie |
| Uurwerk-opdracht | Maandelijks achteraf, op de 1e van de volgende maand |
| Langer dan 30 dagen niet betaald | Eerste herinnering (vriendelijk) → 14 dagen later 2e herinnering (zakelijk) → 14 dagen later aanmaning + 15% incasso-toeslag |

## Herinnering bij niet-betalen — template

Eerste herinnering (verstuur 7 dagen na vervaldatum):

```
Onderwerp: Herinnering factuur 2026-001 · Spilwerk

Beste [Voornaam],

Korte herinnering: factuur 2026-001 d.d. [datum] van € [bedrag] is op
[vervaldatum] vervallen. Mogelijk ondergesneeuwd in de inbox — bijgevoegd
nog een keer.

Mocht er iets niet kloppen, bel of mail me — dan lossen we het op.

Anders graag deze week alsnog overmaken naar NL[XX] onder vermelding van
factuurnummer 2026-001.

Groet,
Emmanuel
```

Tweede herinnering (na 14+7 dagen vervaldatum):

```
Onderwerp: Tweede herinnering factuur 2026-001

Beste [Voornaam],

Eerder dit jaar stuurde ik je factuur 2026-001 (vervaldatum [datum]),
en op [datum] een eerste herinnering. Ik heb nog geen betaling
ontvangen.

Graag binnen 7 dagen overgemaakt. Daarna ben ik conform de algemene
voorwaarden genoodzaakt de wettelijke handelsrente en buitengerechtelijke
incassokosten in rekening te brengen.

Speelt er iets waar ik rekening mee moet houden? Bel me dan, dan
zoeken we een oplossing.

Groet,
Emmanuel Tekle
```

## Checklist vóór elke factuurverzending

- [ ] Factuurnummer is uniek + doorlopend (vorig nr +1)
- [ ] Datum klopt (factuurdatum, niet werkdatum)
- [ ] Vervaldatum berekend op factuurdatum + 14 dagen
- [ ] Beschrijving werk + bedrag matcht precies de offerte (niet "extra werk" zonder accordering)
- [ ] Btw 21% is doorgerekend (of KOR-tekst staat erin)
- [ ] IBAN klopt (controleer eens per kwartaal of-ie nog actueel is)
- [ ] PDF-bestand naam: `spilwerk-factuur-2026-001-totaltankstation.pdf` — niet `factuur.pdf`
- [ ] Verstuur naar de juiste persoon (vaak boekhouding@bedrijf.nl, niet de contactpersoon zelf)
- [ ] Bewaar een kopie in `boekhouding/2026/` — 7 jaar bewaarplicht

## Wat je *niet* op een factuur zet

- ❌ "Bedankt voor uw betrouwbare samenwerking!" — niet professioneel
- ❌ Logo's met partner-merken die niet met deze klus te maken hebben
- ❌ Reclame voor je andere diensten — een factuur is een factuur
- ❌ Discount-codes / kortingen — als je korting geeft is het bedrag al verlaagd
- ❌ "Bij niet tijdige betaling vervalt het recht op service" — staat in AV, niet op factuur
