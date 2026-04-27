"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users } from "lucide-react";
import { localStore, ensureSeedData } from "@/lib/data-store";
import type { Problem } from "@/lib/submissions";

export function CommunityProjectsTeaser() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    ensureSeedData();
    void localStore.listProblems({ onlyPublic: true }).then(setProblems);
    const handler = () => {
      void localStore
        .listProblems({ onlyPublic: true })
        .then(setProblems);
    };
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

  const featured = problems.slice(0, 3);

  return (
    <div className="space-y-3">
      {featured.length === 0 ? (
        <div className="rounded-3xl border border-midnight/15 bg-white p-6 text-midnight/70">
          Loading recent community projects&hellip;
        </div>
      ) : (
        featured.map((p) => (
          <article
            key={p.id}
            className="rounded-3xl border border-midnight/15 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-glow md:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="pill-lime">{p.organisation}</span>
              <span className="text-xs uppercase tracking-wider text-midnight/55">
                {p.status}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl leading-snug">
              {p.shortTitle}
            </h3>
            <p className="mt-2 text-sm text-midnight/75 line-clamp-3">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1 text-xs text-midnight/60">
                <Users className="h-3.5 w-3.5" />
                {p.joinedBy.length} resident
                {p.joinedBy.length === 1 ? "" : "s"} joined
              </span>
              <Link
                href={`/community-projects#${p.id}`}
                className="text-sm font-semibold text-midnight underline underline-offset-4"
              >
                See project
              </Link>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
