import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL } from "@/lib/site";

// Runs on the server only — the Resend API key never reaches the browser.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Who the enquiry is delivered to, and who it is sent "from".
// `from` MUST be an address on a domain you've verified in Resend
// (until then, only Resend's onboarding sender works, and only to your
// own account email). Override both via env without touching code.
const TO = process.env.CONTACT_TO_EMAIL || EMAIL;
const FROM = process.env.RESEND_FROM_EMAIL || "Nexus Lab Systems <onboarding@resend.dev>";

// Trim + hard length caps so a bad/hostile payload can't be huge.
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

// Escape everything before it goes into the HTML email body.
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots
  // don't learn they were caught — but send nothing.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const business = clean(body.business, 150);
  const url = clean(body.url, 500);
  const about = clean(body.about, 5000);
  const source = clean(body.source, 100);

  // Server-side validation — never trust the client's checks.
  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!email || !isEmail(email)) errors.push("email");
  if (!business) errors.push("business");
  if (!about) errors.push("about");
  if (errors.length) {
    return NextResponse.json(
      { error: "Please fill in the required fields.", fields: errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration — log for the operator, stay generic to the client.
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The form isn't available right now. Please email us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Business", business],
    ["Website", url || "—"],
    ["Heard about us", source || "—"],
    ["What they need", about],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#191712;max-width:560px">
      <h2 style="margin:0 0 4px">New free-teardown request</h2>
      <p style="margin:0 0 16px;color:#6b6459">From the website contact form.</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) => `<tr>
          <td style="padding:8px 12px;border:1px solid #eee;background:#faf8f2;font-weight:600;white-space:nowrap;vertical-align:top">${esc(k)}</td>
          <td style="padding:8px 12px;border:1px solid #eee;white-space:pre-wrap">${esc(v)}</td>
        </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email, // reply goes straight to the enquirer
      subject: `New teardown request — ${business}`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }
}
