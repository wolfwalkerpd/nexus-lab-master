import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <section className="flex min-h-[72dvh] flex-col items-center justify-center px-gutter pb-[72px] pt-12 text-center">
      <FadeIn className="max-w-[620px]">
        <div className="mb-[10px] font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-accent">Error 404</div>
        <div className="serif text-mega text-accent">404</div>
        <h1 className="serif mb-[14px] text-h3">This page took a wrong turn.</h1>
        <p className="mx-auto mb-8 max-w-[460px] text-[17px] leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or it may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mb-[34px] flex flex-wrap justify-center gap-[13px]">
          <Link href="/" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-7 py-[15px] text-[15px] font-semibold text-bg no-underline sm:w-auto">← Back to home</Link>
          <Link href="/contact" className="btn-primary w-full sm:w-auto">Book your free teardown →</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[22px] gap-y-2 border-t pt-6 text-[14px] text-muted2 hair">
          <span className="text-muted3">Try:</span>
          <Link href="/services" className="text-muted2 hover:text-accent">Services</Link>
          <Link href="/work" className="text-muted2 hover:text-accent">Work</Link>
          <Link href="/pricing" className="text-muted2 hover:text-accent">Pricing</Link>
          <Link href="/about" className="text-muted2 hover:text-accent">About</Link>
        </div>
      </FadeIn>
    </section>
  );
}
