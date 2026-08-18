# CarHunter

**AI agent, který za vás hledá auto.** Popíšete specifikaci, agent nepřetržitě prochází inzertní trhy v ČR i v Evropě, doptá se prodejců na to, co v inzerátu chybí, prověří VIN a fotografie — a ráno v 08:00 pošle krátký seznam vozů, na které má smysl volat.

---

## Co tenhle repozitář je

Monorepo s **konceptem a jeho prezentací**. Samotný monitor inzerátů (crawler, databáze, scoring, rozesílání reportů) tu **není** — běží zatím jako soukromý prototyp.

```
apps/
├── landing/    veřejná pitch page (Next.js, staticky předrenderovaná)
└── app/        produktová aplikace (Next.js, zatím kostra s hranicí autentizace)
concept/        produktová dokumentace — vize, schopnosti agenta, architektura, dovoz, roadmapa
docs/
├── adr/        architektonická rozhodnutí
└── agents/     konfigurace pro engineering skills
```

## Stav

| Část | Stav |
| --- | --- |
| Monitor inzerátů (sauto.cz, bazoš, mobile.de) | běží jako prototyp, ~272 aktivních kusů na jednu specifikaci |
| Denní e-mailový report v 08:00 | běží, finální výběr zatím ruční |
| Skóre, SOH, vzdálenosti, odchylka od benchmarku | běží |
| Doptávání prodejců, čtení fotografií, VIN lookup | koncept |
| Landing page | hotová |
| Produktová aplikace | kostra |
| Vyjednávání, dovoz a papíry na klíč | koncept |

Reálný report z 18. 8. 2026 — dvanáct vybraných kusů Tesly Model 3 z ČR a Německa — pohání sekci „Reálný report" na landing page a je rozebraný v [`concept/06-priklad-reportu.md`](concept/06-priklad-reportu.md).

## Spuštění

```bash
pnpm install
pnpm dev:landing    # http://localhost:3000
pnpm dev:app        # http://localhost:3001
```

Další příkazy: `pnpm build`, `pnpm typecheck`, `pnpm lint`. Package manager je **pnpm** (workspaces), Node ≥ 20.

## Nasazení

Landing page běží na Vercelu; každý pull request dostane preview. GitHub Pages byly zrušeny — proč, je v [ADR-0001](docs/adr/0001-monorepo-a-konec-github-pages.md).

## Data

Stránka pracuje s veřejně dostupnými inzeráty (mobile.de, sauto.cz) a odkazuje na ně přímo. Žádná osobní data prodejců ani kupujících tu nejsou.
