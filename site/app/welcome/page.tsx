import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Wordmark } from "@/components/Wordmark";
import { PersonaCard } from "@/components/PersonaCard";
import { MiniHugo } from "@/components/MiniHugo";
import { Llama } from "@/components/Llama";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/lib/videos";
import { CommunityProjectsTeaser } from "@/components/CommunityProjectsTeaser";

export const metadata: Metadata = {
  title: "Welcome to Harpenden.AI - for residents",
  description:
    "Your town. Your AI. Whether you lead a business, you're 14–18, you've got hours to give, or you run an organisation that needs help - there's a door here for you.",
};

export default function WelcomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-chalk">
        <div className="absolute inset-0 bg-lavender-glow" />
        <div className="container-page relative pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill-lavender">Welcome, resident</span>
            <span className="chip">A town learning AI together</span>
          </div>
          <h1 className="display-xl mt-6 max-w-5xl text-balance">
            Your town. Your AI.{" "}
            <span className="text-lavender-deep">Yours to shape.</span>
          </h1>
          <p className="prose-body mt-6 max-w-3xl">
            Harpenden is becoming the UK’s most AI-fluent town -
            not by accident, and not by leaving anyone behind.
            Wherever you are on the journey, there’s a door
            here that’s yours.
          </p>
          <p className="mt-4 max-w-3xl text-base text-midnight/75 md:text-lg">
            Pick the door that fits you. You’ll find a clear
            first step, the people you’ll meet there, and a way
            to sign up that takes less than two minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#doors" className="btn-lime">
              Find my door <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/community-projects" className="btn-ghost">
              See live community projects
            </Link>
          </div>
        </div>
      </section>

      {/* PERSONA DOORS */}
      <section id="doors" className="bg-chalk py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow tone="ink">Four doors</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Pick whichever describes you today. You can change your
              mind later.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <PersonaCard
              tone="leader"
              who="For business leaders"
              title="I run, lead, or work in a serious knowledge-economy job."
              blurb="Get fluent in AI before your role does. Harpenden-priced AI Night School, plus a residents-only speaker series in town."
              cta="See the leader path"
              href="/im-a-leader"
              decoration={<MiniHugo pose="laptop" size="fit" />}
            />
            <PersonaCard
              tone="teen"
              who="For 14-18-year-olds"
              title="I’m a teenager and I want to build with AI, not just use it."
              blurb="Sherpas AI - Harpenden edition. Get paid to bring real ideas to life, alongside other Harpenden teens."
              cta="See the teen path"
              href="/im-a-teen"
              decoration={<Llama size={190} className="-mb-2" />}
            />
            <PersonaCard
              tone="volunteer"
              who="For volunteers"
              title="I’ve got time to give. I want to help my town."
              blurb="Become an AI Coach, host a weekly clinic, or join a community working group. Your experience is exactly what your town needs."
              cta="See volunteer roles"
              href="/im-volunteering"
              decoration={<MiniHugo pose="thumbs-up" size="fit" />}
            />
            <PersonaCard
              tone="organisation"
              who="For local organisations"
              title="Our organisation has a problem we think AI could help with."
              blurb="Tell us a real problem your charity, school, or community group faces. We’ll match it to a working group."
              cta="Submit a problem"
              href="/our-organisation"
              decoration={<MiniHugo pose="megaphone" size="fit" />}
            />
          </div>
          <p className="mt-8 max-w-2xl text-sm text-midnight/65">
            Not sure which door is yours? Start with{" "}
            <Link href="/im-a-leader" className="underline underline-offset-4">
              Leaders
            </Link>{" "}
            if you work in a knowledge-economy role, or{" "}
            <Link href="/im-volunteering" className="underline underline-offset-4">
              Volunteers
            </Link>{" "}
            if you’re retired and want to help. The doors aren’t locked.
          </p>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <Section tone="white">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
          <div>
            <Eyebrow>Already in motion</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Real Harpenden problems, posted by real Harpenden
              organisations.
            </h2>
            <p className="prose-body mt-5">
              When a local organisation tells us about a problem AI
              could help with, it goes here - so any resident can join
              the working group and help solve it. This is what an
              AI-fluent town actually does on a Tuesday evening.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/community-projects" className="btn-primary">
                Browse all projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/our-organisation" className="btn-ghost">
                Add your organisation’s problem
              </Link>
            </div>
          </div>
          <CommunityProjectsTeaser />
        </div>
      </Section>

      {/* AI OPTIMIST VIDEOS */}
      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>From AI Optimist</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Short videos that explain why this matters - start
            anywhere.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((v) => (
              <VideoCard
                key={v.id + v.theme}
                youtubeId={v.id}
                title={v.title}
                description={v.description}
                tag={v.tag}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section tone="ink" className="py-20 md:py-24">
        <div className="container-narrow text-center">
          <Sparkles className="mx-auto h-8 w-8 text-lime" />
          <h2 className="display-md mt-4 text-balance">
            <Wordmark size="xl" tone="light" />
          </h2>
          <p className="mt-6 text-chalk/85 md:text-lg">
            Whichever door you walk through, you’ll find your
            neighbours already inside.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/im-a-leader" className="btn-lime">
              I’m a leader
            </Link>
            <Link href="/im-a-teen" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              I’m a teen
            </Link>
            <Link href="/im-volunteering" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              I’m volunteering
            </Link>
            <Link href="/our-organisation" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              Our organisation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
