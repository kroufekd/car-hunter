// Decentní fade-in při scrollu. Animaci definuje CSS jen při
// prefers-reduced-motion: no-preference — tady se pouze přidává třída.
(function () {
  "use strict";

  const elements = document.querySelectorAll("[data-reveal]");
  if (elements.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );

  elements.forEach((el) => observer.observe(el));
})();
