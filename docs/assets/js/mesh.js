/* CarHunter — AI mesh: uzly, hrany a signály probíhající sítí. Kreslí do <canvas class="bg__canvas">. */

(function initMesh() {
  "use strict";

  var canvas = document.querySelector("[data-mesh]");
  if (!canvas) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var NODE_TARGET_DENSITY = 12000; // 1 uzel na ~12k px², strop níž
  var MAX_NODES = 70;
  var LINK_DISTANCE = 168;
  var SIGNAL_SPAWN_MS = 900;

  var nodes = [];
  var signals = [];
  var pointer = { x: 0.5, y: 0.5, active: false };
  var dpr = 1;
  var width = 0;
  var height = 0;
  var lastSignalAt = 0;
  var rafId = null;

  function makeNodes() {
    var count = Math.min(MAX_NODES, Math.max(24, Math.round((width * height) / NODE_TARGET_DENSITY)));
    nodes = Array.from({ length: count }, function () {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.3 + 0.7
      };
    });
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeNodes();
  }

  function spawnSignal(now) {
    if (nodes.length < 2) return;
    var from = Math.floor(Math.random() * nodes.length);
    var to = -1;
    var best = LINK_DISTANCE;
    for (var i = 0; i < nodes.length; i++) {
      if (i === from) continue;
      var d = Math.hypot(nodes[i].x - nodes[from].x, nodes[i].y - nodes[from].y);
      if (d < best) {
        best = d;
        to = i;
      }
    }
    if (to === -1) return;
    signals.push({ from: from, to: to, t: 0, born: now });
  }

  function drawLinks() {
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[i].x - nodes[j].x;
        var dy = nodes[i].y - nodes[j].y;
        var dist = Math.hypot(dx, dy);
        if (dist > LINK_DISTANCE) continue;
        var alpha = (1 - dist / LINK_DISTANCE) * 0.16;
        ctx.strokeStyle = "rgba(150, 200, 220," + alpha.toFixed(3) + ")";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  function drawNodes() {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      ctx.fillStyle = "rgba(198, 242, 78, 0.42)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawSignals() {
    signals = signals.filter(function (s) {
      return s.t <= 1 && nodes[s.from] && nodes[s.to];
    });

    for (var i = 0; i < signals.length; i++) {
      var s = signals[i];
      var a = nodes[s.from];
      var b = nodes[s.to];
      var x = a.x + (b.x - a.x) * s.t;
      var y = a.y + (b.y - a.y) * s.t;
      var fade = Math.sin(s.t * Math.PI);

      ctx.strokeStyle = "rgba(198, 242, 78," + (fade * 0.35).toFixed(3) + ")";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(x, y);
      ctx.stroke();

      ctx.fillStyle = "rgba(220, 255, 140," + fade.toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fill();

      s.t += 0.022;
    }
  }

  function step(now) {
    ctx.clearRect(0, 0, width, height);

    var pullX = (pointer.x - 0.5) * 26;
    var pullY = (pointer.y - 0.5) * 26;

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    }

    ctx.save();
    ctx.translate(pointer.active ? pullX : 0, pointer.active ? pullY : 0);
    drawLinks();
    drawNodes();
    drawSignals();
    ctx.restore();

    if (now - lastSignalAt > SIGNAL_SPAWN_MS) {
      spawnSignal(now);
      lastSignalAt = now;
    }

    rafId = window.requestAnimationFrame(step);
  }

  function start() {
    if (rafId === null) rafId = window.requestAnimationFrame(step);
  }

  function stop() {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener(
    "pointermove",
    function (e) {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
      pointer.active = true;
    },
    { passive: true }
  );
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  resize();
  start();
})();
