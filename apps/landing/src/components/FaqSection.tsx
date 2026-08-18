import styles from "@/components/FaqSection.module.css";

const QUESTIONS = [
  {
    q: "Odkud agent bere data?",
    a: "Z veřejně dostupných inzerátů. Žádné obcházení přihlášení ani placených zdí; kde trh nabízí API, jede se přes něj. Slušné intervaly dotazů a respekt k robots.txt jsou samozřejmost.",
  },
  {
    q: "Píše prodejcům sám za mě?",
    a: "Jen s vaším vědomím. Ve výchozím nastavení zprávu připraví a odešle až po odsouhlasení. U rutinních dotazů — zdraví baterie, počet majitelů, volný termín — si můžete zapnout plnou automatiku.",
  },
  {
    q: "Funguje to i na jiná auta než Teslu?",
    a: "Ano. Tesla byla první případ, protože má nejvíc skrytých parametrů: zdraví baterie, verzi palubního počítače, Autopilot vázaný na vůz. Čím složitější specifikace, tím víc agent pomůže.",
  },
  {
    q: "Co když auto koupím a bude to průšvih?",
    a: "Agent není záruka a nenahradí prohlídku u mechanika. Je to filtr: ušetří cesty za kusy bez šance a vytáhne na světlo to, o čem inzerát mlčí. Rozhodnutí zůstává vaše.",
  },
  {
    q: "Kolik to reálně ušetří?",
    a: "Na jednom voze z reportu vyšel rozdíl mezi Chrudimí a Hesenskem na zhruba 104 000 Kč — stejná verze, srovnatelný nájezd, obojí u dealera. To je víc, než kolik obvykle usmlouváte na místě.",
  },
];

export function FaqSection() {
  return (
    <section className="band band--sand-light" id="faq">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Otázky</p>
          <h2>
            Na co se lidé <em className="hl">ptají první</em>.
          </h2>
        </div>
        <div className={styles.faq} data-reveal>
          {QUESTIONS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
