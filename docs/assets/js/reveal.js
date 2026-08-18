/* CarHunter — odhalování sekcí při scrollu a dopočítávání čísel ve statistikách. */

(function initReveal() {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = document.querySelectorAll("[data-reveal]");
  var counters = document.querySelectorAll("[data-count-to]");

  if (reduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    counters.forEach(function (el) {
      el.textContent = formatNumber(Number(el.dataset.countTo), el.dataset.countSuffix);
    });
    return;
  }

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealTargets.forEach(function (el, i) {
    if (!el.style.getPropertyValue("--reveal-delay")) {
      el.style.setProperty("--reveal-delay", (i % 4) * 70 + "ms");
    }
    revealObserver.observe(el);
  });

  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(function (el) {
    countObserver.observe(el);
  });

  function animateCount(el) {
    var target = Number(el.dataset.countTo);
    var suffix = el.dataset.countSuffix || "";
    var duration = 1400;
    var startedAt = null;

    function frame(now) {
      if (startedAt === null) startedAt = now;
      var progress = Math.min((now - startedAt) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNumber(Math.round(target * eased), suffix);
      if (progress < 1) window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
  }

  function formatNumber(value, suffix) {
    return value.toLocaleString("cs-CZ") + (suffix || "");
  }
})();
