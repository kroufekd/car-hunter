import { HeroIllustration } from "@/components/HeroIllustration";
import styles from "@/components/Hero.module.css";

const FACTS = [
  { value: "272", label: "aktivních inzerátů na jednu specifikaci" },
  { value: "3", label: "napojené trhy: sauto.cz, bazoš, mobile.de" },
  { value: "08:00", label: "report každé ráno, sedm dní v týdnu" },
  { value: "104 000 Kč", label: "nalezený rozdíl mezi trhy za srovnatelný vůz" },
];

export function Hero() {
  return (
    <section className="band band--hero">
      <div className={`container ${styles.hero}`}>
        <p className={styles.badgeRow}>
          <span className="badge">Soukromý prototyp · reálná data</span>
        </p>
        <h1>
          Auto si nehledáte. Necháte si ho <em className="hl">najít</em>.
        </h1>
        <p className="lead">
          CarHunter je AI agent pro koupi ojetého auta. Popíšete mu, co hledáte — a on pak tiše
          prochází inzeráty v Česku i v Německu, doptává se prodejců na to, co v inzerátech chybí, a
          každé ráno v 08:00 pošle krátký report: několik aut, na která má smysl volat, a proč.
        </p>
        <div className={styles.actions}>
          <a className="btn btn--primary" href="#report">
            Podívat se na reálný report
          </a>
          <a className="btn btn--ghost" href="#jak">
            Jak to funguje
          </a>
        </div>

        <div className={`${styles.visual} on-dark`} data-reveal>
          <HeroIllustration />
          <div className={styles.overlay}>
            <p>
              Zatímco spíte, <em className="hl">agent pracuje</em>.
            </p>
          </div>
          <div className={styles.chip}>
            <strong>Ráno v 08:00</strong>
            12 vybraných aut z 272 inzerátů
          </div>
        </div>

        <div className={styles.facts}>
          {FACTS.map((fact) => (
            <div key={fact.label} className={styles.factsItem}>
              <div className={styles.factsValue}>{fact.value}</div>
              <div className={styles.factsLabel}>{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
