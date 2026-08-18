# 01 · Schopnosti agenta

Osm schopností, kolem kterých je celý produkt postavený. U každé je uvedeno, jestli už běží v prototypu, nebo je to zatím koncept.

---

## 1. Lov napříč trhy — *běží*

Nepřetržitý monitoring inzertních serverů podle uložené specifikace.

- Dnes napojeno: **sauto.cz**, **bazoš**, **mobile.de**.
- V plánu: AutoScout24, tipcars, mobile.at, Marktplaats, Carvago.
- Deduplikace přes VIN, případně přes otisk (model + rok + nájezd + fotky), protože stejný kus visí často na víc portálech i pod víc dealery.
- Uchovává historii: kdy se inzerát objevil, kdy zlevnil, kdy zmizel. Zlevnění je silný signál.

## 2. Doptání chybějících dat — *koncept*

Když v inzerátu chybí něco, co je ve specifikaci důležité, agent kontaktuje prodejce.

- Kanály: e-mail, kontaktní formulář na portálu, WhatsApp, telefon (hlasový agent).
- Jazyky: čeština, němčina, angličtina — podle země prodejce.
- Typické dotazy: SOH baterie / Batteriezertifikat, počet majitelů, servisní historie, nehodovost, prodej soukromníkovi z EU, volný termín prohlídky.
- Odpověď se strukturovaně propíše do karty vozu a **přepočítá skóre**.

Reálná ukázka z prototypu: dealer Zaglauer neuváděl SOH a e-maily nevyřizuje. Doptání přes WhatsApp vrátilo „SOH 95 %, certifikát přiložen, prodej soukromníkovi z EU bez problému, letní i zimní sada v ceně“ — kus se posunul mezi ty, kam volat první.

**Bezpečnostní pojistka:** ve výchozím nastavení agent zprávu jen navrhne a odešle až po odklepnutí uživatelem. Plný autopilot je opt-in a jen pro rutinní dotazy.

## 3. Analýza fotek — *koncept*

Vision model nad fotkami z inzerátu.

- Stav laku, nesedící díly a spáry, stopy po opravě, koroze.
- Opotřebení interiéru vůči deklarovanému nájezdu.
- Odečet nájezdu z fotky displeje / přístrojovky, porovnání s textem inzerátu.
- Poznávání antisignálů: „pět fotek a všechny ze stejné strany“, focení za tmy, chybějící interiér.
- U elektromobilů: screenshot ze servisního menu se SOH, typ nabíječky, stav kol.

## 4. VIN dekodér a historie — *koncept*

- Z VIN skutečná verze, výbava, závod a datum výroby.
- Ověření, že to, co tvrdí titulek inzerátu, sedí s VIN (viz „LR s Performance brzdami“).
- Svolávací akce, otevřené kampaně.
- Napojení na registry historie (Cebia a obdoby) — nájezdy, škodní události, evidence odcizených.

## 5. Cenový scoring — *běží*

Každý kus dostane **skóre 0–10** a **odchylku od benchmarku**.

Do skóre vstupuje:

| Faktor | Váha v prototypu |
|---|---|
| Cena vůči benchmarku (referenční kusy uživatele) | vysoká |
| Doložené SOH / stav baterie | vysoká |
| Nájezd vs. rok výroby | střední |
| Počet majitelů, nehodovost | střední |
| Hodnocení a velikost prodejce | střední |
| Vzdálenost od kupujícího | nízká až střední |
| Úplnost inzerátu (počet fotek, vyplněné parametry) | nízká |

Odchylka se zobrazuje jako `▼ 1 %` / `▲ 12 %` proti benchmarku. Benchmark je v prototypu tvořený reálnými cenami, za které auta koupili kamarádi — proto v reportu „vs kámoši“.

## 6. Logistika a plánování okruhů — *běží částečně*

- Vzdálenost od domova. Prototyp počítá **vzdušnou čáru ×1,3** jako odhad silniční trasy.
- Skládání prohlídek do jednoho výletu: „Zaglauer 160 km + Kary 170 km, obojí Bavorsko u hranic → jedna sobota pokryje tři kusy.“
- Dva vozy u jednoho dealera se řadí za sebe.

## 7. Vyjednávání — *koncept*

- Ověření dostupnosti a rezervace termínu.
- Cenová nabídka s odůvodněním z dat (srovnatelný kus jinde, chybějící SOH, nutnost dovozu).
- Eskalace na uživatele u čehokoli závazného.

## 8. Papíry a dovoz — *koncept*

Průvodce celým řetězcem od rezervace po SPZ včetně nákladů a pořadí kroků. Detail v [04 · Dovoz a papíry](04-dovoz-a-papiry.md).

---

## Výstup: denní report

Všechno výše ústí do jedné věci — **krátkého ranního reportu v 08:00**. Ne seznam všech inzerátů, ale seřazený výběr rozdělený do skupin podle rozhodnutí, které z něj plyne:

- **Volal bych jako první** — nejlepší poměr, akční další krok.
- **Nejlepší v ČR (bez dovozu)** — pro toho, kdo dovoz nechce řešit.
- **Pokud chceš konkrétní výbavu** — kompromisní kusy s jednou žádanou vlastností navíc.

U každého kusu jedna věta, proč tam je, a co udělat dál.

## Související

- [02 · Architektura](02-architektura.md)
- [06 · Příklad reálného reportu](06-priklad-reportu.md)
