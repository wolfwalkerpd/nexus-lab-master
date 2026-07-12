export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
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
  img: string;
  /** Optional CSS gradient fallback — kept so `w.grad` never breaks the build. */
  grad?: string;
  blurb: string;
  metrics: { value: string; label: string }[];
};

export const WORK: Project[] = [
  {
    slug: "bright-smile-dental", name: "Bright Smile Dental", kind: "Website + SEO", tag: "Dental",
    img: "/image.png",
    blurb: "A tired brochure site rebuilt into a booking machine — with local SEO that put them on the map, literally.",
    metrics: [{ value: "+1%", label: "online bookings" }, { value: "#1", label: 'for "dentist near me"' }],
  },
  {
    slug: "apex-roofing", name: "Apex Roofing", kind: "Website + Brand", tag: "Trades",
    img: "/image2.png",
    blurb: "A new brand and a website that turned a word-of-mouth roofer into the area's obvious choice.",
    metrics: [{ value: "+1%", label: "quote requests" }, { value: "#1", label: "towns ranked" }],
  },
  {
    slug: "copper-kitchen", name: "The Copper Kitchen", kind: "Website", tag: "Hospitality",
    img: "/image1.png",
    blurb: "A restaurant site with live menus and bookings that filled tables on the quiet nights.",
    metrics: [{ value: "+1%", label: "online reservations" }, { value: "+1%", label: "midweek covers" }],
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
  { name: "Starter", price: "£795", desc: "A sharp, small site to get you online and taking enquiries fast.", features: ["1–3 pages, bespoke design", "Mobile-perfect & fast", "Contact form + map", "Basic on-page SEO", "Admin panel + 30 days aftercare"] },
  { name: "Growth", price: "£1,950", popular: true, desc: "The complete small-business site — designed, written and optimised.", features: ["5–8 pages, everything in Starter", "Branding refresh + logo", "SEO foundations + Google Business", "Professional copywriting", "Booking / quote flows"] },
  { name: "Complete", price: "£3,950", desc: "Everything, done for you — the full brand, site, copy and SEO.", features: ["8+ pages, everything in Growth", "Full brand identity", "Advanced SEO + content plan", "Full site copywriting", "Priority build + team training"] },
];

export const CARE_PLANS: Plan[] = [
  { name: "Essential", price: "£39 /mo", suffix: "/mo", desc: "The safety net every website needs.", features: ["Managed UK hosting", "SSL & security monitoring", "Daily backups", "Software & uptime monitoring"] },
  { name: "Growth", price: "£89 /mo", suffix: "/mo", popular: true, desc: "Care plus regular edits and priority support.", features: ["Everything in Essential", "Monthly content edits", "Priority email support", "Performance reviews"] },
  { name: "Priority", price: "£179 /mo", suffix: "/mo", desc: "Hands-on care and ongoing improvements.", features: ["Everything in Growth", "Priority turnaround", "Quarterly strategy call", "Ongoing improvements"] },
];

export type Faq = { q: string; a: string };

export const HOME_FAQ: Faq[] = [
{ q: 'What exactly is a "free teardown"?', a: "We record a short screen video reviewing your current website (or a competitor's, if you don't have one yet) — showing what's working, what's quietly losing you customers, and the changes we'd make. It's yours to keep, whether or not you work with us." },
  { q: "How much does a website cost?", a: "Every project is fixed-price, so you know the number before we start — no hourly billing, no surprises. Pricing depends on how many pages and features you need. You can see the tiers on our pricing page." },
  { q: "How long does it take?", a: "Most sites go live in one to three weeks, depending on scope and how quickly we get your content and feedback. We'll give you a clear timeline before we begin." },
  { q: "Will my website actually bring in customers?", a: "That's the whole point of it. We build sites to be found on Google and to turn visitors into enquiries and calls — not just to look nice. In your free teardown we'll show you exactly where your current site is losing customers and how we'd fix it." },
  { q: "Do I own the website, or am I tied in?", a: "You own everything — the site, the domain and all your data — with no lock-in. Ongoing care plans are completely optional; they're there if you'd rather we handled updates and hosting for you, not to trap you." },
  { q: "What if I already have a website?", a: "Great — we'll review it in your free teardown and tell you honestly whether it needs a full rebuild or just some targeted improvements. Sometimes a few changes are all it takes, and we'll say so if that's the case." },
  { q: "How do I get started?", a: "Book your free teardown. There's no obligation and nothing to pay — you'll get a genuinely useful video review of your site, and if it feels like a fit, we'll take it from there. If not, the teardown is still yours to keep." },
];

export const ABOUT_FAQ: Faq[] = [
{ q: "Who will I actually be dealing with?", a: "One person, from first hello to launch and beyond. The person who reviews your site is the person who builds it and the person who picks up the phone when you call. Nothing gets passed to a junior or lost in a handoff, because there is no handoff." },
  { q: "Why choose one person over a big agency?", a: "With an agency you meet the salesperson, then your project goes to whoever's free — often someone you never speak to. You become a ticket in a queue. With us you get one accountable point of contact, work that's done with genuine care because your name is recognised, and none of the agency overhead padding your invoice." },
  { q: "Are you experienced enough to trust with my business?", a: "We build and run real, live software — not slideware or templates — so your site is made by someone who genuinely understands both the craft and how local businesses win customers. We only take on work we can do properly, and we'll tell you honestly if something isn't the right fit for us." },
  { q: "Do you understand my kind of business?", a: "We work with local and service-based businesses that live or die by trust — the same thing your customers are judging when they land on your site. That perspective shapes every build: it's not about looking flashy, it's about making your business the obvious, trustworthy choice." },
  { q: "What if it goes wrong, or I'm not happy?", a: "We agree the direction early and work through it with you before launch, so you're never surprised at the end — you see it taking shape and have your say throughout. And because you own your site and domain outright, you're never stuck or held hostage. Honesty and no lock-in are the whole point." },
  { q: "What's it actually like to work with you?", a: "Straightforward and jargon-free. Most of our clients aren't technical, so we explain everything in plain English, handle the technical side for you, and keep you in the loop without burying you in detail. You run your business; we make the website side easy." },
];

// Full help-centre FAQ (dedicated /faq page). `label` shows on the filter chip,
// `title` is the section heading.
export type FaqCategory = { key: string; label: string; title: string };

export const FAQ_CATEGORIES: FaqCategory[] = [
  { key: "start", label: "Getting started", title: "Getting started" },
  { key: "pricing", label: "Pricing", title: "Pricing" },
  { key: "process", label: "Process & build", title: "Process & build" },
  { key: "owning", label: "Owning & running", title: "Owning & running your site" },
  { key: "seo", label: "SEO & growth", title: "SEO & growth" },
];

export type SiteFaq = { cat: FaqCategory["key"]; q: string; a: string };

export const SITE_FAQS: SiteFaq[] = [
  { cat: "start", q: "What exactly is a \"free teardown\"?", a: "We record a short screen video reviewing your current website (or a competitor's, if you don't have one yet) — showing what's working, what's quietly losing you customers, and the three changes we'd make first. It's yours to keep, whether or not you work with us." },
  { cat: "start", q: "Do I have to commit to anything to get one?", a: "Not at all. The teardown is genuinely free and there's no obligation. Plenty of people use it as a second opinion on work someone else has done — that's completely fine." },
  { cat: "start", q: "I don't have a website yet — can you still help?", a: "Absolutely. We'll review a couple of your competitors instead and show you what it would take to beat them from day one. Starting fresh is often faster and cheaper than fixing an old site." },
  { cat: "start", q: "How do we actually get started?", a: "Book a teardown, we talk through what you need, and you get a fixed-price proposal. If it's a fit, we schedule a start date. If it's not, no hard feelings — you still keep the teardown." },
  { cat: "pricing", q: "How much does a website cost?", a: "Every project is fixed-price, so you know the number before we start — no hourly billing and no surprises. The figure depends on how many pages and features you need; you can see the tiers on our pricing page." },
  { cat: "pricing", q: "Why fixed price instead of hourly?", a: "Hourly billing punishes you for our learning curve and makes budgeting impossible. A fixed price means we carry the risk of things taking longer, not you — and you can say yes with total clarity on cost." },
  { cat: "pricing", q: "Are there any ongoing fees?", a: "Only if you want a care plan. The build is a one-off cost. Care plans (hosting, backups, security and edits) are an optional monthly subscription you can start, pause or cancel any time." },
  { cat: "pricing", q: "Do you offer payment in instalments?", a: "Yes. Most projects are split across a deposit and one or more milestone payments so the cost is spread through the build rather than landing all at once. We'll agree the schedule up front." },
  { cat: "process", q: "How long does a project take?", a: "Most sites go live in three to six weeks, depending on scope and how quickly we get your content and feedback. We'll give you a clear timeline before we begin and keep you posted throughout." },
  { cat: "process", q: "What do you need from me?", a: "Mostly your input and sign-off at a few key stages, plus any photos, logos or specific content you want included. If you don't have polished content, we can write it for you — that's what our copywriting is for." },
  { cat: "process", q: "How involved will I be?", a: "As involved as you'd like. You'll review the design before we build and see the site as it comes together, with clear points to give feedback. No surprises at launch — you'll have seen it all." },
  { cat: "process", q: "Can you write the content for me?", a: "Yes. Copywriting is part of our Growth and Complete packages, and available as an add-on otherwise. We write for real customers — clear, persuasive and tuned to how people actually decide." },
  { cat: "process", q: "What happens on launch day?", a: "We handle the technical side — connecting your domain, final checks and going live. Then we train you on the admin panel and stay on hand for 30 days to sort anything that comes up." },
  { cat: "owning", q: "Do I own the website?", a: "Yes — completely. You own the site, the domain and all of your data. There's no lock-in and nothing held hostage if you ever decide to move on to someone else." },
  { cat: "owning", q: "Can I update the site myself?", a: "Every build includes a simple admin panel so you can change text, images, prices and offers yourself, any time — no developer required. We'll show you exactly how during handover." },
  { cat: "owning", q: "What if I want to leave later?", a: "You take everything with you — no exit fees, no drama. Because you own the site, domain and data outright, another developer can pick it up without starting from scratch." },
  { cat: "owning", q: "What does a care plan actually cover?", a: "Managed hosting, SSL and security, daily backups, software updates and uptime monitoring as standard — plus monthly content edits and priority support on higher tiers. Essentially, we keep it fast, safe and current so you don't have to think about it." },
  { cat: "seo", q: "Will my site show up on Google?", a: "Every site we build is structured for SEO from the ground up. Getting to the top for competitive local searches is an ongoing effort — that's what our SEO service is for — but you'll launch on solid technical foundations." },
  { cat: "seo", q: "How long does SEO take to work?", a: "Anyone promising page one in a week is lying. Real rankings build over weeks and months — but once they're there, they keep paying you back long after the work is done. We'll tell you what's realistic for your market up front." },
  { cat: "seo", q: "What's the local map pack, and can you get me in it?", a: "It's the top-three local results with a map that sit above everything else — and they win most of the calls. We optimise your Google Business Profile, reviews and local signals to get you into it and keep you there." },
  { cat: "trust", q: "It's just one person — what if you're ill or unavailable?", a: "Fair question. Because you own your site, domain and data outright, you're never locked to me — but in practice I keep everything documented and backed up so nothing depends on me being reachable at a single moment. For anything urgent post-launch, care-plan clients get priority response." },
  { cat: "trust", q: "How do I know the work will actually be good?", a: "Look at the teardown itself — it's a live sample of how I think about your site before you've paid anything. Beyond that, you'll see the design before we build and review the site as it comes together, so you're never trusting blind. And you can see real examples in our work." },
  { cat: "trust", q: "Do you work with businesses like mine?", a: "Most likely yes. I build for local and service-based businesses that win customers on trust — dentists, trades, professional services and similar. That's the same thing your customers judge when they land on your site, so it shapes everything I build." },
  { cat: "process", q: "What if I don't like the design?", a: "You'll see and approve the design direction before any building starts, so we catch that early rather than at the end. Revisions at the design stage are part of the process — the goal is that by launch, there are no surprises because you've shaped it the whole way." },
  { cat: "pricing", q: "Is there a cheaper option if I'm on a tight budget?", a: "The Starter package is built exactly for that — a clean, professional site covering the essentials, with room to grow later. In your teardown I'll be honest about what you actually need versus what can wait, so you're not paying for things that won't move the needle yet." },
  { cat: "seo", q: "Can you help me get more reviews and calls, not just traffic?", a: "That's the real goal — traffic only matters if it turns into enquiries. Alongside SEO, I focus on the things that convert visitors into calls: clear calls-to-action, easy contact, trust signals and a Google Business Profile set up to earn reviews. Rankings and results, not just numbers." },
];
