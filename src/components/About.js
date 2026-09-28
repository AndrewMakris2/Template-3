import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

/** Rounded photo with a text card overlapping it; specialties as leaf chips. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map(
      (t) =>
        `<li class="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm text-ink"><span class="text-accent">${icon('leaf', 'h-4 w-4')}</span>${esc(t)}</li>`,
    )
    .join('');

  return `
<section id="about" class="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-7xl items-center px-5 md:px-10 lg:grid-cols-12">
    <figure class="lg:col-span-6 lg:col-start-1 lg:row-start-1">
      <div class="aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream md:rounded-[3rem]">
        <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="900" height="1125" />
      </div>
    </figure>
    <div class="relative z-10 -mt-16 mx-4 rounded-[2rem] bg-cream p-8 sm:mx-10 md:p-12 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mx-0 lg:mt-0 lg:p-14">
      ${sectionLabel(about.label)}
      <h2 id="about-heading" class="mt-6 font-heading text-3xl font-light leading-tight text-ink md:text-5xl">${esc(about.heading)}</h2>
      <div class="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">${bio}</div>
      <h3 class="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted">${esc(about.specialtiesLabel)}</h3>
      <ul class="mt-4 flex flex-wrap gap-2">${tags}</ul>
    </div>
  </div>
</section>`;
}
