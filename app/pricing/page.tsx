import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import PriceTag from "@/components/PriceTag";
import { BUILD_PLANS, CARE_PLANS } from "@/lib/site";
import { PROMO, promoLive, seatsLeft } from "@/lib/promo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, honest pricing — one-off website build packages plus monthly care plans to keep your site fast, secure and up to date. No agency overhead baked in.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Nexus Lab Systems",
    description:
      "One-off build packages plus monthly website care plans. Clear and honest.",
    url: "https://www.nexuslabsystems.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <FadeIn>
        <section className="mx-auto max-w-[900px] px-gutter pb-4 pt-section text-center">
          <div className="eyebrow mb-[18px]">Pricing</div>
          <h1 className="serif mb-[22px] text-h1 tracking-[-0.5px]">Clear pricing, before you commit.</h1>
          <p className="mx-auto max-w-[620px] text-lead text-muted">
            Two simple parts: a one-off price to build your website, and an optional monthly plan to keep it running. Every project is fixed-price and agreed up front.
          </p>
        </section>
      </FadeIn>

      {/* LAUNCH OFFER — disappears entirely when PROMO.active = false */}
      {promoLive() && (
        <section className="wrap pt-2">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-ink p-card">
              <div className="min-w-0 max-w-[640px]">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {PROMO.eyebrow}
                  </span>
                  <span className="rounded-full bg-accent px-[10px] py-[3px] text-[11px] font-bold text-white">
                    {seatsLeft()} of {PROMO.seats} spots left
                  </span>
                </div>
                <h2 className="serif mb-2 text-h3 text-bg">
                  {PROMO.headline} · {PROMO.sub}
                </h2>
                <p className="text-[15px] leading-relaxed text-ondark">{PROMO.terms}</p>
              </div>
              <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
                Claim your spot →
              </Link>
            </div>
          </FadeIn>
        </section>
      )}

      {/* ONE-OFF BUILDS */}
      <section className="wrap pb-5 pt-11">
        <FadeIn>
          <div className="mb-2 flex items-center gap-[14px]">
            <span className="flex-none rounded-full bg-accent px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.16em] text-white">One-off</span>
            <div className="h-px flex-1" style={{ background: "rgba(var(--ink-rgb),0.14)" }} />
          </div>
          <h2 className="serif mb-[6px] text-h3 tracking-[-0.3px]">Website builds</h2>
          <p className="mb-[34px] max-w-[560px] text-[16px] text-muted2">Pay once. Own it forever. Choose the scope that fits where your business is now.</p>
        </FadeIn>
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {BUILD_PLANS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div className="surface flex h-full flex-col p-card" style={{ borderColor: p.popular ? "var(--accent)" : undefined }}>
                <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
                  <span className="serif text-h6">{p.name}</span>
                  {p.popular && <span className="rounded-full border border-accent px-[10px] py-[3px] text-[11px] font-semibold text-accent">Most popular</span>}
                </div>
                <div className="mb-[22px] min-h-[44px] text-[14px] leading-relaxed text-muted2">{p.desc}</div>
                <div className="mb-[6px] flex flex-wrap items-baseline gap-2"><span className="text-[14px] text-muted3">from</span><PriceTag price={p.price} kind="build" /></div>
                <div className="mb-[26px] text-[12.5px] text-muted3">one-off</div>
                <div className="mb-[30px] flex flex-col gap-[11px]">
                  {p.features.map((f) => <div key={f} className="flex gap-[9px] text-[14px] text-muted"><span className="flex-none text-accent">✓</span>{f}</div>)}
                </div>
                <Link href="/contact" className={`mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-[13px] text-center text-[14px] font-semibold no-underline ${p.popular ? "bg-ink text-bg" : "border border-ink text-ink hover:bg-ink hover:text-bg"}`}>Start with a teardown</Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="wrap py-[34px]">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 text-muted3 sm:gap-[18px]">
            <div className="h-px flex-1" style={{ background: "rgba(var(--ink-rgb),0.14)" }} />
            <span className="serif flex-none text-center text-[17px] text-muted sm:text-[22px]">then, keep it running</span>
            <div className="h-px flex-1" style={{ background: "rgba(var(--ink-rgb),0.14)" }} />
          </div>
        </FadeIn>
      </section>

      {/* MONTHLY CARE */}
      <section className="bg-ink text-bg">
        <div className="wrap py-sectionsm">
          <FadeIn>
            <div className="mb-2 flex items-center gap-[14px]">
              <span className="flex-none rounded-full bg-bg px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.16em] text-ink">Monthly</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>
            <h2 className="serif mb-[6px] text-h3 tracking-[-0.3px] text-bg">Care plans</h2>
            <p className="mb-[34px] max-w-[560px] text-[16px] text-ondark">Optional monthly cover to keep your site fast, safe and current. Cancel any time — no contracts.</p>
          </FadeIn>
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
            {CARE_PLANS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div className="flex h-full flex-col rounded-[16px] border bg-darkpanel p-card" style={{ borderColor: p.popular ? "var(--accent)" : "rgba(255,255,255,0.12)" }}>
                  <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
                    <span className="serif text-h6 text-bg">{p.name}</span>
                    {p.popular && <span className="rounded-full bg-accent px-[10px] py-[3px] text-[11px] font-semibold text-white">Popular</span>}
                  </div>
                  <div className="mb-[22px] min-h-[44px] text-[14px] text-muted3">{p.desc}</div>
                  <div className="mb-[26px] flex flex-wrap items-baseline gap-2"><span className="text-[14px] text-muted3">from</span><PriceTag price={p.price} kind="care" suffix={p.suffix} dark /></div>
                  <div className="mb-[30px] flex flex-col gap-[11px]">
                    {p.features.map((f) => <div key={f} className="flex gap-[9px] text-[14px] text-[color:#e7e0d2]"><span className="flex-none text-accent">✓</span>{f}</div>)}
                  </div>
                  <Link href="/contact" className={`mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-[13px] text-center text-[14px] font-semibold no-underline ${p.popular ? "bg-accent text-white" : "border border-white/30 text-bg"}`}>Choose {p.name}</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-5 pt-14">
        <FadeIn>
          <div className="surface flex flex-wrap items-center justify-between gap-6 bg-panel p-card">
            <div className="min-w-0">
              <div className="serif mb-[6px] text-h6">Every build includes the essentials</div>
              <div className="max-w-[640px] text-[14.5px] text-muted2">A bespoke design, mobile-perfect pages, an admin panel, analytics and full ownership — whichever tier you choose. No essential feature is locked behind the top price.</div>
            </div>
            <Link href="/contact" className="whitespace-nowrap text-[14.5px] font-semibold text-accent">Get a fixed quote →</Link>
          </div>
        </FadeIn>
      </section>

      <CtaBand heading="Want a real number for your project?" sub="Book a free teardown and you'll get a fixed, honest quote — no obligation to go ahead." />
    </>
  );
}
