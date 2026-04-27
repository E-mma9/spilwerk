# Claude Code-instellingen voor Spilwerk-werk

Wat je nu één keer kunt aanzetten zodat toekomstige sessies sneller, minder onderbroken, en in jouw context werken.

Volgorde: bovenaan = direct nuttig, onderaan = nice-to-have.

## 1. Permission-prompts verminderen — ★ doe dit eerst

Probleem: Claude Code vraagt nu om toestemming voor *elke* `Bash`-command (ook `ls`, `git status`, `cat`). Dat onderbreekt je flow.

Oplossing: ingebouwde skill scant je laatste sessies, ziet welke read-only commando's je vaak goedkeurt, en zet ze in je `.claude/settings.json` allowlist.

```
/fewer-permission-prompts
```

Eén keer draaien. Je krijgt een voorgestelde allowlist te zien — accepteer wat je wil. Daarna ben je voor 90% van de commands van het gevraag af.

## 2. CLAUDE.md geladen — ★ al gedaan

`spilwerk/CLAUDE.md` bestaat. Bij elke nieuwe sessie in deze map laadt Claude die automatisch en snapt direct dat dit Spilwerk is, welke 8 diensten er zijn, hoe de toon is. Je hoeft de context niet opnieuw uit te leggen.

Bij wijzigingen in de project-structuur: update `CLAUDE.md` mee, anders verzint Claude verkeerde dingen.

## 3. Gmail + Calendar MCP authenticeren — voor lead-flow

In je MCP-list zag ik:

```
claude.ai Gmail: ! Needs authentication
claude.ai Google Calendar: ! Needs authentication
claude.ai Google Drive: ! Needs authentication
```

Authenticeer ze via:
```
/mcp
```

Kies elke MCP, doorloop de OAuth-flow eenmalig. Daarna kan Claude:

- **Gmail**: nieuwe lead-mails samenvatten, conceptantwoorden in jouw toon schrijven, e-mailthreads doorzoeken op "klant X laatste status". Niet: automatisch versturen.
- **Calendar**: kennismakingsgesprekken inplannen op vrije momenten, conflicten zien.
- **Drive**: verkooppresentaties / contracten openen.

**Beveiligingsnoot**: deze MCPs hebben full mailbox/calendar-toegang. Authenticeer met je *zakelijke* Google-account (apart van privé), zodra je dat hebt opgezet — bv. `info@spilwerk.nl` op Google Workspace (€7,20/mnd Business Starter).

## 4. GitHub MCP fixen — voor code-projecten

In je list:
```
plugin:github:github: ✗ Failed to connect
```

Fix:
```
/mcp
```
→ kies github → re-authenticeer met een GitHub Personal Access Token (scopes: `repo`, `read:org`).

Daarna kan Claude PR's samenvatten, issues lezen, je commits openen — handig voor de Total Tankstation repo en voor toekomstige klantprojecten.

## 5. Subagents die voor jou nuttig zijn

Bij `/agents` of automatisch ingeroepen door Claude. Relevante:

- **`general-purpose`** — voor breed onderzoek (gebruikten we al voor het marktonderzoek)
- **`Explore`** — snel een codebase doorzoeken (bv. "waar staat de auth-logica in TotalTankstation?")
- **`Plan`** — voor architectuur-beslissingen voor klantprojecten
- **`code-reviewer`** — review van je eigen code voor je 'm aan een klant oplevert
- **`security-review`** — security-pass over een PR voor klantenwerk wordt opgeleverd

Aanroepen kan automatisch door Claude, of expliciet:
```
Gebruik de Explore-subagent om uit te zoeken hoe de JWT-rotatie in TotalTankstation werkt.
```

## 6. Skills die direct relevant zijn

Skills zijn specialisaties die Claude bij relevante taken laadt:

| Skill | Wanneer relevant |
|---|---|
| `frontend-design` | Bij site-wijzigingen aan Spilwerk of klant-frontends |
| `claude-api` | Voor wijzigingen aan `leadgen/` of voor klantprojecten met Claude API |
| `superpowers:brainstorming` | Voor design-beslissingen vóór code (nieuwe diensten, klant-vraagstukken) |
| `superpowers:writing-plans` | Voor klantprojecten met meer dan 3 stappen |
| `superpowers:test-driven-development` | Voor klantcode in productie — niet voor de Spilwerk-site zelf |
| `superpowers:systematic-debugging` | Bij bugs in klantprojecten |

Je hoeft ze niet te installeren — Claude laadt ze automatisch wanneer ze passen.

## 7. Geplande taken (cron) — pas later

Niet nu nodig, maar op termijn nuttig:

- **Wekelijks leadgen-batch genereren**: cron-routine die elke maandag 8u 10 nieuwe leads opzoekt en concept-mails klaarzet.
- **Wekelijkse LinkedIn-post-reminder**: simpele check of je deze week al gepost hebt.

Configureren via:
```
/schedule
```

Wacht tot je workflow gestabiliseerd is. Eerste 4 weken: handmatig is sneller dan automatiseren.

## 8. Statusline (cosmetisch)

Optioneel — laat zien welke MCP's actief zijn, in welke folder je zit, etc.

```
/statusline
```

Niet kritiek, maar handig als je tussen Spilwerk-werk en je studie-projecten schakelt.

---

## Wat je expliciet *niet* moet aanzetten

- ❌ **Auto-commit hooks** — je doet zelf nog niet zoveel commits, hooks worden noise.
- ❌ **`MaxBashTimeout` ophogen** — beter een commando dat hangt opmerken dan blind 10 minuten wachten.
- ❌ **Een eigen "Spilwerk-agent" maken** met systeemprompt — voor 1 brand met 8 diensten is `CLAUDE.md` genoeg. Subagents bouw je pas als je echte specialisatie nodig hebt.
- ❌ **API-key in shell-environment hardcoden** zonder `.env` — je `leadgen/.env` is in `.gitignore`, dat is veilig. Houd 'm daar.

---

## Eén bewuste keuze die ik je teruggeef

Eerder zei je: "ik kan je toegang geven tot een linkedin account etc zeg het maar."

Mijn antwoord: **niet doen, ook niet als ik daarom zou vragen.**

Redenen:
1. **LinkedIn-TOS verbiedt geautomatiseerde toegang.** Account-ban is permanent en killt je hele professionele identiteit.
2. **Credential delegatie is een security-anti-patroon.** Als ik (of een MCP, of een tool) je sessie-cookie heeft, kan ik posten, DM'en, connections afhandelen, en (bij phishing-MCPs) credentials lekken. Niet acceptabel risico voor 5 minuten gemak per week.
3. **Persoonlijke brand = persoonlijk.** Posts die ík schrijf en jij plaatst klinkt als jou. Posts die geautomatiseerd vanuit jouw account uitgaan, klinken nooit als jou. Klanten herkennen dat verschil.

Werkbaar alternatief: ik schrijf de post, jij copieert + plaatst (30 sec werk). Het effect is identiek, het risico is nul. Zie `marketing/linkedin.md`.

Zelfde redenering voor: e-mail credentials, klanten-CRM credentials, wachtwoordmanager-master-password, betaalpas-info.
