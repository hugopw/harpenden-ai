import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Worked example — Harpenden traffic",
  description:
    "A worked prototype showing how Harpenden residents can use AI together to take on a real community problem — starting with traffic.",
};

const HARPENDEN_TRAFFIC_LIVE_URL =
  "https://www.ainightschool.org/harpenden-ai/harpenden-traffic-example";
const HARPENDEN_TRAFFIC_LIVE_LABEL = "Open the live Harpenden Traffic tool";

const roles = [
  {
    t: "Residents",
    b: "Collect on-the-ground observations — school-run bottlenecks, the Southdown squeeze, the A1081 at 8.15, the new-development entry roads. Annotate maps. No technical skill required.",
  },
  {
    t: "Sherpas AI teenagers",
    b: "Build the data-collection app. Ingest open traffic and planning data. Build the simple model. This is exactly the work they&rsquo;d do on a summer cohort.",
  },
  {
    t: "AI Night School alumni",
    b: "Apply AI to the analysis and write it up in plain English. Produce the resident-facing summary. Own the narrative.",
  },
  {
    t: "Council officers",
    b: "Validate the assumptions, share what data can be shared, and raise the work into formal planning conversations.",
  },
  {
    t: "AI Optimist (Hugo)",
    b: "Coaches the team, keeps the scope honest, and connects the output into wider conversations with the district and county.",
  },
];

const steps = [
  {
    n: "01",
    t: "Frame the problem with Problemarium",
    b: "Turn &ldquo;traffic is bad&rdquo; into a set of specific, answerable questions — school-run, peak-hour, planning-led, parking-led. Each becomes a tractable mini-project.",
  },
  {
    n: "02",
    t: "Gather the data",
    b: "Combine open DfT and council planning data with resident-collected observations. Flag where assumptions have to stand in for missing data.",
  },
  {
    n: "03",
    t: "Model the impact",
    b: "A simple, transparent model — the kind a Sherpas AI cohort can build and explain in a week. Not a black box. Not a million-pound procurement.",
  },
  {
    n: "04",
    t: "Write it up in plain English",
    b: "Translate the output into something a Harpenden resident can read in five minutes and form an opinion on. AI Night School alumni own the writing.",
  },
  {
    n: "05",
    t: "Publish, invite challenge",
    b: "Share it on the Harpenden.AI site and with council officers. Invite residents to poke holes. Update transparently. That&rsquo;s the whole point.",
  },
  {
    n: "06",
    t: "Feed into real decisions",
    b: "With the council&rsquo;s help, the output gets referenced in formal planning conversations — so resident work doesn&rsquo;t stay informal.",
  },
];

export default function TrafficPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Worked example — community empowerment</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            Traffic is the first thing AI gives back to the people who
            actually live with it.
          </h1>
          <p className="prose-body mt-6">
            For decades, the people who feel Harpenden&rsquo;s traffic
            most acutely — the parents on the school run, the retirees
            crossing Southdown, the residents of streets where every
            new development quietly adds another rat-run — have had no
            credible way to be heard. The data lives in consultancy
            reports. The models live behind procurement walls. The
            residents who carry the consequences live with their hands
            tied.
          </p>
          <p className="prose-body mt-4">
            That&rsquo;s the promise of this worked example.
            Harpenden.AI puts the modelling tools, the data literacy,
            and the storytelling skills directly in residents&rsquo;
            hands. Coached, not contracted. Owned by the people who
            actually live here. The traffic project is the first
            proof that an AI-fluent town can take on its own
            problems — together — and have its work taken seriously
            by the people who make decisions.
          </p>
          <p className="prose-body mt-4">
            And every method that works for traffic ports to the next
            problem we choose: hirable venues, loneliness, potholes,
            council engagement, the high street. The traffic example
            is the proof; the empowerment is the prize.
          </p>
        </div>
      </Section>

      <Section tone="sun" className="py-14 md:py-16">
        <div className="container-page">
          <div className="rounded-3xl border border-ink/15 bg-white/85 p-8 shadow-glow md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow tone="sun">Open the tool</Eyebrow>
                <h2 className="display-sm mt-2">
                  Harpenden Traffic — the live, working version
                </h2>
                <p className="mt-3 text-ink/80">
                  This page tells the story of <em>why</em> we built
                  it. The live tool itself — the one residents
                  actually use — lives next door at
                  ainightschool.org/harpenden-ai/harpenden-traffic-example.
                  Open it, kick the tyres, and come back here for the
                  method behind it.
                </p>
              </div>
              <a
                href={HARPENDEN_TRAFFIC_LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-chalk shadow-glow transition hover:bg-sky-deep"
              >
                {HARPENDEN_TRAFFIC_LIVE_LABEL}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow>Who does what</Eyebrow>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <article key={r.t} className="card">
                <h3 className="font-display text-xl leading-tight">{r.t}</h3>
                <p className="mt-3 text-ink/80" dangerouslySetInnerHTML={{ __html: r.b }} />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <div className="container-page">
          <Eyebrow>The six steps</Eyebrow>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-3xl border border-ink/10 bg-white/80 p-6 backdrop-blur">
                <p className="font-display text-sm text-sky-deep">{s.n}</p>
                <h3
                  className="mt-3 font-display text-xl leading-tight"
                  dangerouslySetInnerHTML={{ __html: s.t }}
                />
                <p
                  className="mt-3 text-sm text-ink/80"
                  dangerouslySetInnerHTML={{ __html: s.b }}
                />
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow">
          <Eyebrow tone="sun">Why traffic first</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            Because Harpenden has been told about its own traffic for
            twenty years. Now the town gets to do the telling.
          </h2>
          <p className="mt-6 text-chalk/85">
            The whole point of an AI-fluent town is that residents
            stop being the audience for civic decisions and start
            being authors of them. Traffic is where we prove it,
            because every resident already has an opinion, the data
            is largely public, and the visible signal — when the work
            lands — is felt on every pavement in town.
          </p>
          <p className="mt-4 text-chalk/85">
            The same method ports straight to hirable venues, pothole
            prioritisation, loneliness matching, the council-paper
            digest, and whatever else residents decide matters next.
            Traffic is the prototype. Empowerment is the product.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={HARPENDEN_TRAFFIC_LIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun px-5 py-3 text-sm font-medium text-ink shadow-warm transition hover:bg-sun-warm hover:text-chalk"
            >
              Open the live Traffic tool <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/challenges" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Browse all community challenges
            </Link>
            <Link href="/interventions" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              See the Problemarium
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
