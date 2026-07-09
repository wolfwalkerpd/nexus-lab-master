export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const EMAIL = "contact@nexuslabsystems.com";

export type Service = {
  no: string;
  title: string;
  body: string;
  link: string;
  href: string;
};

export const SERVICES: Service[] = [
  { no: "01", title: "Web design & build", body: "Fast, modern sites that look the part on every screen.", link: "Website design", href: "/services/website-design" },
  { no: "02", title: "SEO & Local SEO", body: "Get found on Google when customers search for what you do.", link: "SEO & Local SEO", href: "/services/seo" },
  { no: "03", title: "Google Business Profile", body: "Own the local map pack and win trust before the first click.", link: "Local SEO", href: "/services/seo" },
  { no: "04", title: "Branding & logo", body: "A look that makes you the obvious choice in your area.", link: "All services", href: "/services" },
  { no: "05", title: "Content & copywriting", body: "Words that sell, written for real people — not algorithms.", link: "All services", href: "/services" },
  { no: "06", title: "Care plans & admin", body: "Update text, images and offers yourself — no developer needed.", link: "Care plans", href: "/services/care-plans" },
];

export type Rank = {
  n: number;
  letter: string;
  name: string;
  domain: string;
  rating: string;
  reviews: string;
  you?: boolean;
};

export type Industry = {
  key: string;
  label: string;
  query: string;
  head: string;
  sub: string;
  cta: string;
  hue: string;
  cards: string[];
  ranks: Rank[];
};

export const INDUSTRIES: Industry[] = [
  {
    key: "dental", label: "Dental", query: "dentist near me",
    head: "Brighter smiles, fully booked", sub: "Online booking, new-patient offers and reviews that build trust.",
    cta: "Book a check-up", hue: "#2FA8C4", cards: ["Online booking", "Patient offers", "5★ reviews"],
    ranks: [
      { n: 1, letter: "B", name: "Bright Smile Dental", domain: "brightsmile.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "C", name: "City Dental Care", domain: "citydentalcare.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "P", name: "Perident Clinic", domain: "perident.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "G", name: "Gentle Dental", domain: "gentledental.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "S", name: "Smilemakers", domain: "smilemakers.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "O", name: "Oakwood Dental", domain: "oakwooddental.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Dental Practice", domain: "your-practice.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
  {
    key: "trades", label: "Trades", query: "roofer near me",
    head: "Quotes in, jobs won", sub: "Show your work, capture leads and look bigger than you are.",
    cta: "Get a free quote", hue: "#E5892B", cards: ["Instant quotes", "Photo gallery", "Call now"],
    ranks: [
      { n: 1, letter: "A", name: "AceRoof", domain: "aceroof.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "T", name: "TopTile Roofing", domain: "toptile.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "S", name: "SkyLine Roofing", domain: "skylineroofing.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "A", name: "Apex Roofing", domain: "apexroofing.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "C", name: "County Roofers", domain: "countyroofers.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "C", name: "Clearway Roofing", domain: "clearwayroofing.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Roofing Co.", domain: "your-roofing.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
  {
    key: "hosp", label: "Hospitality", query: "restaurants near me",
    head: "Tables filled every night", sub: "Menus, bookings and offers that keep them coming back.",
    cta: "Reserve a table", hue: "#C64B3B", cards: ["Table booking", "Live menu", "Offers"],
    ranks: [
      { n: 1, letter: "O", name: "The Old Mill", domain: "theoldmill.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "B", name: "Bella Cucina", domain: "bellacucina.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "R", name: "Riverside Grill", domain: "riversidegrill.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "C", name: "The Copper Pot", domain: "thecopperpot.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "S", name: "Spice Route", domain: "spiceroute.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "H", name: "Harvest Kitchen", domain: "harvestkitchen.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Restaurant", domain: "your-restaurant.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
  {
    key: "fitness", label: "Fitness", query: "gym near me",
    head: "Members who stick around", sub: "Class timetables, sign-ups and a brand that motivates.",
    cta: "Start free trial", hue: "#7A5AF0", cards: ["Timetable", "Free trial", "Member login"],
    ranks: [
      { n: 1, letter: "F", name: "FlexFit Gym", domain: "flexfit.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "P", name: "PowerHouse", domain: "powerhousegym.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "P", name: "Pulse Fitness", domain: "pulsefitness.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "I", name: "Iron Works", domain: "ironworksgym.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "C", name: "CoreZone", domain: "corezone.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "P", name: "PeakForm", domain: "peakform.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Gym", domain: "your-gym.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
  {
    key: "beauty", label: "Salon & Beauty", query: "hair salon near me",
    head: "A calendar that stays full", sub: "Effortless booking and a look as polished as your work.",
    cta: "Book now", hue: "#D6478E", cards: ["Easy booking", "Lookbook", "Gift cards"],
    ranks: [
      { n: 1, letter: "G", name: "Gloss & Co", domain: "glossandco.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "C", name: "The Cutting Room", domain: "cuttingroom.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "B", name: "Bloom Salon", domain: "bloomsalon.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "M", name: "Mirror Mirror", domain: "mirrormirror.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "L", name: "Luxe Hair", domain: "luxehair.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "S", name: "Studio Seven", domain: "studioseven.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Salon", domain: "your-salon.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
  {
    key: "pro", label: "Professional", query: "solicitor near me",
    head: "Credibility that wins clients", sub: "Clear services, easy contact and trust built in from the first click.",
    cta: "Request a call", hue: "#2E7D5B", cards: ["Clear services", "Case results", "Quick contact"],
    ranks: [
      { n: 1, letter: "H", name: "Hale & Co", domain: "haleandco.co.uk", rating: "4.2", reviews: "40" },
      { n: 2, letter: "B", name: "Bennett Legal", domain: "bennettlegal.co.uk", rating: "4.3", reviews: "67" },
      { n: 3, letter: "C", name: "Crown Solicitors", domain: "crownsolicitors.co.uk", rating: "4.4", reviews: "94" },
      { n: 4, letter: "M", name: "Marsden Law", domain: "marsdenlaw.co.uk", rating: "4.6", reviews: "121" },
      { n: 5, letter: "P", name: "Prime Legal", domain: "primelegal.co.uk", rating: "4.7", reviews: "148" },
      { n: 6, letter: "F", name: "Fairview Law", domain: "fairviewlaw.co.uk", rating: "4.2", reviews: "175" },
      { n: 7, letter: "Y", name: "Your Firm", domain: "your-firm.co.uk", rating: "4.9", reviews: "391", you: true },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tag: string;
  grad: string;
  blurb: string;
  metrics: { value: string; label: string }[];
};

export const WORK: Project[] = [
  {
    slug: "bright-smile-dental", name: "Bright Smile Dental", kind: "Website + SEO", tag: "Dental",
    grad: "linear-gradient(135deg,#2FA8C4,#1E7E96)",
    blurb: "A tired brochure site rebuilt into a booking machine — with local SEO that put them on the map, literally.",
    metrics: [{ value: "[+X%]", label: "online bookings" }, { value: "[#X]", label: 'for "dentist near me"' }],
  },
  {
    slug: "apex-roofing", name: "Apex Roofing", kind: "Website + Brand", tag: "Trades",
    grad: "linear-gradient(135deg,#E5892B,#B4610F)",
    blurb: "A new brand and a website that turned a word-of-mouth roofer into the area's obvious choice.",
    metrics: [{ value: "[+X%]", label: "quote requests" }, { value: "[X]", label: "towns ranked" }],
  },
  {
    slug: "copper-kitchen", name: "The Copper Kitchen", kind: "Website", tag: "Hospitality",
    grad: "linear-gradient(135deg,#C64B3B,#8F2E22)",
    blurb: "A restaurant site with live menus and bookings that filled tables on the quiet nights.",
    metrics: [{ value: "[+X%]", label: "online reservations" }, { value: "[+X%]", label: "midweek covers" }],
  },
];

export type Plan = {
  name: string;
  price: string;
  suffix?: string;
  popular?: boolean;
  desc: string;
  features: string[];
};

export const BUILD_PLANS: Plan[] = [
  { name: "Starter", price: "£[PLACEHOLDER]", desc: "A sharp, small site to get you online and taking enquiries fast.", features: ["1–3 pages, bespoke design", "Mobile-perfect & fast", "Contact form + map", "Basic on-page SEO", "Admin panel + 30 days aftercare"] },
  { name: "Growth", price: "£[PLACEHOLDER]", popular: true, desc: "The complete small-business site — designed, written and optimised.", features: ["5–8 pages, everything in Starter", "Branding refresh + logo", "SEO foundations + Google Business", "Professional copywriting", "Booking / quote flows"] },
  { name: "Complete", price: "£[PLACEHOLDER]", desc: "Everything, done for you — the full brand, site, copy and SEO.", features: ["8+ pages, everything in Growth", "Full brand identity", "Advanced SEO + content plan", "Full site copywriting", "Priority build + team training"] },
];

export const CARE_PLANS: Plan[] = [
  { name: "Essential", price: "£[PLACEHOLDER]", suffix: "/mo", desc: "The safety net every website needs.", features: ["Managed UK hosting", "SSL & security monitoring", "Daily backups", "Software & uptime monitoring"] },
  { name: "Growth", price: "£[PLACEHOLDER]", suffix: "/mo", popular: true, desc: "Care plus regular edits and priority support.", features: ["Everything in Essential", "Monthly content edits", "Priority email support", "Performance reviews"] },
  { name: "Priority", price: "£[PLACEHOLDER]", suffix: "/mo", desc: "Hands-on care and ongoing improvements.", features: ["Everything in Growth", "Priority turnaround", "Quarterly strategy call", "Ongoing improvements"] },
];

export type Faq = { q: string; a: string };

export const HOME_FAQ: Faq[] = [
  { q: 'What exactly is a "free teardown"?', a: "We record a short screen video reviewing your current website (or a competitor's, if you don't have one yet) — showing what's working, what's quietly losing you customers, and the changes we'd make. It's yours to keep, whether or not you work with us." },
  { q: "How much does a website cost?", a: "Every project is fixed-price, so you know the number before we start — no hourly billing, no surprises. Pricing depends on how many pages and features you need. You can see the tiers on our pricing page." },
  { q: "How long does it take?", a: "Most sites go live in three to six weeks, depending on scope and how quickly we get your content and feedback. We'll give you a clear timeline before we begin." },
  { q: "Do I own the website?", a: "Yes — completely. You own the site, the domain and all of your data. There's no lock-in and nothing held hostage if you ever decide to move on." },
  { q: "Can I update it myself?", a: "Every build includes a simple admin panel so you can change text, images, prices and offers yourself, any time — no developer required. We'll show you how." },
  { q: "What if I already have a website?", a: "Great — we'll review it in your free teardown and tell you honestly whether it needs a full rebuild or just some targeted improvements. Sometimes a few changes are all it takes." },
];

export const ABOUT_FAQ: Faq[] = [
  { q: "Who will I actually work with?", a: "The same small team throughout — the people designing and building your site, not a rotating cast of account managers. When you email or call, you reach someone who knows your project." },
  { q: "Are you a big agency?", a: "No, and deliberately so. We're a lean studio, which keeps us fast, personal and far more affordable than a traditional agency with layers of overhead." },
  { q: "Where are you based?", a: "We're UK-based and work with clients across the country — mostly remotely, with calls and screen-shares whenever you need them." },
  { q: "Do you work with my industry?", a: "We specialise in dental & healthcare, professional services and trades & local business, but the same principles win customers for most local and service businesses. If we're not the right fit, we'll tell you." },
  { q: "What if I already have a website?", a: "Perfect — we'll review it in a free teardown and tell you honestly whether it needs a full rebuild or just some targeted improvements." },
  { q: "How do we get started?", a: "Book a free teardown. There's no obligation — it's simply the easiest way to see what's possible and whether we're a good fit for each other." },
];

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  grad: string;
};

export const BLOG_POSTS: BlogPost[] = [
  { slug: "why-customers-leave", category: "Websites", title: "Why local customers leave your website in 5 seconds", excerpt: "The most common reasons visitors bounce — and the quick, unglamorous fixes that keep them reading, and booking.", read: "6 min read", grad: "linear-gradient(135deg,#B7472A,#8f3520)" },
  { slug: "why-customers-leave", category: "SEO", title: "The local map pack, explained", excerpt: "What those top-three map results are, why they win the calls, and how to get in.", read: "5 min read", grad: "linear-gradient(135deg,#2FA8C4,#1E7E96)" },
  { slug: "why-customers-leave", category: "Websites", title: "Do you really own your website?", excerpt: "Three quick checks to make sure your site, domain and data are actually yours.", read: "4 min read", grad: "linear-gradient(135deg,#7A5AF0,#4A32B0)" },
  { slug: "why-customers-leave", category: "Local marketing", title: "5 things every trades website needs", excerpt: "The essentials that turn a phone-in-hand visitor into a quote request.", read: "5 min read", grad: "linear-gradient(135deg,#E5892B,#B4610F)" },
  { slug: "why-customers-leave", category: "SEO", title: "The free Google tool most businesses ignore", excerpt: "Your Google Business Profile is free, powerful, and usually half-empty. Let's fix that.", read: "6 min read", grad: "linear-gradient(135deg,#2E7D5B,#1c5540)" },
  { slug: "why-customers-leave", category: "Business", title: "Fixed price vs hourly: why we quote up front", excerpt: "Why open-ended invoices hurt small businesses — and how fixed pricing protects you.", read: "4 min read", grad: "linear-gradient(135deg,#C64B3B,#8F2E22)" },
];
