import styles from "@/components/ImportSection.module.css";

interface Step {
  title: string;
  cost?: string;
  body: string;
}

const STEPS: Step[] = [
  {
    title: "Rezervace a ověření",
    body: "Potvrzení, že dealer prodá soukromníkovi z EU, vyžádání dokladů a domluvení termínu.",
  },
  {
    title: "Prohlídka a testovací jízda",
    body: "Checklist na místě: shoda VIN s inzerátem, SOH z palubního menu, obě sady kol.",
  },
  {
    title: "Kupní smlouva a platba",
    body: "Cena včetně 19 % německé DPH je konečná — v Česku se už nic nedoplácí.",
  },
  {
    title: "Cesta domů",
    cost: "~100 € / 8–15 000 Kč",
    body: "Krátkodobá značka (Kurzzeitkennzeichen) za zhruba 100 €, nebo přeprava odtahovkou.",
  },
  {
    title: "Celní a daňové vyřízení",
    body: "Doklad o zaplacené DPH, COC list nebo německý technický průkaz.",
  },
  {
    title: "Evidenční kontrola a STK",
    body: "Na stanici technické kontroly; musí proběhnout před registrací.",
  },
  {
    title: "Registrace a SPZ",
    cost: "3–5 000 Kč",
    body: "Zápis do registru vozidel a přidělení značky. Elektromobil neplatí ekologický poplatek.",
  },
];

export function ImportSection() {
  return (
    <section className="band band--sand" id="dovoz">
      <div className="container split">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Dovoz a papíry</p>
          <h2>
            Nejvýhodnější kusy stojí za hranicí. Papíry nejsou <em className="hl">překážka</em>.
          </h2>
          <p className="lead">
            Srovnatelný vůz je v Německu klidně o sto tisíc levnější. CarHunter vás provede celou
            cestou od rezervace po českou značku — ví, co kdy stojí a v jakém pořadí to musí
            proběhnout.
          </p>
          <p className={`promo ${styles.callout}`}>
            <strong>Z reportu:</strong> blízké kusy v Bavorsku jsou 160 a 170 km od Prahy — obě
            prohlídky zvládnete za jednu sobotu. Hamburská trojice (~500 km) dává smysl, až když
            předem projde certifikát SOH.
          </p>
        </div>

        <ol className={styles.timeline} data-reveal>
          {STEPS.map((step) => (
            <li key={step.title}>
              <p className={styles.title}>
                {step.title}
                {step.cost ? <span className={styles.cost}>{step.cost}</span> : null}
              </p>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
