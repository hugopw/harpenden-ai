# Supabase swap — when you're ready to leave demo mode

The current demo persists `signups` and `problems` in browser
localStorage so the council walk-through works without any DB at
all. To turn this into a real shared store, here's the swap.

## 1. Create the Supabase project

In the Supabase dashboard, create a new project called
`harpenden-ai` (Frankfurt region is closest to UK users). Copy
`SUPABASE_URL` and `SUPABASE_ANON_KEY` from Project Settings → API.

## 2. Schema

Run this in the SQL editor:

```sql
create extension if not exists "uuid-ossp";

create table public.signups (
  id           uuid primary key default uuid_generate_v4(),
  created_at   timestamp with time zone default now(),
  persona      text not null check (persona in ('leader','teen','volunteer','organisation')),
  name         text not null,
  email        text not null,
  postcode     text,
  source       text,
  consent      jsonb not null default '{}'::jsonb,
  tags         text[] not null default '{}',
  notes        text,
  data         jsonb not null default '{}'::jsonb  -- persona-specific fields go here
);

create index signups_persona_idx on public.signups (persona);
create index signups_created_at_idx on public.signups (created_at desc);

create table public.problems (
  id                 uuid primary key default uuid_generate_v4(),
  created_at         timestamp with time zone default now(),
  organisation       text not null,
  contact_name       text not null,
  contact_email      text not null,
  short_title        text not null,
  description        text not null,
  who_feels_it       text not null,
  already_tried      text,
  success_in_90_days text not null,
  is_public          boolean not null default true,
  status             text not null default 'open' check (status in ('open','in-progress','shipped')),
  tags               text[] not null default '{}',
  joined_by          text[] not null default '{}'
);

create index problems_public_idx on public.problems (is_public);
create index problems_status_idx on public.problems (status);

-- Row-level security: anyone can read public problems; writes via API only.
alter table public.signups  enable row level security;
alter table public.problems enable row level security;

create policy "anon can read public problems"
  on public.problems for select
  using (is_public = true);
```

Writes go through a Next.js API route using the **service role** key
(server-side only — never expose to the browser). Reads of public
problems use the anon key.

## 3. Wire the adapter

Create `site/lib/data-store.supabase.ts` implementing
`SubmissionStore` from `lib/submissions.ts`. Use the
`@supabase/supabase-js` client. Then in the page modules, switch the
import:

```ts
// before
import { localStore } from "@/lib/data-store";

// after
import { supabaseStore as localStore } from "@/lib/data-store.supabase";
```

(or detect via env var presence and pick at module-load).

## 4. API route for writes

Add `site/app/api/signups/route.ts` and `site/app/api/problems/route.ts`
as POST endpoints that take the form payload, attach the source
metadata (referer, utm) server-side, validate with zod, and insert
using the service-role client.

## 5. Downstream routing

Once data lives in Supabase, hook up an automation (n8n, Zapier,
Make) on the `signups` table that:

- For `persona = leader` → fire into AI Night School cohort waitlist.
- For `persona = teen` → fire into Sherpas AI signup flow.
- For `persona = volunteer` or `organisation` → fire into the
  Harpenden.AI volunteer / partner CRM list.

The `tags`, `consent`, and `data` columns are deliberately rich so a
single row carries everything an automation needs.

## 6. Audience sharing

The `consent.partnerSharing` flag determines whether a record can be
forwarded to AINS or Sherpas. Build the routing automation to
respect it strictly. A weekly export job can produce CSVs for the
relevant partner audiences.

## 7. GDPR housekeeping

- Privacy notice on every form (already drafted).
- A `/account` self-service page (or mailto) for residents to ask for
  data export or deletion.
- A scheduled task to anonymise stale leads (90 days no engagement).
