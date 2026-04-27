import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "The Free Dreamers",
  description:
    "A small Harpenden group deliberately curated to push the boundaries of what AI can do for the town — together.",
};

const principles = [
  {
    t: "Small, on purpose",
    b: "We keep the Free Dreamers deliberately small. You should know every other member&rsquo;s name, and what they&rsquo;re working on.",
  },
  {
    t: "Boundary-pushing is the point",
    b: "This group exists to try the things that aren&rsquo;t yet obvious — new community tools, new civic workflows, new ways to bring Harpenden together.",
  },
  {
    t: "Warm, curious, generous",
    b: "Status outside the group stays outside the group. Everyone inside the room is a peer. Disagreement is welcome; ego isn&rsquo;t.",
  },
  {
    t: "Action over talk",
    b: "Every session ends with an experiment someone has committed to ship before the next one. We&rsquo;d rather be wrong fast than right late.",
  },
  {
    t: "Harpenden first",
    b: "The test of any idea is: does this make Harpenden better? If the answer is &ldquo;not really,&rdquo; we don&rsquo;t chase it here.",
  },
  {
    t: "No free rides",
    b: "Membership is a commitment — to show up, to contribute, and to bring the rest of your life with you. Passive members thin the room.",
  },
];

export default function FreeDreamersPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow tone="sun">The Free Dreamers</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            A small Harpenden group, free to imagine what a fluent town
            could actually become.
          </h1>
          <p className="prose-body mt-6">
            Hugo came up with the Free Dreamers on a retreat. The name
            is deliberate — this is a community for people who want to
            dream freely about what Harpenden could do with AI, and
            then go and try it. The boundaries of who&rsquo;s involved
            matter; a tight room makes bold ideas safe.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow>Principles</Eyebrow>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <article key={p.t} className="card">
                <h3 className="font-display text-xl leading-tight">{p.t}</h3>
                <p className="mt-3 text-ink/80" dangerouslySetInnerHTML={{ __html: p.b }} />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow">
          <Eyebrow tone="sun">How it runs</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            A monthly evening in town. Dinner. Two ideas presented.
            Two experiments committed. Then we ship.
          </h2>
          <ul className="mt-8 space-y-4 text-chalk/85">
            <li>
              <strong>Rhythm:</strong> Monthly, in-person, Harpenden
              venue — rotated so no single place carries the load.
            </li>
            <li>
              <strong>Format:</strong> Shared meal, two short
              presentations (bring an idea, bring a question, bring a
              failed attempt), and 60 minutes of generative
              conversation.
            </li>
            <li>
              <strong>Outputs:</strong> Every session produces at least
              two experiments someone in the room has committed to ship
              before the next meeting.
            </li>
            <li>
              <strong>Entry:</strong> By introduction, with a short
              conversation. We bias towards people who are already
              building, already serving, or already stuck — but
              willing.
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:hugo+harpenden-ai@pdubs.co?subject=Free%20Dreamers%20interest"
              className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk"
            >
              Ask about joining
            </a>
            <Link href="/resident-offer" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Resident-only offer
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
