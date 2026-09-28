import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

/** Dark footer with info columns and an oversized wordmark along the bottom. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours
    .map((h) => `<div class="flex justify-between gap-6 py-1"><dt>${esc(h.days)}</dt><dd class="text-on-ink">${esc(h.time)}</dd></div>`)
    .join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex items-center gap-2 rounded-full bg-on-ink/10 px-4 py-2 text-sm text-on-ink transition-colors hover:bg-on-ink hover:text-ink">${icon(s.platform, 'h-4 w-4')}${esc(s.label)}</a></li>`,
    )
    .join('');
  const heading = 'text-xs uppercase tracking-[0.2em] text-on-ink/60';

  return `
<footer class="overflow-hidden rounded-t-[2rem] bg-ink text-on-ink/75 md:rounded-t-[3rem]">
  <div class="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-20">
    <div class="grid gap-12 md:grid-cols-3">
      <div>
        <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
        <dl class="mt-4 max-w-xs text-sm">${hours}</dl>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
        <address class="mt-4 space-y-1 text-sm not-italic">
          <p>${esc(contact.address)}</p>
          <p><a href="mailto:${esc(contact.email)}" class="text-on-ink hover:underline">${esc(contact.email)}</a></p>
          <p><a href="${esc(telHref(contact.phone))}" class="text-on-ink hover:underline">${esc(contact.phone)}</a></p>
        </address>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
        <ul class="mt-4 flex flex-wrap gap-2">${socials}</ul>
      </div>
    </div>
    <div class="mt-14 flex flex-col gap-3 border-t border-on-ink/15 pt-6 text-xs sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
      <a href="#top" class="inline-flex items-center gap-2 text-on-ink hover:underline">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
    <p class="-mb-[0.18em] mt-8 select-none whitespace-nowrap font-heading text-[clamp(3rem,15vw,13rem)] font-light leading-none tracking-tight text-on-ink/10" aria-hidden="true">${esc(business.name)}</p>
  </div>
</footer>`;
}
