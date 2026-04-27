import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "The journey",
  description:
    "The phased plan — from this council meeting to a Harpenden AI summer and beyond.",
};

const phases = [
  {
    n: "00",
    title: "The website + the meeting",
    when: "This week",
    blurb:
      "You&rsquo;re on it. The council walks through this site and decides whether to help us move to Phase 1.",
    deliverables: [
      "Council endorsement or steer",
      "A named council point of contact",
      "A short-list of venues for the opening evenings",
    ],
  },
  {
    n: "01",
    title: "The core offers, at resident-only pricing",
    when: "May – June 2026",
    blurb:
      "AI Night School and Sherpas AI both begin advertising Harpenden-resident pricing and local physical events. Flyers go through the council letterbox drops.",
    deliverables: [
      "AI Night School — Harpenden cohort opens for enrolment",
      "Sherpas AI — summer teen cohort opens",
      "Two small-business AI diagnostics run with the first independents",
    ],
  },
  {
    n: "02",
    title: "Community groups around local priorities",
    when: "June – July 2026",
    blurb:
      "Residents form working groups around the top community challenges (traffic, venues, loneliness, council engagement). Each group is coached and paired with a diagnostic or Imaginarium session.",
    deliverables: [
      "3–5 active community AI projects",
      "A venue directory in draft",
      "The /harpenden-traffic prototype shown to residents",
    ],
  },
  {
    n: "03",
    title: "Become an AI Coach — train-the-trainer",
    when: "July 2026",
    blurb:
      "Early-adopter residents (Segment 1) are trained as AI Coaches for their own networks — so the programme scales beyond what Hugo or any one person can deliver.",
    deliverables: [
      "10 trained Harpenden AI Coaches",
      "Weekly in-person clinics at the Leisure Centre and Library",
      "A growing directory of coaches residents can book",
    ],
  },
  {
    n: "04",
    title: "Harpenden AI Summer — the festival",
    when: "August 2026",
    blurb:
      "A visible, town-wide festival that closes the summer. Talks, workshops, showcases, graduations, and celebrations. Delivered by community members — not Hugo alone.",
    deliverables: [
      "Laura on AI for D2C businesses",
      "Chris on creating and protecting IP in the AI age",
      "Sherpas AI showcase of teen-built tools",
      "AI Night School graduation evening",
      "Family clinics and older-residents&rsquo; drop-ins",
    ],
  },
  {
    n: "05",
    title: "Physical spaces for supported AI work",
    when: "Autumn 2026",
    blurb:
      "A small number of hosted, drop-in physical spaces where residents can come and do real AI work alongside other residents and a coach.",
    deliverables: [
      "One hosted evening a week in a central venue",
      "One daytime session a week for parents and older residents",
      "A waiting list for AI Night School cohort three",
    ],
  },
  {
    n: "06",
    title: "Port to other towns",
    when: "2027",
    blurb:
      "With Harpenden proving the model, we open the pattern to two or three other carefully chosen towns — and Harpenden becomes the reference case.",
    deliverables: [
      "A playbook, co-authored with the council",
      "Case studies on displacement, high-street revival and civic engagement",
      "A second town live, a third in planning",
    ],
  },
];

export default function JourneyPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>The journey</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            From this meeting to an AI-fluent town, in one summer.
          </h1>
          <p className="prose-body mt-6">
            This is the honest version. The summer timing is deliberate —
            it creates visible progress before most residents drift off
            on holiday, and a festival finish is something the whole town
            can rally around. We accept that August absences mean the
            festival has to run through community members, not Hugo
            alone. That&rsquo;s a feature, not a bug.
          </p>
        </div>
      </Section>

      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page">
          <ol className="relative space-y-10 border-l border-ink/15 pl-8 md:pl-12">
            {phases.map((p) => (
              <li key={p.n} className="relative">
                <span className="absolute -left-[42px] md:-left-[54px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-chalk font-display text-sm">
                  {p.n}
                </span>
                <div className="card">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <span className="chip chip-sky">{p.when}</span>
                  </div>
                  <p
                    className="mt-3 text-ink/80"
                    dangerouslySetInnerHTML={{ __html: p.blurb }}
                  />
                  <ul className="mt-5 grid gap-2 md:grid-cols-2">
                    {p.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-2xl border border-ink/10 bg-chalk/70 px-4 py-2 text-sm"
                        dangerouslySetInnerHTML={{ __html: d }}
                      />
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="sun">
        <div className="container-narrow text-center">
          <Eyebrow tone="ink">The honest caveat</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            Summer is the right frame even if delivery slips.
          </h2>
          <p className="mt-6 text-ink/90">
            If we fall behind, we still ship a smaller summer — and we use
            the autumn to consolidate. The festival concept is the
            forcing function. The fluency is the prize.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/council" className="btn-primary">
              Help make this happen
            </Link>
            <Link href="/interventions" className="btn-ghost">
              Browse the interventions
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
