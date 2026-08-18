# 06 · Příklad reálného reportu

Report, který agent poslal **18. srpna 2026 v 08:00**. Je to skutečný výstup běžícího prototypu, ne ukázka. Stejná data pohánějí sekci „Reálný report“ na [pitch stránce](https://kroufekd.github.io/car-hunter/) a leží v [`docs/assets/data/report.js`](../docs/assets/data/report.js).

**Zadání:** Tesla Model 3, LR nebo Performance, ročník 2022+, rozumný nájezd, strop kolem 800 000 Kč, ochota jet i do Německa.

**Vstup:** 272 aktivních kusů v databázi (sauto + bazoš + mobile.de).
**Výstup:** 12 kusů ve třech skupinách.
**Metrika vzdálenosti:** vzdušná čára od Prahy, po silnici přibližně ×1,3.
**Benchmark:** ceny, za které stejné auto koupili kamarádi → sloupec „vs kámoši“.

---

## Krátká verze

> Nejlepší poměr je v Německu — pět kusů na lince kámošů (±3 %), z toho **Zaglauer Perf 738k je 160 km od Prahy** a **Kfz Kary 2× LR 30–34k km 774k je 170 km**. V ČR bez dovozu bych volal jen NCAR LR 740k a Mates Perf 830k. U všech DE kusů před cestou: vyžádat Batteriezertifikat / screenshot SOH, potvrdit, že prodají soukromníkovi, a domluvit termín (většina jen po telefonu).

## Skupina 1 — Volal bych jako první (7)

| Skóre | Vůz | Prodejce | Vzdálenost | Cena | vs kámoši |
|---|---|---|---|---|---|
| 9 | LR 366 kW · 12/2022 · 48 782 km · 1. majitel | 🇩🇪 Djawaheri Autohandel, Buxtehude | ~500 km | 724k / 29 900 € | ±0 % |
| 8 | Performance · 12/2022 · 51 000 km · SOH 95 % (certifikát) · 8 kol | 🇩🇪 Automobile Zaglauer, Kirchberg | **~160 km** | 738k / 30 500 € | ▲ 3 % |
| 9 | Performance 377 kW · 06/2022 · 47 673 km · 1. majitel | 🇩🇪 AutoExpo, Fernwald | ~400 km | 726k / 29 989 € | ▲ 1 % |
| 9 | LR · 03/2022 · 57 000 km · SOH 93,8 % · Ryzen · Matrix LED | 🇩🇪 Dream Cars Stade, Agathenburg | ~510 km | 725k / 29 950 € | ▲ 2 % |
| 8 | LR 366 kW · 09/2022 · 60 358 km · 1. majitel · TÜV report | 🇩🇪 AutoExpo, Fernwald | ~400 km | **702k / 28 990 €** | ▼ 1 % |
| 8 | LR · 08/2023 · jen 25 100 km · Autopilot · Performance brzdy | 🇩🇪 Der-Fahrzeugmakler T. Genske, Ahrensburg | ~490 km | 775k / 32 000 € | ▲ 3 % |
| 7 | LR · 12/2022 · 34 000 km (+ druhý kus 30 000 km) · Ryzen · záruka do 12/2026 | 🇩🇪 Kfz Handel Eduard Kary, Außernzell u Pasova | **~170 km** | 775k / 32 000 € | ▲ 5 % |

## Skupina 2 — Nejlepší v ČR bez dovozu (3)

| Skóre | Vůz | Prodejce | Vzdálenost | Cena | vs kámoši |
|---|---|---|---|---|---|
| 8 | LR · 12/2022 · 75 925 km · SOH 94 % · Cebia · Ryzen | 🇨🇿 NCAR Sokolov | ~130 km | 740k | ▲ 8 % |
| 8 | Performance 377 kW · 12/2022 · 32 953 km · SOH 95 % | 🇨🇿 Mates Auto, Chrudim | ~100 km | 830k | ▲ 12 % |
| 8 | LR · 6/2023 · 29 353 km · SOH 97 % · záruka do 6/2027 | 🇨🇿 NCAR Sokolov | ~130 km | 820k | ▲ 10 % |

## Skupina 3 — Pokud chceš EAP nebo bílý interiér (2)

| Skóre | Vůz | Prodejce | Vzdálenost | Cena | vs kámoši |
|---|---|---|---|---|---|
| 7 | LR · 12/2022 · 46 197 km · **Enhanced Autopilot** · Ryzen · unfallfrei | 🇩🇪 Autozentrum Schmitz, Mönchengladbach | ~580 km | 815k / 33 650 € | ▲ 13 % |
| 7 | LR · 09/2022 · 55 000 km · **bílý premium interiér** · Deep Blue · 1. majitel | 🇩🇪 soukromník, Hamburg | ~490 km | 787k / 32 490 € | ▲ 10 % |

---

## Co z reportu plyne

**Praktický plán cest:** jeden výlet na jih (Zaglauer 160 km + Kary 170 km, obojí Bavorsko u hranic) pokryje tři nejbližší kusy; druhý okruh do Hesenska (AutoExpo LR 702k + Perf 726k, 400 km) má dva kusy u jednoho dealera. Hamburská trojice (Djawaheri, Dream Cars, Genske) je nejlepší cenou, ale ~500 km — dává smysl jen, když předem projde SOH certifikát a fotky.

**Náklady dovozu:** cena vč. 19 % DPH je konečná, v ČR se DPH už neplatí; Kurzzeitkennzeichen ~100 € nebo přeprava 8–15 000 Kč, CZ registrace 3 000–5 000 Kč.

---

## Proč je zrovna tenhle report dobrý argument

1. **Rozdíl mezi trhy je obrovský.** Nejlepší CZ Performance stojí 830k, srovnatelný v Hesensku 726k. **104 000 Kč** za stejnou verzi a podobný nájezd.
2. **Agent našel kus, který by nikdo nevyfiltroval.** Genske LR 08/2023 s 25 100 km byl na mobile.de vedený jako „153 kW“ — trvalý výkon místo špičkového. Ve filtru na výkon by se nikdy neukázal.
3. **Agent našel i rozpor.** Ten samý vůz má v titulku „LR“, ale ve výbavě „Bremssättel Performance“. Report to neschoval — označil to jako věc k ověření.
4. **Chybějící data jsou označená, ne dopočítaná.** „SOH neuvedeno → vyžádat certifikát“ je konkrétní další krok, ne odhad.
5. **Výstup je rozhodnutí, ne seznam.** Skupiny odpovídají na otázku „co s tím mám dělat“, ne „co existuje“.
6. **Ruční práce je viditelná.** Patička reportu přiznává „ruční výběr z DB monitoru“ — to je přesně ta část, kterou má fáze 1 roadmapy zautomatizovat.

## Související

- [01 · Schopnosti agenta](01-agent.md)
- [05 · Roadmapa](05-roadmap.md)
