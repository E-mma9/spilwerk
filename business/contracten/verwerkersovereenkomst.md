# Verwerkersovereenkomst (AVG)

Volgens de AVG (artikel 28) **verplicht** wanneer je persoonsgegevens verwerkt namens een klant. Voor Spilwerk: telkens als je in een mailbox kijkt, bestanden van personeel overzet, een klantenadministratie beheert, of toegang hebt tot personeelsgegevens.

> ⚠️ Dit is een werkbare starter-template gebaseerd op de model-AP en gangbare ZZP-praktijk. **Voor zorginstellingen, overheid, of klanten die zelf onder NIS2/NEN 7510 vallen**: laat 'm één keer doorlezen door een MKB-jurist of privacy-officer.

## Wanneer is dit nodig?

| Situatie | Verwerkersovereenkomst nodig? |
|---|---|
| Iemand's privé-laptop opschonen | ❌ Nee — particulier, geen verwerkersrelatie |
| Wifi instellen bij iemand thuis | ❌ Nee |
| M365-tenant van een 5-mwk-bedrijf opzetten + admin-toegang | ✅ Ja |
| Mailbox-migratie voor zelfstandige | ✅ Ja |
| NAS / gedeelde mappen voor bedrijf inrichten waar personeelsgegevens op staan | ✅ Ja |
| Klantadministratie / CRM van een bedrijf migreren | ✅ Ja |
| Backup van bedrijfsgegevens met klantdata erop | ✅ Ja |

**Vuistregel**: zodra jij toegang krijgt tot een systeem waar gegevens van *anderen dan jouw klant* op staan (klanten van je klant, personeel van je klant), heb je een verwerkersovereenkomst nodig.

---

## Template

```markdown
---

# Verwerkersovereenkomst Spilwerk · [Klantnaam]

**De Verwerkingsverantwoordelijke** ("Klant"):
[Klant bedrijfsnaam], gevestigd te [adres], KvK [nummer]

**De Verwerker**:
Spilwerk (handelsnaam Emmanuel Tekle), gevestigd te [adres], KvK [nummer]

— hierna gezamenlijk "Partijen"

Komen het volgende overeen ter aanvulling op de onderliggende dienstverlenings- of onderhoudsovereenkomst:

## 1. Definities en grondslag

Deze verwerkersovereenkomst is opgesteld op grond van artikel 28 AVG. Begrippen "persoonsgegevens", "verwerking", "betrokkene" en "datalek" hebben de betekenis zoals gedefinieerd in de AVG.

## 2. Object en omvang van de verwerking

**Doel van de verwerking**: het uitvoeren van de IT-werkzaamheden zoals overeengekomen in de onderliggende overeenkomst d.d. [datum].

**Categorieën persoonsgegevens** die Spilwerk kan verwerken:
- Naam, e-mailadres, telefoonnummer van Klant's medewerkers
- Naam, e-mailadres, telefoonnummer van Klant's eindklanten (indien aanwezig in de te beheren systemen)
- Inloggegevens (gehasht of versleuteld waar mogelijk)
- IP-adressen, login-tijden, en andere technische metadata

**Categorieën betrokkenen**:
- Medewerkers van Klant
- Eindklanten van Klant (indien van toepassing)

**Geen bijzondere categorieën persoonsgegevens** (gezondheid, religie, politieke overtuigingen, BSN) tenzij expliciet anders schriftelijk overeengekomen.

## 3. Instructies van Klant

Spilwerk verwerkt persoonsgegevens uitsluitend op basis van schriftelijke instructies van Klant, behalve wanneer een wettelijke verplichting hem hier anders toe verplicht. In dat laatste geval informeert Spilwerk Klant vooraf, tenzij dit wettelijk niet is toegestaan.

## 4. Beveiligingsmaatregelen

Spilwerk treft passende technische en organisatorische maatregelen om de persoonsgegevens te beschermen, waaronder:

- Versleutelde opslag van credentials in een wachtwoordmanager (1Password)
- Tweestapsverificatie op alle eigen accounts die toegang hebben tot Klant-systemen
- Volledig versleutelde harde schijven op alle eigen apparaten
- Toegang tot Klant-systemen alleen via beveiligde verbindingen (TLS, VPN waar van toepassing)
- Logging van toegang
- Direct intrekken van eigen toegang na afronding werkzaamheden

## 5. Subverwerkers

Spilwerk maakt gebruik van de volgende subverwerkers:

- **Cloud-opslag** (alleen indien vereist voor backup of overdracht, met expliciete toestemming Klant): Google Workspace, Hetzner, Microsoft 365
- **Boekhouding**: Moneybird (alleen NAW-gegevens van Klant zelf, geen eindklant-gegevens)
- **E-mailcommunicatie**: Google Workspace

Spilwerk meldt iedere wijziging in subverwerkers minimaal 30 dagen vooraf. Klant heeft recht op bezwaar.

## 6. Datalek-meldplicht

Bij vermoeden of constatering van een datalek meldt Spilwerk dit **binnen 24 uur** aan Klant per e-mail of telefoon, met daarin:

- Aard van het lek
- Categorieën en aantallen betrokkenen
- Categorieën en aantallen persoonsgegevens
- Mogelijke gevolgen
- Genomen of voorgestelde maatregelen

Klant blijft verantwoordelijk voor de eventuele melding bij de Autoriteit Persoonsgegevens en/of betrokkenen.

## 7. Rechten van betrokkenen

Spilwerk werkt mee aan verzoeken van betrokkenen (inzage, correctie, verwijdering) door, op verzoek van Klant, technische ondersteuning te leveren bij het uitvoeren ervan. Direct contact tussen betrokkenen en Spilwerk vindt niet plaats — Klant blijft het aanspreekpunt.

## 8. Audit-recht

Klant heeft het recht om Spilwerk's beveiligingsmaatregelen jaarlijks te controleren, in onderling overleg en met redelijke aankondiging (minimaal 4 weken). Een audit-rapport van een onafhankelijke partij geldt als equivalent.

## 9. Geheimhouding

Spilwerk en personen onder zijn supervisie zijn verplicht tot geheimhouding van alle persoonsgegevens. Deze plicht geldt onverminderd na beëindiging van deze overeenkomst.

## 10. Retentie en teruggave

Bij beëindiging van de onderliggende overeenkomst:

- Spilwerk geeft alle persoonsgegevens aan Klant terug, of vernietigt ze (op verzoek van Klant)
- Spilwerk verstrekt op verzoek een **schriftelijke verklaring van vernietiging**
- Toegang tot Klant-systemen wordt direct ingetrokken

## 11. Aansprakelijkheid

Voor de aansprakelijkheid op grond van deze verwerkersovereenkomst gelden de bepalingen van de algemene voorwaarden van Spilwerk en de onderliggende overeenkomst. Eventuele AVG-boetes of vorderingen van betrokkenen worden gedragen volgens artikel 82 AVG.

## 12. Toepasselijk recht

Nederlands recht. Geschillen worden eerst in onderling overleg opgelost.

---

**Aldus overeengekomen te [plaats], op [datum].**

| Voor [Klant bedrijfsnaam] (Verwerkingsverantwoordelijke) | Voor Spilwerk (Verwerker) |
|---|---|
| Naam: __________________ | Naam: Emmanuel Tekle |
| Datum: _________________ | Datum: _________________ |
| Handtekening: __________ | Handtekening: __________ |
```

---

## Hoe je 'm gebruikt in praktijk

1. **Standaard meesturen** met de dienstverlenings- of onderhoudsovereenkomst voor B2B-klanten (zelfs als je twijfelt of-ie nodig is — kleine moeite)
2. **Niet meesturen** voor pure particulier-klusjes
3. **Apart bewaren in `klanten/[naam]/`** — gescheiden van de hoofdovereenkomst zodat je 'm los kan terugvinden bij audit

## Wat dit voorkomt

- Boetes van Autoriteit Persoonsgegevens (theoretisch tot 4% wereldomzet, in praktijk voor jouw schaal hooguit waarschuwing)
- **Vooral**: vragen van klant ("hebben we wel goede AVG-papieren met onze IT'er?") direct beantwoord met "ja, hier"
- Vertrouwen bij grotere zelfstandige professionals (advocaten, accountants — die werken zelf met privacy-gevoelige info)
