import clsx from "clsx";

export function Eyebrow({
  children,
  tone = "sky",
  className,
}: {
  children: React.ReactNode;
  tone?: "sky" | "sun" | "meadow" | "ink";
  className?: string;
}) {
  const t = {
    sky: "text-sky-deep",
    sun: "text-sun-warm",
    meadow: "text-meadow",
    ink: "text-ink/70",
  }[tone];
  return (
    <p
      className={clsx(
        "text-xs font-semibold uppercase tracking-[0.22em]",
        t,
        className
      )}
    >
      {children}
    </p>
  );
}
