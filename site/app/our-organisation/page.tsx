import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { MiniHugo } from "@/components/MiniHugo";

export const metadata: Metadata = {
  title: "Our organisation",
  description:
    "Tell us a real problem your charity, school, club or community group faces — we&rsquo;ll match it to a Harpenden working group and let other residents join in solving it.",
};

const examples = [
  {
    org: "Kings Pantry",
    problem: "Match donated food to family need without anyone going hungry — and without waste.",
  },
  {
    org: "Harpenden Trust",
    problem: "Help residents find the right grant or service quickly, even if they&rsquo;ve never heard of us.",
  },
  {
    org: "Roundwood Park School",
    problem: "Triage parent and pupil enquiries so the office isn&rsquo;t the bottleneck.",
  },
  {
    org: "Sport for Confidence",
    problem: "Match volunteers to the right session, every week, without phoning round.",
  },
];

const steps = [
  {
    n: "01",
    t: "You submit your problem",
    b: "Two minutes. Plain English. No technical detail required.",
  },
  {
    n: "02",
    t: "It goes live as a community project",
    b: "Other residents can join the working group and help solve it. The town does the work, with you.",
  },
  {
    n: "03",
    t: "We match a coach + a working group",
    b: "AI Optimist coaches the team. Sherpas teens build the prototype. AI Night School alumni write it up. Everyone learns.",
  },
  {
    n: "04",
    t: "You ship something real",
    b: "Within 90 days, your organisation has something concrete that helps the people who actually use you.",
  },
];

export default function OrganisationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-chalk">
        <div className="absolute inset-0 bg-dawn-radial" />
        <div className="container-page relative grid gap-10 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-28 md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-midnight px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lime">
              For local organisations
            </span>
            <h1 className="display-xl mt-6 max-w-3xl text-balance text-midnight">
              Tell us a real problem your organisation faces.
            </h1>
            <p className="prose-body mt-6 max-w-2xl">
              Then we&rsquo;ll match it to a Harpenden working group
              and let other residents — leaders, teens, volunteers —
              join in solving it. This is what a town that&rsquo;s
              fluent in AI actually does for its own organisations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/submit-a-problem" className="btn-primary">
                Submit a problem
              </Link>
              <Link href="/community-projects" className="btn-ghost">
                See live community projects
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <MiniHugo pose="megaphone" size="lg" />
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow>What a problem looks like</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Specific. Felt by real people. Solvable inside a summer.
          </h2>
          <p className="prose-body mt-5 max-w-3xl">
            You don&rsquo;t need to know what AI can do. You just need
            to know what hurts. The good problems are the ones your
            volunteers and beneficiaries already know by heart.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {examples.map((e) => (
              <article
                key={e.org}
                className="rounded-3xl border border-midnight/15 bg-chalk p-6 md:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/60">
                  {e.org}
                </p>
                <p className="mt-3 font-display text-xl leading-snug text-midnight">
                  &ldquo;{e.problem}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="ink">
        <div className="container-page">
          <Eyebrow tone="sun">How it works</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Four steps from a problem on a sticky note to a shipped
            community project.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-display text-sm text-lime">{s.n}</p>
                <h3 className="mt-3 font-display text-xl leading-tight text-chalk">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm text-chalk/80">{s.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link href="/submit-a-problem" className="btn-lime">
              Submit your problem
            </Link>
            <Link href="/community-projects" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Browse what&rsquo;s already in motion
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
