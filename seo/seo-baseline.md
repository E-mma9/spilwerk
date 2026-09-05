# Spilwerk.nl — Local SEO Baseline

**Datum:** 2 september 2026  
**Uitgevoerd door:** Hermes Agent (geautomatiseerd onderzoek)  
**Werkgebied:** Overijssel / Twente — focus Enschede, Hengelo, Almelo, Borne, Oldenzaal  
**Eigenaar:** Emmanuel — Spilwerk IT-hulp aan huis

---

## 1. Samenvatting bevindingen

**Spilwerk.nl staat technisch verrassend goed — maar is organisch nog onzichtbaar op de belangrijkste lokale zoektermen.**

| Zoekterm | Waargenomen positie Spilwerk.nl | Observatie |
|---|---|---|
| `computerhulp Enschede` | **niet in top 10** (verdrongen) | Gedomineerd door landelijke franchisenetwerken + gevestigde Twentse spelers |
| `computerhulp Hengelo` | **niet in top 10** | Top gaat naar De Computerman Twente (sterke lokale autoriteit sinds 2017) |
| `wifi hulp Twente` | **geen match** | Zoekterm is te generiek; Google toont Wikipedia/UTwente. Kans voor long-tail: `wifi hulp aan huis Twente` / `wifi traag Enschede` |
| `IT hulp aan huis Overijssel` | **positie 8 (pagina 1)** | ✅ Enige term waar Spilwerk direct scoort. Titel/description matchen exact met zoekintentie |

**Conclusie:** Long-tail/exacte provincie-term werkt. De grote volumetermen *computerhulp + stad* worden nu nog gewonnen door partijen met meer content, reviews en historie. Dat is in te halen — Spilwerk heeft de juiste structured data en site-techniek al staan.

### Technische healthcheck Spilwerk.nl (2 sept 2026)

- ✅ `LocalBusiness` schema.org aanwezig met `areaServed` voor 10 plaatsen + provincie
- ✅ `hasOfferCatalog` met prijzen (€60/u) — helpt Google begrijpen wat je doet
- ✅ `google-site-verification` aanwezig → Search Console gekoppeld
- ✅ Canonical, og:tags, meta description city-targeted: *"Computerhulp aan huis in Enschede, Hengelo, Almelo..."*
- ✅ Prijzenpagina helder (€60 Twente incl. voorrijden, €30 toeslag daarbuiten, €45 remote)
- ⚠️ `telephone` in schema is gemaskeerd (`+316****3537`) — moet volledig (06-87433537) voor NAP consistentie
- ⚠️ `address` alleen Enschede (geen straat/huisnummer/postcode) — Google Bedrijfsprofiel kan dit niet verifiëren zonder fysiek adres
- ⚠️ Geen `geo` coördinaten in schema (concurrent PC2Fix heeft dit wel)
- ⚠️ Geen `aggregateRating` / `review` in schema (concurrenten tonen 5.0 sterren)
- ⚠️ Homepage is statisch met 3 pagina's (diensten/prijzen/over). Geen blog/kennisbank → geen long-tail content om op te ranken

---

## 2. Concurrentenlijst (8 geselecteerd)

| # | Naam | Website | Type | Sterkte | Zwakte / kans voor Spilwerk |
|---|---|---|---|---|---|
| 1 | **De Computerman Twente** | https://www.computermantwente.nl | Lokaal Twente, sinds 2017 | Gratis onderzoek, sterke content per stad/dienst (hulp-hengelo, laptop-pc-wifi), Yoast schema, lokaal begrip | Tarieven ondoorzichtig, geen vaste prijs, geen remote hulp prominent |
| 2 | **Computer Hulp Twente** (Bredero-IT) | https://www.computerhulptwente.com | Lokaal, 15 jaar actief | Veel domeinnamen/legacy SEO, aan-huis focus | Verouderde site, geen prijzen, geen moderne UX — straalt minder vertrouwen uit |
| 3 | **PC2Fix Hengelo** | https://pc2fix.nl | Hyperlokaal Hengelo, Zaagstraat 15 | **5,0 sterren Google**, vaste prijs vooraf, `LocalBusiness` + `ElectronicsRepair` + `geo`, no cure no pay, modern design | Alleen Hengelo-gericht — laat ruimte voor Enschede/Almelo/Borne |
| 4 | **PC Service Enschede** | https://www.pcserviceenschede.nl | Lokaal Enschede | Al jaren indexed, keywords: reparatie/hosting | Verouderde XHTML-site, geen structured data, geen reviews |
| 5 | **Computer Repair Twente** | https://www.computerrepairtwente.nl | Lokaal Twente | Moderne propositie: *"vooraf advies + prijsopgave"* | Relatief nieuw, weinig reviews, dunne content |
| 6 | **Student Aan Huis** | https://www.studentaanhuis.nl/werkgebied/computerhulp-enschede | **Landelijk netwerk** (franchise studenten) | Hoge domein-autoriteit, landelijke dekking, veel content | Onpersoonlijk (wisselende student), geen vaste lokale eigenaar, duurder per uur |
| 7 | **Uw Computerstudent** | https://uwcomputerstudent.nl/regio/enschede/ | Landelijk netwerk | Sterke SEO (regio-pagina's), WhatsApp-contact, blog | Zelfde franchisenadeel, minder lokaal vertrouwen |
| 8 | **Hulpstation.nl** | https://www.hulpstation.nl/computerhulp-regios/enschede/ | Landelijk platform | 7 dagen/week, goedkoop-angle, landelijke schaal | Callcenter-gevoel, geen echte Twentse binding |

> **Buiten top 8 maar relevant:** Bouwman ICT-Web (computerhulp-enschede), Fiksi.nl (student-aan-huis Enschede), Jip Harbers — computerhulp.jipharbers.nl (eenpitter, low-content).

### Wat concurrenten beter doen (en jij kunt kopiëren)

- **Reviews prominent:** PC2Fix / Computerman tonen Google sterren in SERP via `aggregateRating`
- **Stad-specifieke landingspagina's:** `/computerhulp-hengelo-snelle-hulp-bij-laptop-pc-en-wifi/` scoort direct op H2 met stad
- **Vaste prijs + no cure no pay is standaard belofte** — Spilwerk heeft dit al (€0 als het niet lukt), maar concurrenten zetten het hoger op de pagina
- **Chat/widget:** PC2Fix heeft chatbot/widget — verlaagt drempel

---

## 3. Quick Wins voor Spilwerk.nl (prioriteit hoog → laag)

### A. Google Bedrijfsprofiel (GBP) — grootste hefboom voor Local Pack

GBP is **belangrijker dan je website** voor *computerhulp Enschede / nabij mij* zoekopdrachten (de 3-pack kaart). Zonder goed GBP kom je niet in de kaart.

1. **Claim & verifieer GBP** op `business.google.com` met exact NAP:
   - Naam: `Spilwerk — IT-hulp aan huis`
   - Adres: kies **servicegebied-bedrijf** (je komt aan huis, dus verberg adres maar definieer servicegebied: Enschede, Hengelo, Almelo, Borne, Oldenzaal, Haaksbergen, Zwolle, Deventer)
   - Telefoon: `06-87433537` — identiek aan website + schema
   - Categorieën: primair `Computerreparatieservice`, secundair `Computerondersteuning en -service`, `Wifi-installatiebedrijf`, `IT-service`
2. **Voeg schema `telephone` volledig in** (nu `+316****3537` → vervang door `+31687433537`)
3. **Voeg `geo` + volledige `PostalAddress`** toe (postcode + stad), ook als je adres verborgen is
4. **Vraag 10 reviews in 4 weken** — stuur na elk bezoek directe link: *"Ben je blij? Een Google review helpt enorm"* — doel 4.9+ met 15+ reviews om PC2Fix te verslaan
5. **Wekelijkse GBP-post:** tip van de week (bv. *"Wifi traag na vakantie? 3 checks"*) + foto aan de keukentafel bij klant (toestemming)
6. **Foto's:** upload 15+ foto's: jij aan het werk, voor/na, auto/servicegebied kaart, kvk, werkplek
7. **Q&A vullen:** stel zelf vragen: *"Komen jullie ook in Borne?" → "Ja, zonder voorrijkosten in heel Twente"*
8. **Openingstijden:** verruim naar `ma-za 09:00-20:00` als je avond/weekend doet (zelfde tarief! — dat is USP)

### B. On-page & content — van 3 naar 15 indexeerbare pagina's

9. **Maak stad-pagina's** (zelfde template, unieke tekst 400-600w):
   - `/computerhulp-enschede/` `/computerhulp-hengelo/` `/computerhulp-almelo/` `/computerhulp-borne/` `/wifi-hulp-twente/`
   - Elke pagina: H1 `Computerhulp Enschede — aan huis vanaf €60`, 3 USP's, prijzen, 2 reviews, FAQ, interne link naar contact
10. **Maak dienst-pagina's:**
    - `/diensten/wifi-hulp/` `/diensten/trage-computer/` `/diensten/backup/` `/diensten/telefoon-tablet/` `/diensten/veilig-online/`
11. **Blog/kennisbank — 2 artikelen per maand** (long-tail SEO):
    - *"Wifi traag in Hengelo? Dit kun je zelf checken (en wanneer je hulp nodig hebt)"*
    - *"Nieuwe laptop instellen Enschede: wat kost het en wat doen we precies?"*
    - *"Backup maken Windows 11: 3-2-1 regel simpel uitgelegd"*
    - *"Phishing herkennen: 5 voorbeelden uit Overijssel"*
12. **FAQ schema toevoegen** per pagina (bv. *werkt het niet = geen kosten?*, *voorrijkosten buiten Twente?*) — geeft FAQ rich result in Google
13. **Interne linking:** elke stad-pagina linkt naar relevante dienst-pagina en omgekeerd
14. **Title/Meta finetunen:** nu goed, maar test variant: `Computerhulp Enschede aan huis — vandaag nog langs? Spilwerk €60/u` (CTR hoger met prijs + urgentie)

### C. Technisch & conversie

15. **Fix telephone in JSON-LD** + voeg `geo` + `aggregateRating` toe zodra je 5 reviews hebt
16. **WhatsApp-knop sticky** (rechtsonder) — concurrenten Uw Computerstudent doet dit en converteert beter
17. **Call tracking:** meet telefoontjes via `tel:` kliks in Plausible/GA4
18. **Sitemap + Search Console:** dien `sitemap.xml` in, check wekelijks *Prestaties → zoekopdrachten* (zie weekly check)
19. **Marktplaats koppeling vermelden?** Je Marktplaats-advertentie (€55 eerste uur) rankt #1 op *Spilwerk IT hulp* — overweeg prijs te harmoniseren (€55 vs €60) om verwarring te voorkomen
20. **Backlinks lokaal:** vraag vermelding bij: Ondernemersvereniging Enschede, Hengelo Promotie, lokale Facebook groepen *"Enschede vraagt / Hengelo geeft"*

---

## 4. Volgende stap — meetbaar maken

- Dit rapport is de **nulmeting (baseline) 2 sept 2026**.
- Draai wekelijks `/root/spilwerk/seo/weekly-seo-check.sh` (zie `cron-instructie.md`).
- Streefdoelen 90 dagen:
  - [ ] 15+ Google reviews 4.9+
  - [ ] 5 stad-pagina's live
  - [ ] Top 5 op `computerhulp Enschede` en `computerhulp Hengelo` (nu onzichtbaar)
  - [ ] Top 3 op `IT hulp aan huis Overijssel` (nu #8)
  - [ ] 2 blogartikelen live

---

*Bronnen: web_search op 2 sept 2026 (4 kerntermen + 6 concurrent-queries), curl inspectie spilwerk.nl + 3 concurrent-sites, schema analyse.*
