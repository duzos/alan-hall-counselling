(() => {
  const root = document.documentElement;
  const sand = document.querySelector('.flower-panel--sand');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  const update = () => {
    if (sand) {
      const rect = sand.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      sand.style.setProperty('--sand-offset', `${reducedMotion.matches ? 0 : (progress - .5) * 120}px`);
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
