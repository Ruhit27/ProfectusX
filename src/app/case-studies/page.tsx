import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How Northbound's acquisition systems turned outreach and content into qualified pipeline (sample case studies).",
  alternates: { canonical: "/case-studies" },
};

export default async function CaseStudiesPage() {
  const entries = await caseStudies.list();

  return (
    <Container className="py-20">
      <header className="mb-12 max-w-[754px]">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Case Studies</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Systems we&apos;ve built, and what they produced</h1>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((cs, i) => (
          <Reveal key={cs.slug} delay={(i % 3) * 0.05}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6">
              <p className="text-sm text-muted">{cs.industry}</p>
              <h2 className="mt-2 text-xl font-semibold">{cs.title}</h2>
              <p className="mt-3 text-muted">{cs.summary}</p>
              <div className="mt-6 flex gap-6 border-t border-border pt-5">
                {cs.metrics.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-semibold text-accent">{m.value}</p>
                    <p className="text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
              <Link href={`/case-studies/${cs.slug}`} className="mt-6 text-sm font-semibold text-accent hover:underline">
                View more <span aria-hidden="true">→</span>
                <span className="sr-only">: {cs.title}</span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
