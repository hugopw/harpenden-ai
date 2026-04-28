import Link from "next/link";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { SegmentCard } from "@/components/SegmentCard";
import { VideoCard } from "@/components/VideoCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { StatTile } from "@/components/StatTile";
import { InterventionCard } from "@/components/InterventionCard";
import { PriorityChooser } from "@/components/PriorityChooser";
import { interventions } from "@/lib/interventions";
import { videoByTheme, videos } from "@/lib/videos";

export default function Home() {
  const featured = interventions.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-chalk">
        <div className="absolute inset-0 bg-dawn-radial" />
        <div className="absolute inset-0 bg-chalk-grid bg-[length:48px_48px] opacity-40" />
        <div className="container-page relative pb-24 pt-20 md:pb-36 md:pt-28">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-sun">
              <MapPin className="h-3.5 w-3.5" /> Harpenden, Hertfordshire
            </span>
            <span className="chip">A vision for the town council</span>
            <span className="chip chip-sky">Summer 2026</span>
          </div>

          <h1 className="display-xl mt-8 max-w-5xl text-balance">
            What happens when <span className="text-sky-deep">everyone</span> in
            your community is fluent in AI?
          </h1>

          <p className="prose-body mt-6 max-w-3xl text-balance">
            Harpenden is unusually well placed to find out. A town full of
            London knowledge workers, ambitious families, grounded
            independents, and a council that listens. We think we can make
            it the UK’s first truly AI-fluent town - together, and
            in one summer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/council#meet" className="btn-primary">
              Walk the council through this <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resident-offer" className="btn-ghost">
              See the resident-only offer
            </Link>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            <StatTile
              value="31,128"
              label="Harpenden residents"
              source="ONS Census 2021"
            />
            <StatTile
              value="~49%"
              label="Of residents in professional and managerial occupations - 4th highest in England"
              source="ONS Census 2021 · SADC"
            />
            <StatTile
              value="60.5%"
              label="Working-age residents with a degree, vs 29.8% peer-group average"
              source="ONS Towns &amp; Cities 2021"
            />
            <StatTile
              value="2.6M"
              label="Journeys a year through Harpenden station - Thameslink to St Pancras in 26 minutes"
              source="ORR 2023/24"
            />
          </div>
        </div>
      </section>

      {/* RISK */}
      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow tone="ink">The honest bit</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              The displacement risk in Harpenden is higher than average.
              Pretending otherwise isn’t a kindness.
            </h2>
            <div className="prose-body mt-6 space-y-5">
              <p>
                Harpenden sits on the Thameslink, and an unusually large
                share of its working-age residents commute into London for
                senior knowledge-economy roles - consulting, finance,
                technology, legal, marketing. These are the exact roles
                every large corporate is now quietly modelling for AI-driven
                headcount reduction.
              </p>
              <p>
                The same households have also invested heavily in their
                children’s education on the assumption that
                university leads to a career like the parents’. That
                assumption deserves honest re-examination.
              </p>
              <p>
                We don’t think the answer is fear. We think the
                answer is fluency - enough AI literacy to keep residents
                valuable, their children equipped, their businesses
                thriving, and their council ahead of the curve.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/community" className="btn-ghost">
                See the town in detail
              </Link>
              <Link href="/journey" className="btn-ghost">
                The journey to fluency
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <VideoCard
              youtubeId={videoByTheme("displacement").id}
              title={videoByTheme("displacement").title}
              description={videoByTheme("displacement").description}
              tag={videoByTheme("displacement").tag}
            />
            <p className="text-sm text-ink/60">
              From AI Optimist - Hugo’s weekly note on how to
              respond to AI rather than react to it.
            </p>
          </div>
        </div>
      </Section>

      {/* BIG QUESTIONS */}
      <Section tone="chalk">
        <div className="container-page">
          <Eyebrow>Two questions we’d like to answer in public</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-dark">
              <p className="eyebrow text-sun">Question one</p>
              <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                What happens when everyone in your community is fluent in AI?
              </p>
              <p className="mt-5 text-chalk/80">
                Not a few early adopters. Everyone - the retiree at the
                Leisure Centre, the teenager at Roundwood, the marketing
                director on the 07:42, the butcher on the High Street,
                the clerk at the Town Hall.
              </p>
            </div>
            <div className="card-dark bg-sky-deep">
              <p className="eyebrow text-sun-glow">Question two</p>
              <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                What happens when a community comes together to solve its
                own problems using the easy magic of AI?
              </p>
              <p className="mt-5 text-chalk/80">
                When the town’s own people build the tools the town
                needs - the traffic model, the venue directory, the
                council-paper translator, the pothole tracker, the warm
                loneliness concierge.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FIVE SEGMENTS */}
      <Section tone="white">
        <div className="container-page">
          <div className="max-w-3xl">
            <Eyebrow>Five Harpendens, not one</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Every town has five groups. A plan that only serves the first
              isn’t a plan for the town - it’s a plan for a club.
            </h2>
            <p className="prose-body mt-5">
              Harpenden.AI is designed to pull all five groups forward at
              their own pace, together. Every intervention below is mapped
              to at least one segment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            <SegmentCard
              number="1"
              title="Already in it"
              blurb="Early adopters. Building with AI at work or at home. Want peers, not beginners, and bigger projects to sink their teeth into."
              need="Community of practice, harder projects, train-the-trainer."
              tone="sun"
            />
            <SegmentCard
              number="2"
              title="Started - now overwhelmed"
              blurb="Can see the potential. Have tried half a dozen tools. Feel the ground shifting and don’t know what to double down on."
              need="Coaching, a simple personal AI stack, and a peer group."
              tone="sky"
            />
            <SegmentCard
              number="3"
              title="Know they should"
              blurb="Say they’re doing it. Privately, not really. Confidence low, appetite real. Will move given the right first step."
              need="A friendly first class, a low-stakes win, a mentor."
              tone="meadow"
            />
            <SegmentCard
              number="4"
              title="Reluctant"
              blurb="Sceptical. Tired of hype. Not opposed - unconvinced. Will engage if the frame is local, practical, and on their terms."
              need="Local relevance, proof on their patch, no hype."
              tone="warm"
            />
            <SegmentCard
              number="5"
              title="Scared"
              blurb="Lean into every worry they read online. Often older residents, sometimes parents of teens. Need to be met with warmth."
              need="Patient, in-person, human-led clinics and time."
              tone="ink"
            />
          </div>
          <p className="mt-8 text-sm text-ink/60">
            The council’s role is specifically to help us reach
            groups 3, 4 and 5 - the ones our marketing can’t.
          </p>
        </div>
      </Section>

      {/* COMMUNITY PROBLEMS */}
      <Section tone="sky">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Vision - the easy magic of AI, used together</Eyebrow>
              <h2 className="display-md mt-3 text-balance">
                Pick the community problems we solve together first.
              </h2>
              <p className="prose-body mt-5">
                These are Harpenden problems. Each can become a visible,
                resident-led AI project inside a summer. Re-order the
                list to show us how you’d sequence them.
              </p>
            </div>
            <Link href="/challenges" className="btn-ghost">
              See all community challenges <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <PriorityChooser />
          </div>
        </div>
      </Section>

      {/* INTERVENTIONS PREVIEW */}
      <Section tone="chalk">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow tone="sun">Interventions directory</Eyebrow>
              <h2 className="display-md mt-3 text-balance">
                A full shelf of ways to help - all ready to draw on.
              </h2>
              <p className="prose-body mt-5">
                Every one of these is already live or ready to run in
                Harpenden. The council doesn’t have to build any of
                it - just let residents know which door to open.
              </p>
            </div>
            <Link href="/interventions" className="btn-primary">
              View the directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((it) => (
              <InterventionCard key={it.name} {...it} />
            ))}
          </div>
        </div>
      </Section>

      {/* RESIDENT OFFER TEASER */}
      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow tone="sun">The resident-only offer</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Exclusive Harpenden pricing on AI Night School and Sherpas AI -
              plus a local programme the rest of the country can’t buy.
            </h2>
            <ul className="prose-body mt-6 space-y-3">
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>Harpenden-priced AI Night School cohorts</strong> -
                  with a physical kick-off night and a graduation evening
                  in town.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>Sherpas AI - Harpenden edition</strong> - teen
                  cohorts working on Harpenden businesses, with local
                  community groups that meet in person.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>Exclusive talks and workshops</strong> - Laura
                  on AI for D2C. Chris on creating and protecting IP. A
                  rolling roster of guest speakers from Hugo’s network,
                  Harpenden only.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1.5 h-5 w-5 flex-none text-meadow" />
                <span>
                  <strong>The Free Dreamers</strong> - a small, deliberately
                  curated Harpenden community where we push the boundaries
                  of what AI can do for the town.
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resident-offer" className="btn-primary">
                See the full offer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/free-dreamers" className="btn-ghost">
                The Free Dreamers
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-gradient-to-br from-optimist via-optimist-deep to-ink p-8 text-chalk md:p-12">
            <Sparkles className="h-8 w-8 text-sun-glow" />
            <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
              AI for teens. AI for the high street. AI for older residents.
              AI for <em>anyone</em> in Harpenden who wants to get involved in
              their community’s AI project.
            </p>
            <p className="mt-6 text-chalk/80">
              The resident offer is designed so that every door - teenager,
              commuter, independent, retiree - leads back to the same
              community.
            </p>
          </div>
        </div>
      </Section>

      {/* VIDEOS */}
      <Section tone="chalk">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>Watch, then read</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Hugo’s weekly note. Fifteen minutes of context, in
              plain English.
            </h2>
            <p className="prose-body mt-5">
              These AI Optimist videos make the case better than any page
              ever will. Start anywhere - they’re short by design.
            </p>
          </div>
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
          <p className="mt-6 text-sm text-ink/60">
            Full archive:{" "}
            <a
              href="https://www.youtube.com/@aioptimist"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              youtube.com/@aioptimist
            </a>
            .
          </p>
        </div>
      </Section>

      {/* HOW THE COUNCIL HELPS */}
      <Section tone="ink">
        <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow tone="sun">For the council</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              A full partnership. North star: awareness.
            </h2>
            <p className="mt-6 text-chalk/80">
              We’re not asking the council for permission. We’re
              asking the council to be a full partner - bringing every
              asset it already has (socials, email lists, direct mail,
              noticeboards, civic events, community relationships) into
              a coordinated push to make sure every Harpenden resident
              knows this is happening.
            </p>
            <Link
              href="/council"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-3 text-sm font-medium text-ink shadow-warm transition hover:bg-sun-warm hover:text-chalk"
            >
              Read the council pack <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Council social channels",
                body: "Coordinated content across council Facebook, Instagram, X and LinkedIn. We supply assets in council voice.",
              },
              {
                title: "Resident email lists",
                body: "Inclusion in resident bulletins and e-newsletters across every phase of the programme.",
              },
              {
                title: "Direct mail &amp; letterbox drops",
                body: "Reach residents that no digital channel touches - the awareness multiplier nothing else replaces.",
              },
              {
                title: "Council noticeboards &amp; civic spaces",
                body: "Town Hall, Public Halls, library boards, civic centres - places residents already trust for what’s on.",
              },
              {
                title: "Community relationships",
                body: "Warm intros to Rothamsted, the Secondary Schools Trust, Age UK Herts, the Leisure Centre, the BID, faith groups.",
              },
              {
                title: "Press &amp; civic events",
                body: "The Herts Ad, Harpenden Life, BBC Three Counties - and a regular Harpenden.AI moment in civic life.",
              },
            ].map((a) => (
              <li key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p
                  className="font-display text-xl"
                  dangerouslySetInnerHTML={{ __html: a.title }}
                />
                <p
                  className="mt-2 text-sm text-chalk/80"
                  dangerouslySetInnerHTML={{ __html: a.body }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="sun">
        <div className="container-narrow text-center">
          <Eyebrow tone="ink">The ask</Eyebrow>
          <h2 className="display-lg mt-3 text-balance">
            Read this site. Then let’s meet this week and plan the summer.
          </h2>
          <p className="prose-body mx-auto mt-6 max-w-2xl">
            This is a vision document. Nothing on this site needs the
            council to build anything. It needs the council to decide
            that Harpenden is worth being first - and to help us reach
            the residents who would otherwise never hear.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/council#meet" className="btn-primary">
              Book the meeting
            </Link>
            <Link href="/journey" className="btn-ghost">
              Walk the journey first
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
