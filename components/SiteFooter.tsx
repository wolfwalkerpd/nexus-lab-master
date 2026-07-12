import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { EMAIL, NAV } from "@/lib/site";

export default function SiteFooter() {
  const media = [
    {name: 'Instagram',
    link : 'https://www.instagram.com/nexuslab.systems?igsh=MXR3ZmJsOWhjM2NhZw=='
    },
    {name: 'Facebook',
    link : 'https://www.facebook.com/share/1H78imojpE/'
    },
    {name: 'X(Twitter)',
    link : 'https://x.com/NexusLabsystems'
    },
    {name: 'LinkedIn',
    link : 'https://www.linkedin.com/in/mohammad-javad-samadi-13b134222/'
    },
    {name: 'TikTok',
    link : 'https://www.tiktok.com/@nexuslabsystems?_r=1&_t=ZT-97yA1odQDPh'
    },
    {name: 'Pinterest',
    link : 'https://pin.it/3ymeaoQw9'
    },
  ]
  return (
    <footer className="bg-ink text-ondark">
      <FadeIn>
        <div className="wrap flex flex-wrap items-center justify-between gap-9 border-b border-white/10 py-sectionsm">
          <div className="min-w-0 flex-1 basis-[300px]">
            <div className="serif max-w-[540px] text-h4 text-bg">
              Not sure where your website is losing you customers?
            </div>
            <div className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-muted3">
              Book a free teardown — we screen-record your site, show you exactly
              what&apos;s costing you leads, and how we&apos;d fix it. No pitch, no
              obligation.
            </div>
          </div>
          <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
            Book your free teardown →
          </Link>
        </div>
      </FadeIn>

      <div className="wrap grid grid-cols-1 gap-11 py-12 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr]">
        <FadeIn className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-[10px] no-underline">
            <span className="relative inline-block h-[26px] w-[26px] flex-none rounded-full bg-bg">
              <span className="absolute inset-[7px] rounded-full border-[1.5px] border-ink" />
            </span>
            <span className="serif text-[22px] text-bg">Nexus LabSystems</span>
          </Link>
          <p className="my-5 max-w-[340px] text-[14px] leading-relaxed text-muted3">
            We design, build and grow websites for ambitious businesses across the
            UK — plus SEO, branding, copy and an admin panel so you can run it all
            yourself.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block border-b border-white/30 pb-[2px] text-[15px] text-bg no-underline"
          >
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted3">
            Explore
          </div>
          <div className="flex flex-col gap-2 text-[14.5px]">
            {NAV.map((it) => (
              <Link key={it.href} href={it.href} className="py-1 text-ondark no-underline hover:text-bg">
                {it.label}
              </Link>
            ))}
            <Link href="/contact" className="py-1 text-ondark no-underline hover:text-bg">
              Contact
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted3">
            Follow
          </div>
          <div className="flex flex-col gap-2 text-[14.5px]">
            {media.map((s) => (
              <a key={s.name} href={s.link} target="_blank" className="py-1 text-ondark no-underline hover:text-bg">
                {s.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-[10px] border-t border-white/10 py-[18px] text-[12.5px] text-muted3">
        <span>© 2026 Nexus LabSystems. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/privacy" className="py-1 text-muted3 no-underline hover:text-ondark">Privacy</Link>
          <Link href="/contact" className="py-1 text-muted3 no-underline hover:text-ondark">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
