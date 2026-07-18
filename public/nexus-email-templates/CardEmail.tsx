import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

/* ============================================================
   NEXUS LAB SYSTEMS — CARD LAYOUT EMAIL
   Cream background, white card, copper top edge.
   Matches the website's vibe.
   ============================================================ */

const c = {
  bg: "#f4f0e6",
  card: "#ffffff",
  footer: "#faf8f3",
  quote: "#f9f7f1",
  quoteText: "#4a453c",
  ink: "#191712",
  navy: "#1c2630",
  accent: "#b7472a",
  muted: "#8a8578",
  line: "#e8e4da",
};

export interface CardEmailProps {
  clinic?: string;
  city?: string;
  observation?: string;
  cost?: string;
  logoUrl?: string;
}

export const CardEmail = ({
  clinic = "{clinic}",
  city = "{city}",
  observation = "{observation}",
  cost = "{cost}",
  logoUrl = "https://nexuslabsystems.com/signature-logo.png",
}: CardEmailProps) => (
  <Html>
    <Head />
    <Preview>{`A quick note about ${clinic}'s website`}</Preview>
    <Body style={body}>
      <Container style={outer}>
        {/* ---------- CARD ---------- */}
        <Section style={card}>
          <div style={topEdge} />

          {/* header */}
          <Section style={header}>
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "12px", verticalAlign: "middle" }}>
                    <Img
                      src={logoUrl}
                      width="34"
                      height="34"
                      alt="Nexus Lab Systems"
                      style={{ display: "block", border: 0 }}
                    />
                  </td>
                  <td style={wordmarkCell}>Nexus Lab Systems</td>
                </tr>
              </tbody>
            </table>
            <div style={divider} />
          </Section>

          {/* body */}
          <Section style={bodyPad}>
            <Text style={p}>Hi {clinic} team,</Text>

            <Text style={p}>
              I build websites for dental practices, and I was looking at yours
              while going through clinics in {city}.
            </Text>

            <Text style={p}>
              Your reviews are genuinely strong — the kind of reputation most
              practices would love to have. Which is why the website stood out
              to me: {observation}
            </Text>

            {/* the cost, pulled out */}
            <div style={quoteBlock}>
              <Text style={quoteText}>{cost}</Text>
            </div>

            <Text style={p}>
              If you&apos;d like, I&apos;ll rebuild your homepage and record a
              short before-and-after — your current site next to the redesigned
              version. Free, no obligation, whether we ever work together or
              not.
            </Text>

            <Text style={p}>
              Just reply <strong>&quot;yes&quot;</strong> and I&apos;ll send it
              over this week.
            </Text>

            <Text style={{ ...p, marginBottom: "4px" }}>Mohammad Jawad</Text>
          </Section>

          {/* footer strip */}
          <Section style={footer}>
            <Text style={sigName}>Mohammad Jawad</Text>
            <Text style={sigRole}>
              Founder ·{" "}
              <span style={{ color: c.navy, fontWeight: 700 }}>
                Nexus Lab Systems
              </span>
            </Text>
            <Text style={sigContact}>
              <Link href="mailto:contact@nexuslabsystems.com" style={linkInk}>
                contact@nexuslabsystems.com
              </Link>
              <br />
              <Link href="https://nexuslabsystems.com" style={linkAccent}>
                nexuslabsystems.com
              </Link>
            </Text>
            <Text style={tagline}>Web Development &amp; Digital Solutions</Text>
          </Section>
        </Section>
        {/* ---------- /CARD ---------- */}

        <Text style={optOut}>
          If you&apos;d rather not hear from me, just reply
          &quot;unsubscribe&quot; and I won&apos;t contact you again.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default CardEmail;

/* ---------------- styles ---------------- */
const sans =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";
const serif = "Georgia, 'Times New Roman', serif";

const body: React.CSSProperties = {
  backgroundColor: c.bg,
  margin: 0,
  padding: "40px 16px",
  fontFamily: sans,
};

const outer: React.CSSProperties = { maxWidth: "560px", margin: "0 auto" };

const card: React.CSSProperties = {
  backgroundColor: c.card,
  borderRadius: "14px",
  border: `1px solid ${c.line}`,
  overflow: "hidden",
  padding: 0,
};

const topEdge: React.CSSProperties = {
  height: "4px",
  backgroundColor: c.accent,
  fontSize: 0,
  lineHeight: 0,
};

const header: React.CSSProperties = { padding: "28px 36px 0 36px" };

const wordmarkCell: React.CSSProperties = {
  verticalAlign: "middle",
  fontFamily: serif,
  fontSize: "16px",
  fontWeight: 700,
  color: c.navy,
};

const divider: React.CSSProperties = {
  height: "1px",
  backgroundColor: c.line,
  marginTop: "22px",
};

const bodyPad: React.CSSProperties = { padding: "26px 36px 8px 36px" };

const p: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.65",
  color: c.ink,
  margin: "0 0 16px 0",
};

const quoteBlock: React.CSSProperties = {
  backgroundColor: c.quote,
  borderLeft: `3px solid ${c.accent}`,
  padding: "16px 18px",
  borderRadius: "0 8px 8px 0",
  margin: "0 0 20px 0",
};

const quoteText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: c.quoteText,
  margin: 0,
};

const footer: React.CSSProperties = {
  padding: "20px 36px 26px 36px",
  backgroundColor: c.footer,
  borderTop: `1px solid ${c.line}`,
};

const sigName: React.CSSProperties = {
  fontFamily: serif,
  fontSize: "15px",
  fontWeight: 700,
  color: c.ink,
  margin: "0 0 2px 0",
  lineHeight: "1.3",
};

const sigRole: React.CSSProperties = {
  fontSize: "12px",
  color: c.muted,
  margin: "0 0 10px 0",
  lineHeight: "1.4",
};

const sigContact: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "1.7",
  margin: "0 0 10px 0",
};

const linkInk: React.CSSProperties = { color: c.ink, textDecoration: "none" };
const linkAccent: React.CSSProperties = {
  color: c.accent,
  textDecoration: "none",
  fontWeight: 700,
};

const tagline: React.CSSProperties = {
  fontSize: "11px",
  color: c.muted,
  margin: 0,
  letterSpacing: "0.3px",
};

const optOut: React.CSSProperties = {
  fontSize: "11px",
  color: c.muted,
  lineHeight: "1.5",
  textAlign: "center",
  margin: "16px 8px 0 8px",
};
