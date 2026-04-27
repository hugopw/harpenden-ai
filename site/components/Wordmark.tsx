import clsx from "clsx";

type Tone = "default" | "light" | "midnight" | "lime" | "sherpas";

export function Wordmark({
  tone = "default",
  size = "md",
  className,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const text = {
    default: "text-ink",
    light: "text-chalk",
    midnight: "text-midnight",
    lime: "text-midnight",
    sherpas: "text-white",
  }[tone];
  const dot = {
    default: "text-lime-deep",
    light: "text-lime",
    midnight: "text-lime",
    lime: "text-midnight",
    sherpas: "text-white",
  }[tone];
  const sizing = {
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-4xl md:text-5xl",
  }[size];
  return (
    <span
      className={clsx(
        "font-display tracking-tight",
        sizing,
        text,
        className
      )}
    >
      Harpenden<span className={clsx("font-display", dot)}>.</span>AI
    </span>
  );
}
