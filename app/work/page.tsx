import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { WORK } from "@/lib/site";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description:
    "Real websites, real results. See before-and-after teardowns and case studies showing how Nexus Lab Systems turns sites into customer engines.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work & Case Studies | Nexus Lab Systems",
    description: "Before-and-after teardowns and results-driven case studies.",
    url: "https://www.nexuslabsystems.com/work",
  },
};
export default function WorkPage() {
  return (
    <>
      <FadeIn>
        <section className="wrap pb-5 pt-section">
          <div className="eyebrow mb-[18px]">Work &amp; case studies</div>
          <h1 className="serif mb-[22px] max-w-[900px] text-h1 tracking-[-0.5px]">Work that pays for itself.</h1>
          <p className="max-w-[640px] text-lead text-muted">
            A website isn&apos;t a cost — it&apos;s a tool that should bring in more work than it ever cost to build. Here&apos;s how we&apos;ve done that for businesses like yours. (Figures shown are placeholders for your real results.)
          </p>
        </section>
      </FadeIn>

      <section className="wrap pb-6 pt-11">
        <div className="flex flex-col gap-[22px]">
          {WORK.map((w) => (
            <FadeIn key={w.slug}>
              <Link href={`/work/${w.slug}`} className="surface grid grid-cols-1 items-center gap-6 overflow-hidden text-ink no-underline transition-colors hover:border-ink/30 md:grid-cols-[1fr_1.1fr] md:gap-9">
                <div className="flex aspect-[16/11] h-full items-end p-[22px]" style={{ background: w.grad }}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">{w.tag} · {w.kind}</span>
                </div>
                <div className="px-gutter pb-[30px] md:py-[30px] md:pl-0 md:pr-[34px]">
                  <h2 className="serif mb-2 text-h5">{w.name}</h2>
                  <p className="mb-5 max-w-[520px] text-[15px] leading-relaxed text-muted2">{w.blurb}</p>
                  <div className="mb-[18px] flex flex-wrap gap-x-8 gap-y-4">
                    {w.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="serif text-stat text-accent">{m.value}</div>
                        <div className="text-[12.5px] text-muted3">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="text-[14px] font-semibold text-accent">Read case study →</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="wrap pb-1 pt-11">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-[34px] hair">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted3">Industries we build for</span>
            <div className="serif flex flex-wrap gap-x-7 gap-y-2 text-[19px] text-muted sm:text-[22px]">
              <Link href="/industries/dental" className="text-muted">Dental &amp; Healthcare</Link>
              <Link href="/industries/professional" className="text-muted">Professional Services</Link>
              <Link href="/industries/trades" className="text-muted">Trades &amp; Local Business</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBand heading="Your business could be the next case study." sub="Book a free teardown and we'll map out exactly what we'd change — and the results we'd aim for." />
    </>
  );
}
