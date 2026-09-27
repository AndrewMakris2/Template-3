/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-3.netlify.app', // Template 3 demo URL — TODO: replace with real client content
    title: 'Juniper Hale — Curly Hair & Natural Colour, Asheville', // TODO: replace with real client content
    description:
      'Asheville hairstylist specialising in curly and coily cuts, lived-in colour and low-tox products, in a calm, plant-filled studio. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t3-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: defined natural curls in soft afternoon light', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Juniper Hale', // TODO: replace with real client content — shown as the text logo
    tagline: 'Curls, colour and care, rooted in what’s natural to you.', // TODO: replace with real client content
    location: 'Asheville, North Carolina', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Curl & colour studio — Asheville, NC', // TODO: replace with real client content
    heading: 'Juniper Hale', // TODO: replace with real client content
    tagline: 'Curls, colour and care, rooted in what’s natural to you.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'See recent work',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t3-hero/2000/1400', // TODO: replace with real client content
      alt: 'Placeholder: client with voluminous natural curls laughing in a sunlit, plant-filled studio', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'Your texture isn’t something to fix. It’s something to celebrate.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Juniper, a curl specialist and colourist with ten years of experience and a soft spot for hair that does its own thing. My small studio in West Asheville is full of plants, natural light and no rush at all.', // TODO: replace with real client content
      'I cut curls dry, one by one, so the shape works with your pattern rather than against it. For colour, I use low-tox, ammonia-free formulas and gentle techniques that keep your hair healthy and easy to live with.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Curly & coily cuts', 'Lived-in colour', 'Low-tox products'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t3-about/900/1125', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist among hanging plants in her studio', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Recent work',
    heading: 'Texture, shape & natural colour',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t3-g1/800/1000', full: 'https://picsum.photos/seed/t3-g1/1600/2000', alt: 'Placeholder: rounded curly cut with springy, defined ringlets' },
      { src: 'https://picsum.photos/seed/t3-g2/800/1000', full: 'https://picsum.photos/seed/t3-g2/1600/2000', alt: 'Placeholder: coily hair shaped into a full, even silhouette' },
      { src: 'https://picsum.photos/seed/t3-g3/800/1000', full: 'https://picsum.photos/seed/t3-g3/1600/2000', alt: 'Placeholder: copper balayage on loose waves' },
      { src: 'https://picsum.photos/seed/t3-g4/800/1000', full: 'https://picsum.photos/seed/t3-g4/1600/2000', alt: 'Placeholder: curly shag with curtain bangs' },
      { src: 'https://picsum.photos/seed/t3-g5/800/1000', full: 'https://picsum.photos/seed/t3-g5/1600/2000', alt: 'Placeholder: soft brunette with subtle caramel ribbons' },
      { src: 'https://picsum.photos/seed/t3-g6/800/1000', full: 'https://picsum.photos/seed/t3-g6/1600/2000', alt: 'Placeholder: wavy bob air-dried with a light cream' },
      { src: 'https://picsum.photos/seed/t3-g7/800/1000', full: 'https://picsum.photos/seed/t3-g7/1600/2000', alt: 'Placeholder: grey blending on naturally silver curls' },
      { src: 'https://picsum.photos/seed/t3-g8/800/1000', full: 'https://picsum.photos/seed/t3-g8/1600/2000', alt: 'Placeholder: long layered curls after a deep-conditioning treatment' },
      { src: 'https://picsum.photos/seed/t3-g9/800/1000', full: 'https://picsum.photos/seed/t3-g9/1600/2000', alt: 'Placeholder: honey highlights on tight curls' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'Services & pricing',
    intro: 'All services include a consultation and a styling lesson so you can recreate the look at home. Prices vary with length, density and time.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Curly cut', description: 'Dry, curl-by-curl cut with a wash and diffused style.', duration: '90 min', price: '$120+' },
      { name: 'Coily shape & define', description: 'Shaping for tighter textures, with a wash-and-go finish.', duration: '2 hr', price: '$140+' },
      { name: 'Wavy cut', description: 'Cut and style to bring out natural waves.', duration: '60 min', price: '$90+' },
      { name: 'Lived-in balayage', description: 'Hand-painted, ammonia-free colour that grows out softly.', duration: '3 hr', price: '$250+' },
      { name: 'Grey blending', description: 'Soft, low-maintenance blending for natural silver.', duration: '2 hr', price: '$160+' },
      { name: 'Botanical gloss', description: 'Plant-based gloss to add shine and refresh tone.', duration: '45 min', price: '$65+' },
      { name: 'Curl reset treatment', description: 'Clarify, deep condition and restore curl definition.', duration: '60 min', price: '$75+' },
      { name: 'Curl consultation', description: 'Talk through products, routine and goals. Credited toward your first cut.', duration: '30 min', price: '$35' },
    ],
    note: 'Please arrive with your hair dry and in its natural state, without heavy product, for curly cuts.', // TODO: replace with real client content
    ctaLabel: 'Book a service',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Reviews',
    heading: 'What clients say',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'For the first time I actually understand my curls. Juniper taught me a routine that takes ten minutes.', name: 'Maya L.', detail: 'Curly cut client' },
      { quote: 'The colour is gorgeous, and my hair feels healthier than before I walked in.', name: 'Rachel D.', detail: 'Balayage client' },
      { quote: 'She helped me stop fighting my grey. I’ve never felt more like myself.', name: 'Linda S.', detail: 'Grey blending client' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Contact',
    heading: 'Say hello.',
    intro: 'Not sure which service to book? Send a quick note about your hair and I’ll point you in the right direction, usually within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(828) 555-0127', // TODO: replace with real client content
    address: '910 Placeholder Rd, Unit B, Asheville, NC 28806', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Know what you need?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'Tell me about your hair type, history and what you’d like to change.' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send message',
      sendingLabel: 'Sending…',
      successMessage: 'Thanks for reaching out! I’ll get back to you soon.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'youtube', label: 'YouTube', url: 'https://youtube.com/@PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Studio hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Tue – Thu', time: '9am – 5pm' },
      { days: 'Fri – Sat', time: '10am – 6pm' },
      { days: 'Sun – Mon', time: 'Closed' },
    ],
    contactHeading: 'Visit',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Juniper Hale Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },
};
