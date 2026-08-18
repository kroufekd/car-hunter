import { REPO_URL, NEW_ISSUE_URL } from "@/lib/links";
import styles from "@/components/CtaSection.module.css";

export function CtaSection() {
  return (
    <section className="band">
      <div className="container">
        <div className={`${styles.cta} band--dark`} data-reveal>
          <p className="eyebrow">Pitch, ne hotový produkt</p>
          <h2>
            Popište auto. Zbytek je <em className="hl">práce agenta</em>.
          </h2>
          <p className="lead">
            CarHunter zatím běží jako soukromý prototyp nad jednou specifikací. Tahle stránka je
            návrh, jak by z něj mohl být produkt — a pozvánka to probrat.
          </p>
          <div className={styles.actions}>
            <a className="btn btn--primary" href={REPO_URL} rel="noopener">
              Repozitář a dokumentace
            </a>
            <a className="btn btn--ghost" href={NEW_ISSUE_URL} rel="noopener">
              Napsat poznámku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
