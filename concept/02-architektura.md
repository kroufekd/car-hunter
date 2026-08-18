# 02 · Architektura (návrh)

Návrh, ne implementace. Cílem je popsat, kudy tečou data a kde jsou hranice, na kterých se validuje.

## Pipeline

```
┌────────────┐   ┌───────────┐   ┌────────────┐   ┌───────────┐   ┌─────────┐   ┌──────────┐
│ Collectors │ → │ Normalize │ → │ Deduplicate│ → │  Enrich   │ → │ Scoring │ → │ Delivery │
└────────────┘   └───────────┘   └────────────┘   └───────────┘   └─────────┘   └──────────┘
   per trh        jednotný         VIN + otisk       VIN, fotky,     skóre a       report,
   adaptér        Listing                            doptání         odchylka      app, push
```

### 1. Collectors

Jeden adaptér na trh. Adaptér umí jen dvě věci: `search(spec) → seznam odkazů` a `fetch(url) → surová data inzerátu`. Nic víc — žádná logika o kvalitě vozu.

- Kde je API, jede se přes API. Kde není, čte se veřejná stránka.
- Rate limiting a slušné intervaly per doména.
- Selhání jednoho trhu nesmí shodit ostatní — každý běží nezávisle.

### 2. Normalize

Surová data → jednotný tvar `Listing`. Tady je **hranice systému**, takže tady se validuje schématem: chybějící a nesmyslné hodnoty se nedopočítávají odhadem, ale označí jako `unknown`.

Klíčové je nedůvěřovat titulku. `153 kW` v poli výkon může být trvalý výkon, ne špičkový; `LR` v titulku může být špatně, když ve výbavě jsou Performance brzdy. Rozpory se ukládají jako **konflikty k ověření**, ne přepisují potichu.

### 3. Deduplicate

Stejný vůz visí často na víc portálech. Slučuje se přes:

1. VIN, pokud je uvedený.
2. Otisk: model + verze + rok + nájezd (±500 km) + hash fotek.

Sloučený záznam si drží odkazy na všechny výskyty a nejnižší nalezenou cenu.

### 4. Enrich

Doplnění toho, co v inzerátu není:

- **VIN lookup** — výbava, verze, svolávačky.
- **Vision nad fotkami** — stav, nájezd z displeje, antisignály.
- **Doptání prodejce** — asynchronní, může trvat dny. Karta vozu má stav `čeká na odpověď`.
- **Geokódování a vzdálenost.**

Enrich je **asynchronní a idempotentní**. Když odpověď nepřijde, kus prostě zůstane s nižší jistotou a nižším skóre.

### 5. Scoring

Čistá funkce: `score(listing, spec, benchmark) → { score, delta, reasons }`. Žádné side efekty, žádné dotazy do sítě. Pole `reasons` je to, co se pak objeví v reportu jako lidská věta.

### 6. Delivery

- **Denní report v 08:00** — e-mail, seskupený podle rozhodnutí.
- **Okamžitá notifikace** — jen na kus, který překročí prahovou hodnotu skóre.
- **Webová aplikace** — specifikace, shortlist, deal room, checklist papírů.

## Datový model (náčrt)

```
Spec          co uživatel hledá
  id, userId, model, yearFrom, kmMax, priceMax, mustHave[], niceToHave[],
  maxDistanceKm, markets[], benchmarkPrices[]

Listing       jeden konkrétní vůz
  id, vin?, source[], url[], title, version, year, km, price{czk,eur},
  seller{type, name, location, rating, country}, photos[], attributes{},
  conflicts[], firstSeenAt, priceHistory[]

Enrichment    co k vozu zjistil agent
  listingId, kind (vin|vision|inquiry|history), status, payload, confidence, createdAt

Score         výsledek hodnocení
  listingId, specId, value, delta, reasons[], computedAt

Deal          rozpracovaný obchod
  listingId, stage (kontakt|termín|prohlídka|nabídka|smlouva|dovoz|registrace),
  messages[], appointments[], documents[], checklist[]

Report        co odešlo
  specId, date, groups[{label, listingIds[]}], tldr, plan, sentAt
```

## Principy

- **Neměnnost.** Enrichment ani scoring nepřepisuje `Listing` — vytváří nový záznam navázaný na něj. Historie zůstává.
- **Malé moduly.** Adaptér na trh nesmí vědět nic o scoringu; scoring nesmí sahat do sítě.
- **Validace na hranicích.** Vše, co přijde z inzerátu, z modelu nebo od prodejce, projde schématem.
- **Selhání se nepolyká.** Když adaptér spadne nebo model vrátí nesmysl, zapíše se to a kus dostane nižší jistotu — nikdy se nevymyslí hodnota.
- **Člověk v kritické smyčce.** Cokoli závazného (nabídka, smlouva, platba) odklepává uživatel.

## Související

- [01 · Schopnosti agenta](01-agent.md)
- [03 · Zdroje dat](03-zdroje-dat.md)
