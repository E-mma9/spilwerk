# Visitekaartje — bestellen in 4 stappen

## 1. Telefoonnummer invullen (1 min)

Open `voorzijde.svg` en `achterzijde.svg` in een tekst-editor (Notepad / VS Code). Zoek `XX XX XX XX` en vervang met je echt 06-nummer.

## 2. Preview bekijken (30 sec)

Open `preview.html` in je browser. Beide kanten staan op werkelijke grootte naast elkaar. Klopt alles? Door naar stap 3.

## 3. Uploaden bij drukker (5 min)

Twee opties — beide werken met SVG of PDF:

### Optie A — Drukwerkdeal (aanbevolen, NL, snel)
- Ga naar [drukwerkdeal.nl/visitekaartjes](https://www.drukwerkdeal.nl/nl/visitekaartjes/visitekaartjes-standaard)
- Kies: **Standaard 85×55mm** · **dubbelzijdig** · **350 gr** · **mat-laminaat**
- Aantal: **250 stuks** (~€25, levering 2-4 dagen)
- Upload `voorzijde.svg` en `achterzijde.svg`

### Optie B — Vistaprint (goedkoper, maar 5-7 dagen)
- Ga naar [vistaprint.nl/visitekaartjes](https://www.vistaprint.nl/visitekaartjes)
- Kies: **Standaard 85×54mm** · dubbelzijdig
- Upload de SVG's of converteer eerst naar PDF via [cloudconvert.com](https://cloudconvert.com/svg-to-pdf)

## 4. Klaar

Levering 2-7 dagen. Rondbrengen volgens `marketing/tracker.md` § "Flyers + visitekaartjes — waar ze ophangen".

---

## Bestanden in deze map

| Bestand | Wat |
|---|---|
| `voorzijde.svg` | Print-ready vector — voorkant kaartje (paper-crème met groen logo) |
| `achterzijde.svg` | Print-ready vector — achterkant (groen met contact-info) |
| `preview.html` | Visuele preview op werkelijke grootte — open in browser |

## Specificaties (voor bij druk)

- **Formaat**: 85×55 mm (NL standaard)
- **Bleed**: 3mm rondom (bestand is 91×61mm = 85×55 + 3mm bleed)
- **Veilige zone**: 6mm vanaf rand
- **Kleuren**: paper-crème #FBF6EE · groen #4A7C59 · ink #2A2A28
- **Lettertype**: Manrope (in SVG met fallback naar Helvetica)
- **Resolutie**: vector (oneindig schalen)

## Troubleshooting

**Drukker zegt "lettertype ontbreekt"**: open SVG in Inkscape (gratis), Object → Tekst → "Convert text to path", export opnieuw. Of upload als PDF.

**Wil je iets aanpassen** (kleur, lay-out, andere tekst)? SVG opent in Inkscape, Affinity Designer, of Adobe Illustrator. Of vraag me — kost 5 minuten.
