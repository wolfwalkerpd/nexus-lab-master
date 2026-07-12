import postsData from "./posts.json";

export type BlogReason = { heading: string; body: string };

export type BlogPostFull = {
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  authorBio: string;
  date: string;
  read: string;
  heroGrad: string;
  /** Optional hero image (path under /public, e.g. "/my-post.jpg"). Shown on the
   *  blog card and the article hero. Falls back to `heroGrad` when omitted. */
  image?: string;
  intro: string[];
  reasons: BlogReason[];
  /** Optional pull-quote rendered after `reasons[pullQuoteAfter]`. */
  pullQuote?: string;
  pullQuoteAfter?: number;
  fixTitle: string;
  fixes: string[];
  closing: string;
  ctaHeading: string;
  ctaSub: string;
};

export const POSTS = postsData as unknown as BlogPostFull[];

export const getPost = (slug: string): BlogPostFull | undefined =>
  POSTS.find((p) => p.slug === slug);
