"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { localStore } from "@/lib/data-store";
import type { Problem } from "@/lib/submissions";

export function ProblemForm() {
  const [submitted, setSubmitted] = useState<Problem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const data = new FormData(e.currentTarget);
      const get = (k: string) => String(data.get(k) ?? "").trim();

      const required = [
        "organisation",
        "contactName",
        "contactEmail",
        "shortTitle",
        "description",
        "whoFeelsIt",
        "successIn90Days",
      ];
      const missing = required.find((k) => !get(k));
      if (missing) {
        setError("Please fill in every required field.");
        setBusy(false);
        return;
      }

      const next = await localStore.addProblem({
        organisation: get("organisation"),
        contactName: get("contactName"),
        contactEmail: get("contactEmail"),
        shortTitle: get("shortTitle"),
        description: get("description"),
        whoFeelsIt: get("whoFeelsIt"),
        alreadyTried: get("alreadyTried"),
        successIn90Days: get("successIn90Days"),
        isPublic: data.get("isPublic") !== "no",
        tags: ["organisation-submission", "harpenden", "demo"],
      });
      setSubmitted(next);
    } catch {
      setError("Something went wrong. Try again, or email Hugo.");
    } finally {
      setBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-midnight/15 bg-white p-8 md:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime text-midnight">
            <Check className="h-5 w-5" />
          </span>
          <h3 className="font-display text-2xl text-midnight">
            Thank you. Your problem is now a community project.
          </h3>
        </div>
        <p className="mt-4 text-base text-midnight/80">
          It’s live on the community projects page. Other
          residents can join the working group from there. We’ll
          come back to you within a week with a coach, a likely
          working-group lead, and a date for the kick-off.
        </p>
        <p className="mt-4 text-sm text-midnight/65">
          Reference:&nbsp;<code>{submitted.id}</code>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/community-projects#${submitted.id}`}
            className="btn-primary"
          >
            See your project live
          </Link>
          <Link href="/community-projects" className="btn-ghost">
            Browse all community projects
          </Link>
        </div>
        <p className="mt-6 text-xs text-midnight/55">
          (Demo build - your project lives in this browser. A shared
          database will replace this when we move out of demo.)
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-midnight/15 bg-white p-7 md:p-9"
    >
      <div className="space-y-5">
        <Field label="Organisation" htmlFor="organisation" required>
          <input
            id="organisation"
            name="organisation"
            required
            placeholder="e.g. Kings Pantry, Harpenden Trust, Roundwood Park School"
            className="form-input border-midnight/20"
          />
        </Field>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Your name" htmlFor="contactName" required>
            <input
              id="contactName"
              name="contactName"
              required
              className="form-input border-midnight/20"
            />
          </Field>
          <Field label="Your email" htmlFor="contactEmail" required>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              required
              className="form-input border-midnight/20"
            />
          </Field>
        </div>
        <Field label="One-line title for the problem" htmlFor="shortTitle" required>
          <input
            id="shortTitle"
            name="shortTitle"
            required
            maxLength={120}
            placeholder="e.g. Match donated food to family need without anyone going hungry"
            className="form-input border-midnight/20"
          />
        </Field>
        <Field
          label="Describe the problem (2–4 sentences)"
          htmlFor="description"
          required
        >
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            placeholder="Plain English. Imagine you’re telling a neighbour over a coffee."
            className="form-input min-h-[8rem] border-midnight/20"
          />
        </Field>
        <Field
          label="Who feels this problem most?"
          htmlFor="whoFeelsIt"
          required
        >
          <textarea
            id="whoFeelsIt"
            name="whoFeelsIt"
            required
            rows={3}
            placeholder="The volunteers? The families? The trustees? Be specific - names and roles, not systems."
            className="form-input min-h-[6rem] border-midnight/20"
          />
        </Field>
        <Field label="What have you already tried? (optional)" htmlFor="alreadyTried">
          <textarea
            id="alreadyTried"
            name="alreadyTried"
            rows={3}
            placeholder="Spreadsheets, WhatsApp groups, leaflets - anything that helps us avoid repeating the work."
            className="form-input min-h-[5rem] border-midnight/20"
          />
        </Field>
        <Field
          label="What would success look like in 90 days?"
          htmlFor="successIn90Days"
          required
        >
          <textarea
            id="successIn90Days"
            name="successIn90Days"
            required
            rows={3}
            placeholder="Concrete and specific. Numbers if you have them. People’s lives if you don’t."
            className="form-input min-h-[5rem] border-midnight/20"
          />
        </Field>

        <fieldset className="rounded-2xl border border-midnight/10 bg-chalk p-4">
          <legend className="px-2 text-sm font-semibold text-midnight">
            Visibility
          </legend>
          <label className="flex items-start gap-3 text-sm text-midnight/85">
            <input
              type="radio"
              name="isPublic"
              value="yes"
              defaultChecked
              className="mt-1 h-4 w-4 accent-lime"
            />
            <span>
              <strong>List this publicly</strong> on the Community Projects page so other residents can join the working group. (Recommended.)
            </span>
          </label>
          <label className="mt-3 flex items-start gap-3 text-sm text-midnight/85">
            <input
              type="radio"
              name="isPublic"
              value="no"
              className="mt-1 h-4 w-4 accent-lime"
            />
            <span>
              Keep it private - Hugo’s team only.
            </span>
          </label>
        </fieldset>

        {error ? (
          <p className="rounded-xl bg-red-100 px-4 py-3 text-sm text-red-900">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy}
          className="inline-flex w-full items-center justify-center rounded-full bg-midnight px-5 py-3 text-base font-semibold text-lime transition hover:bg-midnight-soft disabled:opacity-60"
        >
          {busy ? "Submitting…" : "Submit our problem"}
        </button>
        <p className="text-xs text-midnight/55">
          By submitting, you confirm you have authority to share this
          problem on behalf of the organisation. We’ll never
          publish your contact details - those are for our team only.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold text-midnight"
      >
        {label}
        {required ? <span className="ml-1 text-sherpas-pink">*</span> : null}
      </label>
      {children}
    </div>
  );
}
