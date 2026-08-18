import type { ComponentType } from "react";

import {
  ChatIcon,
  DocumentIcon,
  PhoneIcon,
  PhotoIcon,
  RouteIcon,
  SearchIcon,
  StampIcon,
  TagIcon,
} from "@/components/icons";

type Status = "live" | "partial" | "concept";

interface Capability {
  icon: ComponentType;
  status: Status;
  title: string;
  body: string;
}

const STATUS_LABEL: Record<Status, string> = {
  live: "v provozu",
  partial: "částečně",
  concept: "koncept",
};

const CAPABILITIES: Capability[] = [
  {
    icon: SearchIcon,
    status: "live",
    title: "Hledání napříč trhy",
    body: "Dnes sauto.cz, bazoš a mobile.de; v plánu AutoScout24, tipcars, mobile.at a Marktplaats. Duplicity pozná podle VIN i otisku inzerátu.",
  },
  {
    icon: ChatIcon,
    status: "concept",
    title: "Doptávání prodejců",
    body: "Chybí SOH nebo servisní historie? Agent napíše prodejci v jeho jazyce a odpověď propíše do karty vozu. Zprávy odchází až po vašem odsouhlasení.",
  },
  {
    icon: PhotoIcon,
    status: "concept",
    title: "Čtení fotografií",
    body: "Stav laku, spáry, opotřebení interiéru, nájezd na displeji. Pozná i antisignály — pět fotek a všechny ze stejné strany.",
  },
  {
    icon: DocumentIcon,
    status: "concept",
    title: "VIN a historie",
    body: "Skutečná verze a výbava z VIN, svolávací akce, registry historie. Odhalí i rozpory — třeba titulek „LR“, ale Performance brzdy ve výbavě.",
  },
  {
    icon: TagIcon,
    status: "live",
    title: "Cenové skóre",
    body: "Každý vůz dostane skóre 0–10 a odchylku od benchmarku. Nedoložené SOH plné skóre nedostane, i kdyby prodejce tvrdil totéž číslo.",
  },
  {
    icon: RouteIcon,
    status: "partial",
    title: "Plánování prohlídek",
    body: "Vzdálenost od domova a skládání prohlídek do jednoho výletu. Dva vozy u téhož dealera se řadí za sebou.",
  },
  {
    icon: PhoneIcon,
    status: "concept",
    title: "Vyjednávání",
    body: "Ověření dostupnosti, rezervace termínu, cenová nabídka podložená daty. Cokoli závazného zůstává na vás.",
  },
  {
    icon: StampIcon,
    status: "concept",
    title: "Dovoz a papíry",
    body: "Od kupní smlouvy po českou značku. Agent hlídá pořadí kroků, termíny i skutečné celkové náklady.",
  },
];

export function Capabilities() {
  return (
    <section className="band band--sand" id="umi">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Co agent umí</p>
          <h2>
            Osm věcí, které dělá <em className="hl">za vás</em>.
          </h2>
          <p className="lead">
            Část už běží v prototypu, část je zatím na papíře. U každé schopnosti to poctivě uvádíme.
          </p>
        </div>
        <div className="grid grid--4">
          {CAPABILITIES.map(({ icon: IconComponent, status, title, body }) => (
            <article key={title} className="card cap" data-reveal>
              <div className="cap__head">
                <span className="cap__icon">
                  <IconComponent />
                </span>
                <span
                  className={`badge cap__status${status === "concept" ? "" : " badge--green"}`}
                >
                  {STATUS_LABEL[status]}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
