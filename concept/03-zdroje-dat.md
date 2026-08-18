# 03 · Zdroje dat

## Inzertní trhy

| Trh | Země | Stav | Poznámka |
|---|---|---|---|
| sauto.cz | CZ | **napojeno** | největší český trh, u dealerů často doložené Cebia prověření |
| bazoš | CZ | **napojeno** | soukromníci, nestrukturované popisy, nejvíc práce pro model |
| mobile.de | DE | **napojeno** | zdaleka nejlepší poměr cena/kus, ale pozor na výkon v kW (trvalý vs. špičkový) |
| AutoScout24 | DE/AT/EU | plán | druhý největší evropský trh |
| tipcars | CZ | plán | |
| mobile.at | AT | plán | |
| Marktplaats / Gaspedaal | NL | plán | levné elektromobily, jiný daňový režim |
| Carvago | EU | plán | agregátor, vlastní dovoz — spíš benchmark než zdroj |

**Pravidla sběru:** jen veřejně dostupné inzeráty, žádné obcházení přihlášení ani placených zdí, slušné intervaly dotazů, respektování `robots.txt`. Kde trh nabízí oficiální API nebo partnerský feed, jede se přes něj.

## Data o voze mimo inzerát

| Zdroj | K čemu | Stav |
|---|---|---|
| VIN dekodér (výrobce / veřejné dekodéry) | verze, výbava, datum a závod výroby | koncept |
| Registry historie (Cebia a obdoby) | nájezdy, škodní události, odcizení | koncept |
| Svolávací akce (RAPEX, weby výrobců) | otevřené kampaně | koncept |
| TÜV / Zustandsbericht u DE dealerů | technický stav | čte se z inzerátu |
| Batteriezertifikat / SOH screenshot | zdraví baterie u elektromobilů | doptáním u prodejce |

## Co je u elektromobilu navíc

Elektromobil má parametry, na které bazarové filtry vůbec nemyslí, a přitom rozhodují o ceně:

- **SOH baterie** (state of health) — v reportu se pohyboval mezi 93,8 % a 97 %. Rozdíl 3 % je desítky tisíc korun.
- **Verze palubního počítače** — u Tesly AMD Ryzen vs. Intel Atom. V inzerátu to napíše jeden dealer z deseti.
- **Enhanced Autopilot / FSD** — vázané na vůz, cena položky je v řádu desítek tisíc.
- **Typ a počet sad kol**, tepelné čerpadlo, Matrix LED.
- **Trvalý vs. špičkový výkon** — německé inzeráty vyplňují často trvalý (např. „153 kW“), takže vůz vypadne z filtru na výkon.

Právě proto byl prvním případem Model 3: má nejvyšší poměr „skrytých parametrů“ na inzerát.

## Kvalita a důvěra

Každý údaj má **zdroj a jistotu**:

| Jistota | Odkud |
|---|---|
| vysoká | doložený dokument (certifikát SOH, TÜV report, VIN dekodér) |
| střední | tvrzení prodejce v písemné odpovědi |
| nízká | text inzerátu bez doložení |
| žádná | odhad modelu z fotky |

Skóre pracuje s jistotou, ne jen s hodnotou. Kus s nedoloženým SOH nedostane stejné skóre jako kus s certifikátem, i kdyby prodejce tvrdil to samé číslo.

## Právní hranice

- Zpracovávají se údaje o **vozidlech**, ne o lidech. Jména dealerů jsou firemní údaje z veřejného inzerátu.
- Komunikace s prodejcem probíhá jménem uživatele a s jeho vědomím; identita agenta se nezakrývá.
- Data se drží jen po dobu, kdy je specifikace aktivní.

## Související

- [02 · Architektura](02-architektura.md)
- [04 · Dovoz a papíry](04-dovoz-a-papiry.md)
