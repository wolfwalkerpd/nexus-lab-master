import Link from "next/link";
import { PROMO, promoLive, seatsLeft } from "@/lib/promo";

/**
 * Slim site-wide offer bar. Renders NOTHING once the offer ends
 * (PROMO.active = false, or all seats claimed).
 */
export default function PromoBanner() {
  if (!promoLive()) return null;

  const left = seatsLeft();

  return (
    <div className="bg-ink text-bg">
      <Link
        href="/pricing"
        className="wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-[10px] text-center text-[13px] text-bg no-underline hover:text-bg"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
          {PROMO.eyebrow}
        </span>
        <span className="font-semibold">
          {PROMO.headline} · {PROMO.sub}
        </span>
        <span className="flex-none rounded-full bg-accent px-[10px] py-[2px] text-[11px] font-bold text-white">
          {left} {left === 1 ? "spot" : "spots"} left
        </span>
      </Link>
    </div>
  );
}
