import clsx from "clsx";

type Tone = "sun" | "sky" | "meadow" | "warm" | "ink";

export function SegmentCard({
  number,
  title,
  blurb,
  need,
  tone = "sky",
}: {
  number: string;
  title: string;
  blurb: string;
  need: string;
  tone?: Tone;
}) {
  const bg = {
    sun: "bg-sun-glow",
    sky: "bg-sky-mist",
    meadow: "bg-meadow-soft",
    warm: "bg-chalk-warm",
    ink: "bg-ink text-chalk",
  }[tone];

  const chip = {
    sun: "bg-sun text-ink",
    sky: "bg-sky text-white",
    meadow: "bg-meadow text-white",
    warm: "bg-sun-warm text-white",
    ink: "bg-chalk text-ink",
  }[tone];

  const muted = tone === "ink" ? "text-chalk/80" : "text-ink/75";
  const label = tone === "ink" ? "text-chalk" : "text-ink";

  return (
    <article
      className={clsx(
        "flex h-full flex-col gap-4 rounded-3xl border border-ink/10 p-6 md:p-7",
        bg
      )}
    >
      <span
        className={clsx(
          "inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm",
          chip
        )}
      >
        {number}
      </span>
      <h3 className={clsx("font-display text-2xl leading-tight", label)}>{title}</h3>
      <p className={clsx("text-sm leading-relaxed", muted)}>{blurb}</p>
      <p className={clsx("mt-auto text-xs font-semibold uppercase tracking-wider", label)}>
        What they need
      </p>
      <p className={clsx("text-sm leading-relaxed", muted)}>{need}</p>
    </article>
  );
}
