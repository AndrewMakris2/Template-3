import { esc, sectionLabel } from './utils.js';

/** Large quotes staggered left and right down the page, each with an initial "avatar". */
export function Testimonials({ testimonials }) {
  const items = testimonials.items
    .map((t, i) => {
      const initial = esc(t.name.trim().charAt(0).toUpperCase());
      const side = i % 2 === 1 ? 'lg:ml-auto lg:text-right' : '';
      const row = i % 2 === 1 ? 'lg:flex-row-reverse' : '';
      return `
      <li class="lg:w-3/4 ${side}">
        <figure>
          <blockquote class="font-heading text-2xl font-light italic leading-snug text-ink md:text-4xl md:leading-snug">
            <p>&ldquo;${esc(t.quote)}&rdquo;</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-4 ${row}">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent font-heading text-xl text-on-accent" aria-hidden="true">${initial}</span>
            <span>
              <span class="block text-sm font-medium text-ink">${esc(t.name)}</span>
              ${t.detail ? `<span class="block text-sm text-muted">${esc(t.detail)}</span>` : ''}
            </span>
          </figcaption>
        </figure>
      </li>`;
    })
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-6xl px-5 md:px-10">
    ${sectionLabel(testimonials.label)}
    <h2 id="testimonials-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-5xl">${esc(testimonials.heading)}</h2>
    <ul class="mt-14 space-y-16 md:space-y-24">${items}</ul>
  </div>
</section>`;
}
