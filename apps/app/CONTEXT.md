# Kontext: App

Produktová aplikace CarHunteru. Tady žije uživatelský stav: specifikace, nálezy, rozpracované obchody.

> **Stav: kostra.** Zatím tu je routovací struktura a hranice autentizace. Žádný poskytovatel autentizace, žádná databáze, žádná doména. Obsah přijde, až bude jasné, co má první verze umět.

## Hranice

- Vstup: přihlášený uživatel, data z monitoru inzerátů.
- Výstup: aplikační UI. Není veřejné — `robots: noindex`.
- Nesahá na kontext **Landing**. Landing je marketing, tohle je produkt.

## Slovník

Sdílené termíny jsou v kořenovém [`CONTEXT-MAP.md`](../../CONTEXT-MAP.md). Specifické pro tenhle kontext:

- **Session** — přihlášení uživatele. Jediná cesta k ní vede přes `src/lib/auth.ts`.
- **Deal** — rozpracovaný obchod nad jedním vozem: komunikace, termíny, dokumenty, checklist papírů.
- **Shortlist** — uživatelův užší výběr vozů z reportů.

## Struktura

```
src/
├── app/
│   ├── (auth)/      veřejné cesty kolem přihlášení
│   ├── (app)/       cesty jen pro přihlášené
│   └── layout.tsx
├── lib/
│   └── auth.ts      hranice autentizace — jediné místo, kde se řeší session
└── styles/
```

## Pravidla

- **Autentizace má jedno místo.** Komponenty a stránky nesahají na cookies, tokeny ani na SDK poskytovatele — volají `getSession()` nebo `requireSession()` z `src/lib/auth.ts`. Výměna poskytovatele pak znamená změnu jednoho souboru.
- **Route groups drží hranici přístupu.** `(auth)` je veřejné, `(app)` vyžaduje session. Co je uvnitř `(app)`, musí session ověřit.
- **Neměnnost.** Stav se nemutuje — vrací se nové objekty.
- **Validace na hranicích.** Cokoli přijde z API, od uživatele nebo od modelu, projde schématem, než se s tím pracuje.

## Spuštění

```bash
pnpm dev:app     # http://localhost:3001
```
