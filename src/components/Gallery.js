import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

/** Horizontal, swipeable strip of tall rounded photos with arrow controls. */
export function Gallery({ gallery }) {
  const items = gallery.images
    .map(
      (img, i) => `
      <li class="w-[75%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]">
        <button type="button" class="group block aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" loading="lazy" decoding="async" width="800" height="1000" />
        </button>
      </li>`,
    )
    .join('');
  const arrow = (dir, label, name) =>
    `<button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-on-ink disabled:opacity-30" aria-label="${esc(label)}" aria-controls="gallery-track" data-strip-${dir}>${icon(name, 'h-5 w-5')}</button>`;

  return `
<section id="gallery" class="scroll-mt-16 overflow-hidden bg-cream py-20 md:scroll-mt-20 md:py-28" aria-labelledby="gallery-heading" data-strip>
  <div class="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-5 md:px-10">
    <div>
      ${sectionLabel(gallery.label)}
      <h2 id="gallery-heading" class="mt-5 font-heading text-4xl font-light text-ink md:text-5xl">${esc(gallery.heading)}</h2>
    </div>
    <div class="flex gap-2">${arrow('prev', gallery.lightboxPrevLabel, 'chevronLeft')}${arrow('next', gallery.lightboxNextLabel, 'chevronRight')}</div>
  </div>
  <ul id="gallery-track" class="no-scrollbar mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:gap-6 md:scroll-px-10 md:px-10" data-strip-track>${items}</ul>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-4 md:p-16" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full rounded-2xl object-contain" data-lightbox-img />
    </div>
    <button type="button" class="absolute right-3 top-3 inline-flex h-12 w-12 items-center justify-center rounded-full text-on-ink hover:bg-on-ink/10" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-7 w-7')}</button>
    <button type="button" class="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-on-ink hover:bg-on-ink/10 md:left-6" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-8 w-8')}</button>
    <button type="button" class="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-on-ink hover:bg-on-ink/10 md:right-6" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-8 w-8')}</button>
    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-on-ink/70" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
