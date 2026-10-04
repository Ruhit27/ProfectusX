import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/page-title";
import { Prose } from "@/components/prose";
import { caseStudies } from "@/lib/content";

export async function generateStaticParams() {
  return (await caseStudies.list()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/cs/[slug]">): Promise<Metadata> {
  const caseStudy = await caseStudies.get((await params).slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: `/cs/${caseStudy.slug}` },
    openGraph: { type: "article", title: caseStudy.title, description: caseStudy.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/cs/[slug]">) {
  const caseStudy = await caseStudies.get((await params).slug);
  if (!caseStudy) notFound();

  return (
    <article className="mx-auto max-w-[740px] px-4 pb-32 pt-44">
      <PageTitle>{caseStudy.title}</PageTitle>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {caseStudy.metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-line bg-surface p-5">
            <dt className="text-sm text-muted">{metric.label}</dt>
            <dd className="mt-1 text-[30px] font-medium tracking-[-0.04em] text-heading">{metric.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <Prose source={caseStudy.body} />
      </div>
    </article>
  );
}
