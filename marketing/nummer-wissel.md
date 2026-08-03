# Telefoonnummer wisselen — checklist

> ✅ **Niet meer nodig, tenzij het zakelijke nummer ooit tóch verandert.**
> Besloten juli 2026: **06-87433537 blijft het zakelijke nummer** en staat op site, drukwerk,
> Marktplaats, Google Business Profile en Ads. Wil Emmanuel werk/privé scheiden, dan komt er
> een nieuw *privé*nummer — dat deel je met vijf appjes en er hoeft niets herdrukt te worden.
> Bewaard voor het geval het zakelijke nummer ooit wél moet wijzigen.

**Status:** 06-87433537 is het zakelijke nummer en blijft dat. Drukwerk bestellen is niet langer geblokkeerd. Onderstaande lijst is bewaard voor het onwaarschijnlijke geval dat het zakelijke nummer ooit tóch wijzigt.

## Als het nummer ooit tóch wijzigt

- **Drukwerk is dan verloren.** Papier kun je niet updaten — reken op een nieuwe bestelling.
- **De Marktplaats-advertentie laten staan.** Die is betaald (€9,90 / 4 weken). Weghalen is weggegooid geld en je bent dan onvindbaar. De tekst van de bestaande advertentie **bewerken** mag zonder bijbetalen; niet verwijderen en opnieuw plaatsen.

## Wat er dan aangepast moet worden

Zoek-en-vervang `87433537` (en de variant met spaties `87 43 35 37`, en `+31687433537` / `wa.me/31687433537`) in:

### Website — live, direct effect
- [ ] `site/index.html` — `tel:`-link, zichtbaar nummer in contact-sectie, `wa.me`-link, meta-description, **én het `telephone`-veld in de JSON-LD structured data** (Google cacht dat, dus niet vergeten)
- [ ] `site/assets/script.js` — `CONTACT.phone` en `CONTACT.whatsapp` (floating widget)

### Drukwerk — vóór bestellen
- [ ] `marketing/visitekaartje/voorzijde.svg`
- [ ] `marketing/visitekaartje/achterzijde.svg`
- [ ] `marketing/visitekaartje/preview.html`
- [ ] `marketing/flyer/voorzijde.svg`
- [ ] `marketing/flyer/achterzijde.svg`

### Teksten & templates
- [ ] `marketing/advertenties.md` — Marktplaats, WhatsApp Business, Facebook-post
- [ ] `marketing/betaalde-promotie.md` — visitekaartje-mockup, weekblad-blokje, Google Ads call extension
- [ ] `marketing/tracker.md` — flyertekst, weekblad-advertentie
- [ ] `marketing/linkedin.md` — about-sectie, launch-post, DM-template
- [ ] `marketing/google-business-profile.md` — telefoonveld in de setup-tabel
- [ ] `marketing/marktplaats.md` — advertentietekst
- [ ] `business/contracten/opdrachtbevestiging.md` — briefhoofd en voettekst

### Notities
- [ ] `CLAUDE.md` — vervang de transitie-waarschuwing door het definitieve nummer
- [ ] `README.md`
- [ ] `marketing/visitekaartje/README.md` — verwijder de "niet drukken"-waarschuwing
- [ ] Dit bestand kan daarna weg

## Extern (niet in de repo)

- [ ] **Marktplaats** — bestaande advertentie bewerken
- [ ] **WhatsApp Business** — installeren op het nieuwe zakelijke nummer; gewone WhatsApp blijft op 06-87433537 (privé)
- [ ] **Google Business Profile** — zodra het account terug is, meteen het zakelijke nummer invullen
- [ ] Klanten die al via het privénummer contact hadden: gewoon doorverwijzen, geen drama

## Waarom deze richting

Een gepubliceerd zakelijk nummer wil je nooit meer wijzigen, en je privénummer wil je niet op flyers bij de bibliotheek hebben hangen. Dus: privé blijft 06-87433537, het nieuwe eSIM-nummer wordt zakelijk en gaat overal in. Dat betekent één keer alles omzetten — daarom deze checklist.
