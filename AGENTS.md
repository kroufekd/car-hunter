# AGENTS.md

**CarHunter** — koncept AI agenta pro hledání ojetého auta napříč inzeráty v ČR i v Evropě, plus pitch landing page. Aplikace samotná se v tomhle repu nestaví.

Kontext produktu: `README.md` a složka `concept/`.

> **Pozor na `docs/`.** V tomhle repu `docs/` **není** interní dokumentace — je to publikační adresář GitHub Pages. Všechno pod ním se servíruje na `https://kroufekd.github.io/car-hunter/`. Landing page žije v `docs/index.html` + `docs/assets/`.

## Agent skills

### Issue tracker

Issues žijí v GitHub Issues repozitáře `kroufekd/car-hunter`, ovládané přes `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Kanonická pětice bez přejmenování — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — `CONTEXT.md` v kořeni, ADR v `docs/adr/`, produktová dokumentace v `concept/`. See `docs/agents/domain.md`.
