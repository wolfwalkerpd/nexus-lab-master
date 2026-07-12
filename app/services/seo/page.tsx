import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Local SEO",
  description:
    "Get found on Google by the customers searching near you. Technical, on-page and local SEO — Google Business Profile, maps and content that ranks.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO & Local SEO | Nexus Lab Systems",
    description:
      "Rank on Google and get found by nearby customers with technical and local SEO.",
    url: "https://www.nexuslabsystems.com/services/seo",
  },
};

const included = [
  ["Keyword research", "The exact terms your customers type — and what your rivals rank for."],
  ["On-page SEO", "Titles, structure and content tuned for the searches that convert."],
  ["Technical SEO", "Speed, mobile, indexing and the fixes Google quietly rewards."],
  ["Google Business Profile", "Optimised to win the map pack that sits above the results."],
  ["Local citations", "Consistent listings across the directories that build local trust."],
  ["Content strategy", "Pages and posts that answer real questions and earn rankings."],
  ["Reviews & reputation", "A simple system to earn more 5★ reviews — the ultimate local signal."],
  ["Monthly reporting", "Plain-English reports on rankings, traffic and enquiries — no jargon."],
];

const steps = [
  ["01", "Audit", "We find where you rank now and what's holding you back."],
  ["02", "Fix", "Technical and on-page issues cleared, profile optimised."],
  ["03", "Content", "We publish pages that target the searches that pay."],
  ["04", "Grow & report", "We track rankings and enquiries and keep pushing upward."],
];

export default function SeoPage() {
  return (
    <>
      <section className="wrap grid grid-cols-1 items-center gap-10 pb-[30px] pt-section lg:grid-cols-[1.1fr_0.9fr] lg:gap-[52px]">
        <FadeIn>
          <div className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
            <Link href="/services" className="text-muted3">Services</Link> / SEO &amp; Local SEO
          </div>
          <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">Get found the moment customers start searching.</h1>
          <p className="mb-[30px] max-w-[520px] text-lead text-muted">
            Most local businesses are invisible on Google for the searches that matter most. We change that — with technical SEO, local optimisation and content that earns rankings and keeps them.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
            <Link href="/pricing" className="btn-ghost w-full sm:w-auto">See pricing</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80} className="surface min-w-0 p-6 shadow-[0_20px_50px_rgba(var(--ink-rgb),0.14)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="min-w-0 truncate font-mono text-[11px] uppercase tracking-[0.14em] text-muted3">&quot;roofer near me&quot;</span>
            <span className="flex-none text-[12px] font-semibold text-accent">optimising</span>
          </div>
          <div className="flex flex-col gap-[9px]">
            {[["4", "A rival you've never heard of", 0.55], ["3", "Another one", 0.7], ["2", "Nearly there…", 1]].map(([n, t, o]) => (
              <div key={n as string} className="flex items-center gap-3 rounded-[12px] bg-rowbg px-[14px] py-3" style={{ opacity: o as number }}>
                <span className="w-[14px] flex-none text-[13px] font-semibold text-muted4">{n}</span>
                <span className="min-w-0 truncate text-[14px] text-muted">{t}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-[12px] border border-accent bg-rowbgyou px-[14px] py-[13px]">
              <span className="w-[14px] flex-none text-[13px] font-bold text-accent">1</span>
              <span className="min-w-0 truncate text-[14px] font-bold text-ink">Your Business</span>
              <span className="ml-auto flex-none rounded-[5px] bg-accent px-[7px] py-[2px] text-[9px] font-bold text-white">GOAL</span>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="eyebrow mb-3">What&apos;s included</div>
            <h2 className="serif mb-[38px] text-h3 tracking-[-0.3px]">The full local-search picture</h2>
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

      <section className="wrap grid grid-cols-1 gap-12 py-section md:grid-cols-2">
        <FadeIn>
          <div className="eyebrow mb-3">The map pack</div>
          <h2 className="serif mb-[18px] text-h3 tracking-[-0.3px]">The three results that win most local business</h2>
          <p className="mb-4 text-[16px] leading-relaxed text-muted">When someone searches &quot;near me&quot;, Google shows a map and three local businesses above everything else. Those three get the calls. Everyone else fights for scraps.</p>
          <p className="text-[16px] leading-relaxed text-muted">We optimise your Google Business Profile, reviews and local signals to get you into that pack — and keep you there.</p>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="eyebrow mb-3">Honest note</div>
          <h2 className="serif mb-[18px] text-h3 tracking-[-0.3px]">SEO is a marathon, not a switch</h2>
          <p className="text-[16px] leading-relaxed text-muted">Anyone promising page one in a week is lying. Real rankings build over weeks and months — but once they&apos;re there, they keep paying you back long after the work is done. We&apos;ll tell you what&apos;s realistic for your market up front.</p>
        </FadeIn>
      </section>

      <section className="border-t bg-panel hair">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="eyebrow mb-3">How it works</div>
            <h2 className="serif mb-10 text-h3 tracking-[-0.3px]">Audit, fix, grow</h2>
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
        </div>
      </section>

      <CtaBand heading="Want to know why you're not ranking?" sub="Your free teardown includes a snapshot of where you rank today and the fastest way up." />
    </>
  );
}
