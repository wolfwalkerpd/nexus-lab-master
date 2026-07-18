import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

/* ============================================================
   NEXUS LAB SYSTEMS — COLD OUTREACH EMAIL
   ------------------------------------------------------------
   Deliberately LIGHT on branding. Cold outreach must read like
   a real person typed it, not like a marketing campaign.
   No images, no buttons, no heavy colour blocks — those are the
   things that trip spam filters and signal "mass mail".

   The brand shows up subtly: the copper rule, the serif sign-off,
   and the signature block. That's it. That's deliberate.
   ============================================================ */

const brand = {
  ink: "#191712",
  navy: "#1c2630",
  accent: "#b7472a",
  muted: "#8a8578",
  light: "#e8e4da",
  bg: "#ffffff",
};

export interface ColdOutreachEmailProps {
  /** Practice / business name, e.g. "Didsbury Dental" */
  clinic?: string;
  /** Town or city, e.g. "Manchester" */
  city?: string;
  /** The ONE specific, true observation about their site. */
  observation?: string;
  /** What that observation costs them, in their currency (patients/customers). */
  cost?: string;
  senderName?: string;
  senderEmail?: string;
  siteUrl?: string;
}

export const ColdOutreachEmail = ({
  clinic = "{clinic}",
  city = "{city}",
  observation = "{observation}",
  cost = "{cost}",
  senderName = "Mohammad Jawad",
  senderEmail = "contact@nexuslabsystems.com",
  siteUrl = "https://nexuslabsystems.com",
}: ColdOutreachEmailProps) => (
  <Html>
    <Head />
    {/* Preview text = what shows in the inbox next to the subject.
        Keep it human and specific — it's the second thing they read. */}
    <Preview>{`A quick note about ${clinic}'s website`}</Preview>
    <Body style={body}>
      <Container style={container}>
        <Section>
          <Text style={paragraph}>Hi {clinic} team,</Text>

          <Text style={paragraph}>
            I build websites for dental practices, and I was looking at yours
            while going through clinics in {city}.
          </Text>

          <Text style={paragraph}>
            Your reviews are genuinely strong — the kind of reputation most
            practices would love to have. Which is why the website stood out to
            me: {observation}
          </Text>

          <Text style={paragraph}>{cost}</Text>

          <Text style={paragraph}>
            If you&apos;d like, I&apos;ll rebuild your homepage and record a
            short before-and-after — your current site next to the redesigned
            version. Free, no obligation, whether we ever work together or not.
          </Text>

          <Text style={paragraph}>
            Just reply &quot;yes&quot; and I&apos;ll send it over this week.
          </Text>

          <Text style={signoff}>{senderName}</Text>

          {/* --- signature: the only branded element --- */}
          <Hr style={rule} />

          <Text style={sigName}>{senderName}</Text>
          <Text style={sigRole}>
            Founder ·{" "}
            <span style={{ color: brand.navy, fontWeight: 700 }}>
              Nexus Lab Systems
            </span>
          </Text>
          <Text style={sigContact}>
            <Link href={`mailto:${senderEmail}`} style={sigLinkMuted}>
              {senderEmail}
            </Link>
            <br />
            <Link href={siteUrl} style={sigLinkAccent}>
              nexuslabsystems.com
            </Link>
          </Text>
          <Text style={sigTagline}>Web Development &amp; Digital Solutions</Text>

          <Text style={optOut}>
            If you&apos;d rather not hear from me, just reply
            &quot;unsubscribe&quot; and I won&apos;t contact you again.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ColdOutreachEmail;

/* ---------------- styles ---------------- */

const body: React.CSSProperties = {
  backgroundColor: brand.bg,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "28px 24px",
};

const paragraph: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: brand.ink,
  margin: "0 0 16px 0",
};

const signoff: React.CSSProperties = {
  ...paragraph,
  margin: "24px 0 0 0",
};

const rule: React.CSSProperties = {
  borderColor: brand.light,
  borderWidth: "1px 0 0 0",
  borderStyle: "solid",
  margin: "28px 0 18px 0",
};

const sigName: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "17px",
  fontWeight: 700,
  color: brand.ink,
  margin: "0 0 2px 0",
  lineHeight: "1.3",
};

const sigRole: React.CSSProperties = {
  fontSize: "13px",
  color: brand.muted,
  margin: "0 0 12px 0",
  lineHeight: "1.4",
};

const sigContact: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "1.7",
  margin: "0 0 12px 0",
};

const sigLinkMuted: React.CSSProperties = {
  color: brand.ink,
  textDecoration: "none",
};

const sigLinkAccent: React.CSSProperties = {
  color: brand.accent,
  textDecoration: "none",
  fontWeight: 700,
};

const sigTagline: React.CSSProperties = {
  fontSize: "12px",
  color: brand.muted,
  margin: "0 0 20px 0",
  paddingTop: "10px",
  borderTop: `1px solid ${brand.light}`,
};

const optOut: React.CSSProperties = {
  fontSize: "11px",
  color: brand.muted,
  lineHeight: "1.5",
  margin: 0,
};
