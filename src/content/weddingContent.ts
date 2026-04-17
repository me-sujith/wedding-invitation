// AI Generated Code by Deloitte + Cursor (BEGIN)
/**
 * Central wedding copy & configuration.
 * Edit this file to update names, dates, venues, links, and ceremony list.
 */

export type PersonBlock = {
  /** Display name, e.g. "Megha Das" */
  name: string;
  /** Line under name, e.g. "Beloved daughter of" */
  relationLabel: string;
  /** Parent lines; use \n for line breaks if needed */
  parents: string;
  emoji: string;
};

export type Ceremony = {
  id: string;
  title: string;
  subtitle?: string;
  dateLine: string;
  timeLine: string;
  venueLine: string;
  mapsQueryOrUrl?: string;
};

export type CoupleGalleryImage = {
  id: string;
  /** Local path e.g. "/gallery/1.jpg" or full https URL */
  src: string;
  alt: string;
};

export const weddingContent = {
  meta: {
    title: "Megha & Sreedev — Wedding Invitation",
    description:
      "Together with our families, Megha Das and Sreedev K Anil invite you to celebrate their wedding.",
  },

  /** Shown near the top (Devanagari om is optional) */
  mantra: {
    symbol: "ॐ",
    line: "Om Shree Ganeshay Namah",
  },

  familiesLine: "Together with our families",

  couple: {
    bride: "Megha Das",
    groom: "Sreedev K Anil",
    /** Separator between names in hero, e.g. "&" or "and" */
    conjunction: "&",
  },

  inviteLine: "cordially invite you to celebrate our wedding",

  /** Primary ceremony card + hero date string */
  mainEvent: {
    /** Short form for hero, e.g. "June 21, 2026" */
    dateShort: "June 21, 2026",
    /** ISO string for countdown (include timezone for accuracy) */
    countdownIso: "2026-06-21T10:45:00+05:30",
    weekdayTimeLine: "Sunday · 10:45 AM",
    venueName: "Your Venue Name",
    venueArea: "City, State",
  },

  heroTagline: {
    line1: "Two souls,",
    line2: "one journey",
    footerNames: "Megha & Sreedev",
    footerLine: "Forever begins here",
    locationBadge: "Your City",
  },

  /**
   * Couple photo gallery — replace `src` with your images (public/ paths or any https host; add host to next.config images.remotePatterns if needed).
   * Arrows move slides; autoplay advances every `autoplayIntervalMs` (default 3s).
   */
  coupleGallery: {
    heading: "Megha & Sreedev",
    subheading: "Moments we cannot wait to share with you",
    autoplayIntervalMs: 3000,
    images: [
      {
        id: "g1",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
        alt: "Couple celebrating — replace with your photo",
      },
      {
        id: "g2",
        src: "https://images.unsplash.com/photo-1522673606560-13136edb3186?auto=format&fit=crop&w=1600&q=80",
        alt: "Couple outdoors — replace with your photo",
      },
      {
        id: "g3",
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
        alt: "Wedding celebration — replace with your photo",
      },
      {
        id: "g4",
        src: "https://images.unsplash.com/photo-1529636799528-3f6769be1717?auto=format&fit=crop&w=1600&q=80",
        alt: "Together — replace with your photo",
      },
    ] satisfies CoupleGalleryImage[],
  },

  countdown: {
    heading: "The Auspicious Day Approaches",
    subheading: "Counting down to the auspicious moment",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },

  about: {
    heading: "About Us",
    /** Order is typically bride first, then groom — edit entries as needed */
    people: [
      {
        name: "Megha Das",
        relationLabel: "Beloved daughter of",
        parents: "Mr. Parent Name\n& Mrs. Parent Name",
        emoji: "🌸",
      },
      {
        name: "Sreedev K Anil",
        relationLabel: "Beloved son of",
        parents: "Mr. Parent Name\n& Mrs. Parent Name",
        emoji: "💍",
      },
    ] satisfies PersonBlock[],
  },

  ceremonies: {
    heading: "Functions & Ceremonies",
    items: [
      {
        id: "vivah",
        title: "Wedding",
        subtitle: "Vivah Ceremony",
        dateLine: "Sunday, June 21st, 2026",
        timeLine: "Muhoortham: 10:45 AM – 11:30 AM",
        venueLine: "Your Venue Name, Your Area, Your City",
        mapsQueryOrUrl: "https://maps.google.com/?q=Your+Venue+City",
      },
    ] satisfies Ceremony[],
  },

  quote: {
    symbol: "ॐ",
    text: "With the blessings of our families and the grace of God, we joyfully invite you to share in the celebration of our wedding. Your presence and wishes will make this day truly complete.",
    closingLine: "Your presence will make this day truly memorable.",
  },

  join: {
    heading: "Join Us",
    subheading: "We look forward to celebrating with you",
    directions: {
      label: "Get Directions",
      /** Full Google Maps URL or search URL */
      href: "https://maps.google.com/?q=Your+Venue+City",
      venueShort: "Your Venue Name",
    },
    whatsapp: {
      label: "WhatsApp Us",
      sublabel: "Send your wishes",
      /** E.164 without + e.g. 919876543210 */
      phoneE164: "919876543210",
    },
  },

  footer: {
    scrollHint: "scroll",
  },
} as const;

export type WeddingContent = typeof weddingContent;
// AI Generated Code by Deloitte + Cursor (END)
