import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { Reveal } from "@/components/reveal";
import { caseStudiesPreview } from "@/data/home";
import { caseStudies } from "@/lib/content";
import { site } from "@/lib/site";

const title = "Case Studies";
const description = `Case Studies from ${site.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { title: `${title} – ${site.name}`, description, url: "/case-studies" },
};

export default async function CaseStudiesPage() {
  const entries = await caseStudies.list();

  return (
    <div className="px-4 pb-32 pt-44">
      <h1 className="mb-14 text-center text-[38px] font-bold leading-[1.1] tracking-[-0.04em] text-heading sm:text-[48px]">
        {title}
      </h1>
      <div className="mx-auto max-w-[1040px] space-y-10">
        {entries.map((caseStudy) => (
          <Reveal key={caseStudy.slug}>
            <CaseStudyCard
              href={`/cs/${caseStudy.slug}`}
              title={caseStudy.title}
              summary={caseStudy.summary}
              linkLabel={caseStudiesPreview.cardLink}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
