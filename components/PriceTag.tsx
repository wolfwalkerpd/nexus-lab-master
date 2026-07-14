import { discountPctFor, priceFor, promoLive, type PlanKind } from "@/lib/promo";

type Props = {
  /** The ORIGINAL price, e.g. "£1,950". Never pre-discount it at the call site. */
  price: string;
  kind: PlanKind;
  /** e.g. "/mo" for care plans. */
  suffix?: string;
  /** "large" = the big number on /pricing. "pill" = the small accent chip. */
  variant?: "large" | "pill";
  /** For the dark care-plan cards. */
  dark?: boolean;
};

/**
 * Shows the discounted price with the original struck through while the offer
 * is live — and just the plain original price the moment it ends.
 */
export default function PriceTag({ price, kind, suffix, variant = "large", dark }: Props) {
  const live = promoLive();
  const now = priceFor(price, kind); // identical to `price` when the offer is off
  const pct = discountPctFor(kind);

  const mainCls =
    variant === "pill"
      ? "rounded-[7px] bg-accentweak px-[10px] py-[5px] font-mono text-[15px] text-accent"
      : `serif text-h3 ${dark ? "text-bg" : "text-ink"}`;

  return (
    <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={mainCls}>
        {now}
        {variant === "pill" && suffix ? suffix : null}
      </span>

      {variant === "large" && suffix ? (
        <span className="text-[14px] text-muted3">{suffix}</span>
      ) : null}

      {live && (
        <>
          <span className="text-[14px] text-muted3 line-through">
            {price}
            {suffix ?? ""}
          </span>
          <span className="flex-none rounded-full bg-accent px-[8px] py-[2px] text-[10.5px] font-bold text-white">
            −{pct}%
          </span>
        </>
      )}
    </span>
  );
}
