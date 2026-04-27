# Deploying Harpenden.AI under www.ainightschool.org/harpenden-ai

The site is configured to serve from the path `/harpenden-ai` in
production via Next.js `basePath`. To make
`https://www.ainightschool.org/harpenden-ai` work, we deploy this
project to its own Vercel project and add a single rewrite rule on
the AI Night School Vercel project that proxies the path to it.

## What's already done in this repo

- `site/next.config.mjs` — `basePath = "/harpenden-ai"` in production,
  empty string for local dev (so `http://localhost:3010/` keeps
  working).
- `site/vercel.json` — Bun-based Vercel build config.
- `site/.env.local.example` — keeps local dev at the root.

Verify locally:

```bash
cd site
bun run dev                 # http://localhost:3010/        (root)
HARPENDEN_BASE_PATH=/harpenden-ai bun run dev   # /harpenden-ai
bun run build               # confirms the basePath build is clean
```

## Step 1 — get the Harpenden.AI project onto Vercel

You have two options. Pick whichever you prefer.

### Option A: Vercel + GitHub (recommended)

1. Create a private GitHub repo, e.g. `hugopw/harpenden-ai`.
2. From `harpenden-ai/` (the project root, not `site/`):

   ```bash
   git init
   git add .
   git commit -m "feat: harpenden.ai vision site v1"
   git branch -M main
   git remote add origin git@github.com:hugopw/harpenden-ai.git
   git push -u origin main
   ```

3. In the Vercel dashboard → **Add New Project** → import the GitHub
   repo.
4. **Important — configure Vercel:**
   - **Root Directory:** `site`
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `bun run build` (already in `vercel.json`)
   - **Install Command:** `bun install`
5. Deploy. Vercel will give you a URL like
   `https://harpenden-ai.vercel.app/harpenden-ai`. The site will
   404 at the root — that's expected, because `basePath` is
   `/harpenden-ai`.

### Option B: Vercel CLI

```bash
# install once
bun install --global vercel
vercel login
cd site
vercel --prod
```

Vercel will prompt for project name and root. Set the root to `site`.

## Step 2 — proxy from www.ainightschool.org/harpenden-ai

On the **AI Night School Vercel project** (the one that serves
`www.ainightschool.org`), edit (or create) `vercel.json` and add a
rewrite:

```json
{
  "rewrites": [
    {
      "source": "/harpenden-ai",
      "destination": "https://harpenden-ai.vercel.app/harpenden-ai"
    },
    {
      "source": "/harpenden-ai/:path*",
      "destination": "https://harpenden-ai.vercel.app/harpenden-ai/:path*"
    }
  ]
}
```

Replace `harpenden-ai.vercel.app` with the actual production URL
Vercel assigns. Commit, push, and Vercel will redeploy AINS with the
rewrite.

After this, `https://www.ainightschool.org/harpenden-ai` will serve
the Harpenden.AI homepage, and every internal link (`/community`,
`/council`, etc.) will resolve correctly because Next.js writes
them all under `/harpenden-ai` automatically thanks to `basePath`.

## Step 3 — sanity-check after deploy

Visit each route through the AINS host:

**Council view (default landing):**
- https://www.ainightschool.org/harpenden-ai
- https://www.ainightschool.org/harpenden-ai/community
- https://www.ainightschool.org/harpenden-ai/council
- https://www.ainightschool.org/harpenden-ai/challenges
- https://www.ainightschool.org/harpenden-ai/interventions
- https://www.ainightschool.org/harpenden-ai/resident-offer
- https://www.ainightschool.org/harpenden-ai/free-dreamers
- https://www.ainightschool.org/harpenden-ai/journey
- https://www.ainightschool.org/harpenden-ai/harpenden-traffic
- https://www.ainightschool.org/harpenden-ai/about

**Resident view (via the header switch):**
- https://www.ainightschool.org/harpenden-ai/welcome
- https://www.ainightschool.org/harpenden-ai/im-a-leader
- https://www.ainightschool.org/harpenden-ai/im-a-teen
- https://www.ainightschool.org/harpenden-ai/im-volunteering
- https://www.ainightschool.org/harpenden-ai/our-organisation
- https://www.ainightschool.org/harpenden-ai/submit-a-problem
- https://www.ainightschool.org/harpenden-ai/community-projects

Look for:
- Stylesheet loaded (header is dark, hero has the dawn radial)
- AI Optimist YouTube thumbnails render
- Mini Hugo SVGs render on the resident persona pages
- Sherpas gradient + llama render on /im-a-teen
- Footer attribution intact
- All navigation links route to AINS host paths, not the
  `harpenden-ai.vercel.app` host
- The "I live in Harpenden" / "Council view" header switch swaps
  navigation between the two views
