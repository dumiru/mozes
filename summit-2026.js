// ============================================================
// SUMMIT-2026.JS
// Page-specific behavior for mozes-summit-2026.html
// (Navbar, footer, chat and newsletter are handled by scripts.js)
// ============================================================

(function () {
  'use strict';

  // ---------- COUNTDOWN TIMER ----------
  // Target: 24 October 2026, 9:00 AM Sri Lanka time (UTC+5:30)
  var SUMMIT_DATE = new Date('2026-11-05T09:00:00+05:30').getTime();

  function pad(n) { return String(n).padStart(2, '0'); }

  function tickCountdown() {
    var nodes = document.querySelectorAll('[data-countdown]');
    if (!nodes.length) return;

    var now = Date.now();
    var diff = SUMMIT_DATE - now;

    var days = 0, hours = 0, mins = 0, secs = 0;
    if (diff > 0) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      mins = Math.floor((diff / (1000 * 60)) % 60);
      secs = Math.floor((diff / 1000) % 60);
    }

    nodes.forEach(function (root) {
      var d = root.querySelector('[data-c-days]');
      var h = root.querySelector('[data-c-hours]');
      var m = root.querySelector('[data-c-mins]');
      var s = root.querySelector('[data-c-secs]');
      if (d) d.textContent = days;
      if (h) h.textContent = pad(hours);
      if (m) m.textContent = pad(mins);
      if (s) s.textContent = pad(secs);
    });
  }

  // ---------- AGENDA DAY SWITCHER ----------
  function initAgendaTabs() {
    var tabs = document.querySelectorAll('.agenda-tab');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-day');

        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        document.querySelectorAll('.agenda-day').forEach(function (panel) {
          panel.classList.toggle('active', panel.getAttribute('data-day') === target);
        });
      });
    });
  }

  // ---------- SCROLL REVEAL ----------
  function initScrollReveal() {
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  // ---------- QUICKNAV SCROLL-SPY ----------
  function initQuicknavSpy() {
    var links = document.querySelectorAll('.quicknav a[href^="#"]');
    if (!links.length) return;

    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) sections.push({ link: link, section: section });
    });
    if (!sections.length) return;

    function onScroll() {
      var pos = window.scrollY + 160;
      var current = sections[0];
      sections.forEach(function (item) {
        if (item.section.offsetTop <= pos) current = item;
      });
      links.forEach(function (l) { l.classList.remove('active'); });
      current.link.classList.add('active');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', function () {
    tickCountdown();
    setInterval(tickCountdown, 1000);
    initAgendaTabs();
    initScrollReveal();
    initQuicknavSpy();
  });
})();
