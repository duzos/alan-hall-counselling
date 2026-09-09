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

// One shared tooltip stays within the viewport on narrow screens.
(() => {
  const buttons = document.querySelectorAll('.availability-slot-button');
  const tip = document.createElement('div');
  tip.id = 'availability-tooltip';
  tip.className = 'availability-tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;
  document.body.append(tip);
  let active = null;
  let pinned = false;
  const hide = () => {
    active?.removeAttribute('aria-describedby');
    active = null;
    pinned = false;
    tip.hidden = true;
  };
  const show = (button) => {
    if (active !== button) hide();
    active = button;
    tip.textContent = button.dataset.details;
    tip.hidden = false;
    button.setAttribute('aria-describedby', tip.id);
    const rect = button.getBoundingClientRect();
    const box = tip.getBoundingClientRect();
    tip.style.left = `${Math.max(12, Math.min(rect.left + rect.width / 2 - box.width / 2, window.innerWidth - box.width - 12))}px`;
    tip.style.top = `${rect.top > box.height + 20 ? rect.top - box.height - 8 : rect.bottom + 8}px`;
  };
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => { if (!pinned) show(button); });
    button.addEventListener('mouseleave', () => { if (!pinned && document.activeElement !== button) hide(); });
    button.addEventListener('focus', () => show(button));
    button.addEventListener('blur', hide);
    button.addEventListener('click', () => {
      if (active === button && pinned) hide();
      else { show(button); pinned = true; }
    });
  });
  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.availability-slot-button, .availability-tooltip')) hide();
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hide(); });
  window.addEventListener('scroll', hide, { passive: true });
  window.addEventListener('resize', hide);
})();
