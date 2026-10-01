import { esc, sectionLabel } from './utils.js';

/** Optional FAQ (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group rounded-[1.5rem] bg-paper px-6 md:px-8">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-xl text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-2xl [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/10 font-body text-xl text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="pb-7 text-base leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-line bg-cream py-20 md:scroll-mt-20 md:py-28" aria-labelledby="faq-heading">
  <div class="mx-auto max-w-4xl px-5 md:px-10">
    ${sectionLabel(faq.label)}
    <h2 id="faq-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-5xl">${esc(faq.heading)}</h2>
    <div class="mt-12 space-y-3">${items}</div>
  </div>
</section>`;
}
