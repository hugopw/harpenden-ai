"use client";

import { useState } from "react";
import clsx from "clsx";
import { ArrowDown, ArrowUp } from "lucide-react";

type Item = {
  id: string;
  title: string;
  description: string;
  rough: string;
};

const defaults: Item[] = [
  {
    id: "traffic",
    title: "Traffic from new developments",
    description:
      "Model the impact of planned builds on school-run routes, Southdown and the A1081, using open traffic and planning data.",
    rough: "Worked example ready",
  },
  {
    id: "loneliness",
    title: "No one in Harpenden feels alone",
    description:
      "Match residents to local groups, clubs and regular meetups using a warm, opt-in AI concierge built with Age UK Herts.",
    rough: "Needs a local partner",
  },
  {
    id: "venues",
    title: "Where can I hold my event?",
    description:
      "A living directory of hirable halls, rooms and gardens — searchable by size, price, date, and vibe.",
    rough: "Community-run directory",
  },
  {
    id: "potholes",
    title: "Fix the potholes",
    description:
      "A resident-reported pothole map with AI-generated repair-priority scoring, routed into the council highways workflow.",
    rough: "Council integration",
  },
  {
    id: "engagement",
    title: "Council engagement across the town",
    description:
      "Translate council papers, meetings and decisions into plain-English digests so every resident can meaningfully take part.",
    rough: "Flagship civic-AI project",
  },
  {
    id: "teens",
    title: "Teenagers who can build, not just use, AI",
    description:
      "Sherpas AI work-experience cohorts — Harpenden teens shipping real AI tools for local businesses over the summer.",
    rough: "Runs annually",
  },
  {
    id: "highstreet",
    title: "A high street that thrives in the AI age",
    description:
      "Every independent on the high street gets one hour with an AI coach and a shortlist of AI tools that save them a day a week.",
    rough: "90-day programme",
  },
  {
    id: "older",
    title: "Older residents feel confident, not left behind",
    description:
      "Weekly drop-in AI clinics at the Leisure Centre and Library — warm, patient, jargon-free, and deliberately slow.",
    rough: "Volunteer-led",
  },
];

export function PriorityChooser() {
  const [items, setItems] = useState<Item[]>(defaults);

  const move = (index: number, dir: -1 | 1) => {
    const next = [...items];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setItems(next);
  };

  const shareMailto = () => {
    const lines = items.map((it, i) => `${i + 1}. ${it.title}`).join("%0A");
    return `mailto:hugo+harpenden-ai@pdubs.co?subject=My%20Harpenden.AI%20priorities&body=${lines}`;
  };

  return (
    <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-glow backdrop-blur md:p-8">
      <p className="eyebrow">Participate</p>
      <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
        What should we solve together first?
      </h3>
      <p className="mt-3 max-w-2xl text-ink/75">
        Drag-equivalent buttons. Re-order the list to match how you&rsquo;d
        prioritise Harpenden&rsquo;s first community AI projects. This is a
        vision document — today this lives in your browser. When we launch,
        it will feed directly into the town&rsquo;s live project queue.
      </p>

      <ol className="mt-8 space-y-3">
        {items.map((item, i) => (
          <li
            key={item.id}
            className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-chalk p-4 md:p-5"
          >
            <span
              className={clsx(
                "mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full font-display text-sm",
                i === 0
                  ? "bg-sun text-ink"
                  : i === 1
                    ? "bg-sun-glow text-ink"
                    : "bg-ink/10 text-ink/70"
              )}
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-lg leading-snug">
                  {item.title}
                </h4>
                <span className="chip chip-sky hidden sm:inline-flex">
                  {item.rough}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink/75">{item.description}</p>
            </div>
            <div className="flex flex-none flex-col gap-1">
              <button
                type="button"
                aria-label={`Move ${item.title} up`}
                onClick={() => move(i, -1)}
                disabled={i === 0}
                className="rounded-full border border-ink/10 bg-white p-1.5 text-ink/70 transition hover:bg-ink hover:text-chalk disabled:opacity-30"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Move ${item.title} down`}
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
                className="rounded-full border border-ink/10 bg-white p-1.5 text-ink/70 transition hover:bg-ink hover:text-chalk disabled:opacity-30"
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href={shareMailto()} className="btn-primary">
          Email my priorities to Hugo
        </a>
        <button
          type="button"
          onClick={() => setItems(defaults)}
          className="btn-ghost"
        >
          Reset order
        </button>
      </div>
    </div>
  );
}
