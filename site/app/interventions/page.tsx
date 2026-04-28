import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { InterventionCard } from "@/components/InterventionCard";
import { interventions } from "@/lib/interventions";

export const metadata: Metadata = {
  title: "Interventions directory",
  description:
    "A shelf of programmes, diagnostics, and workshops the town can draw on - already designed, ready to run.",
};

export default function InterventionsPage() {
  const core = interventions.filter((i) =>
    ["AI Night School", "Sherpas AI", "AI Optimist Strategy"].includes(i.name)
  );
  const accelerators = interventions.filter((i) =>
    i.name.startsWith("AI Transformation Accelerator")
  );
  const tools = interventions.filter((i) =>
    ["Imaginarium", "Problemarium", "Chooser"].includes(i.name)
  );
  const diagnostics = interventions.filter((i) =>
    i.kicker.includes("Diagnostic")
  );

  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Directory</Eyebrow>
          <h1 className="display-lg mt-3 text-balance">
            A full shelf of ways to help - ready to run from day one.
          </h1>
          <p className="prose-body mt-6">
            None of this needs to be invented. Every card on this page
            is already designed and, in many cases, already running.
            The Harpenden vision is about putting the right door in
            front of the right person at the right moment.
          </p>
        </div>
      </Section>

      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page space-y-16">
          <DirectoryGroup
            title="Flagship programmes"
            intro="The three programmes that form the backbone of Harpenden’s AI-fluent year."
            items={core}
          />
          <DirectoryGroup
            title="Transformation Accelerators"
            intro="For organisations - including a council-shaped version for Harpenden itself."
            items={accelerators}
          />
          <DirectoryGroup
            title="Tools"
            intro="Standalone tools that any resident or group can use."
            items={tools}
          />
          <DirectoryGroup
            title="Diagnostics"
            intro="Short, private, specific - assessments that turn an abstract worry into a concrete plan."
            items={diagnostics}
          />
        </div>
      </Section>
    </>
  );
}

function DirectoryGroup({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: typeof interventions;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="display-sm">{title}</h2>
          <p className="mt-2 text-ink/75">{intro}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <InterventionCard key={it.name} {...it} />
        ))}
      </div>
    </div>
  );
}
