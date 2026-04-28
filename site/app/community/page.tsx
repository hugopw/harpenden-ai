import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { StatTile } from "@/components/StatTile";
import { SegmentCard } from "@/components/SegmentCard";

export const metadata: Metadata = {
  title: "The town",
  description:
    "Who lives in Harpenden, what they do, and why this town is the right place to try something bold with AI.",
};

export default function CommunityPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>The town</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            Harpenden, drawn from public data.
          </h1>
          <p className="prose-body mt-6">
            This is a vision document, so every figure on this page comes
            from publicly available sources - primarily ONS Census 2021 and
            open district-level data. When the council shares its own
            insight we’ll refine these numbers. Until then, the
            directional picture is enough to make the case.
          </p>
        </div>
      </Section>

      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-4">
            <StatTile
              value="31,128"
              label="Residents, Census 2021. Mid-2024 estimate: 31,337."
              source="ONS Census 2021"
            />
            <StatTile
              value="55.1%"
              label="Working-age (18–64) - the core of the London commute"
              source="ONS mid-2024 estimate"
            />
            <StatTile
              value="26.9%"
              label="Under 18 - Harpenden skews young and family-heavy"
              source="ONS mid-2024 estimate"
            />
            <StatTile
              value="18.0%"
              label="Aged 65+ - a meaningful older-resident population"
              source="ONS mid-2024 estimate"
            />
            <StatTile
              value="~49%"
              label="In professional / managerial occupations - vs 33% nationally"
              source="ONS Census 2021, Harpenden North &amp; South wards"
            />
            <StatTile
              value="60.5%"
              label="Working-age residents with a degree, vs 29.8% peer-group average"
              source="ONS Towns &amp; Cities 2021"
            />
            <StatTile
              value="2.64M"
              label="Journeys a year through Harpenden station"
              source="ORR Estimates of Station Usage 2023/24"
            />
            <StatTile
              value="Top 1%"
              label="Least-deprived areas in England - Harpenden North LSOA"
              source="English Indices of Deprivation 2019"
            />
          </div>
          <p className="mt-6 text-sm text-ink/55">
            Figures are drawn from ONS Census 2021, ONS mid-year estimates,
            the Office of Rail and Road, and the English Indices of
            Deprivation. St Albans District is the fourth-highest district
            in England for managerial, senior-official and professional
            occupations. Once the council shares local insight, every
            number will be sharpened.
          </p>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>The thesis</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Why Harpenden specifically - and why now.
            </h2>
            <div className="prose-body mt-6 space-y-5">
              <p>
                Harpenden’s population skews heavily towards
                professionals and managers (NS-SEC groups 1 and 2) in
                finance, law, technology, consulting and other knowledge-
                economy roles. A very large share commute into London.
                These are the same roles every major corporate is now
                modelling for AI-driven productivity gains, which
                translates in practice to fewer, higher-paid people.
              </p>
              <p>
                The households that depend on those jobs have also
                historically invested in private and grammar-track
                schooling on the assumption of a graduate-career path.
                That assumption needs honest re-examination - and the
                town is unusually capable of doing that re-examination
                well.
              </p>
              <p>
                The same density of capable professionals that creates
                the displacement exposure also creates the raw material
                for an unusually fast response. Harpenden can become
                fluent in AI faster than almost any comparable town.
              </p>
            </div>
          </div>
          <div className="card-dark">
            <p className="eyebrow text-sun">Local anchors</p>
            <ul className="mt-5 space-y-3 text-chalk/85">
              <li>
                <strong>Rothamsted Research</strong> - world-class research
                institution on our doorstep. A natural partner for the
                ambition of an AI-fluent town.
              </li>
              <li>
                <strong>Harpenden Leisure Centre</strong> - a natural home
                for warm, in-person AI clinics for older residents and
                parents.
              </li>
              <li>
                <strong>The Common &amp; Rothamsted Park</strong> - our
                civic front room, and the right place for a summer
                festival.
              </li>
              <li>
                <strong>St Nicholas &amp; Harpenden Methodist</strong> -
                halls and pastoral networks that reach residents digital
                channels miss.
              </li>
              <li>
                <strong>Harpenden Secondary Schools</strong> - a natural
                host for Sherpas AI teen cohorts and family-level
                programmes.
              </li>
              <li>
                <strong>Harpenden BID &amp; the High Street</strong> -
                the independents whose livelihoods can be protected
                with an hour of AI coaching.
              </li>
              <li>
                <strong>Harpenden Town Council &amp; the Town Hall</strong>
                - the convening power that turns this from a nice idea
                into a funded, visible, civic programme.
              </li>
              <li>
                <strong>Harpenden Facebook groups &amp; The Herts Ad</strong>
                - where residents actually find out what’s going on.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow tone="sun">Five Harpendens</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Every intervention is mapped to the segments it serves.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            <SegmentCard
              number="1"
              title="Already in it"
              blurb="Early adopters. Building with AI. Want peer-level depth."
              need="Advanced cohorts, train-the-trainer, harder projects."
              tone="sun"
            />
            <SegmentCard
              number="2"
              title="Started - overwhelmed"
              blurb="Tried half a dozen tools. Can feel the shift. Needs focus."
              need="Coaching, a simple personal AI stack."
              tone="sky"
            />
            <SegmentCard
              number="3"
              title="Know they should"
              blurb="Intention high, confidence low. Needs a friendly first step."
              need="AI Night School, a mentor, a cohort."
              tone="meadow"
            />
            <SegmentCard
              number="4"
              title="Reluctant"
              blurb="Sceptical of hype. Not opposed - unconvinced."
              need="Local proof, practical wins, no hype."
              tone="warm"
            />
            <SegmentCard
              number="5"
              title="Scared"
              blurb="Often older residents. Needs warmth and patience."
              need="In-person clinics, one-to-one support, time."
              tone="ink"
            />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="container-page max-w-3xl">
          <Eyebrow tone="sun">A multi-generational town</Eyebrow>
          <h2 className="display-md mt-3 text-balance">
            The offers are deliberately designed so a teenager, their parent,
            and their grandparent can each find a door that’s right
            for them.
          </h2>
          <p className="mt-6 text-chalk/80">
            Sherpas AI for teenagers. AI Night School for parents and
            working-age residents. In-person clinics for older residents.
            The Transformation Accelerator for the businesses they all
            depend on. And a council-facing version for the institution
            that connects them all.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/interventions" className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk">
              Browse the interventions
            </Link>
            <Link href="/resident-offer" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
              The resident-only offer
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
