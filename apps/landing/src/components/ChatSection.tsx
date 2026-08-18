import styles from "@/components/ChatSection.module.css";

interface Message {
  from: "agent" | "dealer";
  who: string;
  text: string;
}

const THREAD: Message[] = [
  {
    from: "agent",
    who: "Agent → dealer",
    text: "Guten Tag, ich interessiere mich für den Model 3 Performance (EZ 12/2022, 51.000 km). Könnten Sie mir bitte das Batteriezertifikat bzw. einen Screenshot des SOH schicken? Und verkaufen Sie auch an Privatkäufer aus Tschechien?",
  },
  {
    from: "dealer",
    who: "Dealer → agent",
    text: "Hallo, ja — Verkauf an Privat aus der EU ist kein Problem. SOH liegt bei 95 %, Zertifikat hängt an. Sommer- und Winterräder sind dabei.",
  },
  {
    from: "agent",
    who: "Agent → dealer",
    text: "Danke! Ich komme aus Prag, ca. 160 km. Wäre Samstag um 10:00 zur Besichtigung möglich?",
  },
  {
    from: "dealer",
    who: "Dealer → agent",
    text: "Samstag 10:00 passt. Bis dann!",
  },
];

export function ChatSection() {
  return (
    <section className="band">
      <div className="container split">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Komunikace</p>
          <h2>
            Když něco chybí, agent se <em className="hl">zeptá</em>.
          </h2>
          <p className="lead">
            Nejbližší nadějný vůz měl v inzerátu díru: žádný údaj o zdraví baterie. A dealer e-maily
            nevyřizuje. Tohle je skutečná výměna přes WhatsApp — v němčině, tak jak proběhla.
          </p>
          <p className={`small muted ${styles.disclaimer}`}>
            Ve výchozím nastavení agent zprávu jen připraví a odešle ji až po vašem odsouhlasení.
          </p>
        </div>

        <div className={styles.chat} data-reveal>
          <p className={styles.note}>
            Automobile Zaglauer, Kirchberg · chybí SOH · e-maily nevyřizují → WhatsApp
          </p>

          {THREAD.map((message, index) => (
            <div
              key={index}
              className={`${styles.msg} ${message.from === "agent" ? styles.msgAgent : styles.msgDealer}`}
            >
              <span className={styles.who}>{message.who}</span>
              {message.text}
            </div>
          ))}

          <p className={styles.result}>
            <strong>Doptáním získáno:</strong> SOH 95 % s certifikátem, potvrzený prodej
            soukromníkovi z EU, letní i zimní kola v ceně a termín na sobotu. Skóre vozu se
            přepočítalo ze 7 na 8.
          </p>
        </div>
      </div>
    </section>
  );
}
