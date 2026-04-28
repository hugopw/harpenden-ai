import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Llama } from "@/components/Llama";
import { SherpasMark } from "@/components/SherpasMark";
import { SignupForm } from "@/components/SignupForm";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme } from "@/lib/videos";

export const metadata: Metadata = {
  title: "I’m 14–18",
  description:
    "Sherpas AI - Harpenden edition. Build real AI tools for real Harpenden businesses. Get paid. Make stuff that matters.",
};

export default function TeenPage() {
  return (
    <>
      {/* HERO - Sherpas register */}
      <section className="relative overflow-hidden">
        <div className="bg-sherpas-gradient">
          <div className="container-page grid gap-10 pb-20 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-28 md:pt-24">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                For 14–18
              </span>
              <h1 className="display-xl mt-6 text-balance">
                Get paid to bring your ideas to life.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
                Sherpas AI - Harpenden edition. You build real AI
                tools for real Harpenden organisations. You get paid.
                You meet other teens who are doing the same. And you
                walk into any uni or job interview with a portfolio
                most adults haven’t got.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="#signup" className="btn-sherpas">
                  Sign me up.
                </Link>
                <a
                  href="https://www.startupsherpas.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  See what Sherpas does
                </a>
              </div>
            </div>
            <div className="relative flex items-end justify-center md:justify-end">
              <div className="absolute -top-10 right-0 hidden md:block">
                <SherpasMark variant="white" className="h-12 opacity-95" />
              </div>
              <div className="-mb-12">
                <Llama size={320} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE THINGS */}
      <Section tone="white">
        <div className="container-page">
          <Eyebrow>What you actually do</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Three ways in. Pick whichever fits your week.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Summer cohort",
                w: "August.",
                b: "Two weeks. Fifteen Harpenden teens. Three real projects shipped for Harpenden organisations. Coached, paid, and visible.",
              },
              {
                t: "Year-round community",
                w: "Monthly.",
                b: "An evening a month with other Harpenden teens building with AI. Bring a project, bring a question, bring a friend.",
              },
              {
                t: "Work experience",
                w: "Bookable.",
                b: "We match you to a Harpenden business that wants to use AI properly. You help them, you get the experience, everyone wins.",
              },
            ].map((c) => (
              <article
                key={c.t}
                className="relative overflow-hidden rounded-3xl border border-midnight/10 bg-chalk p-6 md:p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sherpas-pink">
                  {c.w}
                </p>
                <h3 className="mt-3 font-display text-2xl">{c.t}.</h3>
                <p className="mt-3 text-base text-midnight/80">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY YOU */}
      <Section tone="chalk">
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <Eyebrow>Why this matters for you</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              The world is changing fast. Your move.
            </h2>
            <p className="prose-body mt-5">
              The way our parents got into careers - university, then
              entry-level job, then climb the ladder - is shifting
              hard under everyone’s feet. The teenagers who
              build now, who can show what they’ve made, who
              can talk to AI like it’s a tool not a toy, are
              the ones who’ll have the most options.
            </p>
            <p className="mt-4 text-base md:text-lg">
              You don’t need to be a coder. You don’t need
              to be top of the class. You need an idea, a tiny bit of
              grit, and somewhere safe to try.
            </p>
          </div>
          <VideoCard
            youtubeId={videoByTheme("teens").id}
            title={videoByTheme("teens").title}
            description={videoByTheme("teens").description}
            tag={videoByTheme("teens").tag}
          />
        </div>
      </Section>

      {/* SIGNUP */}
      <section id="signup" className="bg-midnight py-20 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="text-chalk">
            <span className="pill-lime">Sign up</span>
            <h2 className="display-md mt-3 text-balance">
              Two minutes. Then we’ll send you the next cohort
              date.
            </h2>
            <p className="mt-5 text-chalk/85">
              If you’re under 18 we’ll also send a quick
              note to a parent or guardian, just so they know
              you’re joining. That’s it.
            </p>
            <p className="mt-3 text-sm text-chalk/65">
              No spam. No sales calls. Just the things you actually
              asked for.
            </p>
          </div>
          <SignupForm
            persona="teen"
            tone="teen"
            source="/im-a-teen"
            defaultTags={["teen", "sherpas-ai"]}
            fields={[
              {
                name: "age",
                label: "Your age",
                placeholder: "14–18",
              },
              {
                name: "school",
                label: "School (optional)",
                placeholder: "Roundwood, Sir John Lawes, etc.",
              },
              {
                name: "interest",
                label: "Which one are you most interested in?",
                type: "select",
                required: true,
                options: [
                  { value: "summer-cohort", label: "Summer cohort" },
                  { value: "year-round", label: "Year-round community" },
                  { value: "work-experience", label: "Work experience" },
                  { value: "all", label: "All of the above" },
                ],
              },
              {
                name: "parentEmail",
                label: "Parent / guardian email (if you’re under 18)",
                type: "email",
                placeholder: "parent@example.com",
              },
            ]}
            cta="I’m in."
            successHeadline="You’re in. Welcome to Sherpas."
            successBody="Look out for a note from the team with the next Harpenden cohort dates. If you gave us a parent email, they’ll get a friendly heads-up too."
          />
        </div>
      </section>
    </>
  );
}
