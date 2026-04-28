// AI Optimist videos confirmed via brand audit. Additional videos can be
// dropped into this list as Hugo releases them - layout is resilient.

export type VideoEntry = {
  id: string;
  title: string;
  description: string;
  tag: string;
  theme:
    | "community"
    | "displacement"
    | "teens"
    | "highstreet"
    | "older"
    | "council"
    | "ip"
    | "d2c"
    | "overwhelm"
    | "getting-started";
};

export const videos: VideoEntry[] = [
  {
    id: "qVoVkrk5mRU",
    title: "Why AI isn't going to take our jobs",
    description:
      "Hugo's case for the optimist's read on displacement - why fear is the wrong response and what to do instead.",
    tag: "Risk, honestly",
    theme: "displacement",
  },
  {
    id: "p5JvnQ3iNSI",
    title: "The school system in the UK is broken",
    description:
      "Why our children's education can't rely on the old assumptions - and what Sherpas AI proves is possible in its place.",
    tag: "Teens & families",
    theme: "teens",
  },
  {
    id: "ZvZ4aUXBtzU",
    title: "Cursor as an AI-first business interface",
    description:
      "A practical walk-through of a tool that replaces a handful of SaaS products for small businesses - useful for the high street.",
    tag: "High street",
    theme: "highstreet",
  },
  {
    id: "RydVp4Ut0WA",
    title: "Startup Sherpas · Episode 27",
    description:
      "The conversation that sits behind the Sherpas AI model - how real mentorship accelerates real people.",
    tag: "Sherpas",
    theme: "teens",
  },
];

export const videoByTheme = (t: VideoEntry["theme"]) =>
  videos.find((v) => v.theme === t) ?? videos[0];
