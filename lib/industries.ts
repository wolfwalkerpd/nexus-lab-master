export type IndustryPage = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  /** ≤160-char meta description. The `intro` is longer (visible lead paragraph),
   *  so keep this separate to avoid an over-length meta description. */
  metaDescription: string;
  domain: string;
  hue: string;
  previewLabel: string;
  head: string;
  sub: string;
  cta: string;
  cards: string[];
  featuresHeading: string;
  features: [string, string][];
  outcomes: [string, string][];
  quote: string;
  quoteBy: string;
  caseHref: string;
  caseLabel: string;
  ctaHeading: string;
  ctaSub: string;
};

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "dental",
    label: "Dental & Healthcare",
    title: "Websites that keep the chair full.",
    intro: "Patients choose a practice they trust — and book the one that makes it easy. We build dental and healthcare sites that earn that trust and turn visitors into booked appointments.",
    metaDescription: "Dental & healthcare websites built to earn patient trust and turn visitors into booked appointments — with online booking and local SEO.",
    domain: "your-practice.co.uk", hue: "#2FA8C4", previewLabel: "Dental",
    head: "Brighter smiles, fully booked", sub: "Online booking, new-patient offers and reviews that build trust.",
    cta: "Book a check-up", cards: ["Online booking", "Patient offers", "5★ reviews"],
    featuresHeading: "Made for how patients choose",
    features: [
      ["Online booking", "24/7 booking built in, so patients reserve when they're ready — not just office hours."],
      ["New-patient offers", "Dedicated landing pages for check-up and whitening offers that actually convert."],
      ["Treatment pages", "Clear pages for implants, Invisalign, whitening and more — answering the questions patients Google."],
      ["Reviews & trust", "Memberships, registrations and 5★ reviews placed where nervous patients need them."],
      ["Finance & plans", "Payment plans and membership options explained simply, reducing price hesitation."],
      ["Local SEO", "Optimised to rank for \u201cdentist near me\u201d and own the local map pack."],
    ],
    outcomes: [
      ["More booked appointments", "A site designed to turn browsing into booking, day and night."],
      ["Fewer missed calls", "Self-serve booking means fewer games of phone tag with your front desk."],
      ["A practice that looks its best", "A calm, premium site that reflects the standard of care you actually deliver."],
    ],
    quote: "[Client testimonial placeholder — a practice owner about the results, the process and what it's like working with Nexus LabSystems.]",
    quoteBy: "[Name] · [Practice name], [Town]",
    caseHref: "/work/bright-smile-dental", caseLabel: "See a dental case study",
    ctaHeading: "Let's fill your appointment book.",
    ctaSub: "Book a free teardown of your current practice website — we'll show you what's costing you new patients.",
  },
  {
    slug: "professional",
    label: "Professional Services",
    title: "Credibility that wins the client.",
    intro: "Solicitors, accountants and consultants are chosen on trust. We build sites that make you look like the safe, obvious choice — and make getting in touch effortless.",
    metaDescription: "Websites for solicitors, accountants and consultants — built on trust, designed to make you the obvious choice and getting in touch effortless.",
    domain: "your-firm.co.uk", hue: "#2E7D5B", previewLabel: "Professional",
    head: "Credibility that wins clients", sub: "Clear services, easy contact and trust built in from the first click.",
    cta: "Request a call", cards: ["Clear services", "Case results", "Quick contact"],
    featuresHeading: "Built to earn trust fast",
    features: [
      ["Clear service pages", "Each practice area explained plainly, so clients know you handle their exact issue."],
      ["Credentials & accreditations", "Regulators, memberships and awards shown where they build confidence."],
      ["Results & testimonials", "Case outcomes and client words that prove you deliver."],
      ["Easy enquiry", "Simple contact and call-back requests that lower the barrier to reaching out."],
      ["Insights & guides", "Content that shows expertise and quietly improves your search rankings."],
      ["Niche & local SEO", "Rank for the specific services and areas you actually want work from."],
    ],
    outcomes: [
      ["More qualified enquiries", "Clients who already trust you before the first conversation."],
      ["Stand out from big firms", "Look every bit as credible as the national names — with a personal touch."],
      ["Fewer time-wasters", "Clear positioning attracts the right clients and filters out the rest."],
    ],
    quote: "[Client testimonial placeholder — a partner or director on how the new site changed the quality and volume of enquiries.]",
    quoteBy: "[Name] · [Firm name], [Town]",
    caseHref: "/work", caseLabel: "See our work",
    ctaHeading: "Look like the firm clients can trust.",
    ctaSub: "Book a free teardown and we'll show you where your site is losing credibility — and enquiries.",
  },
  {
    slug: "trades",
    label: "Trades & Local Business",
    title: "Quotes in. Jobs won.",
    intro: "Roofers, electricians, builders and landscapers — your next customer is on their phone right now. We build sites that show your work, capture the quote, and make you look bigger than the competition.",
    metaDescription: "Websites for roofers, electricians and builders that show your work, capture the quote and make you look bigger than the competition.",
    domain: "your-roofing.co.uk", hue: "#E5892B", previewLabel: "Trades",
    head: "Quotes in, jobs won", sub: "Show your work, capture leads and look bigger than you are.",
    cta: "Get a free quote", cards: ["Instant quotes", "Photo gallery", "Call now"],
    featuresHeading: "Made to win local jobs",
    features: [
      ["Quote requests", "Simple forms that capture the job details and land straight in your inbox."],
      ["Photo galleries", "Before-and-after galleries that prove your quality better than any words."],
      ["Click-to-call", "One-tap calling on mobile, where most of your enquiries come from."],
      ["Service-area pages", "Pages for every town you cover, so you rank across your whole patch."],
      ["Reviews & guarantees", "Trust badges, guarantees and reviews that reassure before they call."],
      ["Fast & mobile-first", "Loads instantly on site, on a phone, on patchy signal."],
    ],
    outcomes: [
      ["More quote requests", "A site built to turn a phone-in-hand visitor into a job in your diary."],
      ["Win bigger jobs", "Look established and professional enough to quote for the work you want."],
      ["Beat local rivals", "Rank above the competition when customers search your trade nearby."],
    ],
    quote: "[Client testimonial placeholder — a tradesperson on how many more quote requests they get and how the site makes them look.]",
    quoteBy: "[Name] · [Company name], [Town]",
    caseHref: "/work/apex-roofing", caseLabel: "See a trades case study",
    ctaHeading: "Turn your website into your best salesperson.",
    ctaSub: "Book a free teardown and we'll show you why quote requests aren't coming through — and how to fix it.",
  },
];

export const getIndustry = (slug: string) =>
  INDUSTRY_PAGES.find((p) => p.slug === slug);
