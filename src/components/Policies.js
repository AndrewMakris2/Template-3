import { esc, sectionLabel } from './utils.js';

/** Optional booking policies as soft cards. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div class="rounded-[1.75rem] bg-cream p-7">
        <dt class="flex items-center gap-3 font-heading text-2xl text-ink"><span class="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>${esc(p.title)}</dt>
        <dd class="mt-3 text-sm leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-line bg-paper py-20 md:scroll-mt-20 md:py-28" aria-labelledby="policies-heading">
  <div class="mx-auto max-w-6xl px-5 md:px-10">
    ${sectionLabel(policies.label)}
    <h2 id="policies-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-5xl">${esc(policies.heading)}</h2>
    <dl class="mt-12 grid gap-4 sm:grid-cols-2">${items}</dl>
  </div>
</section>`;
}
