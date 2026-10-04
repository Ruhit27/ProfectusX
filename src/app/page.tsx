import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { Icon } from "@/components/icon";
import { Marquee } from "@/components/marquee";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import {
  caseStudiesPreview,
  closingCta,
  faq,
  hero,
  process,
  results,
  testimonials,
  trustedBy,
  why,
  type Testimonial,
} from "@/data/home";
import { caseStudies } from "@/lib/content";

export default async function HomePage() {
  const featured = (await caseStudies.list()).slice(0, 3);
  const columns = [0, 1, 2].map((c) => testimonials.items.filter((_, i) => i % 3 === c));

  return (
    <>
      <section id="hero" className="relative overflow-hidden pb-20 pt-44">
        <div aria-hidden="true" className="aurora absolute -inset-20" />
        <div aria-hidden="true" className="grid-glow absolute left-1/2 top-10 h-[420px] w-[700px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-[1200px] px-4 text-center">
          <Reveal>
            <h1 className="mx-auto max-w-[711px] text-[32px] font-medium leading-[1.1] tracking-[-0.04em] text-heading sm:text-[40px]">
              {hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-[560px] text-xl leading-[1.4] tracking-[-0.02em] text-muted">
              {hero.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <ButtonLink href="/quote">{hero.cta}</ButtonLink>
          </Reveal>
        </div>
        <div id="logos" className="relative mt-14">
          <p className="mb-8 text-center text-lg text-muted">{trustedBy.label}</p>
          <Marquee duration={30} className="mx-auto max-w-[1200px]">
            {trustedBy.logos.map((logo) =>
              logo.src ? (
                <Image key={logo.name} src={logo.src} alt={logo.name} width={140} height={40} className="mx-8 h-10 w-auto" />
              ) : (
                <span key={logo.name} className="mx-8 font-display text-3xl font-semibold text-white">
                  {logo.name}
                </span>
              ),
            )}
          </Marquee>
        </div>
      </section>

      <section id="results" className="py-20">
        <SectionTitle>{results.heading}</SectionTitle>
        <Marquee duration={45} className="mx-auto max-w-[1200px]">
          {results.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={440}
              height={300}
              unoptimized
              className="h-[300px] w-[440px] rounded-3xl object-cover"
            />
          ))}
        </Marquee>
      </section>

      <section id="testimonials" className="py-20">
        <SectionTitle>{testimonials.heading}</SectionTitle>
        <div className="mx-auto grid h-[640px] max-w-[1040px] gap-4 px-4 md:grid-cols-3">
          {columns.map((column, c) => (
            <Marquee key={c} vertical duration={35 + c * 8} reverse={c === 1} className={c > 0 ? "hidden md:block" : ""}>
              {column.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </Marquee>
          ))}
        </div>
      </section>

      <section id="process" className="px-4 py-20">
        <SectionTitle>{process.heading}</SectionTitle>
        <ProcessTimeline steps={process.steps} />
      </section>

      <section id="why" className="px-4 py-28">
        <SectionTitle>{why.heading}</SectionTitle>
        <div className="mx-auto grid max-w-[1000px] gap-12 md:grid-cols-3">
          {why.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="flex flex-col items-center text-center">
              <Icon name={feature.icon} />
              <h3 className="mt-6 text-[30px] font-medium leading-[1.1] tracking-[-0.04em] text-text">{feature.title}</h3>
              <p className="mt-4 max-w-[270px] text-lg leading-[1.4] tracking-[-0.02em] text-muted">{feature.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="case-studies" className="px-4 py-20">
        <SectionTitle>{caseStudiesPreview.heading}</SectionTitle>
        <div className="mx-auto max-w-[1040px] space-y-10">
          {featured.map((caseStudy) => (
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
        <div className="mt-10 text-center">
          <ButtonLink href="/case-studies" variant="secondary">
            {caseStudiesPreview.allLink}
          </ButtonLink>
        </div>
      </section>

      <section id="faq" className="px-4 py-20">
        <SectionTitle>{faq.heading}</SectionTitle>
        <div className="mx-auto max-w-[800px] space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-line bg-surface px-5 py-[18px] backdrop-blur-[10px]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-heading">
                {item.question}
                <span aria-hidden="true" className="text-2xl leading-none transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-[1.4] text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-36 pt-16">
        <Reveal className="relative mx-auto max-w-[1072px] overflow-hidden rounded-2xl p-10 text-center sm:p-20">
          <div aria-hidden="true" className="aurora absolute inset-0" />
          <div aria-hidden="true" className="grid-glow absolute left-1/2 top-0 h-[260px] w-[600px] -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(243,236,254)] sm:text-[42px]">
              {closingCta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-lg leading-[1.4] text-[rgb(200,196,210)]">{closingCta.body}</p>
            <div className="mt-10">
              <ButtonLink href="/quote">{closingCta.cta}</ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="rounded-3xl border border-line bg-surface p-6">
      <blockquote className="text-lg leading-[1.4] tracking-[-0.02em] text-muted">{quote}</blockquote>
      <figcaption className="mt-6">
        <span className="block font-medium text-heading">{name}</span>
        <span className="block text-sm text-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
