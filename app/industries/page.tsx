import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries We Build For",
  description:
    "Websites and SEO tailored to local-trust businesses — dental and healthcare, professional services, and trades. Built by someone who understands your customer.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | Nexus Lab Systems",
    description:
      "Tailored websites and SEO for dental, professional services and trades.",
    url: "https://www.nexuslabsystems.com/industries",
  },
};

const cards = [
  { href: "/industries/dental", label: "Dental & Healthcare",img:`/preview-dental.svg`, grad: "linear-gradient(150deg,#2FA8C4,#1E7E96)", blurb: "Fill the chair with online booking, new-patient offers and the trust signals patients look for before they pick up the phone.", bullets: ["Online booking", "New-patient funnels", "Reviews & trust"] },
  { href: "/industries/professional", label: "Professional Services",img:`/preview-trades.svg`, grad: "linear-gradient(150deg,#2E7D5B,#1c5540)", blurb: "Solicitors, accountants and consultants win on credibility. We build sites that make you the safe, obvious choice.", bullets: ["Clear services", "Credibility & proof", "Easy enquiry"] },
  { href: "/industries/trades", label: "Trades & Local Business",img:`/preview-service.svg`, grad: "linear-gradient(150deg,#E5892B,#B4610F)", blurb: "Roofers, electricians, builders — show your work, capture quote requests and look bigger than the competition.", bullets: ["Quote requests", "Photo galleries", "Click-to-call"] },
];

export default function IndustriesPage() {
  return (
    <>
      <FadeIn>
        <section className="wrap pb-[30px] pt-section">
          <div className="eyebrow mb-[18px]">Industries</div>
          <h1 className="serif mb-[22px] max-w-[900px] text-h1 tracking-[-0.5px]">Built for how your industry actually wins customers.</h1>
          <p className="max-w-[640px] text-lead text-muted">
            A dentist, a solicitor and a roofer don&apos;t win business the same way. We&apos;ve built for all three — so your site speaks your customers&apos; language and drives the action that matters to you.
          </p>
        </section>
      </FadeIn>

      <section className="wrap pb-6 pt-[50px]">
        <div className="flex flex-col gap-[22px]">
          {cards.map((c) => (
            <FadeIn key={c.href}>
              <Link href={c.href} className="surface grid grid-cols-1 items-center gap-6 overflow-hidden text-ink no-underline transition-colors hover:border-ink/30 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                {/* 4:3 frame matches the SVG so the mockup fits with no crop;
                    its transparent margins let the gradient show as a thin frame. */}
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: c.grad }}>
                  <Image
                    src={c.img}
                    alt={`${c.label} website preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-gutter pb-[30px] md:py-[30px] md:pl-0 md:pr-[34px]">
                  <h2 className="serif mb-[10px] text-h5">{c.label}</h2>
                  <p className="mb-4 max-w-[520px] text-[15px] leading-relaxed text-muted2">{c.blurb}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-muted">
                    {c.bullets.map((b) => <span key={b} className="flex gap-2"><span className="flex-none text-accent">✓</span>{b}</span>)}
                  </div>
                  <span className="mt-[18px] inline-block text-[14px] font-semibold text-accent">Explore {c.label.toLowerCase()} →</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBand heading="Don't see your industry? We still know how to win you customers." sub="The principles travel. Book a free teardown and we'll show you what we'd do for your business." />
    </>
  );
}
