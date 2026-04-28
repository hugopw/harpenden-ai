import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { ProblemForm } from "@/components/ProblemForm";

export const metadata: Metadata = {
  title: "Submit a problem",
  description:
    "Tell us a real Harpenden problem your organisation faces. We’ll match it to a working group and let other residents join in solving it.",
};

export default function SubmitProblemPage() {
  return (
    <>
      <Section tone="chalk">
        <div className="container-page max-w-4xl">
          <Eyebrow>Submit a community problem</Eyebrow>
          <h1 className="display-lg mt-3 text-balance text-midnight">
            Two minutes. Your problem becomes a Harpenden community
            project.
          </h1>
          <p className="prose-body mt-6">
            This form is for any Harpenden organisation - charity,
            school, club, faith group, social enterprise, council
            committee. Once you submit, your problem appears on the{" "}
            <Link href="/community-projects" className="underline underline-offset-4">
              Community Projects page
            </Link>{" "}
            so other residents can join the working group. We’ll
            come back to you within a week with next steps.
          </p>
          <p className="mt-4 text-sm text-midnight/55">
            Demo note: in this build, your submission saves locally in
            your browser. We’ll move to a shared database before
            launch.
          </p>
        </div>
      </Section>

      <Section tone="white" className="pt-0 md:pt-0">
        <div className="container-page max-w-3xl">
          <ProblemForm />
        </div>
      </Section>
    </>
  );
}
