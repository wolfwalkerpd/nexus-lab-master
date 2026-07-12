import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqExplorer from "@/components/FaqExplorer";
import { EMAIL, FAQ_CATEGORIES, SITE_FAQS } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Your Questions, Answered",
  description:
    "Answers to the most common questions about working with Nexus Lab Systems — the free teardown, pricing, timelines, owning your site, and SEO.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Nexus Lab Systems",
    description:
      "Common questions about our process, pricing, ownership and SEO — answered plainly.",
    url: "https://www.nexuslabsystems.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      {/* Interactive help centre — NOT wrapped in FadeIn: its sticky category
          bar would break under a transformed ancestor. */}
      <FaqExplorer categories={FAQ_CATEGORIES} faqs={SITE_FAQS} />

      {/* STILL STUCK CTA */}
      <section className="mx-auto max-w-[1040px] px-gutter pb-section pt-9">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-[20px] bg-ink p-card">
            <div className="min-w-0 max-w-[560px]">
              <h2 className="serif mb-3 text-h3 text-bg">Still have a question?</h2>
              <p className="text-[16px] leading-relaxed text-ondark">
                Book a free teardown and ask us anything — or email{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="border-b border-white/30 text-bg no-underline hover:text-bg"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
              Book your free teardown →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
