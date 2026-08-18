"use client";

import { useState } from "react";

import { ExternalLinkIcon } from "@/components/icons";
import styles from "@/components/Report.module.css";
import { report, type DeltaTone, type Listing } from "@/data/report";

const DELTA_CLASS: Record<DeltaTone, string> = {
  good: styles.deltaGood,
  warn: styles.deltaWarn,
  bad: styles.deltaBad,
};

function formatDate(iso: string): string {
  const parts = iso.split("-");
  if (parts.length !== 3) return iso;
  return `${Number(parts[2])}. ${Number(parts[1])}. ${parts[0]}`;
}

function formatCzk(value: string): string {
  const match = value.match(/^(\d+)k$/);
  return match ? `${match[1]} 000 Kč` : value;
}

function ListingCard({ listing }: { listing: Listing }) {
  const meta = [listing.dealer, listing.distance, listing.rating ? `★ ${listing.rating}` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className={styles.listing}>
      <div className={styles.listingTop}>
        <span
          className={styles.listingScore}
          role="img"
          aria-label={`Skóre ${listing.score} z 10`}
        >
          {listing.score}
        </span>

        <div className={styles.listingHead}>
          <h4 className={styles.listingTitle}>{listing.title}</h4>
          <p className={styles.listingMeta}>
            <span className={styles.listingCountry}>{listing.country}</span>
            {meta}
          </p>
        </div>

        <span className={`${styles.listingDelta} ${DELTA_CLASS[listing.deltaTone]}`}>
          {listing.delta}
          <small>vs. benchmark</small>
        </span>
      </div>

      {listing.badge ? <p className={`badge ${styles.listingBadge}`}>{listing.badge}</p> : null}

      {listing.tags.length > 0 ? (
        <ul className={styles.listingTags}>
          {listing.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}

      {listing.note ? <p className={styles.listingNote}>{listing.note}</p> : null}

      <footer className={styles.listingFoot}>
        <p className={styles.listingPrice}>
          {formatCzk(listing.priceCzk)}
          {listing.priceEur ? <small>{listing.priceEur}</small> : null}
        </p>
        <a
          className={styles.listingLink}
          href={listing.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Otevřít inzerát
          <ExternalLinkIcon />
        </a>
      </footer>
    </article>
  );
}

export function ReportSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { meta, groups } = report;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const shift = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + shift + groups.length) % groups.length;
    setActiveIndex(next);
    document.getElementById(`report-tab-${groups[next].id}`)?.focus();
  };

  return (
    <section className="band band--dark" id="report">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Reálný výstup</p>
          <h2>
            Tenhle report opravdu <em className="hl">přišel</em>.
          </h2>
          <p className="lead">
            Žádná maketa. Ranní e-mail z 18. srpna 2026 — z 272 aktivních inzerátů v databázi agent
            vybral dvanáct. Odkazy vedou na skutečné inzeráty.
          </p>
        </div>

        <div className={styles.report} data-reveal>
          <div className={styles.bar}>
            <span>
              <strong>CarHunter</strong> · denní report
            </span>
            <span>Doručeno {formatDate(meta.date)} · 08:00</span>
          </div>

          <div className={styles.body}>
            <h3 className={styles.title}>{meta.title}</h3>
            <p className={styles.subtitle}>{meta.subtitle}</p>

            <div className={styles.tldr}>
              <strong>Shrnutí</strong>
              <span>{meta.tldr}</span>
            </div>

            <p className={styles.plan}>{meta.plan}</p>

            <div className={styles.tabs} role="tablist" aria-label="Skupiny inzerátů">
              {groups.map((group, index) => (
                <button
                  key={group.id}
                  type="button"
                  id={`report-tab-${group.id}`}
                  role="tab"
                  className={styles.tab}
                  aria-selected={index === activeIndex}
                  aria-controls={`report-panel-${group.id}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  {group.label}
                  <span className={styles.count}>{group.count}</span>
                </button>
              ))}
            </div>

            {groups.map((group, index) => (
              <div
                key={group.id}
                id={`report-panel-${group.id}`}
                role="tabpanel"
                aria-labelledby={`report-tab-${group.id}`}
                className={styles.list}
                hidden={index !== activeIndex}
              >
                {group.listings.map((listing) => (
                  <ListingCard key={listing.url} listing={listing} />
                ))}
              </div>
            ))}

            <p className={`promo ${styles.importNote}`}>{meta.importNote}</p>
            <p className={styles.foot}>{meta.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
