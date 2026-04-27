import clsx from "clsx";

export function Section({
  children,
  tone = "chalk",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: "chalk" | "white" | "ink" | "sun" | "sky";
  className?: string;
  id?: string;
}) {
  const toneClass = {
    chalk: "bg-chalk",
    white: "bg-white",
    ink: "bg-ink text-chalk",
    sun: "bg-gradient-to-br from-sun-glow via-sun to-sun-warm text-ink",
    sky: "bg-gradient-to-br from-sky-mist via-white to-sky-mist",
  }[tone];
  return (
    <section
      id={id}
      className={clsx("relative overflow-hidden py-20 md:py-28", toneClass, className)}
    >
      {children}
    </section>
  );
}
