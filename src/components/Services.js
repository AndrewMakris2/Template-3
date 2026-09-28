import { esc, external, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Services as a grid of rounded cards with duration and price chips. */
export function Services({ services, booking }) {
  const cards = services.items
    .map(
      (s) => `
      <li class="flex flex-col rounded-[1.75rem] border border-line bg-paper p-7 transition-colors hover:border-accent/50">
        <h3 class="font-heading text-2xl text-ink">${esc(s.name)}</h3>
        ${s.description ? `<p class="mt-3 flex-1 text-sm leading-relaxed text-muted">${esc(s.description)}</p>` : '<span class="flex-1"></span>'}
        <div class="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
          <span class="rounded-full bg-cream px-3 py-1 text-xs text-muted"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span>
          <span class="font-heading text-2xl lining-nums text-accent"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</span>
        </div>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-28" aria-labelledby="services-heading">
  <div class="mx-auto max-w-7xl px-5 md:px-10">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-end">
      <div>
        ${sectionLabel(services.label)}
        <h2 id="services-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-6xl">${esc(services.heading)}</h2>
      </div>
      <p class="max-w-lg text-base leading-relaxed text-muted lg:justify-self-end">${esc(services.intro)}</p>
    </div>
    <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${cards}</ul>
    <div class="mt-10 flex flex-col gap-6 rounded-[1.75rem] bg-cream p-7 md:flex-row md:items-center md:justify-between md:p-8">
      ${services.note ? `<p class="flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-ink"><span class="mt-0.5 text-accent">${icon('leaf', 'h-4 w-4')}</span>${esc(services.note)}</p>` : '<span></span>'}
      <a href="${esc(booking.url)}" ${external} class="shrink-0 ${buttonClasses.dark}">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
