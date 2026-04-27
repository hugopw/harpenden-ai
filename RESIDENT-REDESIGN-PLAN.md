# Plan — Resident-facing redesign of Harpenden.AI

Status: **proposal — awaiting Hugo's approval before any code changes.**
This is the plan for the resident experience you asked for. Scope is
big enough that I want sign-off before building.

---

## 1. The problem with v1

The current site is a **pitch document for the Town Council**.
It works for that — a council member can walk through it, see the
thesis, the asks, and the worked example.

But the moment the council says yes, the site has to flip job. From
that moment, Harpenden.AI is a **resident product**. A 55-year-old
Marketing Director clicking it from a Facebook post should land
somewhere that feels welcoming, urgent and obvious — not on a pitch
deck for an institution she's not part of.

So we plan v2 as a **resident-first website with a council pitch
slot inside it**, not the other way round.

## 2. Design principles

1. **Inclusive by default.** Type ≥ 18px body, 4.5:1 contrast minimum,
   clear focus rings, motion-reduced variants, screen-reader-friendly
   structure, no jargon above the fold.
2. **One door per persona.** A leader, a teen, a retired volunteer,
   and a community organisation all have different mental models.
   Each gets a clearly-marked entry path that is *theirs*.
3. **Sibling brand, not copy.** Borrow the AINS three-colourway logic
   (Midnight / Lavender / White) and the AINS character device, but
   give Harpenden.AI its own civic identity. Borrow Sherpas' energy
   moves (the full-stop wordmark, the bold gradient accent, the
   llama-as-prop) without lifting Sherpas' palette wholesale.
4. **Ten-second comprehension.** The hero on the homepage should
   communicate *what this is, who it's for, and what to do next* in
   ten seconds, regardless of which persona arrives.
5. **Action before scroll.** Each persona's path leads to a sign-up,
   a problem submission, or a volunteer click within two screens.

## 3. Information architecture

```
/                              Resident-first homepage (was: council pitch)
  ├── /im-a-leader             Persona path — businesses & senior pros
  ├── /im-a-teen               Persona path — Sherpas AI, work experience
  ├── /im-volunteering         Persona path — retired & active residents
  ├── /our-organisation        Persona path — community orgs (Kings Pantry et al.)
  │      └── /submit-a-problem Form: community organisation problem submission
  ├── /community               (existing — kept, lightly updated)
  ├── /interventions           (existing — kept)
  ├── /challenges              (existing — re-skinned, problem-submit CTA added)
  ├── /resident-offer          (existing — re-skinned, persona-aware CTAs)
  ├── /free-dreamers           (existing — kept)
  ├── /journey                 (existing — kept)
  ├── /harpenden-traffic       (existing — already updated)
  └── /pitch                   New: the council-facing pitch
        ├── /pitch/council     (was /council)
        └── /pitch/partnership (the partnership asks page)
```

`/council` keeps redirecting to `/pitch/council` for a few weeks so
nothing breaks for anyone you've already shared it with.

## 4. The four persona doors

Each one is a focused, single-screen-tall card on the homepage with
a clear illustration and one CTA. Then a dedicated landing page.

### 4.1 "I'm a leader" — `/im-a-leader`

**Reader:** 35–60. Senior knowledge worker. Marketing Director,
Partner, GP, Headmaster, agency owner, founder.

**Frame:** "AI is changing your work. Get fluent before it changes
without you."

**Page sections:**
- Hero: short statement, one CTA ("Join the next AI Night School
  Harpenden cohort").
- Three trust marks: Hugo's bio, the AI Optimist note, AI Night
  School cohort numbers.
- Resident-only offer summary (Harpenden pricing, physical
  kick-offs, speaker series).
- Two AI Optimist videos (displacement + getting started).
- Sign-up form → cohort waitlist.

### 4.2 "I'm 14–18" — `/im-a-teen`

**Reader:** Harpenden secondary-school student or 6th former.

**Frame:** Sherpas AI energy. "Get paid to bring your ideas to life."

**Page sections:**
- Hero in **Sherpas treatment** — the cyan-to-pink gradient, the
  full-stop, a llama. Playful and loud.
- Three things you can do: summer cohort, year-round community
  group, work experience matched to a Harpenden business.
- One short Sherpas video.
- Sign-up form → teen registration.

### 4.3 "I want to volunteer" — `/im-volunteering`

**Reader:** Retired or semi-retired residents (and any other
resident with hours to give). Often Segment 5 (warm, patient,
in-person needed).

**Frame:** "Your experience is exactly what your town needs."

**Page sections:**
- Hero — warm, large type, calm photography. No jargon above
  the fold.
- Three roles to volunteer for:
  1. Community-AI working groups (traffic, venues, loneliness…)
  2. Becoming an AI Coach (after a short training cohort)
  3. Hosting / running the weekly drop-in clinics
- A short, clear "what's expected" promise: how much time, what
  support you get, who to call if it doesn't suit.
- One AI Optimist video (older residents).
- Sign-up form → volunteer registration with role + availability.

### 4.4 "Our organisation has a problem to solve" — `/our-organisation`

**Reader:** A leader from a Harpenden community org. Hugo cited
Kings Pantry as the archetypal example — also: Harpenden Trust,
Harpenden Mencap, churches, schools, Lions, Rotary, Age UK Herts,
sports clubs, the BID.

**Frame:** "Tell us a problem your organisation faces. We'll match
it to a community AI working group."

**Page sections:**
- Hero — civic, confident, not commercial.
- A short list of problems we're already running with (the worked
  examples).
- A clear "submit a problem" CTA → `/submit-a-problem` form.
- A "what happens after you submit" promise (3 steps, named owner,
  timeline).

### 4.5 `/submit-a-problem` form

A short, opinionated form:
- Organisation name + your name + role
- Email (required)
- Problem in 2–3 sentences
- Who feels the problem most (the people, not the systems)
- What you've already tried
- What success looks like in 90 days
- Optional: upload a doc or link

Stored via Formspree (or an Airtable form embed) for v2 — no
backend in v1. Confirmation page sets expectations clearly.

## 5. Visual system

### Palette

Adopt the **AINS three-colourway architecture**, recoloured for
civic warmth:

| Role | Colour | Hex | Where used |
|------|--------|-----|------------|
| Authority dark | Midnight Navy | `#191931` | Council pitch, leader path, footer |
| Warm mid | Lavender | `#dcb8fe` | Volunteer path, family path, calm sections |
| Energy accent | Electric Lime | `#b4f863` | CTAs, callouts, leader & teen paths |
| Light surface | White / Chalk | `#FBFAF5` | Body |
| Civic accent | Sun (kept from v1) | `#FFB547` | Heritage / festival moments |
| Sherpas accent | Sherpas gradient | cyan→pink | Teen path *only*, used sparingly |

The lime green replaces the existing magenta-pink as the primary
accent. The AI Optimist magenta token stays available for
AI-Optimist-branded sections (notes, video tags).

### Typography

Keep Fraunces (display) + Inter (body) — both already loaded — but
set **18px body minimum** for inclusive design, with `prose-body-lg`
at 20–22px for hero paragraphs.

### Mascot — Mini Hugo

Use the Mini Hugo illustrations from AINS (poses confirmed: cloud,
zen, thumbs-up, megaphone, teacher, laptop, start-flag) on
**Lavender** sections only — exactly as AINS does. Bottom-right of
each section. SVGs are public; we'll download and self-host in
`site/public/illustrations/` (do not hot-link from AINS).

### Llamas

Use a single illustrated llama (a flat geometric one from the
Sherpas Instagram register, not a photo) **only** on the teen
landing page. It's a wink to the sibling brand without polluting
the rest of the site.

### Wordmark

Add the AINS-style full-stop discipline: **`Harpenden.AI`** on light
surfaces, with the full-stop in Electric Lime (`#b4f863`). Already
present in the existing site; it just gets re-coloured.

## 6. Inclusive-design checklist (we hold ourselves to this)

- [ ] Body ≥ 18px, hero paragraphs ≥ 20px
- [ ] All text 4.5:1 contrast minimum
- [ ] Focus rings visible (we'll use a 2px Electric Lime ring)
- [ ] No CTAs that rely on colour alone
- [ ] All forms keyboard-navigable, labelled, screen-reader friendly
- [ ] `prefers-reduced-motion` respected (no parallax, no auto-play
      videos with motion)
- [ ] Plain-English alternatives for every jargon term
- [ ] Skip-to-content link
- [ ] Each persona page passes the "10-second test" with someone
      who isn't familiar with AI

## 7. Build order (if you approve)

1. **Palette + tokens** — extend `tailwind.config.ts` with
   `midnight`, `lavender`, `lime`. Add the `Harpenden.AI` wordmark
   component with re-coloured full-stop.
2. **Mini Hugo + Llama** — download SVG assets to
   `site/public/illustrations/`, build a `<MiniHugo pose="..." />`
   component and a `<Llama />` component.
3. **Homepage flip** — rewrite `/` as the resident-first hero with
   the four persona doors. Move the existing council pitch under
   `/pitch/council`. Add a redirect from `/council` → `/pitch/council`.
4. **Persona pages** — `/im-a-leader`, `/im-a-teen`,
   `/im-volunteering`, `/our-organisation`. Each follows the section
   spec in §4 above.
5. **Problem-submission form** — `/submit-a-problem` with Formspree
   wiring (Hugo to share the endpoint or I'll create the
   placeholder).
6. **Inclusive-design pass** — every page checked against §6.
7. **Re-deploy** to Vercel, confirm AINS rewrite still serves the
   site cleanly under `/Harpenden-AI/`.

I'd estimate this is ~6–8 hours of focused work end-to-end. Smaller
if you green-light incremental delivery (e.g. ship persona doors
first, problem-submission form a day later).

## 8. Open questions for Hugo

1. **Wordmark accent colour** — Electric Lime full-stop, or keep the
   AI Optimist magenta one?
2. **Cohort sign-up plumbing** — for the leader and teen paths, do
   sign-ups go to Hugo's existing AINS / Sherpas flows (links out)
   or to a Harpenden-specific email collector first (Formspree /
   ConvertKit)?
3. **Volunteer form destination** — same question. Where do volunteer
   sign-ups land? Email to Hugo? An Airtable? An Action Network?
4. **Problem submissions** — Formspree endpoint, Airtable form, or
   "email Hugo with this template" mailto?
5. **Council redirect** — happy with `/council` → `/pitch/council`,
   or keep `/council` live as the canonical?
6. **Llama** — flat geometric Sherpas-Instagram register, or
   a custom one drawn for Harpenden? (I'd recommend a single
   licensable flat geometric llama in town colours.)
7. **Image policy** — am I allowed to use a small set of stock
   photographs of Harpenden (High Street, Common, station) from
   Unsplash with credit, or do you want to source from local
   photographers first?
8. **AINS rewrite** — confirmed you have admin on the AINS Vercel
   project so we can add the `/Harpenden-AI` rewrite?

Once you answer these eight questions (even one-liners), I'll start
building. If any of them changes the IA above, we adjust the plan
first.
