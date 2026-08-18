"use client";

import { useEffect } from "react";

/**
 * Decentní fade-in při scrollu. Animaci definuje CSS jen při
 * prefers-reduced-motion: no-preference — tady se pouze přidává třída.
 *
 * Sleduje všechny prvky s atributem `data-reveal` v dokumentu, takže
 * jednotlivé sekce mohou zůstat serverovými komponentami.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
