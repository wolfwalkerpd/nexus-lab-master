import Link from "next/link";
import FadeIn from "@/components/FadeIn";

type Props = {
  heading: string;
  sub: string;
  variant?: "dark" | "light";
  align?: "center" | "between";
};

export default function CtaBand({
  heading,
  sub,
  variant = "dark",
  align = "center",
}: Props) {
  const dark = variant === "dark";
  const box = dark ? "bg-ink" : "surface bg-panel";
  const head = dark ? "text-bg" : "text-ink";
  const subC = dark ? "text-ondark" : "text-muted";

  if (align === "between") {
    return (
      <section className="wrap py-14">
        <FadeIn>
          <div className={`flex flex-wrap items-center justify-between gap-8 rounded-[20px] p-card ${box}`}>
            <div className="min-w-0 max-w-[600px]">
              <h2 className={`serif mb-[10px] text-h3 ${head}`}>{heading}</h2>
              <p className={`text-[15.5px] leading-relaxed ${subC}`}>{sub}</p>
            </div>
            <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
              Book your free teardown →
            </Link>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="wrap py-14">
      <FadeIn>
        <div className={`rounded-[20px] p-cardlg text-center ${box}`}>
          <h2 className={`serif mx-auto mb-[14px] max-w-[640px] text-h3 ${head}`}>
            {heading}
          </h2>
          <p className={`mx-auto mb-7 max-w-[520px] text-[16px] ${subC}`}>{sub}</p>
          <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
            Book your free teardown →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
