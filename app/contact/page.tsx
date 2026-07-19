import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact & Book a Free Teardown",
  description:
    "Book a free website teardown. Tell us about your business in a few quick steps and we'll get back to you fast.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Nexus Lab Systems",
    description: "Book a free website teardown — a few quick steps, fast reply.",
    url: "https://nexuslabsystems.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="flex min-h-[74dvh] items-center justify-center px-gutter pb-[72px] pt-12">
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <FadeIn className="w-full max-w-[640px]">
        <ContactForm />
      </FadeIn>
    </section>
  );
}
