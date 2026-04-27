"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";
import { localStore } from "@/lib/data-store";
import type { Persona, Signup } from "@/lib/submissions";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

export type SignupFormProps = {
  persona: Persona;
  tone: "leader" | "teen" | "volunteer" | "organisation";
  source: string;
  defaultTags?: string[];
  fields?: Field[];
  cta?: string;
  successHeadline?: string;
  successBody?: string;
};

const toneClasses = {
  leader: {
    submit: "bg-lime text-midnight hover:bg-lime-deep",
    accent: "text-lime",
    panel: "bg-midnight text-chalk",
    label: "text-chalk/85",
    input: "bg-midnight-soft text-chalk placeholder:text-chalk/50 border-chalk/20",
  },
  teen: {
    submit: "bg-white text-midnight hover:bg-lime",
    accent: "text-lime",
    panel: "bg-midnight text-chalk",
    label: "text-chalk/85",
    input: "bg-midnight-soft text-chalk placeholder:text-chalk/50 border-chalk/20",
  },
  volunteer: {
    submit: "bg-midnight text-lime hover:bg-midnight-soft",
    accent: "text-midnight",
    panel: "bg-white text-midnight border border-midnight/15",
    label: "text-midnight/85",
    input: "bg-white text-midnight placeholder:text-midnight/45 border-midnight/20",
  },
  organisation: {
    submit: "bg-midnight text-lime hover:bg-midnight-soft",
    accent: "text-midnight",
    panel: "bg-white text-midnight border border-midnight/15",
    label: "text-midnight/85",
    input: "bg-white text-midnight placeholder:text-midnight/45 border-midnight/20",
  },
} as const;

export function SignupForm({
  persona,
  tone,
  source,
  defaultTags = [],
  fields = [],
  cta = "Sign me up",
  successHeadline = "You&rsquo;re on the list.",
  successBody = "We&rsquo;ll be in touch with the next step shortly.",
}: SignupFormProps) {
  const t = toneClasses[tone];
  const [submitted, setSubmitted] = useState<Signup | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      if (!name || !email) {
        setError("Please give us a name and an email.");
        setBusy(false);
        return;
      }
      const consentMarketing = data.get("consent_marketing") === "on";
      const consentPartner = data.get("consent_partner") === "on";

      const extras: Record<string, unknown> = {};
      for (const f of fields) {
        if (f.name === "name" || f.name === "email") continue;
        const v = data.get(f.name);
        if (v != null) extras[f.name] = v;
      }

      const result = await localStore.addSignup({
        persona,
        name,
        email,
        source,
        consent: {
          marketing: consentMarketing,
          partnerSharing: consentPartner,
        },
        tags: ["harpenden", "demo", ...defaultTags],
        ...extras,
      } as Parameters<typeof localStore.addSignup>[0]);

      setSubmitted(result);
      form.reset();
    } catch (err) {
      setError("Sorry — something went wrong. Try again, or email Hugo.");
    } finally {
      setBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className={clsx("rounded-3xl p-8 md:p-10", t.panel)}>
        <div className="flex items-center gap-3">
          <span
            className={clsx(
              "inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime text-midnight"
            )}
          >
            <Check className="h-5 w-5" />
          </span>
          <h3
            className="font-display text-2xl"
            dangerouslySetInnerHTML={{ __html: successHeadline }}
          />
        </div>
        <p
          className="mt-4 text-base opacity-90"
          dangerouslySetInnerHTML={{ __html: successBody }}
        />
        <p className="mt-6 text-sm opacity-70">
          Reference:&nbsp;<code>{submitted.id}</code>
        </p>
        <p className="mt-2 text-xs opacity-60">
          (This is the demo build — your record lives in this browser.
          A shared database will replace this when we move out of
          demo.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={clsx("rounded-3xl p-7 md:p-9", t.panel)}>
      <div className="space-y-5">
        <FormRow tone={tone}>
          <Label tone={tone} htmlFor={`${persona}-name`}>Your name</Label>
          <input
            id={`${persona}-name`}
            name="name"
            required
            placeholder="First and last name"
            className={clsx("form-input", t.input)}
          />
        </FormRow>
        <FormRow tone={tone}>
          <Label tone={tone} htmlFor={`${persona}-email`}>Email</Label>
          <input
            id={`${persona}-email`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={clsx("form-input", t.input)}
          />
        </FormRow>
        {fields.map((f) => (
          <FormRow key={f.name} tone={tone}>
            <Label tone={tone} htmlFor={`${persona}-${f.name}`}>{f.label}</Label>
            {f.type === "select" && f.options ? (
              <select
                id={`${persona}-${f.name}`}
                name={f.name}
                required={f.required}
                className={clsx("form-input", t.input)}
              >
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                id={`${persona}-${f.name}`}
                name={f.name}
                rows={3}
                placeholder={f.placeholder}
                required={f.required}
                className={clsx("form-input min-h-[6rem]", t.input)}
              />
            ) : (
              <input
                id={`${persona}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={clsx("form-input", t.input)}
              />
            )}
          </FormRow>
        ))}

        <fieldset className="space-y-3 pt-2">
          <legend className={clsx("text-sm font-semibold", t.label)}>
            Quick consent
          </legend>
          <Checkbox tone={tone} name="consent_marketing" defaultChecked>
            Keep me posted by email about Harpenden.AI cohorts and events.
          </Checkbox>
          <Checkbox tone={tone} name="consent_partner" defaultChecked>
            OK to share my details with AI Night School and Sherpas AI so
            I&rsquo;m matched to the right programme.
          </Checkbox>
        </fieldset>

        {error ? (
          <p className="rounded-xl bg-red-100 px-4 py-3 text-sm text-red-900">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={busy}
          className={clsx(
            "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition disabled:opacity-60",
            t.submit
          )}
        >
          {busy ? "Saving…" : cta}
        </button>
        <p className={clsx("text-xs opacity-70", t.label)}>
          We use your details to run the programme. You can ask us to
          forget you at any time. See <a href="/about" className="underline">about</a>.
        </p>
      </div>
    </form>
  );
}

function FormRow({ children, tone }: { children: React.ReactNode; tone: SignupFormProps["tone"] }) {
  return <div className={clsx("flex flex-col gap-2 form-row-" + tone)}>{children}</div>;
}

function Label({
  htmlFor,
  children,
  tone,
}: {
  htmlFor: string;
  children: React.ReactNode;
  tone: SignupFormProps["tone"];
}) {
  const t = toneClasses[tone];
  return (
    <label htmlFor={htmlFor} className={clsx("text-sm font-semibold", t.label)}>
      {children}
    </label>
  );
}

function Checkbox({
  name,
  defaultChecked,
  children,
  tone,
}: {
  name: string;
  defaultChecked?: boolean;
  children: React.ReactNode;
  tone: SignupFormProps["tone"];
}) {
  const t = toneClasses[tone];
  return (
    <label className={clsx("flex items-start gap-3 text-sm", t.label)}>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className="mt-1 h-4 w-4 accent-lime"
      />
      <span>{children}</span>
    </label>
  );
}
