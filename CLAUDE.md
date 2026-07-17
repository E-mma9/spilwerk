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
| `site/` | Single-page website (`index.html` is de hele site behalve `werk/tankstation.html`). Statisch HTML/CSS/JS, geen build-step. |
| `leadgen/` | Python-tool voor outreach-concepten. Minder relevant voor B2C — vooral nuttig voor zelfstandige-professionals tier. |
| `marketing/` | Outreach-plan: Marktplaats, Google Business Profile, lokale Facebook-groepen, buurt-flyers. LinkedIn is **niet** primair kanaal voor B2C. |
| `business/` | Algemene voorwaarden, factuur-template, kostprijs. Discovery-script en offerte-template zijn vooral relevant voor zelfstandige-professionals tier. |

## Diensten — vijf herkenbare categorieën

Bij wijzigingen aan diensten **drie plekken synchroon houden**:

1. `site/index.html` — diensten-grid in `#diensten` sectie
2. `leadgen/prompts/outreach.md` — system prompt voor Claude
3. `business/kostprijs.md` — marge-analyse

| Dienst | Tarief | Voor wie |
|---|---|---|
| Computer-hulp (traag, virus, herinstallatie) | vanaf €60/bezoek | Particulier |
| Wifi & internet | vanaf €60/bezoek | Particulier |
| Telefoon & tablet | vanaf €60/bezoek | Particulier (vaak senioren) |
| Veilig online | vanaf €60/bezoek | Particulier + zelfstandigen |
| Voor zelfstandigen (zakelijk e-mail, boekhouding-koppeling) | vanaf €250/halve dag | ZZP / zelfstandige professional |

Plus optioneel: webapp-bouw zoals Total Tankstation (case study staat op `/werk/tankstation.html`) — niet als hoofdaanbod, wel als bewijs dat hij grotere dingen aankan.

## Tariefstructuur (uurbasis, niet pakket-prijs)

- **Bezoek aan huis in Twente (1e uur incl. voorrijden):** €60
- **Voorrijden buiten Twente** (Zwolle, Deventer, Kampen, Steenwijk, Hardenberg e.o.): +€30 — reistijd is daar te groot om gratis in te calculeren
- **Daarna per begonnen kwartier:** €15 (= €60/u)
- **Hulp op afstand:** €45/u
- **Klein klusje <30 min op afstand:** €30
- **Avond/weekend:** +25%
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

- Domein `spilwerk.nl` is **nog niet geregistreerd**.
- KvK-inschrijving wordt opgepakt; Emmanuel wil dit voor expense-aftrek + officieel kunnen factureren.
- Telefoon/WhatsApp-nummer is **06-87433537** (+31687433537) — ingevuld in `site/assets/script.js`, `site/index.html` contact-sectie, visitekaartje-SVG's en marketing-templates.
- Werkgebied: **heel Overijssel**, maar met zone-tarief — Twente (Hengelo, Enschede, Almelo, Borne, Oldenzaal, Haaksbergen) incl. voorrijden, de rest van Overijssel (Zwolle, Deventer, Kampen, Steenwijk, etc.) +€30 voorrijkosten. Zonder die zone-splitsing kost een bezoek in Kampen of Zwolle meer reistijd dan er in het uurtarief zit.
- Total Tankstation case study staat live als `werk/tankstation.html` — gebruik 'm voor zelfstandige-professionals doelgroep, niet als hoofdverhaal voor particulieren.
- Emmanuel is 21, 3e jaar HBO ICT (Cloud & Cybersecurity, Saxion), parttime helpdesk-engineer bij Livio. Eerlijk over student-status op site — geen schande, juist credibility-boost.

## Werkwijze in deze repo

- Bij site-wijzigingen: lokaal openen via `Start-Process site\index.html` (geen Python lokaal beschikbaar).
- Bij CSS-wijzigingen: alle kleuren/typografie via `:root` custom properties in `site/assets/style.css`.
- Geen build-step, geen npm. Bewust simpel gehouden.

## Wat NIET doen zonder vraag

- Geen pakketten / diensten toevoegen die hij niet expliciet kan leveren (eerder fout: NIS2, M365-migraties, AI-werksessie, koppelingen — allemaal te ambitieus voor zijn niveau)
- Geen B2B / enterprise-koers voorstellen (dat pad is bewust losgelaten)
- Geen logo / branding-assets genereren (groen rondje + naam is genoeg)
- Geen tracking/analytics toevoegen (bewust geen Google Analytics)
- Geen npm/build-tooling toevoegen aan `site/`
- Geen automatische LinkedIn / e-mail verzending bouwen — TOS-risico

## Geleerde lessen uit eerdere overshoot

Eerder werd Spilwerk gepositioneerd als 8-9 pakketten MKB-consultant (incl. NIS2-readiness). Te ambitieus voor 3e-jaars HBO. Pivot naar B2C IT-hulp aan huis is bewust kleiner, haalbaarder, sneller eerste klant. **Niet terug pivoten zonder expliciete vraag.**
