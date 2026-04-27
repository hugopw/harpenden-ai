import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { MiniHugo } from "@/components/MiniHugo";
import { SignupForm } from "@/components/SignupForm";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme } from "@/lib/videos";

export const metadata: Metadata = {
  title: "I&rsquo;m volunteering",
  description:
    "Become an AI Coach. Host a clinic. Join a working group. Your experience is exactly what your town needs.",
};

const roles = [
  {
    t: "Join a community working group",
    b: "Roll up your sleeves on a real Harpenden problem — traffic, loneliness, venues, the high street. You bring the local knowledge; we bring the AI tools and a coach.",
    time: "About 2 hours a week, for 6 weeks.",
  },
  {
    t: "Become an AI Coach",
    b: "Get trained, then help a small group of residents take their first steps with AI — at the Leisure Centre, the Library, or a venue near you.",
    time: "Half a day a fortnight.",
  },
  {
    t: "Host a weekly drop-in clinic",
    b: "We pair you with another resident and a venue. You make the tea. We bring the people who&rsquo;d like a hand and the residents who&rsquo;d like to give one.",
    time: "Two hours a week.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* HERO — Lavender, AINS register */}
      <section className="relative overflow-hidden bg-lavender">
        <div className="absolute inset-0 bg-lavender-glow" />
        <div className="container-page relative grid gap-10 pb-20 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-28 md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-midnight px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-lime">
              For volunteers
            </span>
            <h1 className="display-xl mt-6 max-w-3xl text-balance text-midnight">
              Your experience is exactly what your town needs.
            </h1>
            <p className="prose-body mt-6 max-w-2xl text-midnight/85">
              You don&rsquo;t need to know AI to help. You need to
              know Harpenden — its streets, its people, its
              quirks — and to have a few hours to spare. We&rsquo;ll
              do the rest with you, not to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#signup" className="btn-primary bg-midnight text-lime hover:bg-midnight-soft">
                See volunteer roles
              </Link>
              <Link href="/community-projects" className="btn-ghost">
                See live projects
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <MiniHugo pose="thumbs-up" size="lg" />
          </div>
        </div>
      </section>

      {/* ROLES */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow>Three ways to help</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            All three roles are designed around real life — not extra
            life.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roles.map((r) => (
              <article
                key={r.t}
                className="rounded-3xl border border-midnight/15 bg-chalk p-6 md:p-7"
              >
                <h3 className="font-display text-xl leading-snug text-midnight">
                  {r.t}
                </h3>
                <p className="mt-3 text-base text-midnight/80">{r.b}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-midnight/55">
                  Roughly {r.time}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* PROMISE */}
      <Section tone="chalk">
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <Eyebrow>The volunteer promise</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Six commitments we make to you, in plain English.
            </h2>
            <ol className="mt-6 space-y-3 text-base text-midnight/80 md:text-lg">
              <li>
                <strong>1.</strong> Your time is precious. We&rsquo;ll
                respect it and never ask for more than we agreed.
              </li>
              <li>
                <strong>2.</strong> You&rsquo;ll always know who to
                call if something doesn&rsquo;t suit.
              </li>
              <li>
                <strong>3.</strong> We&rsquo;ll train you properly
                before we ask you to help anyone else.
              </li>
              <li>
                <strong>4.</strong> Tea, biscuits and a debrief at
                every clinic. Always.
              </li>
              <li>
                <strong>5.</strong> If a role isn&rsquo;t right,
                you can switch or stop without making it awkward.
              </li>
              <li>
                <strong>6.</strong> Your contribution is named, not
                anonymous. We&rsquo;ll celebrate the volunteers as
                visibly as the cohorts.
              </li>
            </ol>
          </div>
          <VideoCard
            youtubeId={videoByTheme("older").id}
            title={videoByTheme("older").title}
            description={videoByTheme("older").description}
            tag={videoByTheme("older").tag}
          />
        </div>
      </Section>

      {/* SIGNUP */}
      <section id="signup" className="bg-lavender py-20 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="text-midnight">
            <Eyebrow>Sign up</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Tell us how you&rsquo;d like to help. We&rsquo;ll come
              back to you within a week.
            </h2>
            <p className="mt-5 text-midnight/85">
              No commitment yet. This is just the first conversation —
              once we&rsquo;ve met for a tea, you decide whether to go
              further.
            </p>
          </div>
          <SignupForm
            persona="volunteer"
            tone="volunteer"
            source="/im-volunteering"
            defaultTags={["volunteer", "harpenden-resident"]}
            fields={[
              {
                name: "availability",
                label: "When could you usually help?",
                placeholder: "Weekday mornings / Saturday afternoons / one evening a fortnight…",
              },
              {
                name: "roles",
                label: "Which role(s) interest you?",
                type: "select",
                required: true,
                options: [
                  { value: "working-group", label: "A community working group" },
                  { value: "ai-coach", label: "Becoming an AI Coach" },
                  { value: "clinic-host", label: "Hosting a weekly clinic" },
                  { value: "all", label: "I&rsquo;m open — let&rsquo;s chat" },
                ],
              },
              {
                name: "skills",
                label: "Anything you&rsquo;re especially good at? (optional)",
                type: "textarea",
                placeholder: "e.g. running events, working with older residents, marketing, finance, plain-English writing…",
              },
            ]}
            cta="Sign me up to volunteer"
            successHeadline="Thank you. Genuinely."
            successBody="We&rsquo;ll be in touch within a week to set up a tea — somewhere local, no pressure."
          />
        </div>
      </section>
    </>
  );
}
