/** Arrow buttons for the horizontal gallery strip (native swipe/scroll still works). */
export function initStrip() {
  document.querySelectorAll('[data-strip]').forEach((root) => {
    const track = root.querySelector('[data-strip-track]');
    const prev = root.querySelector('[data-strip-prev]');
    const next = root.querySelector('[data-strip-next]');
    if (!track || !prev || !next) return;

    const step = () => (track.querySelector('li')?.getBoundingClientRect().width ?? track.clientWidth) + 16;
    const update = () => {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
