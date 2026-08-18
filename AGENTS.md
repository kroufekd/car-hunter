# AGENTS.md

**CarHunter** — AI agent pro koupi ojetého auta. Monorepo: veřejná landing page a produktová aplikace.

| Kde | Co |
| --- | --- |
| `apps/landing` | veřejná pitch page (Next.js, staticky předrenderovaná) |
| `apps/app` | produktová aplikace (Next.js, zatím kostra) |
| `concept/` | produktová dokumentace — vize, schopnosti agenta, architektura, dovoz, roadmapa |
| `docs/adr/` | architektonická rozhodnutí |
| `docs/agents/` | konfigurace pro engineering skills |

Samotný monitor inzerátů (crawler, DB, scoring, rozesílání reportů) v repu **není** — běží zatím jako soukromý prototyp.

## Práce s repem

```bash
pnpm install
pnpm dev:landing    # http://localhost:3000
pnpm dev:app        # http://localhost:3001
pnpm build          # obě aplikace
pnpm typecheck
pnpm lint
```

Package manager je **pnpm** (workspaces). Node ≥ 20.

## Agent skills

### Issue tracker

Issues žijí v GitHub Issues repozitáře `kroufekd/car-hunter`, ovládané přes `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Kanonická pětice bez přejmenování — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Multi-context — `CONTEXT-MAP.md` v kořeni ukazuje na `apps/*/CONTEXT.md`. See `docs/agents/domain.md`.
