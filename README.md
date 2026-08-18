# CarHunter

**AI agent, který za tebe hledá auto.** Řekneš specifikaci, agent nepřetržitě prochází inzertní trhy v ČR i v Evropě, doptá se prodejce na to, co v inzerátu chybí, prověří VIN a fotky — a ráno pošle krátký seznam kusů, na které má smysl volat.

> 🌐 **Pitch stránka:** <https://kroufekd.github.io/car-hunter/>

---

## Co tenhle repozitář je

Repozitář **konceptu a pitche**, ne produkční aplikace. Obsahuje:

1. **Dokumentaci nápadu** — co agent umí, jak by byl postavený, odkud bere data, jak vypadá dovozový playbook. Složka [`concept/`](concept/).
2. **Pitch landing page** — statická stránka publikovaná přes GitHub Pages ze složky [`docs/`](docs/). Postavená na reálném výstupu běžícího prototypu.

Samotný agent (crawler, DB, scoring, rozesílání reportů) v tomhle repu **není**. Běží zatím jako soukromý prototyp.

## Stav

| Část | Stav |
|---|---|
| Monitor inzerátů (sauto.cz, bazoš, mobile.de) | běží jako prototyp, ~272 aktivních kusů na jednu specifikaci |
| Denní e-mailový report v 08:00 | běží, ruční finální výběr |
| Scoring, SOH, vzdálenosti, odchylka od benchmarku | běží |
| Doptávání prodejců, analýza fotek, VIN lookup | koncept |
| Webová aplikace (specifikace, shortlist, deal room) | koncept |
| Vyjednávání, dovoz a papíry na klíč | koncept |

Reálný report z 18. 8. 2026 — 12 vybraných kusů Tesla Model 3 z ČR a Německa — je zdrojem dat pro celou pitch stránku a je rozepsaný v [`concept/06-priklad-reportu.md`](concept/06-priklad-reportu.md).

## Struktura

```
concept/     dokumentace nápadu (vize, agent, architektura, zdroje, dovoz, roadmapa, příklad)
docs/        pitch landing page — kořen GitHub Pages
  index.html
  assets/css/    tokeny, base, layout, komponenty, report, efekty
  assets/js/     AI mesh canvas, scroll reveal, render reportu, ukázka komunikace
  assets/data/   reálný report jako datový soubor
```

## Lokální spuštění stránky

Žádný build, žádné závislosti:

```bash
python3 -m http.server 4321 -d docs
# → http://localhost:4321/
```

## Publikování

Stránka se servíruje přímo z větve `master`, složky `/docs`, přes GitHub Pages. Po merge do `master` se přegeneruje sama, obvykle do minuty.

## Licence a data

Stránka pracuje s veřejně dostupnými inzeráty (mobile.de, sauto.cz) a odkazuje na ně přímo. Žádná osobní data prodejců ani kupujících tu nejsou.
