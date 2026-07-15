import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import BlogExplorer from "@/components/BlogExplorer";
import { POSTS } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Practical guides on web design, SEO and getting found online for local service businesses — from someone who builds and ranks sites for a living.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources & Blog | Nexus Lab Systems",
    description:
      "Practical web design and SEO guides for local service businesses.",
    url: "https://nexuslabsystems.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <FadeIn>
        <section className="wrap pb-5 pt-section">
          <div className="eyebrow mb-[18px]">Resources</div>
          <h1 className="serif mb-[22px] max-w-[900px] text-h1 tracking-[-0.5px]">Plain-English guides to growing your business online.</h1>
          <p className="max-w-[640px] text-lead text-muted">No fluff, no jargon — practical advice on websites, SEO and winning more local customers. Written by the people who build them.</p>
        </section>
      </FadeIn>

      <BlogExplorer posts={POSTS} />

      <CtaBand heading="Rather we just did it for you?" sub="Skip the reading list. Book a free teardown and we'll show you the wins specific to your site." />
    </>
  );
}
