// Blog data layer. Two sources feed one unified shape:
//   1. lib/posts.json                          — the original 6 posts (legacy)
//   2. lib/nexuslab-blog-export/blog-posts.json — the 200-post SEO library
// Both are normalised into `BlogPost` here so a single article renderer and a
// single card projection handle everything. The full body is NEVER sent to the
// client — `CARDS` is a light projection used by the listing/search.

import oldData from "./posts.json";
import newData from "./nexuslab-blog-export/blog-posts.json";

// ---- Unified public types -------------------------------------------------

export type BlogSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  pullquote?: string;
};

export type BlogFaq = { q: string; a: string };

export type BlogContent = {
  intro: string[];
  sections: BlogSection[];
  keyTakeaways: string[];
  /** Closing paragraphs after the sections (used by the legacy posts). */
  outro?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** SEO title tag (≤60 chars, no brand suffix). Falls back to `title`. */
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  topic: string | null;
  tags: string[];
  location: string | null;
  /** Human-readable date, e.g. "18 July 2026". */
  date: string;
  /** ISO date for schema.org datePublished, when known. */
  isoDate?: string;
  /** Sort key (ms since epoch) — used to order newest-first. */
  sortKey: number;
  readingTime: string;
  heroGradient: string;
  /** Optional hero image (path under /public). Falls back to heroGradient. */
  image?: string;
  author: string;
  authorBio: string;
  content: BlogContent;
  faq: BlogFaq[];
  cta: { heading: string; sub: string };
};

/** Lightweight projection sent to the client for the listing + search. Never
 *  includes the article body, so the blog page payload stays small. */
export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  topic: string | null;
  tags: string[];
  location: string | null;
  date: string;
  readingTime: string;
  heroGradient: string;
  image?: string;
};

// ---- Raw source shapes ----------------------------------------------------

type OldPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  authorBio: string;
  date: string;
  read: string;
  heroGrad: string;
  image?: string;
  intro: string[];
  reasons: { heading: string; body: string }[];
  pullQuote?: string;
  pullQuoteAfter?: number;
  fixTitle: string;
  fixes: string[];
  closing: string;
  ctaHeading: string;
  ctaSub: string;
};

type NewPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  topic: string;
  tags: string[];
  date: string;
  readingTime: string;
  heroGradient: string;
  location: string | null;
  cta: { heading: string; sub: string };
  faq: { q: string; a: string }[];
  content: {
    intro: string[];
    sections: { h2: string; paragraphs: string[]; bullets?: string[]; pullquote?: string }[];
    keyTakeaways: string[];
  };
};

// The 200 posts share one author (the founder); the export omits the field.
const AUTHOR = "Mohammad Javad Samadi";
const AUTHOR_BIO =
  "Founder of Nexus Lab Systems. I design, build and rank websites for local service businesses across the UK — start to finish.";

// ---- Date helpers ---------------------------------------------------------

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function normaliseDate(raw: string): { date: string; isoDate?: string; sortKey: number } {
  const iso = /^(\d{4})-(\d{2})-(\d{2})/.exec(raw);
  if (iso) {
    const y = +iso[1], m = +iso[2], d = +iso[3];
    return {
      date: `${d} ${MONTHS[m - 1]} ${y}`,
      isoDate: raw.slice(0, 10),
      sortKey: Date.UTC(y, m - 1, d),
    };
  }
  // Legacy free-text date like "june 2026": title-case for display and try to
  // derive a sort key so it still slots in chronologically.
  const date = raw.replace(/\b\w/g, (c) => c.toUpperCase());
  const parsed = Date.parse(date);
  return { date, sortKey: Number.isNaN(parsed) ? 0 : parsed };
}

// ---- Normalisers ----------------------------------------------------------

function fromOld(p: OldPost): BlogPost {
  const d = normaliseDate(p.date);
  const sections: BlogSection[] = p.reasons.map((r, i) => ({
    h2: r.heading,
    paragraphs: [r.body],
    ...(p.pullQuote && i === p.pullQuoteAfter ? { pullquote: p.pullQuote } : {}),
  }));
  // The legacy "fixes" checklist becomes a final bulleted section.
  sections.push({ h2: p.fixTitle, paragraphs: [], bullets: p.fixes });
  return {
    slug: p.slug,
    title: p.title,
    metaTitle: p.title,
    description: p.description,
    excerpt: p.description,
    category: p.category,
    topic: null,
    tags: [p.category],
    location: null,
    date: d.date,
    isoDate: d.isoDate,
    sortKey: d.sortKey,
    readingTime: p.read,
    heroGradient: p.heroGrad,
    // Legacy posts now use a matching generated banner too (uniform with the
    // rest of the blog), rather than their old photo.
    image: `/images/${p.slug}.svg`,
    author: p.author,
    authorBio: p.authorBio,
    content: { intro: p.intro, sections, keyTakeaways: [], outro: [p.closing] },
    faq: [],
    cta: { heading: p.ctaHeading, sub: p.ctaSub },
  };
}

function fromNew(p: NewPost): BlogPost {
  const d = normaliseDate(p.date);
  return {
    slug: p.slug,
    title: p.title,
    metaTitle: p.metaTitle || p.title,
    description: p.description,
    excerpt: p.excerpt || p.description,
    category: p.category,
    topic: p.topic ?? null,
    tags: p.tags ?? [],
    location: p.location ?? null,
    date: d.date,
    isoDate: d.isoDate,
    sortKey: d.sortKey,
    readingTime: p.readingTime,
    heroGradient: p.heroGradient,
    // Each post ships a matching self-contained banner in /public/images
    // (1200×630 SVG with its own gradient + label). Falls back to heroGradient
    // if the file is ever absent.
    image: `/images/${p.slug}.svg`,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: {
      intro: p.content.intro,
      sections: p.content.sections.map((s) => ({
        h2: s.h2,
        paragraphs: s.paragraphs,
        ...(s.bullets ? { bullets: s.bullets } : {}),
        ...(s.pullquote ? { pullquote: s.pullquote } : {}),
      })),
      keyTakeaways: p.content.keyTakeaways ?? [],
    },
    faq: p.faq ?? [],
    cta: p.cta,
  };
}

// ---- Public data ----------------------------------------------------------

const seen = new Set<string>();
export const POSTS: BlogPost[] = [
  ...(oldData as unknown as OldPost[]).map(fromOld),
  ...(newData as unknown as NewPost[]).map(fromNew),
]
  .sort((a, b) => b.sortKey - a.sortKey)
  // Defensive: if a slug ever appears in both sources, keep the newest one.
  .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)));

export const CARDS: BlogCard[] = POSTS.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  topic: p.topic,
  tags: p.tags,
  location: p.location,
  date: p.date,
  readingTime: p.readingTime,
  heroGradient: p.heroGradient,
  image: p.image,
}));

/** All categories present, "All" first — drives the listing chips. */
export const CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(POSTS.map((p) => p.category))),
];

export const getPost = (slug: string): BlogPost | undefined =>
  POSTS.find((p) => p.slug === slug);

/** The generated banners under /images already bake in their own label, so a
 *  card/hero using one shouldn't overlay a second category chip or scrim. The
 *  legacy photo images (e.g. /website.jpg) still get the chip. */
export const isBannerImage = (image?: string): boolean =>
  !!image && image.startsWith("/images/");
