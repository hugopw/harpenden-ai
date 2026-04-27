import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type Tone = "leader" | "teen" | "volunteer" | "organisation";

const toneStyles: Record<
  Tone,
  { bg: string; text: string; cta: string; ctaText: string; pill: string }
> = {
  leader: {
    bg: "bg-midnight text-chalk",
    text: "text-chalk",
    cta: "bg-lime",
    ctaText: "text-midnight",
    pill: "bg-lime/90 text-midnight",
  },
  teen: {
    bg: "bg-sherpas-gradient text-white",
    text: "text-white",
    cta: "bg-white",
    ctaText: "text-midnight",
    pill: "bg-white/90 text-midnight",
  },
  volunteer: {
    bg: "bg-lavender text-midnight",
    text: "text-midnight",
    cta: "bg-midnight",
    ctaText: "text-lime",
    pill: "bg-midnight text-lime",
  },
  organisation: {
    bg: "bg-chalk text-midnight border border-midnight/15",
    text: "text-midnight",
    cta: "bg-midnight",
    ctaText: "text-lime",
    pill: "bg-midnight/10 text-midnight",
  },
};

export function PersonaCard({
  tone,
  who,
  title,
  blurb,
  cta,
  href,
  decoration,
}: {
  tone: Tone;
  who: string;
  title: string;
  blurb: string;
  cta: string;
  href: string;
  decoration?: React.ReactNode;
}) {
  const t = toneStyles[tone];
  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-7 md:p-9 transition will-change-transform hover:-translate-y-1 hover:shadow-2xl",
        t.bg
      )}
    >
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            t.pill
          )}
        >
          {who}
        </span>
      </div>
      <h3 className={clsx("relative z-10 font-display text-3xl leading-tight md:text-4xl", t.text)}>
        {title}
      </h3>
      <p className={clsx("relative z-10 text-base md:text-lg", t.text, "opacity-90")}>
        {blurb}
      </p>
      <span
        className={clsx(
          "relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition group-hover:gap-3",
          t.cta,
          t.ctaText
        )}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </span>
      {decoration ? (
        <div
          className="pointer-events-none absolute -bottom-6 -right-6 z-0 opacity-90"
          aria-hidden="true"
        >
          {decoration}
        </div>
      ) : null}
    </Link>
  );
}
