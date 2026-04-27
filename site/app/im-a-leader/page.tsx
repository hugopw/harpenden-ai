import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Wordmark } from "@/components/Wordmark";
import { MiniHugo } from "@/components/MiniHugo";
import { SignupForm } from "@/components/SignupForm";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme } from "@/lib/videos";

export const metadata: Metadata = {
  title: "I&rsquo;m a leader",
  description:
    "Get fluent in AI before your role does. Harpenden-priced AI Night School cohorts, a residents-only speaker series, and a community of senior peers in town.",
};

export default function LeaderPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-midnight text-chalk">
        <div className="absolute inset-0 bg-midnight-glow" />
        <div className="container-page relative grid gap-12 pb-20 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-28 md:pt-24">
          <div>
            <span className="pill-lime">For business leaders</span>
            <h1 className="display-xl mt-6 max-w-3xl text-balance">
              AI is changing your work.{" "}
              <span className="text-lime">Get fluent before it changes without you.</span>
            </h1>
            <p className="prose-body mt-6 max-w-2xl text-chalk/85">
              You&rsquo;re a senior knowledge worker on the
              Harpenden–London line, in a role every major employer is
              quietly modelling for AI productivity. The honest answer
              isn&rsquo;t fear. It&rsquo;s fluency — fast.
            </p>
            <ul className="mt-6 space-y-2 text-base text-chalk/85">
              <li>— A six-week AI Night School cohort, Harpenden-priced.</li>
              <li>— Physical kick-off and graduation in town.</li>
              <li>— Residents-only speaker series (Laura, Chris, more).</li>
              <li>— A community of senior peers building together.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-6 hidden md:block">
              <MiniHugo pose="laptop" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF + WHY NOW */}
      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <Eyebrow>Why now</Eyebrow>
            <h2 className="display-md mt-3">
              The displacement isn&rsquo;t coming. It&rsquo;s here.
            </h2>
            <p className="prose-body mt-5">
              Across consulting, finance, marketing, law and tech, the
              business case for AI is being built around fewer, more
              senior people. The people who get ahead aren&rsquo;t
              the ones who fear that — they&rsquo;re the ones who
              learnt to deploy AI inside their own work first.
            </p>
            <p className="mt-4 text-base md:text-lg">
              Harpenden has more of you per square mile than almost
              anywhere in the country. That&rsquo;s why this town is
              the right place to do this together.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { v: "6 weeks", l: "to confident, daily AI use" },
                { v: "12–16", l: "peers per cohort" },
                { v: "2 evenings", l: "per week, in town" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-midnight/15 bg-chalk p-5">
                  <p className="font-display text-3xl text-midnight">{s.v}</p>
                  <p className="mt-1 text-sm text-midnight/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <VideoCard
            youtubeId={videoByTheme("displacement").id}
            title={videoByTheme("displacement").title}
            description={videoByTheme("displacement").description}
            tag={videoByTheme("displacement").tag}
          />
        </div>
      </Section>

      {/* SIGNUP */}
      <Section tone="ink">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <Eyebrow tone="sun">Start here</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Two minutes to register. We&rsquo;ll match you to the
              right cohort.
            </h2>
            <p className="mt-5 text-chalk/85">
              You&rsquo;ll get a short call with the AI Night School
              team to confirm fit, plus the dates of the next
              Harpenden-only kick-off evening. The speaker-series
              invites follow automatically.
            </p>
            <ul className="mt-6 space-y-2 text-chalk/80">
              <li>— You stay in control of your data.</li>
              <li>— No newsletters you didn&rsquo;t ask for.</li>
              <li>— You can unsubscribe in one click.</li>
            </ul>
          </div>
          <SignupForm
            persona="leader"
            tone="leader"
            source="/im-a-leader"
            defaultTags={["leader", "ai-night-school"]}
            fields={[
              {
                name: "organisation",
                label: "Organisation",
                placeholder: "Where you work",
              },
              {
                name: "role",
                label: "Role",
                placeholder: "Director, Partner, Founder…",
              },
              {
                name: "cohortInterest",
                label: "Which interests you most?",
                type: "select",
                required: true,
                options: [
                  { value: "next", label: "The next AI Night School cohort" },
                  { value: "later", label: "A later cohort — keep me posted" },
                  { value: "speaker-series", label: "The speaker series" },
                  { value: "free-dreamers", label: "The Free Dreamers" },
                ],
              },
            ]}
            cta="Register my interest"
            successHeadline="You&rsquo;re on the leader list."
            successBody="The AI Night School team will be in touch with the next Harpenden cohort dates and your speaker-series invites."
          />
        </div>
      </Section>

      <Section tone="chalk">
        <div className="container-narrow text-center">
          <Wordmark size="lg" />
          <p className="mt-6 text-midnight/75">
            <Link href="/im-a-teen" className="underline underline-offset-4">
              Have a teenager?
            </Link>{" "}
            Their door is here too.
          </p>
        </div>
      </Section>
    </>
  );
}
