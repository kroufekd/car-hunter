# Context Map

CarHunter je monorepo se dvěma kontexty. Každý má vlastní `CONTEXT.md` se svým slovníkem a hranicemi.

| Kontext | Kde | Co řeší |
| --- | --- | --- |
| **Landing** | [`apps/landing/CONTEXT.md`](apps/landing/CONTEXT.md) | veřejná prezentace konceptu — pitch page, žádný uživatelský stav |
| **App** | [`apps/app/CONTEXT.md`](apps/app/CONTEXT.md) | produktová aplikace — specifikace, shortlist, deal room, autentizace |

Rozhodnutí platná napříč celým systémem žijí v [`docs/adr/`](docs/adr/). Rozhodnutí, která se týkají jen jednoho kontextu, patří do `apps/<kontext>/docs/adr/`.

## Sdílený slovník

Termíny, které znamenají totéž v obou kontextech. Kontextově specifické významy patří do příslušného `CONTEXT.md`.

- **Specifikace** — co uživatel hledá: model, ročník, nájezd, strop ceny, dojezdová vzdálenost a měkká kritéria, která bazarové filtry neumějí (zdraví baterie, počet majitelů).
- **Inzerát (listing)** — jeden konkrétní vůz na jednom trhu. Stejný vůz na víc trzích je pořád jeden inzerát po deduplikaci.
- **Trh** — inzertní server, ze kterého agent čte (sauto.cz, bazoš, mobile.de).
- **Report** — ranní výběr aut pro jednu specifikaci, seskupený podle rozhodnutí, které z něj plyne.
- **Skóre** — hodnocení vozu 0–10 vůči specifikaci. Bere v potaz i jistotu údaje, ne jen jeho hodnotu.
- **Odchylka (delta)** — rozdíl ceny vozu proti benchmarku, v procentech.
- **SOH** — state of health baterie u elektromobilu. Nedoložené SOH nikdy nedostane plné skóre.
- **Doptání (inquiry)** — dotaz agenta na prodejce kvůli údaji, který v inzerátu chybí.

## Produktová dokumentace

Podrobný koncept — vize, schopnosti agenta, navržená architektura, zdroje dat, dovozový playbook a rozbor reálného reportu — žije v [`concept/`](concept/). Není to ADR ani glosář; je to popis produktu, ze kterého oba kontexty vycházejí.
