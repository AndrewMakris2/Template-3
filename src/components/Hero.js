import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Type-led hero: an oversized name, then a wide rounded photo with a spinning booking badge. */
export function Hero({ hero, booking }) {
  // Repeat the booking label around the circular badge.
  const ring = `${hero.ctaLabel} • ${hero.ctaLabel} • ${hero.ctaLabel} • `;
  return `
<section id="top" class="bg-paper pb-16 pt-10 md:pb-24 md:pt-16" aria-labelledby="hero-heading">
  <div class="mx-auto max-w-7xl px-5 md:px-10">
    <p class="flex items-center gap-2 text-sm text-muted"><span class="text-accent">${icon('leaf', 'h-4 w-4')}</span>${esc(hero.eyebrow)}</p>
    <h1 id="hero-heading" class="mt-4 font-heading text-[clamp(3.5rem,13vw,11.5rem)] font-light leading-[0.9] tracking-tight text-ink">${esc(hero.heading)}</h1>

    <div class="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
      <div class="flex flex-col justify-end lg:col-span-4">
        <p class="font-heading text-2xl font-light italic leading-snug text-ink md:text-3xl">${esc(hero.tagline)}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
          <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.outline}">${esc(hero.secondaryCtaLabel)}</a>
        </div>
      </div>
      <div class="relative lg:col-span-8">
        <div class="aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream md:aspect-[16/10] md:rounded-[3rem]">
          <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="h-full w-full object-cover" fetchpriority="high" decoding="async" />
        </div>
        <a href="${esc(booking.url)}" ${external} class="badge absolute -top-10 right-6 grid h-28 w-28 place-items-center rounded-full bg-accent text-on-accent shadow-lg transition-transform hover:scale-105 md:-left-12 md:right-auto md:top-10 md:h-36 md:w-36" aria-label="${esc(hero.ctaLabel)}">
          <svg class="badge-ring absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
            <defs><path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
            <text class="fill-current text-[10px] uppercase tracking-[0.18em]"><textPath href="#badge-circle">${esc(ring)}</textPath></text>
          </svg>
          ${icon('arrowUpRight', 'h-7 w-7')}
        </a>
      </div>
    </div>
  </div>
</section>`;
}
