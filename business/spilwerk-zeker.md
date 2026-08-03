# Spilwerk Zeker — maandabonnement voor zelfstandigen

> Terugkerend inkomen uit gepland werk. Ontworpen om te overleven naast een stage van 40 uur per week.

## Het idee in één alinea

Een MSP verdient zijn geld met **beschikbaarheid**: klant belt dinsdag 10:15, jij lost het op. Dat is precies wat Emmanuel vanaf september niet heeft. Spilwerk Zeker verkoopt daarom alles behálve beschikbaarheid — **preventie en gepland onderhoud**, uitgevoerd op eigen moment ('s avonds, in het weekend), waarvan de klant alleen het resultaat merkt.

Dat sluit ook beter aan bij wat zelfstandigen echt bezighoudt. Niet "mijn scherm doet raar", maar *"ik heb geen idee of mijn administratie ergens veilig staat."*

---

## Het aanbod

### Zeker Basis — €45 per maand

Voor de eenpitter: één werkplek, één telefoon.

| Wat de klant krijgt | Tijd per maand |
|---|---:|
| Back-up van administratie en werkbestanden — ingericht én bewaakt | 10 min |
| Maandelijkse controle: draaide de back-up écht, updates bij, schijf niet vol | 10 min |
| **Elk kwartaal een herstel-test**: één bestand wordt echt teruggehaald | 20 min p/kwartaal |
| Kwartaalcheck op afstand: opschonen, beveiliging nalopen, wachtwoorden | 30 min p/kwartaal |
| Voorrang bij storing · **reactie binnen 1 werkdag** | variabel |
| 30 minuten hulp op afstand inbegrepen | 0–30 min |
| Daarbuiten €38/uur op afstand i.p.v. €45 | |

**Realistisch: 30 tot 60 minuten per klant per maand.**

### Zeker Plus — €85 per maand

Voor een kleine praktijk of een zelfstandige met personeel: tot 3 werkplekken, 1,5 uur op afstand inbegrepen, plus een kort kwartaalrapport op één A4 (wat is er gebeurd, wat komt eraan, waar zit risico).

**Extra werkplek boven de bundel:** €15 per maand.

Wie structureel meer nodig heeft, gaat niet naar een hogere trede maar naar een **onderhoudsovereenkomst op maat** — zie `contracten/onderhoudsovereenkomst.md` (€160 voor 4 u/mnd, €300 voor 8 u/mnd).

---

## Wat er expliciet **niet** in zit

Dit vastleggen is belangrijker dan wat er wél in zit. Iedere onuitgesproken verwachting wordt later een conflict.

- Geen 24/7, geen oncall, **geen reactie binnen enkele uren**
- Geen werk op locatie — bezoek gaat tegen normaal tarief (€60 Twente, +€30 daarbuiten)
- Geen hardware, geen licenties, geen abonnementen van derden (Microsoft 365, Backblaze etc. betaalt de klant zelf en op eigen naam)
- Geen dataherstel van al kapotte schijven
- Geen websites, webshops of e-mailmarketing
- Geen nieuwe systemen implementeren — dat is een apart project

## De reactietijd is de kern van het ontwerp

**"Reactie binnen 1 werkdag"** is haalbaar vanuit een stageplek: een lunchpauze is genoeg om te bellen en in te plannen. *Reactie* betekent contact en een afspraak, niet dat het probleem dan al opgelost is.

**"Binnen 4 uur"** of "altijd bereikbaar" is niet haalbaar. Eén keer niet waarmaken kost de klant én de reputatie, in een regio waar zelfstandigen elkaar kennen. Nooit beloven.

Wat je er tegenover zet als onderscheid: **het bezoek zelf kan 's avonds of in het weekend**, zonder toeslag. Dat kunnen de computerwinkels in het centrum juist níét.

---

## Wat het oplevert

| Klanten | Recurring per maand | Uren per maand |
|---:|---:|---:|
| 5 × Basis | €225 | 3–5 |
| 10 × Basis | €450 | 6–10 |
| 10 × Basis + 3 × Plus | €705 | 11–16 |
| 15 × Basis + 5 × Plus | €1.100 | 18–25 |

Tien klanten is **meer dan de stagevergoeding van €400**, voor grofweg 6 tot 10 uur werk per maand.

**Plafond tijdens de stage: ongeveer 20 klanten.** Daarboven wordt het onderhoud zelf een baan en hou je geen tijd over voor losse klussen — die per uur veel meer opleveren.

### Marge

Directe kosten per klant: €0–2 per maand (alleen monitoring, zie hieronder). De inkoop is dus verwaarloosbaar; wat je verkoopt is aandacht. Bij €45 voor 45 minuten zit je effectief op **€60/uur** — gelijk aan je bezoektarief, maar zonder reistijd en met vooraf gefactureerd geld.

Dat laatste is de echte winst: **voorspelbare cashflow**. Een maand zonder klussen is nu een maand zonder inkomen; met tien abonnees is het een maand met €450.

---

## Technisch: wat je nodig hebt voor de eerste vijf klanten

**Begin zonder RMM.** Tot ongeveer vijftien klanten kun je alles handmatig controleren, en dat is sneller opgezet én veiliger.

> ⚠️ Zodra jouw server permanente toegang heeft tot klantmachines, is een inbraak bij jou een inbraak bij al je klanten tegelijk. Een self-hosted RMM op het Proxmox-cluster is technisch aantrekkelijk en past bij de studierichting, maar het is een beheerlast en een aanvalsoppervlak dat je bij vijf klanten niet nodig hebt. Automatiseren pas vanaf klant vijftien, en dan met MFA, netwerkscheiding en een hersteltest van de RMM zelf.

| Onderdeel | Keuze | Kosten |
|---|---|---:|
| **Back-up** | Wat de klant al heeft (Microsoft 365 / Google Drive) + één externe schijf met geplande taak. Voor wie niets heeft: Backblaze Personal, op naam van de klant | €0 voor jou |
| **Bewaking** | [healthchecks.io](https://healthchecks.io) — de back-uptaak pingt na afloop een URL. Blijft de ping uit, dan krijg jij een mail. Gratis tot 20 checks | €0 |
| **Hulp op afstand** | Eén tool, consequent. Sessie mét toestemming van de klant, geen permanente toegang | €0–15 |
| **Wachtwoorden** | 1Password (staat al in `kostprijs.md`) — nooit klantwachtwoorden in een tekstbestand | al betaald |
| **Administratie** | Moneybird: abonnement als terugkerende factuur, automatisch de 1e van de maand | al betaald |

Die healthchecks-opzet is het hart ervan: **je weet dat een back-up gefaald heeft voordat de klant het weet.** Dat is precies waar hij €45 per maand voor betaalt, en het kost jou niets.

---

## Vooraf regelen

Zodra je verantwoordelijkheid neemt voor iemands gegevens verandert je risicoprofiel. Twee dingen zijn dan geen bijzaak meer:

1. **KvK-inschrijving** — voorwaarde, niet optioneel
2. **Beroepsaansprakelijkheidsverzekering** — ~€35/maand, staat al in `kostprijs.md`. Faalt een back-up die jij beheerde, dan is dat het verschil tussen een vervelend gesprek en een echt probleem

Verder bij elke abonnee tekenen: **onderhoudsovereenkomst** en, als je bij mailboxen of klantadministratie kunt, de **verwerkersovereenkomst** (beide in `contracten/`).

---

## Hoe je de eerste vijf verkoopt

Niet met advertenties. Aan klanten die je al bezocht hebt, aan het eind van een klus:

> *"Ik heb nu je back-up ingericht. Wil je dat ik elke maand even controleer of hij ook echt draait? Dat kost €45 per maand en dan heb je er verder geen omkijken naar."*

Dat is het hele verkoopgesprek. Iemand die je net heeft zien werken zegt veel vaker ja dan iemand die een advertentie ziet.

**Timing:** bied het aan na de eerste klus waarbij je iets hebt ingericht wat onderhoud verdient — een back-up, een NAS, zakelijke e-mail. Niet bij een eenmalige reparatie; dan klinkt het als een verkooptruc.

### Tegenwerpingen

| Wat ze zeggen | Wat je antwoordt |
|---|---|
| *"Ik heb toch al een back-up?"* | "Klopt. Weet je ook zeker dat-ie deze maand gedraaid heeft? Dat is waar ik voor betaald word — niet voor het instellen, voor het controleren." |
| *"€45 per maand is veel voor niks doen"* | "Als er niks gebeurt, heb je gelijk. Eén keer je administratie kwijtraken kost je meer dan drie jaar abonnement." |
| *"Kan ik je gewoon bellen als er iets is?"* | "Zeker, dat kan altijd. Dan betaal je per keer en sta je achter in de rij. Met het abonnement sta je vooraan en heb je een half uur inbegrepen." |
| *"Ik zit eraan vast"* | "Nee — één maand opzegtermijn, geen minimumperiode. Stop wanneer je wilt." |

---

## Wat het níét moet worden

Dit is bewust **geen** terugkeer naar de MKB-consultant-koers met acht pakketten. Het is één product, verkocht aan mensen die je al kent, dat draait op werk dat je nu al doet. Zodra er woorden als "SLA-niveau brons/zilver/goud", "roadmap" of "IT-strategie" opduiken, is het de verkeerde kant op gegaan.

## Maandelijkse routine (blokkeer één avond)

1. Healthchecks-dashboard openen — alles groen?
2. Per klant: schijfruimte, updates, rare meldingen
3. Elk kwartaal: bij één klant een bestand echt terugzetten
4. Moneybird: facturen zijn al verstuurd, alleen controleren of ze betaald zijn
5. Iets gezien dat aandacht vraagt? Kort appje. **Zichtbaar zijn is het halve product** — een klant die nooit iets hoort, vraagt zich na drie maanden af waar hij voor betaalt
