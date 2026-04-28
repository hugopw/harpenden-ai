# Harpenden.AI - site (v1)

Vision-document website for Harpenden Town Council. Built with Next.js 15
(App Router), Tailwind, and Bun.

## Run locally

```bash
cd site
bun install
bun run dev        # http://localhost:3010
bun run build      # static production build
bun run start      # serve the production build
```

## Two views, one site

The site has two parallel views connected by the **header view-switch**:

- **Council view** (default) - the original pitch deck for Harpenden Town
  Council. Routes under `/`, `/community`, `/council`, `/journey`, etc.
- **Resident view** - the resident-first experience, accessed via the
  "I live in Harpenden" button in the header. Routes under `/welcome`
  and the four persona doors.

## Pages

### Resident view

| Route | File | Purpose |
|---|---|---|
| `/welcome` | `app/welcome/page.tsx` | Resident-first homepage with four persona doors |
| `/im-a-leader` | `app/im-a-leader/page.tsx` | Senior pros + business leaders - AINS register, Mini Hugo |
| `/im-a-teen` | `app/im-a-teen/page.tsx` | 14–18 - Sherpas gradient, llama, sibling-brand cue |
| `/im-volunteering` | `app/im-volunteering/page.tsx` | Retired & active volunteers - Lavender + Mini Hugo |
| `/our-organisation` | `app/our-organisation/page.tsx` | Charities/clubs/schools - explainer + CTA to submit |
| `/submit-a-problem` | `app/submit-a-problem/page.tsx` | Form: organisation problem submission |
| `/community-projects` | `app/community-projects/page.tsx` | Public listing of submitted problems + join flow |

### Council view

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | The long-form homepage the council walks through |
| `/community` | `app/community/page.tsx` | The town - demographics sourced from public data |
| `/challenges` | `app/challenges/page.tsx` | Community problems + interactive prioritiser |
| `/interventions` | `app/interventions/page.tsx` | Directory of programmes, tools, diagnostics |
| `/resident-offer` | `app/resident-offer/page.tsx` | Exclusive Harpenden pricing + speakers + Free Dreamers |
| `/free-dreamers` | `app/free-dreamers/page.tsx` | The invite-only Harpenden community group |
| `/council` | `app/council/page.tsx` | Full-partner asks + Town Council Accelerator |
| `/journey` | `app/journey/page.tsx` | Phased plan, summer 2026 |
| `/harpenden-traffic` | `app/harpenden-traffic/page.tsx` | Worked-example prototype |
| `/about` | `app/about/page.tsx` | Attribution, contact |

## Data store

Submissions (signups + problems) persist via `lib/data-store.ts`:

- **Demo** - localStorage. Zero infra. See `lib/data-store.ts`.
- **Production** - Supabase swap documented in `harpenden-ai/SUPABASE.md`
  with a complete SQL schema and adapter pattern.

The `submissions.ts` types include `persona`, `tags`, and `consent`
so downstream automations (n8n / Zapier / Make) can route signups
into the right AINS / Sherpas flows once the DB is live.

## Brand tokens

Three sibling-brand systems coexist in `tailwind.config.ts`:

- **Harpenden civic** (sun / sky / meadow / ink + chalk) - body palette.
- **AI Night School** (`midnight #191931`, `lavender #DCB8FE`,
  `lime #B4F863`) - leader, volunteer, and authority surfaces.
- **Sherpas** (cyan→pink gradient, plus an inline `<Llama />` SVG) -
  used **only** on the teen path.

Mini Hugo SVGs in `public/illustrations/` (mirrored from AINS, used
on Lavender sections only per AINS brand convention).

## Content sources

- **Demographics** - `app/community/page.tsx`. Every stat is drawn from
  ONS Census 2021, ONS mid-2024 estimates, ORR station-usage data,
  the English Indices of Deprivation, or St Albans District Council
  published figures. See `research/demographics.md` (below).
- **Interventions** - `lib/interventions.ts`. Edit here; pages re-read.
- **Videos** - `lib/videos.ts`. Four real AI Optimist YouTube IDs
  confirmed. Additional videos can be added without breaking layout.

## What's in the box

- Real AI Optimist brand direction (magenta `#D6006D` accent via
  `optimist-*` Tailwind tokens) alongside the site’s own
  editorial palette (sun / sky / meadow / ink).
- Interactive priority chooser on `/` and `/challenges` - client-side,
  no backend.
- Video embeds from youtube.com/@aioptimist via
  `VideoCard` / `VideoEmbed` components.
- Responsive design; builds static, deploys anywhere.

## Known gaps / TODOs for v2

- **Real council meeting date** - CTA currently mailto-based. Once the
  meeting is booked, swap for a calendar link.
- **Local Harpenden imagery** - no photography in v1. `design/imagery-sources.md`
  needs to be populated with licensable sources (High Street,
  Rothamsted, Common, station, Leisure Centre).
- **Additional AI Optimist videos** - four are embedded; add more IDs
  to `lib/videos.ts` as Hugo releases them.
- **Festival page** - currently folded into `/journey` Phase 04. If the
  council greenlights, promote to `/festival` with a sponsor pack.
- **Loneliness data** - site cites Community Life Survey national
  proxy. Replace with Herts JSNA chapter once obtained.
- **OG/Twitter images** - no social-share artwork yet.
- **Contact form** - currently mailto. Swap for Formspree/Plausible
  in v2.
- **Deploy target** - Vercel recommended (`bun run build` produces
  static output). Point `harpenden.ai` apex at the deployment.

## Attribution

Developed by Hugo Pickford-Wardle - AI Optimist.
