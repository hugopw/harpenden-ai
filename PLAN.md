# Plan - Harpenden.AI vision website

Proposal. Awaiting Hugo's confirmation before building. Nothing below has been implemented yet.

## 1. Site purpose (one line)

Walk Harpenden Town Council through a fully-formed vision of Harpenden as the UK's most AI-fluent town, with the risk, the mechanics, the interventions, and a worked example already in place - so their meeting with Hugo is about *helping*, not *deciding*.

## 2. Proposed information architecture

Single elegant site, long-form scroll on the homepage, with a small number of deeper pages. Each deeper page should stand on its own if shared as a link.

### Home (`/`)
Hero → Risk (the Harpenden displacement thesis) → The question ("What if a whole town…") → Vision in five outcomes → The subgroups of the community → Community problems we could solve together → How the council helps → Call to action (book the meeting).

### Community (`/community`)
- Population of Harpenden: demographics, young families, retirees, commuters, local employers.
- Subgroups and their learning journeys (from Hugo's existing segmentation).
- Businesses vs. residents.
- Existing assets: Harpenden Collective, AI Night School alumni, potential council partners (Rothamsted, Leisure Centre, Facebook group, noticeboards).

### Interventions Directory (`/interventions`)
One card per intervention with "what it is / who it's for / community example":
- AI Night School
- Sherpas AI
- AI Optimist Strategy
- AI Transformation Accelerator (standard)
- AI Transformation Accelerator for Town Councils (new variant - see `/council`)
- Imaginarium
- Problemarium
- Chooser
- Diagnostics: need names. Candidates to workshop: *Job Displacement Risk Diagnostic*, *Community Pulse Diagnostic*, *Council Engagement Diagnostic*, *Family AI-Readiness Diagnostic*, *Small-Business AI Opportunity Diagnostic*.

### Community challenges (`/challenges`)
Curated list of local problems framed as projects residents and council can run together:
- Where can I hold my event? (hirable-rooms directory)
- Traffic from new developments → links to the `/harpenden-traffic` prototype.
- Loneliness in Harpenden.
- Potholes.
- Council engagement across the full population.

### Prototype: Harpenden Traffic (`/harpenden-traffic`)
Worked prototype demonstrating how a community AI project runs end-to-end. Content TBD in `prototypes/harpenden-traffic/`.

### For the Council (`/council`)
Council-facing AI Transformation Accelerator:
- How AI reduces council overhead.
- How AI increases community engagement.
- What "running a town council in the AI age" looks like.
- Specific asks: letterbox drops, noticeboards, social channels, introductions to Rothamsted / Leisure Centre / Facebook groups, venue partnerships.

### Journey (`/journey`)
The journey to get there - phased, specific, low-effort-for-council:
- Phase 0: This website + council meeting.
- Phase 1: Core offers (AI Night School, AI Optimist) advertised with Harpenden-resident pricing.
- Phase 2: Community-group formation around local priorities, with training.
- Phase 3: Train-the-trainer ("Become an AI Coach").
- Phase 4: Physical spaces for supported AI work.
- Phase 5: Harpenden AI festival (summer - caveat: holidays; needs community co-delivery, not Hugo-only).
- Phase 6: Expansion to other towns.

### About / Contact (`/about`)
Hugo's bio, AI Optimist brand, links to Sherpas AI and AI Night School, contact form for council members.

## 3. Design direction

- Draw from `www.startupsherpas.co.uk` (confident, mission-led) and `www.ainightschool.org` (approachable, people-first).
- AI Optimist brand palette and typography.
- Local Harpenden imagery: High Street, Rothamsted, the Common, St Nicholas, the station, the park, the Leisure Centre. Sourced legally - needs `design/imagery-sources.md`.
- Footer: "Developed by Hugo Pickford-Wardle - AI Optimist".

## 4. Technical stack (proposed)

- **Next.js 16** (App Router) + **Tailwind** + **shadcn/ui**.
- **Bun** for package management and scripts.
- **MDX** for editable content sections so Hugo can revise copy without code changes.
- Host on **Vercel**.
- No backend in v1. Contact form → Formspree or similar. Analytics → Plausible.

## 5. Content workflow

- Copy lives in `content/` as MDX, one file per page section.
- Design system notes in `design/design-system.md`.
- Imagery provenance in `design/imagery-sources.md`.
- Research inputs (demographics, council data) in `research/`.

## 6. Build phases

1. **Approve this plan** (Hugo).
2. **Draft content** for Home, Community, Interventions, Council, Journey. (No code yet.)
3. **Design system pass** - palette, type, components, imagery shortlist.
4. **Scaffold Next.js site** in `site/`.
5. **Build pages** in IA order, content-first.
6. **`/harpenden-traffic` prototype** - separate effort; needs its own mini-brief.
7. **Polish, deploy, share staging link with Hugo** before council meeting.

## 7. Open questions for Hugo

1. **Resident-only offer** - what's the right special value? Discount on AI Night School, a free diagnostic, a Harpenden-only cohort, a sliding scale? Recommend we pick one primary offer, not a menu.
2. **Festival timing** - summer despite holidays, or September "Back to AI" framing?
3. **Demographics data** - do we have licensed data to cite, or should the site use directional ranges and invite the council to share their data?
4. **Diagnostic names** - happy to workshop the five candidates above, or you want to name them yourself?
5. **Harpenden-specific partners** - any names beyond Rothamsted / Leisure Centre / Facebook group / Harpenden Collective you want listed by name?
6. **Tech stack** - Next.js + MDX as proposed, or do you want to use an existing AI Optimist / AI Night School template as a starting point?
7. **Council meeting date** - what's the deadline we're building toward?

## 8. Not doing (yet)

- No live directory of hirable rooms - the site *describes* it as a community challenge, it doesn't *solve* it. Same for loneliness, potholes. Those become real projects *after* the council engages.
- No auth, no resident portal, no membership system in v1.
- No marketing automation integration until the council is onboard.
