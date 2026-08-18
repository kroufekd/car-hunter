# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

This repo is **single-context**.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root.
- **`docs/adr/`** — read ADRs that touch the area you're about to work in.
- **`concept/`** — this repo's product documentation (vision, agent capabilities, proposed architecture, data sources, import playbook, roadmap, worked example of a real report). Start with `README.md`, then the numbered files in `concept/`.

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The `/domain-modeling` skill (reached via `/grill-with-docs` and `/improve-codebase-architecture`) creates them lazily when terms or decisions actually get resolved.

## File structure

```
/
├── CONTEXT.md
├── concept/                ← product documentation for this repo
├── docs/adr/
│   ├── 0001-....md
│   └── 0002-....md
└── docs/                   ← NOTE: also the GitHub Pages root (the published landing page)
```

> **Careful with `docs/`.** In this repo `docs/` doubles as the GitHub Pages publish directory — everything under it is served at `https://kroufekd.github.io/car-hunter/`. `docs/agents/` and `docs/adr/` are therefore publicly fetchable as raw markdown. Don't put anything sensitive there, and don't assume `docs/` means "internal docs" the way it does in most repos.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal — either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (event-sourced orders) — but worth reopening because…_
