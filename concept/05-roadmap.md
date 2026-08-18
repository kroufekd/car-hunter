# 05 · Roadmapa

## Kde to je dnes

Běžící soukromý prototyp:

- Monitor tří trhů (sauto.cz, bazoš, mobile.de) nad jednou specifikací.
- ~272 aktivních kusů v databázi.
- Skóre, SOH, vzdálenost od Prahy, cena v Kč i €, odchylka od benchmarku.
- Denní e-mailový report v 08:00, finální výběr zatím ruční.

Reálný výstup: [06 · Příklad reálného reportu](06-priklad-reportu.md).

---

## Fáze 1 — Hlídač, který se nemýlí *(MVP)*

Cíl: report, který jde poslat komukoli bez ručního dolaďování.

- [ ] Specifikace jako datový objekt, ne natvrdo v konfiguraci
- [ ] Deduplikace přes VIN a otisk
- [ ] Detekce konfliktů v inzerátu (trvalý vs. špičkový výkon, titulek vs. výbava)
- [ ] Automatické seskupení reportu do skupin podle rozhodnutí
- [ ] Historie cen a signál „zlevnil“
- [ ] Web: založení specifikace, seznam nálezů, archiv reportů

**Hotovo, když:** nový uživatel zadá specifikaci a druhý den ráno mu přijde použitelný report bez zásahu člověka.

## Fáze 2 — Agent, který se doptá

Cíl: díry v inzerátu se zaplní samy.

- [ ] Šablony dotazů podle chybějícího pole a jazyka trhu
- [ ] E-mail a kontaktní formulář jako kanál
- [ ] Zpracování odpovědi → strukturovaná data → přepočet skóre
- [ ] Stav „čeká na odpověď“ v kartě vozu
- [ ] Schvalovací režim (návrh zprávy → odklepnutí → odeslání)
- [ ] VIN dekodér
- [ ] Vision nad fotkami

**Hotovo, když:** kus, který přišel bez SOH, má do 48 hodin doloženou hodnotu nebo jasně označené „prodejce neodpověděl“.

## Fáze 3 — Deal room

Cíl: od shortlistu k podpisu na jednom místě.

- [ ] Vlákno komunikace per vůz
- [ ] Domlouvání termínů, kalendář, plán okruhu
- [ ] Cenová nabídka s odůvodněním z dat
- [ ] Checklist prohlídky do mobilu
- [ ] Hlasový kanál (telefon) pro dealery, kteří nepíšou

## Fáze 4 — Dovoz na klíč

Cíl: papíry přestanou být důvod, proč se dovoz nekoná.

- [ ] Checklist dokladů podle země původu
- [ ] Kalkulačka celkové ceny (vůz + odvoz + poplatky)
- [ ] Napojení na dopravce, srovnání nabídek
- [ ] Průvodce evidenční kontrolou, STK a registrací
- [ ] Přepis a předání

## Rozšíření trhů

Pořadí podle poměru přínos/práce: **AutoScout24** (DE/AT/EU) → **tipcars** (CZ) → **mobile.at** → **Marktplaats** (NL).

---

## Otevřené otázky

- **Model zpoplatnění.** Předplatné za hlídání, nebo podíl z úspory při dovozu? Podíl z úspory zní férově, ale úsporu je těžké nezpochybnitelně změřit.
- **Kdo nese odpovědnost za doporučení.** Agent není znalec. Kde přesně vede čára mezi „filtrem“ a „radou“?
- **Vztah k dealerům.** Nepřítel, nebo distribuční kanál? Dealer, který má doložené SOH, na tomhle vydělá.
- **Autopilot komunikace.** Kolik uživatelů to vůbec zapne, když ví, že agent píše jejich jménem?

## Související

- [00 · Vize](00-vize.md)
- [02 · Architektura](02-architektura.md)
