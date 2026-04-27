import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function InterventionCard({
  name,
  kicker,
  what,
  who,
  example,
  href,
  accent = "sky",
  external,
}: {
  name: string;
  kicker?: string;
  what: string;
  who: string;
  example: string;
  href?: string;
  accent?: "sky" | "sun" | "meadow" | "ink";
  external?: boolean;
}) {
  const dot = {
    sky: "bg-sky",
    sun: "bg-sun-warm",
    meadow: "bg-meadow",
    ink: "bg-ink",
  }[accent];

  const Wrap: React.ElementType = href ? (external ? "a" : Link) : "div";
  const props = href
    ? external
      ? { href, target: "_blank", rel: "noreferrer" }
      : { href }
    : {};

  return (
    <Wrap
      {...props}
      className={clsx(
        "group flex h-full flex-col gap-3 rounded-3xl border border-ink/10 bg-white/80 p-6 transition",
        href && "hover:-translate-y-0.5 hover:bg-white hover:shadow-glow"
      )}
    >
      <div className="flex items-center gap-2">
        <span className={clsx("h-2.5 w-2.5 rounded-full", dot)} />
        {kicker ? (
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">
            {kicker}
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-xl leading-tight">
        {name}
        {href ? (
          <ArrowUpRight className="ml-1 inline h-4 w-4 translate-y-[-2px] text-ink/40 transition group-hover:text-ink" />
        ) : null}
      </h3>
      <p className="text-sm text-ink/80">{what}</p>
      <div className="mt-2 space-y-2 text-sm">
        <p>
          <span className="text-ink/60">Who it&rsquo;s for: </span>
          <span className="text-ink">{who}</span>
        </p>
        <p>
          <span className="text-ink/60">In Harpenden: </span>
          <span className="text-ink">{example}</span>
        </p>
      </div>
    </Wrap>
  );
}
