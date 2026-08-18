/* CarHunter — vykreslení reálného denního reportu z window.CARHUNTER_REPORT. */

(function initReport() {
  "use strict";

  var root = document.querySelector("[data-report]");
  if (!root) return;

  var data = window.CARHUNTER_REPORT;
  if (!data || !Array.isArray(data.groups) || data.groups.length === 0) {
    root.textContent = "Report se nepodařilo načíst.";
    return;
  }

  var tabsEl = root.querySelector("[data-report-tabs]");
  var listEl = root.querySelector("[data-report-list]");
  var metaEl = root.querySelector("[data-report-meta]");
  var tldrEl = root.querySelector("[data-report-tldr]");
  var footEl = root.querySelector("[data-report-foot]");

  var FLAGS = { CZ: "🇨🇿", DE: "🇩🇪", AT: "🇦🇹", NL: "🇳🇱" };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function renderMeta() {
    if (metaEl) metaEl.textContent = data.meta.date + " · " + data.meta.subtitle;
    if (tldrEl) {
      tldrEl.appendChild(el("b", null, "Krátká verze: "));
      tldrEl.appendChild(document.createTextNode(data.meta.tldr));
    }
    if (footEl) {
      footEl.appendChild(el("span", null, data.meta.footer));
      footEl.appendChild(el("span", null, data.meta.importNote));
    }
  }

  function renderListing(item) {
    var row = el("article", "listing");

    var score = el("div", "listing__score");
    score.style.setProperty("--score", String(item.score));
    score.setAttribute("data-score", String(item.score));
    score.setAttribute("aria-label", "Skóre " + item.score + " z 10");
    row.appendChild(score);

    var main = el("div", "listing__main");

    var link = el("a", "listing__name", item.title);
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    main.appendChild(link);

    var meta = el("div", "listing__meta");
    meta.appendChild(el("span", "listing__flag", FLAGS[item.country] || ""));
    meta.appendChild(el("span", null, item.dealer));
    meta.appendChild(el("b", null, item.distance));
    if (item.rating) meta.appendChild(el("span", null, "★ " + item.rating));
    main.appendChild(meta);

    if (item.note) main.appendChild(el("p", "listing__note", item.note));

    var tags = el("div", "listing__tags");
    if (item.badge) tags.appendChild(el("span", "chip chip--live", item.badge));
    (item.tags || []).forEach(function (tag) {
      tags.appendChild(el("span", "chip", tag));
    });
    if (tags.childElementCount > 0) main.appendChild(tags);

    row.appendChild(main);

    var price = el("div", "listing__price");
    price.appendChild(el("span", "listing__czk", item.priceCzk));
    if (item.priceEur) price.appendChild(el("span", "listing__eur", item.priceEur));
    price.appendChild(el("span", "chip chip--" + (item.deltaTone || "warn"), item.delta + " vs kámoši"));
    row.appendChild(price);

    return row;
  }

  function showGroup(index) {
    listEl.replaceChildren();
    data.groups[index].listings.forEach(function (item) {
      listEl.appendChild(renderListing(item));
    });

    Array.prototype.forEach.call(tabsEl.children, function (tab, i) {
      tab.setAttribute("aria-selected", String(i === index));
    });
  }

  function renderTabs() {
    data.groups.forEach(function (group, i) {
      var tab = el("button", "tab");
      tab.type = "button";
      tab.setAttribute("role", "tab");
      tab.appendChild(document.createTextNode(group.label));
      tab.appendChild(el("span", null, "· " + group.count));
      tab.addEventListener("click", function () {
        showGroup(i);
      });
      tabsEl.appendChild(tab);
    });
  }

  renderMeta();
  renderTabs();
  showGroup(0);
})();
