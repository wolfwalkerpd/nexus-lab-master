import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { CARE_PLANS } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Care Plans & Maintenance",
  description:
    "Monthly website care — updates, security, backups, hosting and ongoing tweaks — so your site stays fast, safe and working. Handled for you.",
  alternates: { canonical: "/services/care-plans" },
  openGraph: {
    title: "Website Care Plans & Maintenance | Nexus Lab Systems",
    description:
      "Monthly care plans keep your website fast, secure and up to date.",
    url: "https://www.nexuslabsystems.com/services/care-plan",
  },
};

const included = [
  ["Managed hosting", "Fast, reliable UK hosting — set up and managed by us."],
  ["SSL & security", "Encryption, firewalls and malware scanning, always on."],
  ["Daily backups", "Automatic backups so we can roll back in minutes if needed."],
  ["Software updates", "Core, plugin and security updates applied and tested."],
  ["Uptime monitoring", "We're alerted the moment anything goes down — often before you notice."],
  ["Monthly edits", "A pool of content changes each month — just email us."],
  ["Priority support", "A real person who knows your site — not a ticket queue."],
  ["Performance checks", "Regular speed reviews to keep pages loading fast."],
];

export default function CarePlansPage() {
  return (
    <>
      <section className="wrap grid grid-cols-1 items-center gap-10 pb-[30px] pt-section lg:grid-cols-[1.1fr_0.9fr] lg:gap-[52px]">
        <FadeIn>
          <div className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
            <Link href="/services" className="text-muted3">Services</Link> / Care Plans, Maintenance &amp; Hosting
          </div>
          <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">Your website, looked after.</h1>
          <p className="mb-[30px] max-w-[520px] text-lead text-muted">
            Websites aren&apos;t &quot;set and forget&quot;. Software needs updating, security needs watching and content needs changing. Our care plans handle all of it — so your site stays fast, safe and current while you run your business.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
            <Link href="/pricing" className="btn-ghost w-full sm:w-auto">See plan pricing</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80} className="surface min-w-0 p-[22px] shadow-[0_20px_50px_rgba(var(--ink-rgb),0.14)]">
          <div className="mb-[14px] flex flex-wrap items-center justify-between gap-2 border-b pb-[14px] hair">
            <span className="min-w-0 truncate font-mono text-[11px] text-muted3">your-business.co.uk</span>
            <span className="flex-none rounded-full px-[10px] py-1 text-[11px] font-bold" style={{ background: "#e7f0e2", color: "#3c7d38" }}>All systems healthy</span>
          </div>
          <div className="flex flex-col gap-3">
            {[["Managed hosting", "Active"], ["SSL certificate", "Secure"], ["Latest backup", "Last night"], ["Software & plugins", "Up to date"], ["Uptime monitoring", "On"]].map(([a, b]) => (
              <div key={a} className="flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-[9px] text-[14px] text-muted"><span className="flex-none" style={{ color: "#3c7d38" }}>✓</span><span className="truncate">{a}</span></span>
                <span className="flex-none text-[13px] text-muted3">{b}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="eyebrow mb-3">What&apos;s included</div>
            <h2 className="serif mb-[38px] text-h3 tracking-[-0.3px]">Everything handled, nothing to think about</h2>
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
        <FadeIn className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Monthly plans</div>
            <h2 className="serif text-h3 tracking-[-0.3px]">Pick your level of care</h2>
          </div>
          <Link href="/pricing" className="text-[14.5px] font-medium text-accent">Full pricing &amp; comparison →</Link>
        </FadeIn>
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {CARE_PLANS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div className="surface flex h-full flex-col p-card" style={{ borderColor: p.popular ? "var(--accent)" : undefined }}>
                <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
                  <span className="serif text-h6">{p.name}</span>
                  {p.popular && <span className="rounded-full border border-accent px-[10px] py-[3px] text-[11px] font-semibold text-accent">Popular</span>}
                </div>
                <div className="mb-[18px] min-h-[38px] text-[13.5px] text-muted2">{p.desc}</div>
                <div className="mb-5 flex flex-wrap items-baseline gap-[6px]">
                  <span className="text-[13px] text-muted3">from</span>
                  <span className="rounded-[7px] bg-accentweak px-[10px] py-[5px] font-mono text-[15px] text-accent">{p.price}{p.suffix}</span>
                </div>
                <div className="flex flex-col gap-[9px] text-[13.5px] text-muted">
                  {p.features.map((f) => <div key={f} className="flex gap-[9px]"><span className="flex-none text-accent">✓</span>{f}</div>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand variant="light" heading="Already have a site that needs a safe pair of hands?" sub="We can take over hosting and maintenance for most sites. Book a teardown and we'll check yours." />
    </>
  );
}
