"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, Check, Users } from "lucide-react";
import { localStore, ensureSeedData } from "@/lib/data-store";
import type { Problem } from "@/lib/submissions";

export function CommunityProjectsList() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [joinEmail, setJoinEmail] = useState<Record<string, string>>({});
  const [joined, setJoined] = useState<Record<string, true>>({});

  const refresh = async () => {
    const list = await localStore.listProblems({ onlyPublic: true });
    setProblems(list);
  };

  useEffect(() => {
    ensureSeedData();
    void refresh();
    const handler = () => void refresh();
    window.addEventListener(
      "harpenden-ai:store-changed:harpenden-ai:problems:v1",
      handler
    );
    return () =>
      window.removeEventListener(
        "harpenden-ai:store-changed:harpenden-ai:problems:v1",
        handler
      );
  }, []);

  const join = async (problemId: string) => {
    const email = (joinEmail[problemId] || "").trim();
    if (!email) return;
    await localStore.joinProblem(problemId, email);
    setJoined((j) => ({ ...j, [problemId]: true }));
    setJoinEmail((m) => ({ ...m, [problemId]: "" }));
    void refresh();
  };

  return (
    <div className="space-y-6">
      {problems.length === 0 ? (
        <div className="rounded-3xl border border-midnight/15 bg-white p-8 text-midnight/70">
          No public projects yet — be the first by{" "}
          <Link href="/submit-a-problem" className="underline">
            submitting a problem
          </Link>
          .
        </div>
      ) : (
        problems.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="rounded-3xl border border-midnight/15 bg-white p-7 md:p-9"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="pill-lime">{p.organisation}</span>
              <span
                className={clsx(
                  "rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.18em]",
                  p.status === "open"
                    ? "border-meadow/40 bg-meadow-soft text-meadow"
                    : p.status === "in-progress"
                      ? "border-sun/40 bg-sun-glow text-ink"
                      : "border-midnight/30 bg-midnight text-lime"
                )}
              >
                {p.status}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl leading-snug text-midnight md:text-3xl">
              {p.shortTitle}
            </h3>
            <p className="mt-4 text-base text-midnight/85">{p.description}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <Detail label="Who feels it most" body={p.whoFeelsIt} />
              {p.alreadyTried ? (
                <Detail label="Already tried" body={p.alreadyTried} />
              ) : null}
              <Detail label="Success in 90 days" body={p.successIn90Days} />
            </div>
            {p.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags
                  .filter((t) => !t.startsWith("demo"))
                  .map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-midnight/5 px-2.5 py-1 text-xs text-midnight/70"
                    >
                      #{t}
                    </span>
                  ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-midnight/10 bg-chalk p-4">
              <div className="flex items-center gap-2 text-sm text-midnight/75">
                <Users className="h-4 w-4" />
                <strong>{p.joinedBy.length}</strong>
                &nbsp;resident{p.joinedBy.length === 1 ? "" : "s"} have said they&rsquo;ll join
              </div>
              {joined[p.id] ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-meadow-soft px-3 py-1.5 text-sm font-semibold text-meadow">
                  <Check className="h-4 w-4" /> You&rsquo;re in
                </span>
              ) : (
                <form
                  className="flex flex-1 items-center gap-2 md:flex-none"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void join(p.id);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="your@email"
                    value={joinEmail[p.id] || ""}
                    onChange={(e) =>
                      setJoinEmail((m) => ({ ...m, [p.id]: e.target.value }))
                    }
                    aria-label={`Email to join ${p.shortTitle}`}
                    className="form-input border-midnight/20 md:w-64"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-lime hover:bg-midnight-soft"
                  >
                    Join the group <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </article>
        ))
      )}
    </div>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/60">
        {label}
      </p>
      <p className="mt-2 text-sm text-midnight/85">{body}</p>
    </div>
  );
}
