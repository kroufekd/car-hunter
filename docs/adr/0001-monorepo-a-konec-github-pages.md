# ADR-0001: Monorepo se dvěma Next.js aplikacemi, konec GitHub Pages

- **Stav:** přijato
- **Datum:** 2026-08-18

## Kontext

Repozitář vznikl jako jednoúčelový: statická pitch page ve složce `docs/`, publikovaná přes GitHub Pages ze `master`. Fungovalo to, dokud šlo jen o odkaz na poslání kamarádovi.

Tři věci to přerostly:

1. **Vzniká skutečný produkt.** Vedle landing page má být aplikace se stavem uživatele — specifikace, shortlist, deal room, autentizace. To se do statické stránky nevejde.
2. **`docs/` dělalo dvě práce naráz.** Byl to zároveň publikační adresář Pages i jediné místo, kam by šla dát dokumentace. Konfigurace pro engineering skills (`docs/agents/`) by se tak servírovala jako raw markdown na veřejné adrese.
3. **GitHub Pages neumí, co bude potřeba.** Statický export bez serverových funkcí, bez preview deploymentů na PR, bez proměnných prostředí.

## Rozhodnutí

- **Monorepo přes pnpm workspaces**, aplikace pod `apps/*`.
  - `apps/landing` — veřejná pitch page, Next.js App Router, staticky předrenderovaná.
  - `apps/app` — produktová aplikace, zatím kostra s hranicí autentizace.
- **GitHub Pages zrušeno.** Web se nasazuje na Vercel; každý PR dostane preview.
- **`docs/` je od teď skutečná dokumentace** — `docs/adr/` a `docs/agents/`. Nic se z něj nepublikuje.
- **Landing page portována 1:1**, ne přepsána. Vizuál, texty i data reportu zůstávají beze změny; mění se jen technologie pod tím.
- **Styly:** globální design systém v `src/styles/` (tokeny, reset, sdílené primitivy s kontextovými variantami typu `.band--dark .hl`), CSS moduly pro jednotlivé sekce.

## Důsledky

**Dobré**

- Landing a produkt mohou růst nezávisle a přitom sdílet historii, konvence i konfiguraci agentů.
- Preview deployment na každý PR místo „mergnout do master a doufat".
- Dokumentace přestala být součástí veřejného webu.
- Aplikace má od začátku jedno místo pro autentizaci (`apps/app/src/lib/auth.ts`), takže výměna poskytovatele je změna jednoho souboru.

**Cena**

- Odkaz `kroufekd.github.io/car-hunter` přestal fungovat. Kdo ho má uložený, narazí na 404.
- Přibyl build a `node_modules` tam, kde dřív stačil `python3 -m http.server`.
- Landing a app zatím sdílejí design jen kopií. Až bude komponent sdílených víc, bude potřeba balíček `packages/ui` — dřív ne, byla by to předčasná abstrakce.

## Zvažované alternativy

- **Nechat Pages a přidat produkt jinam.** Znamenalo by to dvě oddělené historie a dvojí konvence. Zamítnuto.
- **Statický export Nextu zpět do `docs/`.** Zachovalo by URL, ale zakonzervovalo by původní problém: `docs/` by dál dělalo dvě práce a preview deploymenty by nebyly.
- **Turborepo hned.** Při dvou aplikacích je `pnpm -r` dostatečné. Až budou sdílené balíčky a cache začne dávat smysl, dá se přidat kdykoli.
