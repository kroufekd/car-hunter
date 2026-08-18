// Render sekce „Reálný report" z window.CARHUNTER_REPORT (assets/data/report.js).
// Vše se staví přes DOM API a textContent — bez innerHTML nad daty.
(function () {
  "use strict";

  const root = document.querySelector("[data-report]");
  if (!root) return;

  const data = window.CARHUNTER_REPORT;
  if (!data || !data.meta || !Array.isArray(data.groups) || data.groups.length === 0) {
    const fallback = document.createElement("p");
    fallback.className = "report__fallback";
    fallback.textContent =
      "Data reportu se nepodařilo načíst. Kompletní report je v repozitáři ve složce concept/.";
    root.appendChild(fallback);
    return;
  }

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  };

  const setText = (selector, value) => {
    const node = root.querySelector(selector);
    if (node && value) node.textContent = value;
  };

  const formatDate = (iso) => {
    const parts = typeof iso === "string" ? iso.split("-") : [];
    if (parts.length !== 3) return iso || "";
    return `${Number(parts[2])}. ${Number(parts[1])}. ${parts[0]}`;
  };

  const formatCzk = (value) => {
    const match = typeof value === "string" ? value.match(/^(\d+)k$/) : null;
    return match ? `${match[1]} 000 Kč` : value || "";
  };

  const buildMetaLine = (listing) => {
    const meta = el("p", "listing__meta");
    if (listing.country) meta.appendChild(el("span", "listing__country", listing.country));
    const bits = [listing.dealer, listing.distance, listing.rating ? `★ ${listing.rating}` : null]
      .filter(Boolean)
      .join(" · ");
    meta.appendChild(document.createTextNode(bits));
    return meta;
  };

  const buildListing = (listing) => {
    const card = el("article", "listing");
    const top = el("div", "listing__top");

    const score = el("span", "listing__score", String(listing.score ?? "–"));
    score.setAttribute("role", "img");
    score.setAttribute("aria-label", `Skóre ${listing.score ?? "neznámé"} z 10`);
    top.appendChild(score);

    const head = el("div", "listing__head");
    head.appendChild(el("h4", "listing__title", listing.title || "Bez titulku"));
    head.appendChild(buildMetaLine(listing));
    top.appendChild(head);

    if (listing.delta) {
      const delta = el("span", `listing__delta delta--${listing.deltaTone || "warn"}`, listing.delta);
      delta.appendChild(el("small", null, "vs. benchmark"));
      top.appendChild(delta);
    }
    card.appendChild(top);

    if (listing.badge) card.appendChild(el("p", "badge listing__badge", listing.badge));

    if (Array.isArray(listing.tags) && listing.tags.length > 0) {
      const tags = el("ul", "listing__tags");
      listing.tags.forEach((tag) => tags.appendChild(el("li", null, tag)));
      card.appendChild(tags);
    }

    if (listing.note) card.appendChild(el("p", "listing__note", listing.note));

    const foot = el("footer", "listing__foot");
    const price = el("p", "listing__price", formatCzk(listing.priceCzk));
    if (listing.priceEur) price.appendChild(el("small", null, listing.priceEur));
    foot.appendChild(price);

    if (listing.url) {
      const link = el("a", "listing__link", "Otevřít inzerát");
      link.href = listing.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.insertAdjacentHTML(
        "beforeend",
        '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10 10 2M4 2h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      );
      foot.appendChild(link);
    }
    card.appendChild(foot);
    return card;
  };

  // Meta texty
  setText("[data-report-date]", `Doručeno ${formatDate(data.meta.date)} · 08:00`);
  setText("[data-report-title]", data.meta.title);
  setText("[data-report-subtitle]", data.meta.subtitle);
  setText("[data-report-tldr]", data.meta.tldr);
  setText("[data-report-plan]", data.meta.plan);
  setText("[data-report-import]", data.meta.importNote);
  setText("[data-report-foot]", data.meta.footer);

  // Skupiny: přepínač + panely
  const tabsHost = root.querySelector("[data-report-tabs]");
  const panelsHost = root.querySelector("[data-report-panels]");
  if (!tabsHost || !panelsHost) return;

  const tabs = [];
  const panels = [];

  const selectTab = (index) => {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
    });
  };

  data.groups.forEach((group, index) => {
    const tab = el("button", "report__tab", group.label || group.id);
    tab.type = "button";
    tab.id = `report-tab-${group.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `report-panel-${group.id}`);
    tab.appendChild(el("span", "count", String(group.count ?? group.listings.length)));
    tab.addEventListener("click", () => selectTab(index));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const shift = event.key === "ArrowRight" ? 1 : -1;
      const next = (index + shift + tabs.length) % tabs.length;
      selectTab(next);
      tabs[next].focus();
    });
    tabs.push(tab);
    tabsHost.appendChild(tab);

    const panel = el("div", "report__list");
    panel.id = `report-panel-${group.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    (group.listings || []).forEach((listing) => panel.appendChild(buildListing(listing)));
    panels.push(panel);
    panelsHost.appendChild(panel);
  });

  selectTab(0);
})();
