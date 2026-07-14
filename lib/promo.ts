/**
 * ════════════════════════════════════════════════════════════════════
 *  TEMPORARY LAUNCH OFFER — the whole thing is controlled from here.
 *
 *  ▸ TO END THE OFFER:  set `active: false` below.  That is the ONLY edit.
 *    Every banner, badge, strike-through price and "spots left" counter
 *    disappears, and the original prices come straight back.
 *    Nothing else in the codebase needs touching.
 *
 *  ▸ AS DEALS CLOSE:  bump `claimed` (0 → 5). The counter updates and the
 *    offer switches itself OFF automatically once `claimed` reaches `seats`.
 * ════════════════════════════════════════════════════════════════════
 */
export const PROMO = {
  /** Master switch. `false` = offer gone, original prices restored. */
  active: true,

  /** How many discounted slots exist, and how many are already taken. */
  seats: 5,
  claimed: 0,

  /** Discounts, per price list. */
  buildDiscountPct: 40,
  careDiscountPct: 30,

  /** Copy. */
  eyebrow: "Launch offer",
  headline: "40% off your website build",
  sub: "And 30% off any care plan.",
  terms:
    "For the first 5 clients only — in exchange for an honest testimonial and permission to feature your finished site as a case study.",
} as const;

/** Slots still available. */
export const seatsLeft = () => Math.max(0, PROMO.seats - PROMO.claimed);

/**
 * The single source of truth for "should the offer show?".
 * Every promo component checks this — so `active: false` (or all 5 seats
 * claimed) reverts the entire site in one go.
 */
export const promoLive = () => PROMO.active && seatsLeft() > 0;

export type PlanKind = "build" | "care";

export const discountPctFor = (kind: PlanKind) =>
  kind === "build" ? PROMO.buildDiscountPct : PROMO.careDiscountPct;

/**
 * "£1,950" → "£1,170" (40% off). Keeps the currency symbol and thousands
 * separators. Returns the input untouched if there's no number to discount.
 */
export function applyDiscount(price: string, pct: number): string {
  const m = price.match(/£\s*([\d,]+(?:\.\d+)?)/);
  if (!m) return price;

  const n = parseFloat(m[1].replace(/,/g, ""));
  if (!Number.isFinite(n)) return price;

  const off = Math.round(n * (1 - pct / 100));
  return price.replace(m[0], `£${off.toLocaleString("en-GB")}`);
}

/** The price to actually charge: discounted while the offer is live. */
export const priceFor = (price: string, kind: PlanKind) =>
  promoLive() ? applyDiscount(price, discountPctFor(kind)) : price;
