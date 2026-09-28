/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Section label as a small tinted chip. */
export function sectionLabel(text) {
  return `<p class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent"><span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>${esc(text)}</p>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — soft rounded rectangles for this template. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium text-on-accent transition-colors duration-300 hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  dark:
    'inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  outline:
    'inline-flex items-center justify-center gap-3 rounded-full border border-ink/25 px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
