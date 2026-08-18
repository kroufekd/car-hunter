const STATS = [
  {
    value: "272",
    label: "inzerátů na jedinou specifikaci",
    note: "Tesla Model 3 od roku 2022 — tolik aktivních inzerátů drží jeden běžící monitor napříč Českem a Německem.",
  },
  {
    value: "104 000 Kč",
    label: "rozdíl mezi trhy za srovnatelný vůz",
    note: "Model 3 Performance 2022: v Chrudimi za 830 000 Kč, v Hesensku za 726 000 Kč. Stejná verze, srovnatelný nájezd.",
  },
  {
    value: "„153 kW“",
    label: "inzerát, který přes filtr nenajdete",
    note: "Dealer vyplnil trvalý výkon místo špičkového, a vůz tak z výkonových filtrů vypadl. Agent ho přesto našel.",
  },
];

export function ProblemSection() {
  return (
    <section className="band band--sand">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Proč vzniká</p>
          <h2>
            Dobrá auta nepočkají, <em className="hl">až budete mít čas</em>.
          </h2>
          <p className="lead">
            Kdo někdy hledal konkrétní ojetinu, ten to zná: nejlepší kusy zmizí během hodin, polovina
            podstatných údajů v inzerátu chybí — a ceny se mezi trhy liší o víc, než kolik se dá
            usmlouvat na místě.
          </p>
        </div>
        <div className="grid grid--3">
          {STATS.map((stat) => (
            <div key={stat.label} className="card stat" data-reveal>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
              <p className="stat__note">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
