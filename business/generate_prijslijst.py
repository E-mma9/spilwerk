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
DONKER = colors.HexColor("#2A2A28")
WHITE = colors.white

FONT = "Helvetica"
FONT_BOLD = "Helvetica-Bold"

section_style = ParagraphStyle(
    "section", fontName=FONT_BOLD, fontSize=13, textColor=GROEN, leading=16,
    spaceBefore=10, spaceAfter=4,
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
    t = Table(data, colWidths=[128 * mm, 37 * mm])
    style = [
        ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
        ("FONTNAME", (0, 1), (-1, -1), FONT),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("BACKGROUND", (0, 0), (-1, 0), GROEN),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
        ("FONTNAME", (1, 1), (1, -1), FONT_BOLD),
        ("TEXTCOLOR", (1, 1), (1, -1), DONKER),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
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
    canvas.setFillColor(GROEN)
    canvas.circle(24 * mm, A4[1] - 21 * mm, 2.2 * mm, stroke=0, fill=1)
    canvas.setFont(FONT_BOLD, 22)
    canvas.setFillColor(WHITE)
    canvas.drawString(36 * mm, A4[1] - 18 * mm, "Spilwerk")
    canvas.setFont(FONT, 11)
    canvas.setFillColor(WHITE)
    canvas.drawString(36 * mm, A4[1] - 25 * mm, "IT-hulp — Twente")
    canvas.setFont(FONT, 10)
    canvas.setFillColor(WHITE)
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 15 * mm, "06-87433537")
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 20 * mm, "spillwerk@gmail.com")
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 25 * mm, "spilwerk.nl")

    canvas.setFillColor(DONKER)
    canvas.setFont(FONT, 8)
    canvas.drawCentredString(
        A4[0] / 2, 12 * mm,
        "Spilwerk · Emmanuel Tekle · Algemene voorwaarden op aanvraag · prijzen onder voorbehoud",
    )
    canvas.drawCentredString(A4[0] / 2, 8 * mm, f"Pagina {doc.page}")
    canvas.restoreState()


def build() -> None:
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        topMargin=48 * mm,
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
        "Per tijd of per klus — geen verborgen kosten. "
        "Werkt het niet, dan betaal je niets voor de reparatiepoging.",
        ParagraphStyle("lede", fontName=FONT, fontSize=10.5, textColor=DONKER, spaceAfter=8, leading=13),
    ))

    story.append(Paragraph("Prijzen", section_style))
    story.append(price_table([
        ("Bezoek (1e uur incl. voorrijden)", "€60"),
        ("Voorrijden buiten Twente", "+€30"),
        ("Daarna per begonnen kwartier", "€15"),
        ("Hulp op afstand", "€45/u"),
        ("Klein klusje (<30 min, op afstand)", "€30"),
        ("Avond &amp; weekend", "geen toeslag"),
        ("Halve dag op locatie", "€250"),
    ]))
    story.append(Paragraph(
        "Werkt het niet? €0 voor de reparatiepoging (excl. voorrijden/diagnose "
        "als hardware al defect was).",
        note_style,
    ))

    story.append(Paragraph("Voor zelfstandigen — vaste prijzen", section_style))
    story.append(price_table([
        ("Werkplek nieuwe medewerker", "€185"),
        ("Gedeelde mappen", "€170"),
        ("Bedrijfs-backup (3-2-1 + getest herstel)", "€300"),
        ("Synology / NAS basis-setup", "€195"),
        ("Vertrekkende medewerker offboarden", "€115"),
    ]))

    story.append(Paragraph("Spilwerk Zeker — maandabonnement", section_style))
    story.append(price_table([
        ("Basis — werkplek, bewaakte back-up, 30 min remote", "€45 p/m"),
        ("Plus — werkplekken kantoor, 1,5 uur, voorrang", "€85 p/m"),
    ]))
    story.append(Paragraph(
        "Maandelijks opzegbaar. Reactie binnen 1 werkdag.",
        note_style,
    ))

    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph(
        "Boek via <b>spilwerk.nl/boeken</b> of bel <b>06-87433537</b>.",
        footer_style,
    ))

    doc.build(story, onFirstPage=header_band, onLaterPages=header_band)
    print(f"Geschreven: {OUT}")


if __name__ == "__main__":
    build()
