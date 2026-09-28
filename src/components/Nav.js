import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Logo left, links and a filled Book button right; full-screen dark menu on mobile. */
export function Nav({ business, nav, social, booking }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-ink">${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l, i) =>
        `<li><a href="${esc(l.href)}" class="flex items-baseline gap-4 border-b border-on-ink/15 py-5 font-heading text-4xl text-on-ink transition-colors hover:text-on-ink/70" data-menu-link><span class="text-sm tabular-nums text-on-ink/50">0${i + 1}</span>${esc(l.label)}</a></li>`,
    )
    .join('');
  const igLink = instagram
    ? `<a href="${esc(instagram.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream" aria-label="${esc(instagram.label)}">${icon('instagram')}</a>`
    : '';

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-300" data-header>
  <div class="absolute inset-0 -z-10 bg-paper/85 backdrop-blur-md" aria-hidden="true"></div>
  <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10" aria-label="Primary">
    <a href="#top" class="flex items-center gap-2 font-heading text-2xl text-ink">
      <span class="text-accent">${icon('leaf', 'h-6 w-6')}</span>${esc(business.name)}
    </a>
    <div class="hidden items-center gap-2 lg:flex">
      <ul class="flex items-center">${links}</ul>
      ${igLink}
      <a href="${esc(booking.url)}" ${external} class="ml-2 ${buttonClasses.solid} !px-6 !py-3">${esc(booking.label)}</a>
    </div>
    <div class="flex items-center gap-1 lg:hidden">
      ${igLink}
      <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
        <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
        <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
      </button>
    </div>
  </nav>
  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink px-6 pb-12 pt-6 md:top-20 lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-10 w-full ${buttonClasses.solid}">${esc(booking.label)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
  </div>
</header>`;
}
