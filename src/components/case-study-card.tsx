import Link from "next/link";

export function CaseStudyCard({
  href,
  title,
  summary,
  linkLabel,
}: {
  href: string;
  title: string;
  summary: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-3xl border border-line bg-background p-8 sm:p-16">
      <h3 className="text-[28px] leading-[1.15] tracking-[-0.02em] text-heading sm:text-[36px]">{title}</h3>
      <p className="mt-6 text-lg leading-[1.5] text-muted">{summary}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-white hover:underline">
        {linkLabel} <span aria-hidden="true">→</span>
        <span className="sr-only">: {title}</span>
      </Link>
    </article>
  );
}
