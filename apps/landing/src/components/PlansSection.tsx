import styles from "@/components/PlansSection.module.css";

interface Plan {
  name: string;
  price: string;
  priceNote?: string;
  badge?: string;
  featured?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: "Watch",
    price: "zdarma",
    features: [
      "jedna specifikace",
      "české trhy",
      "ranní report v 08:00",
      "upozornění na nový vůz",
    ],
  },
  {
    name: "Hunt",
    price: "490 Kč",
    priceNote: "/ měsíc",
    badge: "Navrhovaný střed",
    featured: true,
    features: [
      "vše z Watch",
      "evropské trhy (DE, AT, NL)",
      "doptávání prodejců",
      "VIN a čtení fotografií",
      "neomezené specifikace",
    ],
  },
  {
    name: "Concierge",
    price: "podíl z úspory",
    features: [
      "vše z Hunt",
      "vyjednávání ceny",
      "prohlídka s partnerem na místě",
      "dovoz, papíry, registrace",
      "předání klíčů",
    ],
  },
];

export function PlansSection() {
  return (
    <section className="band" id="baliky">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Balíčky</p>
          <h2>
            Od tichého hlídání <em className="hl">po klíče v ruce</em>.
          </h2>
          <p className="lead">
            Návrh, ne závazný ceník. Čísla jsou nástřel do diskuze — podstatné je, kde končí ruční
            práce a začíná agent.
          </p>
        </div>
        <div className="grid grid--3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`card ${plan.featured ? "card--featured " : ""}${styles.plan}`}
              data-reveal
            >
              {plan.badge ? (
                <p>
                  <span className="badge">{plan.badge}</span>
                </p>
              ) : null}
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.price}>
                {plan.price}
                {plan.priceNote ? <small> {plan.priceNote}</small> : null}
              </p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
