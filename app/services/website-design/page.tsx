import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development",
  description:
    "Fast, premium, conversion-focused websites built for local service businesses. Designed to make you look established and turn visitors into customers.",
  alternates: { canonical: "/services/website-design" },
  openGraph: {
    title: "Website Design & Development | Nexus Lab Systems",
    description:
      "Premium, fast, conversion-focused websites for local service businesses.",
    url: "https://nexuslabsystems.com/services/website-design",
  },
};

const included = [
  ["Bespoke design", "Designed for your brand from scratch — never an off-the-shelf template."],
  ["Mobile-first", "Flawless on phones, where most of your customers actually are."],
  ["Fast, clean code", "Built to load quickly and rank well — speed is a ranking factor."],
  ["Conversion copy", "Words written to guide visitors towards booking or calling."],
  ["Booking & forms", "Contact, quote and booking flows wired to your inbox or calendar."],
  ["Admin panel", "A simple dashboard to edit text, images and offers yourself."],
  ["Analytics", "Tracking set up so you can see what's working from day one."],
  ["Accessibility", "Built to modern standards so everyone can use your site."],
];

const steps = [
  ["01", "Discovery & teardown", "We learn your business, your customers and where your current site falls short."],
  ["02", "Design", "We design the key pages and agree the look before a line of code is written."],
  ["03", "Build", "We develop the site, wire up forms and load your content — with you reviewing as we go."],
  ["04", "Launch & handover", "We go live, train you on the admin panel and stay on hand for 30 days."],
];

export default function WebDesignPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Website Design & Development",
            description:
              "Fast, premium, conversion-focused websites built for local service businesses.",
            path: "/services/website-design",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Website Design & Development", path: "/services/website-design" },
          ]),
        ]}
      />
      <section className="wrap grid grid-cols-1 items-center gap-10 pb-[30px] pt-section lg:grid-cols-[1.1fr_0.9fr] lg:gap-[52px]">
        <FadeIn>
          <div className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
            <Link href="/services" className="text-muted3">Services</Link> / Website Design &amp; Development
          </div>
          <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">Websites built to convert — not just to look pretty.</h1>
          <p className="mb-[30px] max-w-[520px] text-lead text-muted">
            A beautiful site that doesn&apos;t generate enquiries is just an expensive business card. We design around one job: turning the people who land on your site into booked customers.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
            <Link href="/pricing" className="btn-ghost w-full sm:w-auto">See pricing</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80} className="min-w-0 overflow-hidden rounded-[14px] border shadow-[0_20px_50px_rgba(var(--ink-rgb),0.16)] hair">
          <div className="flex items-center gap-[7px] border-b bg-av px-[15px] py-[11px] hair">
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#c9713f" }} />
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#d6b24a" }} />
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#7a9a6d" }} />
          </div>
          <div className="flex aspect-[4/3] items-center justify-center font-mono text-[12px] tracking-[0.12em] text-muted4" style={{ background: "linear-gradient(150deg,var(--ph-a),var(--ph-b))" }}>
            DESIGN MOCKUP
          </div>
        </FadeIn>
      </section>

      <section className="border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="eyebrow mb-3">What&apos;s included</div>
            <h2 className="serif mb-[38px] text-h3 tracking-[-0.3px]">Everything a modern site needs</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map(([t, d], i) => (
              <FadeIn key={t} delay={(i % 4) * 80}>
                <div className="surface h-full p-[22px]">
                  <div className="serif mb-[7px] text-[20px]">{t}</div>
                  <div className="text-[13.5px] leading-relaxed text-muted2">{d}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-6 pt-section">
        <FadeIn>
          <div className="eyebrow mb-3">How we build</div>
          <h2 className="serif mb-10 text-h3 tracking-[-0.3px]">From blank page to booked customers</h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d], i) => (
            <FadeIn key={n} delay={i * 80}>
              <div className="serif mb-3 text-stat text-accent">{n}</div>
              <div className="serif mb-2 text-[22px]">{t}</div>
              <div className="text-[14px] leading-relaxed text-muted2">{d}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="wrap pb-5 pt-10">
        <FadeIn>
          <div className="grid grid-cols-1 gap-10 rounded-[20px] bg-ink p-card md:grid-cols-2">
            <div>
              <h2 className="serif mb-[14px] text-h4 text-bg">What you walk away with</h2>
              <p className="text-[15px] leading-relaxed text-ondark">A finished website is the start, not the end. Here&apos;s what&apos;s yours to keep.</p>
            </div>
            <div className="flex flex-col gap-3">
              {["A fast, responsive site you fully own", "Your domain, hosting and data in your name", "Admin-panel training so you're never stuck", "Analytics to measure real results", "30 days of aftercare included"].map((t) => (
                <div key={t} className="flex gap-[11px] text-[15px] text-bg"><span className="flex-none text-accent">✓</span>{t}</div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBand variant="light" heading="Ready to see what your site could be?" sub="Book a free teardown and we'll show you exactly what we'd change and why." />
    </>
  );
}
