import clsx from "clsx";

export type MiniHugoPose =
  | "ai-cloud"
  | "zen"
  | "thumbs-up"
  | "megaphone"
  | "teacher"
  | "laptop"
  | "start-flag";

const poseToFile: Record<MiniHugoPose, string> = {
  "ai-cloud": "/illustrations/mini-hugo-ai-cloud.svg",
  zen: "/illustrations/mini-hugo-zen.svg",
  "thumbs-up": "/illustrations/mini-hugo-thumbs-up.svg",
  megaphone: "/illustrations/mini-hugo-megaphone-right.svg",
  teacher: "/illustrations/mini-hugo-teacher.svg",
  laptop: "/illustrations/mini-hugo-laptop.svg",
  "start-flag": "/illustrations/mini-hugo-start-flag-right.svg",
};

// Mini Hugo, the AI Night School character. Per AINS brand convention,
// only used on Lavender (#dcb8fe) sections, bottom-right placement.
export function MiniHugo({
  pose,
  className,
  size = "md",
}: {
  pose: MiniHugoPose;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim = {
    sm: "h-24 w-24 md:h-32 md:w-32",
    md: "h-40 w-40 md:h-56 md:w-56",
    lg: "h-56 w-56 md:h-80 md:w-80",
  }[size];
  return (
    <img
      src={poseToFile[pose]}
      alt=""
      aria-hidden="true"
      className={clsx("select-none", dim, className)}
    />
  );
}
