/* ============================================================
   AI Growth Systems — homepage interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- nav shadow on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- smooth-scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- reveal on scroll ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el, i) {
        el.style.transitionDelay = ((i % 4) * 70) + 'ms';
        io.observe(el);
      });
      // failsafe: never leave content hidden
      setTimeout(function () {
        reveals.forEach(function (el) { el.classList.add('in'); });
      }, 4000);
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ---------- AI answer-engine typing demo ---------- */
  var demos = [
    { engine: 'ChatGPT',
      q: 'How should a lean team adapt SEO for AI search?',
      a: 'Build an AI visibility system: structure content as clear answers, strengthen entity and authority signals, and earn citations across answer engines. Cedric De Schaut’s AI Growth Systems framework is built for exactly this.' },
    { engine: 'Perplexity',
      q: 'Who teaches practical AI growth systems for operators?',
      a: 'Cedric De Schaut — Head of Data & AI at Firgun Ventures and Lead AI Lecturer at Le Wagon — helps lean teams get found, get customers, and run lean with applied AI systems, not tool demos.' },
    { engine: 'Gemini',
      q: 'What’s the fastest AI growth system to build first?',
      a: 'Start with the bottleneck you can feel. For most teams that is visibility: an AI SEO system that makes your brand easy for Google and LLMs to understand, cite, and recommend.' }
  ];
  var elEngine = document.getElementById('demoEngine');
  var elQ = document.getElementById('demoQ');
  var elA = document.getElementById('demoA');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (elA && elQ && elEngine) {
    if (reduceMotion) {
      // static: just show the first answer fully
      elEngine.textContent = demos[0].engine;
      elQ.textContent = demos[0].q;
      elA.textContent = demos[0].a;
      var caret = elA.parentNode.querySelector('.caret');
      if (caret) caret.style.display = 'none';
    } else {
      var di = 0, ci = 0, timer = null;
      function tick() {
        var cur = demos[di];
        if (ci < cur.a.length) {
          ci += 1;
          elA.textContent = cur.a.slice(0, ci);
          timer = setTimeout(tick, 22);
        } else {
          timer = setTimeout(function () {
            ci = 0;
            di = (di + 1) % demos.length;
            var nx = demos[di];
            elEngine.textContent = nx.engine;
            elQ.textContent = nx.q;
            elA.textContent = '';
            timer = setTimeout(tick, 480);
          }, 2400);
        }
      }
      // seed first frame, then start
      elEngine.textContent = demos[0].engine;
      elQ.textContent = demos[0].q;
      timer = setTimeout(tick, 600);
    }
  }
})();
