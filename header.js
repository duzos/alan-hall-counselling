(() => {
  const root = document.documentElement;
  const daffodil = document.querySelector('.flower-panel--daffodil');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  const update = () => {
    if (daffodil) {
      const rect = daffodil.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      daffodil.style.setProperty('--daffodil-offset', `${reducedMotion.matches ? 0 : (progress - .5) * 120}px`);
    }
    root.classList.toggle('header-compact', window.scrollY > 80);
    scheduled = false;
  };
  root.classList.add('header-ready');
  update();
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener('pageshow', update);
  window.addEventListener('resize', update);
  reducedMotion.addEventListener('change', update);
})();
