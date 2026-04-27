# Spilwerk — site

Statische marketing-site. Geen build, geen npm. Open `index.html` lokaal in een browser of host de hele map op Cloudflare Pages / GitHub Pages / Netlify.

## Lokaal previewen

```bash
# Vanuit deze map:
python -m http.server 8000
# open http://localhost:8000
```

## Pagina's

- `index.html` — hero, diensten-overzicht, case-teaser, aanpak, contact CTA
- `diensten.html` — drie pakketten in detail met scope + prijs
- `werk/tankstation.html` — full case study Total Tankstation
- `contact.html` — contactformulier (mailto-fallback, geen externe form-provider)

## Ontwerp

- **Kleuren** in `assets/style.css` — `--paper`, `--ink`, `--rust`. Aanpassen op één plek werkt overal door.
- **Fonts** Google Fonts: Fraunces (display), Bricolage Grotesque (body), JetBrains Mono. Wisselen kan in `style.css`.
- **Animatie** CSS-only spil + reveal-on-scroll via IntersectionObserver. Respecteert `prefers-reduced-motion`.

## Voor je publiceert — checklist

- [ ] Domein registreren (`spilwerk.nl` of alternatief) — check beschikbaarheid
- [ ] Echte KvK-nummer + BTW-nummer in footer (overal `KvK volgt · BTW volgt` vervangen)
- [ ] Open Graph image toevoegen (1200×630) — komt in `<meta property="og:image">`
- [ ] Privacyverklaring + algemene voorwaarden — niet wettelijk verplicht voor een brochure-site, wel verstandig zodra je formulier-gegevens verwerkt
- [ ] Cookie-banner alleen nodig als je tracking toevoegt (nu niet — bewust geen Google Analytics)
- [ ] Total Tankstation om akkoord vragen voor publieke case study + idealiter een quote van 2 zinnen
