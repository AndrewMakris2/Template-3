/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components never hardcode colors or fonts; they use the
 *  Tailwind utilities generated from these tokens:
 *
 *    colors.paper   → bg-paper / text-paper      (main background)
 *    colors.cream   → bg-cream                   (alternate section background)
 *    colors.ink     → text-ink / bg-ink          (primary text, dark surfaces)
 *    colors.muted   → text-muted                 (secondary text)
 *    colors.line    → border-line                (hairlines / dividers)
 *    colors.accent  → text-accent / bg-accent    (the single accent color)
 *    colors.onAccent→ text-on-accent             (text placed on the accent)
 *    colors.onInk   → text-on-ink                (text placed on ink surfaces)
 *
 *    fonts.heading  → font-heading               (headings, logo, quotes)
 *    fonts.body     → font-body                  (body copy, UI, buttons)
 *
 *  To reskin: change the values below. Keep the keys the same.
 *  If you change font families, update `fonts.googleFontsUrl` to load them
 *  (build one at https://fonts.google.com — select families, copy the URL).
 * ============================================================================
 */

export const theme = {
  // Template 3 — Warm & Earthy: linen and sand neutrals, deep olive-charcoal in
  // place of black, and a sage-olive accent. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#F7F3EC', // linen
    cream: '#ECE4D6', // sand
    ink: '#2C2F24', // deep olive-charcoal
    muted: '#63634F',
    line: '#DBD1BF',
    accent: '#56663A', // sage olive — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#F3EEE4',
  },

  fonts: {
    heading: "'Fraunces', 'Times New Roman', Georgia, serif",
    body: "'Work Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Work+Sans:wght@300;400;500&display=swap',
  },
};
