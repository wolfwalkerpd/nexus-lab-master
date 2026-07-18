# Nexus Lab Systems — Cold Outreach Email Template

## Files

| File | What it is |
|---|---|
| `ColdOutreachEmail.tsx` | React Email component — the native Resend way. Type-safe, uses props. |
| `cold-outreach.html` | Plain HTML with `{{merge}}` fields — paste into any tool. |
| `send-with-resend.ts` | Resend sending code, including throttled batch sending. |
| `preview.png` | What it looks like. |

---

## Why this template is deliberately plain

This is the part worth reading.

A cold email is **not** a marketing email. The design brief is the opposite:

- **No images** — image-heavy emails get filtered harder, and a logo signals "campaign".
- **No buttons** — a big coloured CTA button is the single clearest "this is bulk mail" tell.
- **No colour blocks or headers** — real people don't send you a branded header when they email you.
- **No tracking pixels** — they hurt deliverability and add nothing at this volume.

The brand shows up in exactly three places: the **copper rule**, the **serif name**, and the
**signature block**. That's enough to look considered without looking like a newsletter.

Your existing cold email got a **33% click rate** because it read like a person typed it.
This template protects that.

> **Use the branded/HTML-heavy style for:** newsletters, proposals, onboarding, receipts.
> **Use this plain style for:** cold outreach. Always.

---

## Setup

```bash
npm install resend @react-email/components
```

Add your API key to `.env`:
```
RESEND_API_KEY=re_xxxxxxxxx
```

**Verify your domain in Resend** (Domains → Add Domain → add the DNS records it gives you).
You must send from a verified domain or you'll land in spam regardless of the template.

---

## Using it

```ts
import { sendColdOutreach } from "./send-with-resend";

await sendColdOutreach({
  email: "hello@examplepractice.co.uk",
  clinic: "Example Dental",
  city: "Oxford",
  observation: "every \"Book Appointment\" button just goes to a contact form.",
  cost: "Which means someone can only really book while you're open — exactly when they're at work themselves.",
});
```

### The four merge fields

| Field | What goes in it |
|---|---|
| `clinic` | Practice name |
| `city` | Their town/city |
| `observation` | **The one real thing you found on their site.** |
| `cost` | What that observation costs them, in patients — not in design terms. |

**`observation` is the whole email.** If it could be sent to any practice in Britain, it will be
replied to by none of them. Spend the 4 minutes actually looking at their site.

Good: *"every 'Book Appointment' button just goes to a contact form."*
Bad: *"your website could be improved."*

**`cost` translates the observation into their currency.** Never say "your design is dated" —
say what it loses them.

---

## Batch sending

`send-with-resend.ts` includes `sendBatch()`, which:

- caps at **25/day** (raise slowly as your domain warms up)
- waits **2–5 minutes** between sends, randomised

Do not remove the throttling. Blasting from a cold domain is how you end up in spam, and
recovering a burned domain reputation takes weeks.

**Warm-up ramp:** week 1 → 10–15/day · week 2 → 20–25 · week 3 → 30–40 · week 4+ → 50+

---

## Subject line

Set in `send-with-resend.ts`:

```
{clinic} — spotted something on your website
```

"Spotted something" implies you looked, which is your whole advantage. Even better if you can
make it specific per practice: `{clinic}'s booking page` beats a generic subject every time.

---

## Legal (UK)

- Keep the **opt-out line** in every email. It's in the template — don't remove it.
- Send to **business** addresses only.
- Honour any "unsubscribe" reply immediately, and keep a suppression list.

---

## Card layout version (Nosht-style)

Added by request: cream background, white card, copper top edge — matching the website's vibe.

| File | What it is |
|---|---|
| `CardEmail.tsx` | React Email component, card layout |
| `cold-outreach-card.html` | Plain HTML, card layout |
| `preview-card.png` | What it looks like |

**Structure:** cream `#f4f0e6` page → white card with a 4px copper top edge → logo + wordmark header
→ body copy → the *cost* pulled out as a copper-bordered quote block → tinted footer strip with the
signature → opt-out line outside the card.

Uses your hosted logo at `https://nexuslabsystems.com/signature-logo.png` — make sure that URL is live.

### When to use which

| Template | Use for |
|---|---|
| `ColdOutreachEmail.tsx` / `cold-outreach.html` (plain) | **Cold outreach.** Looks human, protects deliverability. |
| `CardEmail.tsx` / `cold-outreach-card.html` (card) | **Warm emails**: replies, proposals, onboarding, newsletters, follow-ups after someone has engaged. |

The card version is better looking. The plain version gets more replies from strangers. Use both,
in the right places.
