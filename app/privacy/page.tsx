import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

// Without its own metadata this page inherited the root layout's — including the
// homepage title AND canonical "/", making Google treat it as a homepage
// duplicate. A self-referencing canonical fixes that.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nexus Lab Systems collects, uses and protects your personal data, in line with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Nexus Lab Systems",
    description: "How we handle and protect your personal data.",
    url: "https://nexuslabsystems.com/privacy",
  },
};

const sections: [string, React.ReactNode][] = [
  ["1. Who we are", <>Nexus LabSystems is a website design and digital marketing studio based in the United Kingdom. For any privacy questions, or to exercise your rights, contact us at <a href="mailto:contact@nexuslabsystems.com">contact@nexuslabsystems.com</a>. Our registered address is [Company address placeholder].</>],
  ["3. How we use your data", "We use your information to respond to your enquiry and prepare your free teardown; to provide, manage and improve our services; to understand how our website is used so we can make it better; and to meet our legal and accounting obligations."],
  ["4. Legal basis", "We process your data on the basis of your consent (when you contact us), our legitimate interests in running and improving our business, and where necessary to perform a contract with you or comply with the law."],
  ["5. Cookies & analytics", "Our website may use cookies and similar technologies to keep the site working and to measure traffic through analytics tools. You can control or block cookies through your browser settings; doing so may affect how the site works."],
  ["6. Sharing your data", "We do not sell your personal data. We may share it with trusted service providers who help us operate — such as hosting, email and analytics providers — who are bound to protect it and use it only on our instructions."],
  ["7. How long we keep it", "We keep your personal data only as long as necessary for the purposes above, or as required by law. When it's no longer needed, we securely delete it."],
  ["9. Changes to this policy", "We may update this policy from time to time. Any changes will be posted on this page with an updated date above."],
];

export default function PrivacyPage() {
  return (
    <>
      <FadeIn>
        <section className="mx-auto max-w-[760px] px-gutter pb-7 pt-section">
          <div className="eyebrow mb-[18px]">Legal</div>
          <h1 className="serif mb-4 text-h1 tracking-[-0.5px]">Privacy Policy</h1>
          <p className="text-[15px] text-muted3">Last updated: [Month Year]</p>
        </section>
      </FadeIn>

      <article className="mx-auto max-w-[720px] px-gutter pb-10 text-[16.5px] leading-[1.75] text-muted">
        <p className="mb-[30px]">This policy explains how Nexus LabSystems (&quot;we&quot;, &quot;us&quot;) collects, uses and protects your personal data when you visit our website or get in touch with us. We take your privacy seriously and handle your data in line with UK GDPR and the Data Protection Act 2018.</p>

        {/* section 1 */}
        <h2 className="serif mb-3 mt-[34px] text-h6 text-ink">{sections[0][0]}</h2>
        <p className="mb-6">{sections[0][1]}</p>

        <h2 className="serif mb-3 mt-[34px] text-h6 text-ink">2. What we collect</h2>
        <p className="mb-3">Depending on how you interact with us, we may collect:</p>
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex gap-[11px]"><span className="flex-none text-accent">•</span>Contact details you give us — name, email, business name and website address.</div>
          <div className="flex gap-[11px]"><span className="flex-none text-accent">•</span>Information about your enquiry and business needs, as you provide it.</div>
          <div className="flex gap-[11px]"><span className="flex-none text-accent">•</span>Technical data such as your IP address, browser type and pages visited, via analytics.</div>
        </div>

        {sections.slice(1, 6).map(([h, b]) => (
          <FadeIn key={h}>
            <h2 className="serif mb-3 mt-[34px] text-h6 text-ink">{h}</h2>
            <p className="mb-6">{b}</p>
          </FadeIn>
        ))}

        <h2 className="serif mb-3 mt-[34px] text-h6 text-ink">8. Your rights</h2>
        <p className="mb-6">Under UK GDPR you have the right to access, correct, delete or restrict the use of your personal data, to object to processing, and to data portability. To exercise any of these, email us at <a href="mailto:contact@nexuslabsystems.com">contact@nexuslabsystems.com</a>. You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk.</p>

        <h2 className="serif mb-3 mt-[34px] text-h6 text-ink">{sections[6][0]}</h2>
        <p className="mb-6">{sections[6][1]}</p>

        <FadeIn>
          <div className="mt-9 rounded-[14px] bg-panel px-[26px] py-6 text-[15px] text-muted">
            Questions about your data? Email <a href="mailto:contact@nexuslabsystems.com" className="font-medium">contact@nexuslabsystems.com</a> and we&apos;ll be happy to help.
          </div>
        </FadeIn>
      </article>
    </>
  );
}
