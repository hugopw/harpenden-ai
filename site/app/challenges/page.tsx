import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { PriorityChooser } from "@/components/PriorityChooser";

export const metadata: Metadata = {
  title: "Community challenges",
  description:
    "The local problems a fluent Harpenden can solve together — traffic, loneliness, venues, potholes, council engagement, high street, teens and older residents.",
};

const challenges = [
  {
    title: "Where can I hold my event?",
    pitch:
      "Harpenden has brilliant venues hiding in plain sight — halls, studios, churches, gardens, cafes out-of-hours. A resident-built directory, maintained by the community, searchable by a simple AI concierge.",
    why: "Solves an everyday frustration. Builds the community habit of using AI together.",
    owner: "Community working group + local venues",
    first: "A 50-venue pilot directory, in 4 weeks.",
  },
  {
    title: "Traffic from new developments",
    pitch:
      "Model the traffic impact of proposed developments on Southdown, the A1081 and the school-run network using open planning and transport data. Show residents the numbers, clearly.",
    why: "Gives residents an evidence-led voice in planning conversations that too often feel opaque.",
    owner: "Open data + council planning officers",
    first: "See the /harpenden-traffic worked prototype.",
    href: "/harpenden-traffic",
  },
  {
    title: "No one in Harpenden feels lonely",
    pitch:
      "A warm, opt-in AI concierge that knows every club, group and drop-in in town — and can match a resident to three things happening this week that would actually suit them.",
    why: "Community Life Survey data shows loneliness rises sharply for over-75s. Harpenden has a large 65+ cohort and a huge number of clubs; the gap is matching.",
    owner: "Age UK Herts + community groups",
    first: "Pilot at the Leisure Centre and the Library, summer 2026.",
  },
  {
    title: "Fix the potholes",
    pitch:
      "A resident-reported pothole map with AI-generated priority scoring — rolled into the council&rsquo;s highways workflow rather than bolted on to it.",
    why: "A small, tangible win that proves AI + civic reporting can work end-to-end.",
    owner: "Council highways + resident volunteers",
    first: "WhatsApp bot + shared map, September 2026.",
  },
  {
    title: "Council engagement across the town",
    pitch:
      "Translate every council paper, minute and decision into a plain-English digest — searchable by street, topic, and impact on you. Close the gap between the council and the parts of town that never engage.",
    why: "The single highest-leverage civic-AI project we could run. Its output compounds every week.",
    owner: "Harpenden Town Council + civic volunteers",
    first: "A weekly digest pilot for the next three council meetings.",
  },
  {
    title: "Teenagers who build, not just use, AI",
    pitch:
      "Sherpas AI — Harpenden edition. Summer work-experience cohorts where 15–18-year-olds ship AI tools for real Harpenden organisations, coached by local alumni.",
    why: "Hands-on experience is worth ten hours of theory. Proves to parents that the alternative path is already real.",
    owner: "Sherpas AI + Harpenden Secondary Schools Trust",
    first: "Summer 2026 cohort, 15 teens, 3 shipped tools.",
  },
  {
    title: "A high street that thrives in the AI age",
    pitch:
      "Every independent on the high street gets one hour with an AI coach and a shortlist of AI moves that buy them back a day a week — no SaaS bloat, no hype.",
    why: "Protects the most visible part of the town&rsquo;s identity. Compounds quickly.",
    owner: "Harpenden independents + AI Optimist",
    first: "20-business pilot with the Small-Business AI Opportunity Diagnostic.",
  },
  {
    title: "Older residents who feel confident, not left behind",
    pitch:
      "Weekly drop-in AI clinics at the Leisure Centre and Library. Warm, patient, jargon-free, deliberately slow. Tea included.",
    why: "Meets scared and reluctant residents where they are. Builds trust the rest of the programme depends on.",
    owner: "Volunteer coaches + local partners",
    first: "Two weekly clinics, starting first week of the festival.",
  },
];

export default function ChallengesPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Community challenges</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            The problems a fluent Harpenden can solve together — in public.
          </h1>
          <p className="prose-body mt-6">
            Each of these is a real Harpenden problem, framed as a
            resident-led AI project. None need the council to build
            anything. They need the council to help us signal that
            they&rsquo;re worth doing — and to connect the people who
            can run them.
          </p>
        </div>
      </Section>

      <Section tone="sky" className="pt-0 md:pt-0">
        <div className="container-page">
          <PriorityChooser />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((c) => (
              <article
                key={c.title}
                className="card flex h-full flex-col gap-4"
              >
                <h3 className="font-display text-2xl leading-tight">
                  {c.title}
                </h3>
                <p className="text-ink/80">{c.pitch}</p>
                <div className="mt-2 space-y-2 text-sm">
                  <p>
                    <span className="text-ink/55">Why this one: </span>
                    {c.why}
                  </p>
                  <p>
                    <span className="text-ink/55">Likely owner: </span>
                    {c.owner}
                  </p>
                  <p>
                    <span className="text-ink/55">First iteration: </span>
                    {c.first}
                  </p>
                </div>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-deep"
                  >
                    See the worked example <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-narrow text-center">
          <Eyebrow tone="sun">The frame</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            None of these challenges need the council to become a
            technology department.
          </h2>
          <p className="mt-6 text-chalk/80">
            They need the council to help us convene residents, signal
            that community AI projects are welcome, and share the data
            they&rsquo;re willing to share. The residents do the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/council" className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk">
              The council&rsquo;s role, in detail
            </Link>
            <Link href="/journey" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              The journey to get there
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
