/* ============================================================
   SENDING WITH RESEND
   npm install resend @react-email/components
   ============================================================ */
import { Resend } from "resend";
import { ColdOutreachEmail } from "./ColdOutreachEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Prospect {
  email: string;
  clinic: string;
  city: string;
  observation: string;
  cost: string;
}

export async function sendColdOutreach(p: Prospect) {
  const { data, error } = await resend.emails.send({
    // Must be a verified domain in Resend
    from: "Mohammad Jawad <contact@nexuslabsystems.com>",
    to: [p.email],
    subject: `${p.clinic} — spotted something on your website`,
    replyTo: "contact@nexuslabsystems.com",
    react: ColdOutreachEmail({
      clinic: p.clinic,
      city: p.city,
      observation: p.observation,
      cost: p.cost,
    }),
  });

  if (error) {
    console.error(`Failed: ${p.clinic}`, error);
    return null;
  }
  console.log(`Sent to ${p.clinic} (${data?.id})`);
  return data;
}

/* ------------------------------------------------------------
   THROTTLED BATCH SEND
   Sends slowly, with randomised gaps, like a human would.
   Blasting is what lands you in spam.
   ------------------------------------------------------------ */
const DAILY_CAP = 25;                 // keep low while warming up
const MIN_GAP_MS = 2 * 60 * 1000;     // 2 minutes
const MAX_GAP_MS = 5 * 60 * 1000;     // 5 minutes

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const jitter = () =>
  MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);

export async function sendBatch(prospects: Prospect[]) {
  const todays = prospects.slice(0, DAILY_CAP);
  console.log(`Sending ${todays.length} emails (cap ${DAILY_CAP})...`);

  for (const [i, p] of todays.entries()) {
    await sendColdOutreach(p);
    if (i < todays.length - 1) {
      const wait = jitter();
      console.log(`  waiting ${Math.round(wait / 1000)}s...`);
      await sleep(wait);
    }
  }
  console.log("Batch complete.");
}

/* ------------------------------------------------------------
   EXAMPLE
   Every observation must be REAL and specific to that practice.
   If it could be sent to anyone, it'll be replied to by no one.
   ------------------------------------------------------------ */
// sendBatch([
//   {
//     email: "hello@example-dental.co.uk",
//     clinic: "Example Dental",
//     city: "Oxford",
//     observation:
//       "every \"Book Appointment\" button just goes to a contact form.",
//     cost:
//       "Which means someone can only really book while you're open — exactly when they're at work themselves. Most people look for a dentist in the evening. By morning, they've often booked with whoever let them do it there and then.",
//   },
// ]);
