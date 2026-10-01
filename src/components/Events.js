import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Optional bridal / events packages as rounded cards. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const cards = events.packages
    .map(
      (p) => `
      <li class="flex flex-col rounded-[1.75rem] border border-line bg-paper p-7">
        <h3 class="font-heading text-2xl text-ink">${esc(p.name)}</h3>
        ${p.description ? `<p class="mt-3 flex-1 text-sm leading-relaxed text-muted">${esc(p.description)}</p>` : '<span class="flex-1"></span>'}
        <p class="mt-6 border-t border-line pt-5 font-heading text-2xl lining-nums text-accent">${esc(p.price)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 border-t border-line bg-paper py-20 md:scroll-mt-20 md:py-28" aria-labelledby="events-heading">
  <div class="mx-auto max-w-7xl px-5 md:px-10">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-end">
      <div>
        ${sectionLabel(events.label)}
        <h2 id="events-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-6xl">${esc(events.heading)}</h2>
      </div>
      <p class="max-w-lg text-base leading-relaxed text-muted lg:justify-self-end">${esc(events.intro)}</p>
    </div>
    <ul class="mt-12 grid gap-4 md:grid-cols-3">${cards}</ul>
    <div class="mt-10 flex flex-col gap-6 rounded-[1.75rem] bg-cream p-7 md:flex-row md:items-center md:justify-between md:p-8">
      ${events.note ? `<p class="flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-ink"><span class="mt-0.5 text-accent">${icon('leaf', 'h-4 w-4')}</span>${esc(events.note)}</p>` : '<span></span>'}
      <a href="#contact" class="shrink-0 ${buttonClasses.dark}">${esc(events.ctaLabel)} ${icon('arrowRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
