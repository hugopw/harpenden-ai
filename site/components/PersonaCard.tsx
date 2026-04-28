import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type Tone = "leader" | "teen" | "volunteer" | "organisation";

const toneStyles: Record<
  Tone,
  {
    bg: string;
    text: string;
    cta: string;
    ctaText: string;
    pill: string;
    stage: string;
  }
> = {
  leader: {
    bg: "bg-midnight text-chalk",
    text: "text-chalk",
    cta: "bg-lime",
    ctaText: "text-midnight",
    pill: "bg-lime/90 text-midnight",
    stage: "bg-midnight-soft",
  },
  teen: {
    bg: "bg-sherpas-gradient text-white",
    text: "text-white",
    cta: "bg-white",
    ctaText: "text-midnight",
    pill: "bg-white/90 text-midnight",
    stage: "bg-white/15",
  },
  volunteer: {
    bg: "bg-lavender text-midnight",
    text: "text-midnight",
    cta: "bg-midnight",
    ctaText: "text-lime",
    pill: "bg-midnight text-lime",
    stage: "bg-lavender-soft",
  },
  organisation: {
    bg: "bg-chalk text-midnight border border-midnight/15",
    text: "text-midnight",
    cta: "bg-midnight",
    ctaText: "text-lime",
    pill: "bg-midnight/10 text-midnight",
    stage: "bg-chalk-warm",
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
        "group flex h-full flex-col overflow-hidden rounded-3xl transition will-change-transform hover:-translate-y-1 hover:shadow-2xl",
        t.bg
      )}
    >
      {/* Top region: pill + title + blurb + CTA */}
      <div className="flex flex-1 flex-col gap-5 p-7 md:p-9">
        <span
          className={clsx(
            "w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
            t.pill
          )}
        >
          {who}
        </span>
        <h3
          className={clsx(
            "font-display text-2xl leading-tight md:text-3xl",
            t.text
          )}
        >
          {title}
        </h3>
        <p className={clsx("text-base md:text-lg", t.text, "opacity-90")}>
          {blurb}
        </p>
        <span
          className={clsx(
            "mt-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition group-hover:gap-3",
            t.cta,
            t.ctaText
          )}
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      {/* Bottom region: dedicated stage for the illustration. Always present
          even if no decoration so the cards stay the same shape. */}
      <div
        aria-hidden="true"
        className={clsx(
          "flex h-44 w-full items-center justify-center overflow-hidden md:h-52",
          t.stage
        )}
      >
        {decoration ? (
          <div className="flex h-full w-full items-end justify-center">
            {decoration}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
