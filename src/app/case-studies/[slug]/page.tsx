import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplyCta } from "@/components/apply-cta";
import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import { caseStudies } from "@/lib/content";

export async function generateStaticParams() {
  return (await caseStudies.list()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const cs = await caseStudies.get((await params).slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: { type: "article", title: cs.title, description: cs.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const cs = await caseStudies.get((await params).slug);
  if (!cs) notFound();

  return (
    <article className="py-20">
      <Container className="max-w-[800px]">
        <p className="text-sm text-muted">
          {cs.client} · {cs.industry}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cs.title}</h1>
        <p className="mt-5 text-lg text-muted">{cs.summary}</p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {cs.metrics.map((m) => (
            <div key={m.label} className="rounded-3xl border border-border bg-surface p-5">
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="mt-1 text-3xl font-semibold text-accent">{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <Prose source={cs.body} />
        </div>
        <div className="mt-16 rounded-3xl border border-border bg-surface p-8 text-center">
          <h2 className="text-2xl font-semibold">Want results like these?</h2>
          <div className="mt-5">
            <ApplyCta />
          </div>
        </div>
      </Container>
    </article>
  );
}
