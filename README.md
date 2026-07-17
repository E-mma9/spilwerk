# Spilwerk

> *Vriendelijke IT-hulp aan huis voor heel Overijssel.*

Dit is de werkmap voor **Spilwerk**, de handelsnaam waaronder Emmanuel Tekle als ZZP'er laagdrempelige IT-hulp levert aan particulieren en zelfstandige professionals in heel Overijssel.

```
spilwerk/
├── site/         # Statische marketing-site (HTML/CSS/JS, geen build-step)
├── leadgen/      # Python-tool die per lead een persoonlijk concept-mail schrijft
├── marketing/    # 30-dagen-plan, kanalen, LinkedIn-posts en outreach-templates
├── business/     # Sales-to-payment cyclus: discovery, offerte, AV, factuur, kostprijs
├── offertes/     # Per-klant offertes (uit git, blijft lokaal)
├── boekhouding/  # Verstuurde facturen + bewijsstukken (uit git, blijft lokaal)
└── CLAUDE.md     # Project-context voor Claude Code-sessies
```

## Waarom Spilwerk en niet emmanueltekle.nl?

`emmanueltekle.nl` is je portfolio — het laat zien wie je bent als techneut. **Spilwerk** is je *bedrijf* — een ding dat klanten kunnen huren, factureren, en aanbevelen. Twee verschillende lezers, twee sites. De portfolio mag rommelig en persoonlijk zijn ("kijk wat ik heb gemaakt"); een bedrijfssite moet één duidelijke vraag beantwoorden: "wat koop ik, voor hoeveel, en waarom werkt dat."

## De brand

- **Naam** Spilwerk — "spil" = pivot/as, "werk" = werk/handwerk. De spil is wat alles bij elkaar houdt; weghalen ervan en het apparaat valt uiteen. Past bij positionering: "wij zijn de spil onder jouw IT."
- **Toon** Direct Nederlands MKB. Geen tech-bro. Geen marketing-spraak.
- **Visueel** Editorial-industrial. Warm paper-kleur, oxide-rood accent, Fraunces serif-display, Bricolage Grotesque body. Genummerde secties (01–04). Een traag draaiend mechanisch spil-element op de homepage.
- **Domein-suggestie** `spilwerk.nl` (€8/jaar bij TransIP / Mijndomein). Check beschikbaarheid voor je naar drukker gaat.

## Site deployen (3 opties — kies één)

De site is statische HTML+CSS+JS. Geen build, geen npm install, geen framework. Alle drie deze opties zijn gratis tot ~€8/jaar.

### Optie A — Cloudflare Pages (mijn aanbeveling)
1. Push deze map als git-repo naar GitHub.
2. Op `dash.cloudflare.com` → Pages → Connect to Git → kies repo, root = `site/`.
3. Voeg domein `spilwerk.nl` toe in Cloudflare DNS (gratis SSL, gratis CDN).
4. Deploy is automatisch bij elke git-push.

### Optie B — GitHub Pages
1. Push deze map als git-repo. Settings → Pages → branch `main`, folder `/site`.
2. CNAME-record `spilwerk.nl` → `<username>.github.io` bij je domeinregistrar.
3. Werkt, maar trager dan Cloudflare en geen edge-cache.

### Optie C — Netlify drag-and-drop
1. Open `app.netlify.com`, sleep de `site/` map naar de upload-zone.
2. Domein toevoegen in Netlify, DNS bij registrar.

**Voor alle opties:** `site/` is zelfstandig — alle paden zijn relatief, geen externe build nodig.

## Leadgen — eerste echte klanten

Lees `leadgen/README.md`. Workflow:

1. Vul `leadgen/seed_leads.csv` met 20–30 MKB-bedrijven uit jouw regio.
2. Run `python leadgen.py` — krijgt per bedrijf een fit-score + concept-mail.
3. **Jij** kiest 5–10, past aan, stuurt handmatig.

Het script gebruikt Claude Sonnet 4.6 met prompt caching → een lead kost <€0.02 in API-credits.

## Volgende stappen — lees deze

In volgorde van prioriteit:

1. **Domein registreren** — `spilwerk.nl`. €8/jaar. Doe dit *vandaag*, voor iemand anders het pakt.
2. **Site online zetten** — kies optie A hierboven. 30 minuten werk.
3. ~~**Telefoon- / WhatsApp-nummer instellen**~~ — ✅ gedaan: 06-87433537 staat in `site/assets/script.js` en de contact-sectie.
4. **Marketing-plan lezen** in [`marketing/README.md`](./marketing/README.md) en het 30-dagen-plan volgen. Eerst klant binnen 30–60 dagen is realistisch.
5. ~~**LinkedIn-profiel updaten**~~ — ⏸️ geparkeerd: Emmanuel doet LinkedIn bewust nog niet. Templates staan klaar in [`marketing/linkedin.md`](./marketing/linkedin.md) voor later.
6. **Claude Code instellingen** doorlopen in [`marketing/claude-settings.md`](./marketing/claude-settings.md) — vooral `/fewer-permission-prompts` direct draaien.
7. **KvK-inschrijving** — pas wanneer je een eerste betalende klant in zicht hebt. Niet eerder (verbrandt anders je startersaftrek-jaren).
8. **Leadgen draaien** — eerste 10 leads, 1 uur tijd, kies de 5 beste, stuur deze week persoonlijk een mail.
9. **DevSecOps-projecten afmaken** (jouw eigen TODO) — daarna kunnen die ook als case study erbij.

## Wat dit *niet* is

- Geen vervanging voor `emmanueltekle.nl`. Houd die. Twee sites, twee doelen.
- Geen ZZP-juridisch advies. Praat met een MKB-accountant voor btw-status (KOR ja/nee), AOV, beroepsaansprakelijkheid.
- Geen garantie op klanten. Outreach werkt op herhaling: 50 mailtjes → 2–5 gesprekken → 1 klant. Niet leuker te maken, wel realistisch.

---

© 2026 Emmanuel Tekle. Spilwerk is een handelsnaam in voorbereiding.
