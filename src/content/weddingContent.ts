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
      "Mr. K G Anil & Mrs. Joyamma Anil cordially invite you to the wedding of their son Sreedev K Anil with Megha Das, daughter of Mr. K M Mohan Das & Mrs. Beena Mohandas.",
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

  inviteLine: "cordially invite your esteemed presence with family at the wedding ceremony",

  /** Primary ceremony card + hero date string */
  mainEvent: {
    /** Short form for hero, e.g. "June 21, 2026" */
    dateShort: "May 10, 2026",
    /** ISO string for countdown (include timezone for accuracy) */
    countdownIso: "2026-05-10T11:28:00+05:30",
    weekdayTimeLine: "Sunday · 11:28 AM",
    venueName: "Clouds Village Resort",
    venueArea: "Vannappuram",
  },

  heroTagline: {
    line1: "Two souls,",
    line2: "one journey",
    footerNames: "Megha & Sreedev",
    footerLine: "Forever begins here",
    locationBadge: "Vannappuram",
  },

  /**
   * Couple photo gallery — replace `src` with your images (public/ paths or any https host; add host to next.config images.remotePatterns if needed).
   * Arrows move slides; autoplay advances every `autoplayIntervalMs` (default 4s).
   */
  coupleGallery: {
    heading: "Megha & Sreedev",
    subheading: "Moments we cannot wait to share with you",
    autoplayIntervalMs: 4000,
    images: [
      {
        id: "g1",
        src: "/main/IMG-20260504-WA0022.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g2",
        src: "/main/IMG-20260504-WA0023.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g3",
        src: "/main/IMG-20260504-WA0024.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g4",
        src: "/main/IMG-20260504-WA0025.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g5",
        src: "/main/IMG-20260504-WA0026.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g6",
        src: "/main/IMG-20260504-WA0027.jpg",
        alt: "Megha & Sreedev",
      },
      {
        id: "g7",
        src: "/main/IMG-20260504-WA0028.jpg",
        alt: "Megha & Sreedev",
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
        parents: "Mr. K M Mohan Das & Mrs. Beena Mohandas\nAreepparayil (H), Kanjikuzhy P.O\nKanjikuzhy, Idukki",
        emoji: "🌸",
      },
      {
        name: "Sreedev K Anil",
        relationLabel: "Beloved son of",
        parents: "Mr. K G Anil & Mrs. Joyamma Anil (Late)\nKunnumpurath (H), Vannappuram P.O\nVannappuram",
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
        dateLine: "Sunday, May 10th, 2026",
        timeLine: "Muhoortham: 11:28 AM – 12:05 PM",
        venueLine: "Clouds Village Resort, Vannappuram",
        mapsQueryOrUrl: "https://maps.google.com/?q=Clouds+Village+Resort+Vannappuram+Kerala",
      },
      {
        id: "reception",
        title: "Reception",
        subtitle: "Wedding Reception",
        dateLine: "Sunday, May 10th, 2026",
        timeLine: "05:30 PM – 09:00 PM",
        venueLine: "Nambiaparambil Convention Centre, Kaliyar",
        mapsQueryOrUrl: "https://maps.google.com/?q=Nambiaparambil+Convention+Centre+Kaliyar+Kerala",
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
      href: "https://maps.google.com/?q=Clouds+Village+Resort+Vannappuram+Kerala",
      venueShort: "Clouds Village Resort",
    },
    whatsapp: {
      label: "WhatsApp Us",
      sublabel: "Send your wishes",
      /** E.164 without + e.g. 917560989490 */
      phoneE164: "917560989490",
    },
  },

  footer: {
    scrollHint: "scroll",
  },
} as const;

export type WeddingContent = typeof weddingContent;
// AI Generated Code by Deloitte + Cursor (END)
