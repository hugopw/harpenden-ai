import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { VideoCard } from "@/components/VideoCard";
import { videoByTheme } from "@/lib/videos";

export const metadata: Metadata = {
  title: "For the Town Council",
  description:
    "How Harpenden Town Council can enable this in a single summer — the asks, the programme, the AI Transformation Accelerator for town councils, and what we&rsquo;re not asking for.",
};

export default function CouncilPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>For Harpenden Town Council</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            We&rsquo;re asking the council to be a full partner — and
            our north star together is awareness.
          </h1>
          <p className="prose-body mt-6">
            Harpenden.AI only works if every resident hears about it.
            The council is the single largest awareness-building asset
            this town has — its socials, email lists, direct mail,
            community boards, venue networks, and trusted
            relationships. None of those can be replicated by paid
            marketing, and all of them are needed if we&rsquo;re
            serious about reaching every Harpenden resident, not
            just the ones already paying attention.
          </p>
          <p className="mt-4 text-sm text-ink/60">
            This page is written for council members and officers.
            It collects the partnership asks, inventories the assets
            we&rsquo;d use together, spells out what we&rsquo;re
            <em> not</em> asking for, and outlines the council-specific
            variant of the AI Transformation Accelerator.
          </p>
        </div>
      </Section>

      <Section tone="sun" className="py-16 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <Eyebrow tone="ink">Our shared north star</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              Awareness across every part of Harpenden.
            </h2>
          </div>
          <p className="text-ink/85 md:text-lg">
            If we measure one thing together, it&rsquo;s how many
            residents know that Harpenden.AI exists, what it offers
            them, and how to get involved. Every council asset — every
            email, every noticeboard, every meeting — is a chance to
            move that number. The programme delivers fluency. The
            partnership delivers awareness. Both have to win for either
            to.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page">
          <Eyebrow>The partnership — assets we&rsquo;d use together</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            Every asset the council already has, working in concert with
            the programme.
          </h2>
          <p className="prose-body mt-5 max-w-3xl">
            None of these are new for the council. They&rsquo;re things
            you already do — meetings, mailings, posts, conversations.
            Partnership means we plan them together so the awareness
            compounds rather than scatters.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Council social channels",
                b: "Coordinated content across the council&rsquo;s Facebook, Instagram, X and LinkedIn. We supply the assets in council voice; you decide cadence and timing.",
              },
              {
                t: "Resident email lists",
                b: "Inclusion in the council&rsquo;s regular resident bulletins, e-newsletters and any opt-in lists you maintain. Each programme phase gets its own dedicated send.",
              },
              {
                t: "Direct mail &amp; letterbox drops",
                b: "Reach the residents that no digital channel touches. Even a single town-wide drop introducing the resident offer transforms the programme&rsquo;s starting line.",
              },
              {
                t: "Council noticeboards &amp; civic spaces",
                b: "Town Hall, Public Halls, library noticeboards, The Eric Morecambe Centre. The places residents already trust for what&rsquo;s on in town.",
              },
              {
                t: "Community relationships",
                b: "The council&rsquo;s warm relationships with Rothamsted, the Secondary Schools Trust, Age UK Herts, the Leisure Centre, the BID, faith groups, and resident associations.",
              },
              {
                t: "Press &amp; local media",
                b: "The Herts Ad, Harpenden Life magazine, Harpenden Connect, BBC Three Counties. A council-endorsed launch makes the press story write itself.",
              },
              {
                t: "Council meetings &amp; agendas",
                b: "A regular Harpenden.AI standing item gives residents a visible signal that this is real, sustained civic work — not a one-off announcement.",
              },
              {
                t: "Civic events &amp; town moments",
                b: "Carnival, Christmas lights switch-on, summer events, Mayor&rsquo;s engagements. Each becomes a touchpoint for residents to encounter the programme in person.",
              },
              {
                t: "Venues &amp; physical hosting",
                b: "Steers on which council-controlled or council-friendly venues can host the cohort kick-offs, graduations, clinics and the summer festival.",
              },
            ].map((a) => (
              <article
                key={a.t}
                className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm"
              >
                <h3
                  className="font-display text-lg leading-tight"
                  dangerouslySetInnerHTML={{ __html: a.t }}
                />
                <p
                  className="mt-2 text-sm text-ink/80"
                  dangerouslySetInnerHTML={{ __html: a.b }}
                />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="chalk">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>What full partnership looks like</Eyebrow>
            <h2 className="display-md mt-3">
              Six concrete things — together.
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                {
                  t: "Public endorsement",
                  b: "A clear public statement from the council that Harpenden.AI is a partner programme. Visible. Named. On the record.",
                },
                {
                  t: "A joint communications calendar",
                  b: "We plan announcements, posts, mailings and direct mail in lockstep with the council&rsquo;s comms team across the summer. Awareness is the metric.",
                },
                {
                  t: "Awareness-first inclusion across every channel",
                  b: "Inclusion in resident emails, council socials, noticeboards, civic events and direct mail — coordinated against the joint calendar.",
                },
                {
                  t: "Warm introductions",
                  b: "Council-led intros to Rothamsted, the Secondary Schools Trust, Age UK Herts, the Leisure Centre, the BID, faith groups, resident associations, and Harpenden Facebook group admins.",
                },
                {
                  t: "Venue partnership for the festival &amp; clinics",
                  b: "Active help finding and securing the venues for cohort openings, graduation evenings, weekly clinics and the summer festival.",
                },
                {
                  t: "Data, when you&rsquo;re ready",
                  b: "Any publicly shareable council data we can use to sharpen interventions. Start small — even one dataset makes the programme ten times smarter.",
                },
              ].map((a) => (
                <li key={a.t} className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-meadow-soft text-meadow">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg" dangerouslySetInnerHTML={{ __html: a.t }} />
                    <p
                      className="mt-1 text-ink/80"
                      dangerouslySetInnerHTML={{ __html: a.b }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-dark">
            <Eyebrow tone="sun">What we&rsquo;re not asking for</Eyebrow>
            <ul className="mt-5 space-y-4 text-chalk/90">
              <li>
                <strong>No new council budget.</strong> The programme
                monetises through AI Night School and Sherpas AI at
                resident-friendly pricing. Public goods — clinics,
                festival, council digest — are cross-subsidised.
              </li>
              <li>
                <strong>No new committee or department.</strong> A single
                point of contact on the council is enough. We adapt to
                your rhythm, not the other way round.
              </li>
              <li>
                <strong>No procurement.</strong> This is a community
                programme with commercial offers inside it — not a
                council-procured service.
              </li>
              <li>
                <strong>No editorial control surrendered.</strong> The
                council always signs off on anything that goes out in
                the council&rsquo;s name. We bring the assets; you keep
                the voice.
              </li>
              <li>
                <strong>No long decision up-front.</strong> Partnership
                can start light and scale as confidence builds. The
                first month&rsquo;s asks are tiny.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <div className="container-page">
          <Eyebrow>For the council itself</Eyebrow>
          <h2 className="display-md mt-3 max-w-3xl text-balance">
            The AI Transformation Accelerator — Town Council edition.
          </h2>
          <p className="prose-body mt-5 max-w-3xl">
            A six-session programme shaped specifically for small-to-mid
            town councils. The goal isn&rsquo;t an impressive tech stack.
            It&rsquo;s an officer team that uses AI confidently every
            day, decisions that are better communicated, and residents
            who feel heard.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                t: "A personal AI for every officer",
                b: "Every member of staff leaves session one with a configured personal AI, a few repeatable workflows, and a peer to practise with.",
              },
              {
                n: "02",
                t: "Papers &amp; minutes in plain English",
                b: "An AI workflow that turns every council paper and every set of minutes into a resident-facing digest, in the council&rsquo;s voice.",
              },
              {
                n: "03",
                t: "Resident correspondence, ten times faster",
                b: "Drafting, sorting, and prioritising correspondence without losing the personal touch. Officers keep control — the tool is just faster.",
              },
              {
                n: "04",
                t: "Community engagement that actually reaches everyone",
                b: "Short-form explainers, Q&amp;A, translations into community languages, and proactive outreach to the three wards that never respond.",
              },
              {
                n: "05",
                t: "Policy drafting &amp; scenario-testing",
                b: "Use AI to pressure-test a policy before it&rsquo;s tabled — and to surface implications the council might otherwise only learn in a public meeting.",
              },
              {
                n: "06",
                t: "Governance &amp; assurance",
                b: "A pragmatic governance model suited to a town council — who can use what, where data lives, what gets logged, what we tell residents.",
              },
            ].map((m) => (
              <article
                key={m.n}
                className="rounded-3xl border border-ink/10 bg-white/80 p-6 backdrop-blur"
              >
                <p className="font-display text-sm text-sky-deep">{m.n}</p>
                <h3
                  className="mt-3 font-display text-xl leading-tight"
                  dangerouslySetInnerHTML={{ __html: m.t }}
                />
                <p
                  className="mt-2 text-sm text-ink/80"
                  dangerouslySetInnerHTML={{ __html: m.b }}
                />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow tone="sun">Watch, then decide</Eyebrow>
            <h2 className="display-md mt-3 text-balance">
              A fifteen-minute context-setter from Hugo.
            </h2>
            <p className="mt-5 text-ink/80">
              Before the meeting, these two videos give council members
              enough of the picture to walk in on the same page.
            </p>
            <div className="mt-6 space-y-4">
              <VideoCard
                youtubeId={videoByTheme("displacement").id}
                title={videoByTheme("displacement").title}
                description={videoByTheme("displacement").description}
                tag={videoByTheme("displacement").tag}
              />
              <VideoCard
                youtubeId={videoByTheme("teens").id}
                title={videoByTheme("teens").title}
                description={videoByTheme("teens").description}
                tag={videoByTheme("teens").tag}
              />
            </div>
          </div>
          <div id="meet" className="rounded-3xl border border-ink/10 bg-ink p-8 text-chalk md:p-12">
            <Eyebrow tone="sun">Book the meeting</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Let&rsquo;s walk through this in person, this week.
            </h2>
            <p className="mt-6 text-chalk/80">
              Thirty to forty-five minutes is plenty. Hugo will walk the
              council through this site, field any questions, and leave
              you with a single-page summary of the asks. No pitch
              deck. No follow-on sales process.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hugo+harpenden-ai@pdubs.co?subject=Harpenden.AI%20council%20meeting&body=Hugo%20%E2%80%94%20let%27s%20schedule%2030%E2%80%9345%20minutes%20this%20week%20to%20walk%20through%20Harpenden.AI.%20Good%20times%3A"
                className="btn-primary bg-sun text-ink hover:bg-sun-warm hover:text-chalk"
              >
                Email Hugo
              </a>
              <Link href="/journey" className="btn-ghost border-white/30 bg-white/10 text-chalk hover:bg-white/20">
                See the phased journey
              </Link>
            </div>
            <p className="mt-10 text-sm text-chalk/60">
              Attribution: Developed by Hugo Pickford-Wardle — AI Optimist.
              This website is a vision document for Harpenden Town Council.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
