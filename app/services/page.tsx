import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import type { Metadata } from "next";

export const servicesMetadata: Metadata = {
  title: "Services — Web Design, SEO & Maintenance",
  description:
    "Websites, SEO and ongoing website care for local service businesses. One person, start to finish — no agency handoffs, no junior teams.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Nexus Lab Systems",
    description:
      "Web design, SEO and website maintenance built to bring you customers.",
    url: "https://www.nexuslabsystems.com/services",
  },
};

const pillars = [
  { no: "01", title: "Website Design & Development", href: "/services/website-design", body: "Custom-designed, fast, mobile-perfect websites built to turn visitors into enquiries — never a template.", bullets: ["Bespoke design & build", "Booking & contact flows", "Self-serve admin panel"] },
  { no: "02", title: "SEO & Local SEO", href: "/services/seo", body: "Climb Google and own the local map pack, so customers find you first when they're ready to buy.", bullets: ["Keyword & competitor research", "Google Business Profile", "Monthly reporting"] },
  { no: "03", title: "Care Plans, Maintenance & Hosting", href: "/services/care-plans", body: "Managed hosting, security, backups and updates — plus a real person to call. Your site, looked after.", bullets: ["Fast, managed hosting", "Backups & security", "Monthly edits & support"] },
];

const also = [
  ["Branding & logo", "A cohesive identity that makes you the obvious choice."],
  ["Content & copywriting", "Words that sell, written for real people."],
  ["Google Business Profile", "Optimised to win the local map pack and reviews."],
  ["Admin panel & training", "Edit anything yourself — we show you how."],
];

const steps = [
  ["01", "Teardown", "We review where you are now and where the quick wins are."],
  ["02", "Plan", "A fixed-price proposal with clear scope, timeline and outcomes."],
  ["03", "Build", "Design, copy and development — with you in the loop throughout."],
  ["04", "Grow", "SEO, care plans and improvements that compound over time."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="wrap pb-6 pt-section">
        <div className="eyebrow mb-[18px]">Services</div>
        <h1 className="serif mb-[22px] max-w-[900px] text-h1 tracking-[-0.5px]">Everything you need to win customers online.</h1>
        <p className="mb-[30px] max-w-[640px] text-lead text-muted">
          From the first pixel to the leads that land in your inbox, we handle the whole picture — one team, one plan, one invoice. No juggling five freelancers who don&apos;t talk to each other.
        </p>
        <div className="flex flex-wrap gap-[14px]">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
          <Link href="/pricing" className="btn-ghost w-full sm:w-auto">See pricing</Link>
        </div>
      </section>

      <section className="wrap pb-6 pt-14">
        <div className="grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.no} href={p.href} className="surface flex flex-col p-6 text-ink no-underline transition-colors hover:border-ink/30 sm:p-8">
              <div className="mb-[18px] font-mono text-[12px] text-accent">{p.no}</div>
              <h3 className="serif mb-[10px] text-h6">{p.title}</h3>
              <p className="mb-[18px] text-[14.5px] leading-relaxed text-muted2">{p.body}</p>
              <div className="mb-5 flex flex-col gap-2 text-[13.5px] text-muted">
                {p.bullets.map((b) => <div key={b} className="flex gap-[9px]"><span className="flex-none text-accent">✓</span>{b}</div>)}
              </div>
              <span className="mt-auto text-[14px] font-semibold text-accent">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap pb-6 pt-10">
        <h2 className="serif mb-[26px] text-h4 tracking-[-0.3px]">Also part of the toolkit</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {also.map(([t, d]) => (
            <div key={t} className="rounded-[13px] bg-panel px-[22px] py-6">
              <div className="serif mb-[7px] text-[21px]">{t}</div>
              <div className="text-[13.5px] leading-relaxed text-muted2">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <div className="eyebrow mb-3">How it works</div>
          <h2 className="serif mb-10 text-h3 tracking-[-0.3px]">Four steps, no mystery</h2>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, t, d]) => (
              <div key={n}>
                <div className="serif mb-3 text-stat text-accent">{n}</div>
                <div className="serif mb-2 text-[22px]">{t}</div>
                <div className="text-[14px] leading-relaxed text-muted2">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Not sure which services you actually need?" sub="Book a free teardown and we'll tell you honestly — even if that's &quot;your site's fine, save your money.&quot;" />
    </>
  );
}
