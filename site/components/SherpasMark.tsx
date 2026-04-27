import clsx from "clsx";

// The Sherpas wordmark image, hosted locally. Used on the teen path
// only as a sibling-brand cue.
export function SherpasMark({
  variant = "gradient",
  className,
}: {
  variant?: "gradient" | "white";
  className?: string;
}) {
  const src =
    variant === "white"
      ? "/illustrations/sherpas-logo-white.png"
      : "/illustrations/sherpas-logo-gradient.png";
  return (
    <img
      src={src}
      alt="Startup Sherpas"
      className={clsx("h-auto w-auto select-none", className)}
    />
  );
}
