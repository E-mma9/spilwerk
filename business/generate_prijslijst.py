"""Genereert business/prijslijst-2026.pdf — Spilwerk prijslijst voor outreach.

Bron van waarheid voor de bedragen is CLAUDE.md / site/prijzen/index.html.
Wijzig je een tarief daar, werk 'm hier ook bij en run opnieuw:

    python3 business/generate_prijslijst.py
"""

from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate,
    Table,
    TableStyle,
    Paragraph,
    Spacer,
)

ROOT = Path(__file__).parent
OUT = ROOT / "prijslijst-2026.pdf"

CREME = colors.HexColor("#FBF6EE")
GROEN = colors.HexColor("#4A7C59")
ORANJE = colors.HexColor("#E8865B")
DONKER = colors.HexColor("#2E2E2E")
WHITE = colors.white

FONT = "Helvetica"
FONT_BOLD = "Helvetica-Bold"

title_style = ParagraphStyle(
    "title", fontName=FONT_BOLD, fontSize=22, textColor=WHITE, leading=26,
)
tagline_style = ParagraphStyle(
    "tagline", fontName=FONT, fontSize=11, textColor=CREME, leading=14,
)
contact_style = ParagraphStyle(
    "contact", fontName=FONT, fontSize=10, textColor=CREME, leading=13,
    alignment=TA_CENTER,
)
section_style = ParagraphStyle(
    "section", fontName=FONT_BOLD, fontSize=13, textColor=GROEN, leading=16,
    spaceBefore=14, spaceAfter=6,
)
note_style = ParagraphStyle(
    "note", fontName=FONT, fontSize=9, textColor=DONKER, leading=12,
    spaceBefore=6,
)
footer_style = ParagraphStyle(
    "footer", fontName=FONT, fontSize=9, textColor=DONKER, leading=12,
    alignment=TA_CENTER,
)


def price_table(rows: list[tuple[str, str]]) -> Table:
    data = [["Omschrijving", "Prijs"]] + [list(r) for r in rows]
    t = Table(data, colWidths=[120 * mm, 45 * mm])
    style = [
        ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
        ("FONTNAME", (0, 1), (-1, -1), FONT),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("BACKGROUND", (0, 0), (-1, 0), GROEN),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
        ("FONTNAME", (1, 1), (1, -1), FONT_BOLD),
        ("TEXTCOLOR", (1, 1), (1, -1), ORANJE),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, colors.HexColor("#E6DDD0")),
    ]
    for i in range(1, len(data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), CREME))
    t.setStyle(TableStyle(style))
    return t


def header_band(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(GROEN)
    canvas.rect(0, A4[1] - 42 * mm, A4[0], 42 * mm, stroke=0, fill=1)
    canvas.setFillColor(WHITE)
    canvas.circle(24 * mm, A4[1] - 21 * mm, 6 * mm, stroke=0, fill=1)
    canvas.setFillColor(ORANJE)
    canvas.circle(24 * mm, A4[1] - 21 * mm, 2.2 * mm, stroke=0, fill=1)
    canvas.setFont(FONT_BOLD, 22)
    canvas.setFillColor(WHITE)
    canvas.drawString(36 * mm, A4[1] - 18 * mm, "Spilwerk")
    canvas.setFont(FONT, 11)
    canvas.setFillColor(CREME)
    canvas.drawString(36 * mm, A4[1] - 25 * mm, "Vriendelijke IT-hulp aan huis — heel Overijssel")
    canvas.setFont(FONT, 10)
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 15 * mm, "06-87433537")
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 20 * mm, "spillwerk@gmail.com")
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 25 * mm, "spilwerk.nl")

    canvas.setFillColor(DONKER)
    canvas.setFont(FONT, 8)
    canvas.drawCentredString(
        A4[0] / 2, 12 * mm,
        "Spilwerk · Emmanuel Tekle · Algemene voorwaarden op aanvraag via spillwerk@gmail.com · prijzen onder voorbehoud van wijzigingen",
    )
    canvas.drawCentredString(A4[0] / 2, 8 * mm, f"Pagina {doc.page}")
    canvas.restoreState()


def build() -> None:
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        topMargin=52 * mm,
        bottomMargin=20 * mm,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        title="Spilwerk prijslijst 2026",
        author="Spilwerk — Emmanuel Tekle",
    )

    story = []

    story.append(Paragraph("Prijslijst 2026", ParagraphStyle(
        "h1", fontName=FONT_BOLD, fontSize=18, textColor=GROEN, spaceAfter=4,
    )))
    story.append(Paragraph(
        "Je betaalt per tijd of per klus — geen abonnementsdwang, geen verborgen kosten. "
        "Werkt het niet, dan betaal je niets voor de reparatiepoging.",
        ParagraphStyle("lede", fontName=FONT, fontSize=10.5, textColor=DONKER, spaceAfter=10, leading=14),
    ))

    story.append(Paragraph("Aan huis &amp; op afstand", section_style))
    story.append(price_table([
        ("Bezoek aan huis in Twente (1e uur incl. voorrijden)", "€60"),
        ("Voorrijden buiten Twente (Zwolle, Deventer, Kampen, Steenwijk e.o.)", "+€30"),
        ("Daarna per begonnen kwartier", "€15"),
        ("Hulp op afstand", "€45 /uur"),
        ("Klein klusje (<30 min, op afstand)", "€30"),
        ("Avond & weekend", "geen toeslag"),
        ("Halve dag op locatie (zelfstandigen)", "€250"),
    ]))
    story.append(Paragraph(
        "“Werkt het niet?” — dan betaal je €0 voor de reparatiepoging zelf "
        "(geldt niet voor voorrijden/diagnosetijd als hardware al kapot bleek vóór het bezoek).",
        note_style,
    ))

    story.append(Paragraph("Voor zelfstandigen &amp; klein kantoor — vaste prijzen", section_style))
    story.append(price_table([
        ("Werkplek-setup nieuwe medewerker", "€185"),
        ("Gedeelde printer in netwerk (tot 5 werkplekken)", "€130"),
        ("Gedeelde mappen instellen", "€170"),
        ("Bedrijfs-backup (3-2-1 + getest herstel)", "€300"),
        ("Synology / NAS basis-setup", "€195"),
        ("Vertrekkende medewerker offboarden", "€115"),
    ]))

    story.append(Paragraph("Spilwerk Zeker — maandabonnement", section_style))
    story.append(price_table([
        ("Basis — 1 werkplek, bewaakte back-up, 30 min remote inbegrepen", "€45 /mnd"),
        ("Plus — tot 3 werkplekken, 1,5 uur, voorrang", "€85 /mnd"),
    ]))
    story.append(Paragraph(
        "Maandelijks opzegbaar. Reactie binnen 1 werkdag — nooit sneller beloofd dan waargemaakt kan worden.",
        note_style,
    ))

    story.append(Spacer(1, 10 * mm))
    story.append(Paragraph(
        "Boek een bezoek via <b>spilwerk.nl/boeken</b> of bel <b>06-87433537</b>.",
        footer_style,
    ))

    doc.build(story, onFirstPage=header_band, onLaterPages=header_band)
    print(f"Geschreven: {OUT}")


if __name__ == "__main__":
    build()
