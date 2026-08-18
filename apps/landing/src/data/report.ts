// Reálný denní report CarHunter agenta z 18. 8. 2026.
// Data 1:1 z e-mailu, který agent poslal v 08:00 — zdroj pravdy pro sekci „Reálný report".

export type DeltaTone = "good" | "warn" | "bad";

export interface Listing {
  score: number;
  badge?: string;
  title: string;
  country: string;
  dealer: string;
  distance: string;
  rating: string | null;
  tags: string[];
  note: string;
  priceCzk: string;
  priceEur: string | null;
  delta: string;
  deltaTone: DeltaTone;
  url: string;
}

export interface ReportGroup {
  id: string;
  label: string;
  count: number;
  listings: Listing[];
}

export interface ReportMeta {
  date: string;
  title: string;
  subtitle: string;
  tldr: string;
  plan: string;
  importNote: string;
  footer: string;
  dbCount: number;
  sources: string[];
}

export interface Report {
  meta: ReportMeta;
  groups: ReportGroup[];
}

export const report: Report = 
{
  "meta": {
    "date": "2026-08-18",
    "title": "Tesla M3 — ručně vybrané kusy k prohlédnutí",
    "subtitle": "z 272 aktivních v DB (sauto + bazoš + mobile.de) · seřazeno podle toho, kam bych volal jako první · vzdálenost = vzdušnou čarou od Prahy (po silnici ×1,3)",
    "tldr": "Nejlepší poměr je v Německu — pět kusů na lince kámošů (±3 %), z toho Zaglauer Perf 738k je 160 km od Prahy a Kfz Kary 2× LR 30–34k km 774k je 170 km. V ČR bez dovozu bych volal jen NCAR LR 740k a Mates Perf 830k. U všech DE kusů před cestou: vyžádat Batteriezertifikat / screenshot SOH, potvrdit, že prodají soukromníkovi, a domluvit termín (většina jen po telefonu).",
    "plan": "Jeden výlet na jih (Zaglauer Perf 160 km + Kary 2× LR 170 km, obojí Bavorsko u hranic) pokryje tři nejbližší kusy; druhý okruh Hesensko (AutoExpo LR 702k + Perf 726k, 400 km) má dva kusy u jednoho dealera. Hamburská trojice (Djawaheri, Dream Cars, Genske) je nejlepší cenou, ale ~500 km — dává smysl jen, když předem projde SOH certifikát a fotky.",
    "importNote": "Dovoz: cena vč. 19 % DPH je konečná, v ČR bez DPH; Kurzzeitkennzeichen ~100 € nebo přeprava 8–15k Kč, CZ registrace 3–5k Kč.",
    "footer": "Ruční výběr z DB monitoru. Kompletní denní report (vč. DE) chodí každý den v 08:00.",
    "dbCount": 272,
    "sources": ["sauto.cz", "bazoš", "mobile.de"]
  },
  "groups": [
    {
      "id": "prvni",
      "label": "Volal bych jako první",
      "count": 7,
      "listings": [
        {
          "score": 9,
          "title": "LR 366 kW · EZ 12/2022 · 48 782 km · 1. majitel",
          "country": "DE",
          "dealer": "Djawaheri Autohandel, Buxtehude",
          "distance": "~500 km od Prahy (Hamburk)",
          "rating": "5,0 (69)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "černý int."],
          "note": "Stejná cena i nájezd jako Dominik. Jediný háček: dálka a SOH neuvedeno → vyžádat certifikát.",
          "priceCzk": "724k",
          "priceEur": "29 900 €",
          "delta": "±0 %",
          "deltaTone": "good",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=460873487"
        },
        {
          "score": 8,
          "title": "Performance · EZ 12/2022 · 51 000 km · SOH 95 % (certifikát) · 8 kol",
          "country": "DE",
          "dealer": "Automobile Zaglauer, Kirchberg (Bavorsko)",
          "distance": "~160 km od Prahy",
          "rating": "4,7 (46)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "černý int."],
          "note": "Nejbližší top kus. SOH doložené, letní + zimní sada. Jen telefon/WhatsApp (e-maily nevyřizují).",
          "priceCzk": "738k",
          "priceEur": "30 500 €",
          "delta": "▲ 3 %",
          "deltaTone": "warn",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=39730119734400"
        },
        {
          "score": 9,
          "title": "Performance 377 kW · EZ 06/2022 · 47 673 km · 1. majitel",
          "country": "DE",
          "dealer": "AutoExpo, Fernwald (Hesensko)",
          "distance": "~400 km od Prahy",
          "rating": "4,5 (1 777)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "černý int."],
          "note": "O ~100k levnější než Mates Perf 33k km v ČR. Velký dealer s TÜV-Zustandsberichtem ke každému vozu.",
          "priceCzk": "726k",
          "priceEur": "29 989 €",
          "delta": "▲ 1 %",
          "deltaTone": "good",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=462190867"
        },
        {
          "score": 9,
          "title": "LR · EZ 03/2022 · 57 000 km · SOH 93,8 % · AMD Ryzen · Matrix LED",
          "country": "DE",
          "dealer": "Dream Cars Stade, Agathenburg",
          "distance": "~510 km od Prahy (Hamburk)",
          "rating": "4,9 (53)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "černý int."],
          "note": "Jediný DE dealer, který píše SOH i Ryzen. 1. majitel, dojezd 530 km. Nevýhoda: dálka.",
          "priceCzk": "725k",
          "priceEur": "29 950 €",
          "delta": "▲ 2 %",
          "deltaTone": "warn",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=39901370595648"
        },
        {
          "score": 8,
          "title": "LR 366 kW · EZ 09/2022 · 60 358 km · 1. majitel · TÜV report",
          "country": "DE",
          "dealer": "AutoExpo, Fernwald",
          "distance": "~400 km od Prahy",
          "rating": "4,5 (1 777)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "černý int."],
          "note": "Nejlevnější „čistý“ LR v celé DB. Dá se spojit s prohlídkou Perf výše (stejný dealer).",
          "priceCzk": "702k",
          "priceEur": "28 990 €",
          "delta": "▼ 1 %",
          "deltaTone": "good",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=38667815634880"
        },
        {
          "score": 8,
          "title": "LR · EZ 08/2023 · jen 25 100 km · Autopilot · Performance brzdy",
          "country": "DE",
          "dealer": "Der-Fahrzeugmakler T. Genske, Ahrensburg",
          "distance": "~490 km od Prahy (Hamburk)",
          "rating": "4,8 (99)",
          "tags": ["VERY GOOD PRICE", "EAP neuvedeno", "int. neuvedeno", "2 majitelé"],
          "note": "Nový nález (schovaný pod „153 kW“ = trvalý výkon). Nejmladší a nejméně jetý LR pod 800k v celé DB. Ověřit verzi (title LR, ale „Bremssättel Performance“ ve výbavě).",
          "priceCzk": "775k",
          "priceEur": "32 000 €",
          "delta": "▲ 3 %",
          "deltaTone": "warn",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=459400373"
        },
        {
          "score": 7,
          "title": "LR · EZ 12/2022 · 34 000 km (+ druhý kus 30 000 km) · Ryzen · záruka do 12/2026",
          "country": "DE",
          "dealer": "Kfz Handel Eduard Kary, Außernzell u Pasova",
          "distance": "~170 km od Prahy",
          "rating": "5,0 (35)",
          "tags": ["MwSt ausweisbar", "EAP neuvedeno", "černý int."],
          "note": "Nejblíž hranicím ze všech; dva skoro totožné kusy 1. ruka (ID 456625730 má škrábnutý přední nárazník). Ideální na sobotní výlet.",
          "priceCzk": "775k",
          "priceEur": "32 000 €",
          "delta": "▲ 5 %",
          "deltaTone": "warn",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=459411218"
        }
      ]
    },
    {
      "id": "cr",
      "label": "Nejlepší v ČR (bez dovozu)",
      "count": 3,
      "listings": [
        {
          "score": 8,
          "title": "LR · reg. 12/2022 · 75 925 km · SOH 94 % · Cebia · Ryzen",
          "country": "CZ",
          "dealer": "NCAR Sokolov",
          "distance": "~130 km od Prahy",
          "rating": null,
          "tags": ["EAP neuvedeno", "černý int. (All Black premium)"],
          "note": "Nejlepší CZ hodnota, 49 fotek, k prohlídce hned. Záruka na vůz končí 12/2026.",
          "priceCzk": "740k",
          "priceEur": null,
          "delta": "▲ 8 %",
          "deltaTone": "warn",
          "url": "https://www.sauto.cz/osobni/detail/tesla/model-3/210716279"
        },
        {
          "score": 8,
          "title": "Performance 377 kW · reg. 12/2022 · 32 953 km · SOH 95 % · záruka vůz do 12/2026",
          "country": "CZ",
          "dealer": "Mates Auto, Chrudim",
          "distance": "~100 km od Prahy",
          "rating": null,
          "tags": ["Tesla specialista", "EAP neuvedeno", "int. neuvedeno"],
          "note": "Nejlepší CZ Perf; ale AutoExpo/Zaglauer v DE mají to samé o ~90–100k levněji.",
          "priceCzk": "830k",
          "priceEur": null,
          "delta": "▲ 12 %",
          "deltaTone": "bad",
          "url": "https://www.sauto.cz/osobni/detail/tesla/model-3/210853574"
        },
        {
          "score": 8,
          "title": "LR · reg. 6/2023 · 29 353 km · SOH 97 % · záruka vůz do 6/2027",
          "country": "CZ",
          "dealer": "NCAR Sokolov",
          "distance": "~130 km od Prahy",
          "rating": null,
          "tags": ["EAP neuvedeno", "černý int.", "PŘIPRAVUJEME"],
          "note": "Nejzdravější baterie v CZ nabídce; zatím jen 5 fotek, ověřit, kdy bude k prohlídce.",
          "priceCzk": "820k",
          "priceEur": null,
          "delta": "▲ 10 %",
          "deltaTone": "bad",
          "url": "https://www.sauto.cz/osobni/detail/tesla/model-3/210717383"
        }
      ]
    },
    {
      "id": "eap",
      "label": "Pokud chceš EAP / bílý interiér",
      "count": 2,
      "listings": [
        {
          "score": 7,
          "badge": "EAP ✓",
          "title": "LR · EZ 12/2022 · 46 197 km · Enhanced Autopilot · Ryzen · unfallfrei",
          "country": "DE",
          "dealer": "Autozentrum Schmitz, Mönchengladbach",
          "distance": "~580 km od Prahy",
          "rating": "4,6 (620)",
          "tags": ["černý int."],
          "note": "Jediný LR s EAP a nízkým km v celé DB. S EAP je to reálně na lince kámošů (Dominik měl EAP taky), i když odznak ukazuje +13 %.",
          "priceCzk": "815k",
          "priceEur": "33 650 €",
          "delta": "▲ 13 %",
          "deltaTone": "bad",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=460901062"
        },
        {
          "score": 7,
          "badge": "bílý interiér",
          "title": "LR · EZ 09/2022 · 55 000 km · bílý premium interiér · Deep Blue · 1. majitel · unfallfrei",
          "country": "DE",
          "dealer": "soukromník, Hamburg",
          "distance": "~490 km od Prahy",
          "rating": null,
          "tags": ["nabíjeno převážně doma"],
          "note": "Jediný bílý interiér v pásmu (v ČR žádný). Soukromník → bez záruky prodejce, ale věcný popis.",
          "priceCzk": "787k",
          "priceEur": "32 490 €",
          "delta": "▲ 10 %",
          "deltaTone": "bad",
          "url": "https://suchen.mobile.de/fahrzeuge/details.html?id=39914696450464"
        }
      ]
    }
  ]
}
;
