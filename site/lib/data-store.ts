"use client";

// Pluggable submission store.
//
// Demo build: localStorage adapter (zero infra). All data persists in
// the visitor's browser. Good enough for the council walk-through.
//
// Production swap: drop in a Supabase / KV adapter behind the same
// SubmissionStore interface and wire up an API route. Schema and
// guidance live in /SUPABASE.md.

import type {
  Problem,
  Signup,
  SubmissionStore,
} from "./submissions";

const SIGNUPS_KEY = "harpenden-ai:signups:v1";
const PROBLEMS_KEY = "harpenden-ai:problems:v1";

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  return safeParse<T[]>(window.localStorage.getItem(key), []);
}

function write<T>(key: string, value: T[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(`harpenden-ai:store-changed:${key}`));
}

export const localStore: SubmissionStore = {
  async listSignups() {
    return read<Signup>(SIGNUPS_KEY);
  },
  async addSignup(input) {
    const all = read<Signup>(SIGNUPS_KEY);
    const next: Signup = {
      ...input,
      id: input.id ?? uid("sig"),
      createdAt: input.createdAt ?? new Date().toISOString(),
    } as Signup;
    write<Signup>(SIGNUPS_KEY, [next, ...all]);
    return next;
  },
  async listProblems({ onlyPublic } = {}) {
    const all = read<Problem>(PROBLEMS_KEY);
    return onlyPublic ? all.filter((p) => p.isPublic) : all;
  },
  async getProblem(id) {
    const all = read<Problem>(PROBLEMS_KEY);
    return all.find((p) => p.id === id) ?? null;
  },
  async addProblem(input) {
    const all = read<Problem>(PROBLEMS_KEY);
    const next: Problem = {
      ...input,
      id: input.id ?? uid("prb"),
      createdAt: input.createdAt ?? new Date().toISOString(),
      status: input.status ?? "open",
      joinedBy: [],
    };
    write<Problem>(PROBLEMS_KEY, [next, ...all]);
    return next;
  },
  async joinProblem(problemId, email) {
    const all = read<Problem>(PROBLEMS_KEY);
    const idx = all.findIndex((p) => p.id === problemId);
    if (idx === -1) return null;
    const existing = all[idx];
    if (existing.joinedBy.includes(email)) return existing;
    const updated: Problem = {
      ...existing,
      joinedBy: [...existing.joinedBy, email],
    };
    const nextAll = [...all];
    nextAll[idx] = updated;
    write<Problem>(PROBLEMS_KEY, nextAll);
    return updated;
  },
};

// Seed a small set of demo problems on first load so /community-projects
// is never empty when the council walks through it.
const SEED_FLAG = "harpenden-ai:seeded:v1";

const seedProblems: Problem[] = [
  {
    id: "prb_seed_kingspantry",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    organisation: "Kings Pantry",
    contactName: "Kings Pantry team",
    contactEmail: "hello@kingspantry.example",
    shortTitle: "Match donated food to family need without anyone going hungry",
    description:
      "We get unpredictable food donations from supermarkets and growers. Matching the right food to the right family at the right time is currently a manual scramble. Could we use AI to forecast demand, suggest fair allocations, and reduce waste?",
    whoFeelsIt:
      "Volunteers at the front desk, the families who come on the wrong day, and our trustees watching food go to waste.",
    alreadyTried:
      "A spreadsheet. A WhatsApp group. A volunteer rota. They each help, but none of them solve the matching problem.",
    successIn90Days:
      "A simple AI-assisted weekly plan that reduces wasted donations by 50% and lets families know two days in advance what's coming.",
    isPublic: true,
    status: "open",
    tags: ["food", "matching", "volunteer-led", "demo-seed"],
    joinedBy: [],
  },
  {
    id: "prb_seed_harpendentrust",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    organisation: "Harpenden Trust",
    contactName: "Trust office",
    contactEmail: "office@harpendentrust.example",
    shortTitle: "Help residents find the right grant or service quickly",
    description:
      "We field hundreds of resident enquiries a year about grants, befriending, transport and more. A resident-facing AI helper that knew our services inside out could halve our triage time and reach the people who don't pick up the phone.",
    whoFeelsIt:
      "Older residents who don't know we exist. The two staff who triage every enquiry. Trustees who suspect we're missing many we could help.",
    alreadyTried:
      "Leaflets, a website FAQ, the Herts Ad column.",
    successIn90Days:
      "A confident, friendly assistant residents can talk to in plain English that signposts the right Trust service in under two minutes.",
    isPublic: true,
    status: "open",
    tags: ["older-residents", "signposting", "warm-front-door", "demo-seed"],
    joinedBy: [],
  },
];

export function ensureSeedData() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEED_FLAG)) return;
  const existing = read<Problem>(PROBLEMS_KEY);
  if (existing.length === 0) write<Problem>(PROBLEMS_KEY, seedProblems);
  window.localStorage.setItem(SEED_FLAG, "1");
}
