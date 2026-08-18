/* CarHunter — přehrání ukázkové konverzace agenta s německým dealerem. */

(function initAgentChat() {
  "use strict";

  var thread = document.querySelector("[data-thread]");
  if (!thread) return;

  var messages = Array.prototype.slice.call(thread.querySelectorAll(".msg"));
  if (messages.length === 0) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    messages.forEach(function (msg) {
      msg.classList.add("is-in");
    });
    return;
  }

  var timers = [];

  function play() {
    messages.forEach(function (msg, i) {
      var delay = Number(msg.dataset.delay || 750) * i;
      timers.push(
        window.setTimeout(function () {
          msg.classList.add("is-in");
        }, delay)
      );
    });
  }

  function reset() {
    timers.forEach(window.clearTimeout);
    timers = [];
    messages.forEach(function (msg) {
      msg.classList.remove("is-in");
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) play();
        else reset();
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(thread);
})();
