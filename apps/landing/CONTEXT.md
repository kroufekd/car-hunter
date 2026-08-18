# Kontext: Landing

Veřejná pitch stránka CarHunteru. Prezentuje koncept a jeden reálný výstup prototypu. **Nemá uživatelský stav** — žádné přihlášení, žádná databáze, žádné API.

## Hranice

- Vstup: statická data v repozitáři.
- Výstup: jedna staticky předrenderovaná stránka.
- Nesahá na kontext **App** a nesdílí s ním kód. Až budou komponenty sdílené, vznikne pro ně balíček — do té doby se duplicita toleruje.

## Slovník

Sdílené termíny (specifikace, inzerát, trh, report, skóre, odchylka, SOH, doptání) jsou v kořenovém [`CONTEXT-MAP.md`](../../CONTEXT-MAP.md). Tady jen to, co je specifické pro tenhle kontext:

- **Pás (band)** — vodorovný pruh stránky s vlastním podkladem. Střídá se krémový a pískový; `band--dark` je zelený.
- **Sekce** — obsahový celek uvnitř pásu. Jedna React komponenta = jedna sekce.
- **Reveal** — decentní fade-in při scrollu. Řídí ho `RevealObserver`, spouští se jen při `prefers-reduced-motion: no-preference`.
- **Hero vizuál** — plochá vektorová ilustrace krajiny se silnicí. Kreslená v paletě značky, žádné fotografie.

## Struktura

```
src/
├── app/           layout a stránka (App Router)
├── components/    sekce stránky, každá s vlastním CSS modulem
├── data/          report.ts — reálná data z e-mailu agenta
├── lib/           odkazy a konstanty
└── styles/        globální design systém (tokeny, base, layout, komponenty)
```

## Pravidla

- **Design systém je globální, sekce jsou modulární.** Tokeny, reset a sdílené primitivy (`.band`, `.container`, `.btn`, `.badge`, `.card`, `.eyebrow`, `.lead`, `.grid`, `.promo`) žijí v `src/styles/` jako globální CSS — mají kontextové varianty typu `.band--dark .hl`, které se přes CSS moduly vyjádřit nedají. Všechno ostatní je CSS modul u své komponenty.
- **Serverové komponenty jako výchozí.** Jediná klientská komponenta je `ReportSection` (přepínání skupin) a `RevealObserver`.
- **Data reportu jsou zdroj pravdy.** `src/data/report.ts` obsahuje skutečný výstup agenta z 18. 8. 2026. Nepřepisovat kvůli vzhledu — když něco nesedí, opraví se zobrazení, ne data.
- **Žádné cizí fotografie ani placené fonty.** Erode je z Fontshare, Instrument Sans z Google Fonts přes `next/font`.
- **Přístupnost není volitelná.** Skip link, sémantické značky, kontrast ≥ 4.5:1 pro běžný text, taby ovladatelné šipkami.

## Spuštění

```bash
pnpm dev:landing     # http://localhost:3000
```
