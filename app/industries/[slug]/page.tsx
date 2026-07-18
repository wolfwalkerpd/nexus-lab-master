import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { INDUSTRY_PAGES, getIndustry } from "@/lib/industries";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return { title: "Industry Not Found" };

  return {
    title: ind.title,
    description: ind.metaDescription,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      title: `${ind.title} | Nexus Lab Systems`,
      description: ind.metaDescription,
      url: `https://nexuslabsystems.com/industries/${ind.slug}`,
    },
  };
}

export function generateStaticParams() {
  return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
}

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.label, path: `/industries/${ind.slug}` },
        ])}
      />
      <section className="wrap grid grid-cols-1 items-center gap-10 pb-[30px] pt-section lg:grid-cols-[1.1fr_0.9fr] lg:gap-[52px]">
        <FadeIn>
          <div className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
            <Link href="/industries" className="text-muted3">Industries</Link> / {ind.label}
          </div>
          <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">{ind.title}</h1>
          <p className="mb-[30px] max-w-[520px] text-lead text-muted">{ind.intro}</p>
          <div className="flex flex-wrap gap-[14px]">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
            <Link href={ind.caseHref} className="btn-ghost w-full sm:w-auto">{ind.caseLabel}</Link>
          </div>
        </FadeIn>
        <FadeIn delay={80} className="min-w-0 overflow-hidden rounded-[14px] border shadow-[0_20px_50px_rgba(var(--ink-rgb),0.16)] hair">
          <div className="flex items-center gap-[7px] border-b bg-av px-[15px] py-[11px] hair">
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#c9713f" }} />
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#d6b24a" }} />
            <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#7a9a6d" }} />
            <span className="ml-3 truncate font-mono text-[11px] text-muted3">{ind.domain}</span>
          </div>
          <div className="bg-card">
            <div className="px-6 pb-[30px] pt-[34px] text-white sm:px-[34px] sm:pt-[38px]" style={{ background: ind.hue }}>
              <div className="mb-[14px] font-mono text-[10.5px] uppercase tracking-[0.18em] opacity-90">{ind.previewLabel}</div>
              <div className="serif mb-3 text-h4">{ind.head}</div>
              <div className="mb-5 max-w-[340px] text-[13.5px] leading-relaxed opacity-90">{ind.sub}</div>
              <span className="inline-block rounded-full bg-white px-5 py-[11px] text-[13px] font-semibold text-ink">{ind.cta}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4 sm:gap-[10px] sm:p-5">
              {ind.cards.map((c) => (
                <div key={c} className="rounded-[9px] border bg-bg px-2 py-[14px] text-center text-[11px] text-muted hair sm:px-3 sm:text-[12px]">{c}</div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="eyebrow mb-3">What we build</div>
            <h2 className="serif mb-[38px] text-h3 tracking-[-0.3px]">{ind.featuresHeading}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ind.features.map(([t, d], i) => (
              <FadeIn key={t} delay={(i % 3) * 80}>
                <div className="surface h-full p-6 sm:p-[26px]">
                  <div className="serif mb-2 text-[22px]">{t}</div>
                  <div className="text-[14px] leading-relaxed text-muted2">{d}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-10 pt-section">
        <FadeIn>
          <h2 className="serif mb-8 text-h3 tracking-[-0.3px]">The outcomes that matter</h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {ind.outcomes.map(([t, d], i) => (
            <FadeIn key={t} delay={i * 80}>
              <div className="h-full border-l-2 border-accent py-[6px] pl-[22px]">
                <div className="serif mb-2 text-h6">{t}</div>
                <div className="text-[14.5px] leading-relaxed text-muted2">{d}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="wrap pb-10">
        <FadeIn>
          <div className="surface p-card">
            <div className="serif max-w-[820px] text-quote text-ink">&quot;{ind.quote}&quot;</div>
            <div className="mt-[22px] text-[14px] text-muted3">{ind.quoteBy}</div>
          </div>
        </FadeIn>
      </section>

      <CtaBand heading={ind.ctaHeading} sub={ind.ctaSub} />
    </>
  );
}
