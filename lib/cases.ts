export type CaseStudy = {
  slug: string;
  client: string;
  tags: string[];
  title: string;
  intro: string;
  img: string;
  /** Live site you built — the "Visit" button links here. Leave "" to hide it. */
  url: string;
  metrics: [string, string][];
  briefTitle: string;
  brief: string[];
  approach: string[];
  built: string[];
  quote: string;
  quoteBy: string;
  services: { label: string; href: string }[];
  next: { slug: string; name: string };
  ctaHeading: string;
  ctaSub: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bright-smile-dental", client: "Bright Smile Dental",
    tags: ["Dental", "Website design", "Local SEO"],
    title: "A dental practice that books itself out.",
    intro: "Bright Smile Dental had great care and a website that hid it. We rebuilt the site around booking and put them on the map for local searches.",
    img: "/image.png",
    url: "https://brightsmiledental.co.uk",
    metrics: [["[+1%]", "online bookings"], ["[#1]", '"dentist near me"'], ["[+1%]", "new patients / mo"], ["[1 wks]", "to launch"]],
    briefTitle: "The brief",
    brief: ["The practice was busy on reputation alone, but their website was an old template that buried the important things — and had no way to book online. New patients called during the day or not at all, and they were nowhere to be found for local searches.", "They wanted a site that looked as premium as their care, took bookings around the clock, and actually showed up on Google."],
    approach: ["We started with a teardown of their site and their top local competitors. That shaped a rebuild focused on one job: turning visitors into booked appointments.", "Clear treatment pages, prominent online booking, trust signals up front, and a local SEO push targeting the searches their future patients actually make."],
    built: ["24/7 online booking front and centre", "Treatment pages for every key service", "New-patient offer landing page", "Reviews & registrations built into the design", "Google Business Profile optimisation", "Admin panel so staff update offers themselves"],
    quote: "[Client quote placeholder — the practice owner on the difference the new site and booking flow made to their day-to-day and their new-patient numbers.]",
    quoteBy: "[Name] · Practice Principal, Bright Smile Dental",
    services: [{ label: "Website Design & Development", href: "/services/website-design" }, { label: "SEO & Local SEO", href: "/services/seo" }, { label: "Dental & Healthcare", href: "/industries/dental" }],
    next: { slug: "apex-roofing", name: "Apex Roofing" },
    ctaHeading: "Want results like these?", ctaSub: "Book a free teardown and we'll show you the fastest wins for your business.",
  },
  {
    slug: "apex-roofing", client: "Apex Roofing",
    tags: ["Trades", "Website design", "Branding"],
    title: "The roofer the whole town calls first.",
    intro: "Apex Roofing did excellent work and looked like everyone else. A new brand and a website built for quotes made them the obvious choice across their patch.",
    img: "/image2.png",
    url: "https://apexroofing.co.uk",
    metrics: [["[+1%]", "quote requests"], ["[1]", "towns ranked"], ["[-1%]", "cost per lead"], ["[1 wks]", "to launch"]],
    briefTitle: "The brief",
    brief: ["Apex lived on word of mouth. Their old site was a single dated page with a phone number, no photos of their work and nothing to make them stand out from a dozen local rivals.", "They wanted to look established, show the quality of their work, and get quote requests coming in without chasing."],
    approach: ["We created a confident new brand, then built a site around a single action: request a quote. Real photos of their work do the selling; the forms do the capturing.", "Service-area pages target every town they cover, so they rank wherever a customer is searching."],
    built: ["A bold new logo & brand identity", "Quote request forms on every page", "Before-and-after project galleries", "Click-to-call on every mobile screen", "Service-area pages for local SEO", "Guarantees & reviews front and centre"],
    quote: "[Client quote placeholder — the owner on how the brand and site changed the volume and size of jobs coming in.]",
    quoteBy: "[Name] · Director, Apex Roofing",
    services: [{ label: "Website Design & Development", href: "/services/website-design" }, { label: "SEO & Local SEO", href: "/services/seo" }, { label: "Trades & Local Business", href: "/industries/trades" }],
    next: { slug: "copper-kitchen", name: "The Copper Kitchen" },
    ctaHeading: "Want the phone ringing with the right jobs?", ctaSub: "Book a free teardown and we'll show you where your quote requests are leaking away.",
  },
  {
    slug: "copper-kitchen", client: "The Copper Kitchen",
    tags: ["Hospitality", "Website design", "Bookings"],
    title: "Booked out, even midweek.",
    intro: "The Copper Kitchen lived on walk-ins and a PDF menu. A new site with live menus and online booking turned quiet Tuesdays into full ones.",
    img: "/image1.png",
    url: "https://thecopperkitchen.co.uk",
    metrics: [["[+1%]", "online bookings"], ["[+1%]", "midweek covers"], ["[+1%]", "repeat bookings"], ["[1 wks]", "to launch"]],
    briefTitle: "The brief",
    brief: ["Great food, loyal regulars — but a website that was little more than a downloadable PDF menu and a phone number. Booking meant calling during service, and midweek tables sat empty.", "They wanted online booking, menus they could update themselves, and a way to promote quiet nights."],
    approach: ["We built a warm, appetising site with booking front and centre, and a live menu the team edits from their phones — no more out-of-date PDFs.", "Events and midweek offers get their own space, so there's always a reason to book."],
    built: ["Online table booking front and centre", "Live menus staff edit themselves", "Events & midweek offer pages", "Mouth-watering photography-led design", "Mobile-first for on-the-go bookings", "Reviews pulled in to build trust"],
    quote: "[Client quote placeholder — the owner on how online booking and live menus changed midweek trade and freed up the team during service.]",
    quoteBy: "[Name] · Owner, The Copper Kitchen",
    services: [{ label: "Website Design & Development", href: "/services/website-design" }, { label: "Care Plans & Hosting", href: "/services/care-plans" }, { label: "All industries", href: "/industries" }],
    next: { slug: "bright-smile-dental", name: "Bright Smile Dental" },
    ctaHeading: "Fill your quiet nights.", ctaSub: "Book a free teardown and we'll show you how to turn browsers into bookings.",
  },
];

export const getCase = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
