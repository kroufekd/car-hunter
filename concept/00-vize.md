# 00 · Vize

## Problém

Koupě ojetého auta v roce 2026 vypadá takhle:

- **Inzerátů je moc a mizí rychle.** Na jednu konkrétní specifikaci (Tesla Model 3, 2022+, do 800k, nájezd do 70k km) běží v ČR a Německu dohromady kolem **272 aktivních inzerátů**. Dobré kusy zmizí během hodin.
- **Půlka podstatných informací v inzerátu není.** U elektromobilu chybí SOH baterie, u benzínu servisní historie, skoro všude počet majitelů, původ, nehodovost. Filtry na bazarech na tyhle věci neumí filtrovat, protože je prodejce nevyplňuje.
- **Inzeráty aktivně matou.** Reálný příklad z reportu: Model 3 Long Range byl na mobile.de vedený jako „153 kW“, protože dealer vyplnil trvalý výkon místo špičkového. Ve filtru na výkon se nikdy neukázal. Jiný kus měl v titulku „LR“, ale ve výbavě „Bremssättel Performance“ — jedno z toho je špatně.
- **Cenový rozdíl mezi trhy je větší než jakékoli smlouvání.** Stejná verze Performance z roku 2022: Chrudim **830 000 Kč**, Hesensko **726 000 Kč**. Rozdíl **104 000 Kč** za srovnatelný kus.
- **Dovoz je papírově otravný.** DPH, Kurzzeitkennzeichen, přeprava, celní vyřízení, evidenční kontrola, STK, registrace. Každý krok má pořadí a cenu, kterou člověk zjišťuje až za pochodu.

Výsledek: člověk buď stráví šest týdnů ručním refreshováním bazarů, nebo koupí to, co bylo zrovna po ruce, a přeplatí.

## Řešení

Agent, kterému řekneš specifikaci, a on:

1. **Loví nepřetržitě** napříč trhy v ČR i v Evropě.
2. **Doplňuje díry** — sám kontaktuje prodejce a doptá se na to, co v inzerátu chybí.
3. **Prověřuje** — VIN, fotky, historie, cena vůči benchmarku.
4. **Doručí rozhodnutí, ne seznam** — krátký seřazený list s konkrétním dalším krokem u každého kusu.
5. **Dotáhne obchod** — komunikace s prodejcem, termín prohlídky, vyjednávání, dovoz, papíry, přepis.

Rozdíl proti bazarovým hlídačům: hlídač pošle notifikaci na nový inzerát. Agent řekne, **kam volat první a proč**, a ten telefon případně vyřídí sám.

## Pro koho

- **Člověk, který ví, co chce, a nechce tím strávit měsíc.** Má specifikaci v hlavě, chce ji dostat na papír a pak jen jezdit na prohlídky, které mají smysl.
- **Kupující, který se nebojí dovozu, ale bojí se papírů.** Ví, že v Německu ušetří stovku tisíc, ale netuší, co obnáší Kurzzeitkennzeichen.
- **Někdo, kdo hledá auto se skrytými parametry** — elektromobily (SOH, verze hardwaru, EAP), youngtimery, konkrétní výbavové kombinace.

## Proč zrovna teď

Tři věci se potkaly: jazykové modely zvládnou přečíst nestrukturovaný inzerát i fotku a vytáhnout z toho strukturovaná data; agenti umí vést reálnou konverzaci v cizím jazyce přes e-mail i formulář; a cenové rozdíly mezi evropskými trhy jsou dost velké na to, aby dovoz dával smysl i pro auto za tři čtvrtě milionu.

## Nefunkční cíle (co CarHunter není)

- **Není bazar.** Nic neprodává, nemá vlastní inventář, nebere provizi od prodejce.
- **Není záruka.** Nenahradí prohlídku u mechanika ani diagnostiku. Filtruje, nezaručuje.
- **Nescrapuje, co nemá.** Pracuje s veřejně dostupnými inzeráty; kde je API, jede přes API.

## Související

- [01 · Schopnosti agenta](01-agent.md)
- [06 · Příklad reálného reportu](06-priklad-reportu.md)
