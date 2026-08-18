const STEPS = [
  {
    num: "01",
    title: "Popíšete, co hledáte",
    body: "Model, ročník, nájezd, strop ceny — ale i věci, které bazarové filtry neumějí: zdraví baterie, počet majitelů, jak daleko jste ochotni jet.",
  },
  {
    num: "02",
    title: "Agent prochází trhy",
    body: "Nepřetržitě sleduje sauto.cz, bazoš a mobile.de. Nový inzerát vidí v řádu minut a pamatuje si historii: kdy se objevil, kdy zlevnil, kdy zmizel.",
  },
  {
    num: "03",
    title: "Prověří a doptá se",
    body: "Dekóduje VIN, přečte fotografie, spočítá vzdálenost. Když v inzerátu něco chybí, napíše prodejci — česky, německy nebo anglicky.",
  },
  {
    num: "04",
    title: "Ráno přijde report",
    body: "V 08:00 dostanete krátký seřazený výběr: kam volat jako první, co je nejlepší bez dovozu a co stojí za kompromis.",
  },
];

export function HowItWorks() {
  return (
    <section className="band" id="jak">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Jak to funguje</p>
          <h2>
            Čtyři kroky. Dva jsou <em className="hl">vaše</em>.
          </h2>
          <p className="lead">
            Vy popíšete auto a rozhodnete, kam pojedete. Všechno mezi tím je práce agenta.
          </p>
        </div>
        <div className="grid grid--4">
          {STEPS.map((step) => (
            <article key={step.num} className="step" data-reveal>
              <span className="step__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
