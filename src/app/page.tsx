import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { ApplyCta } from "@/components/apply-cta";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs, process, results, services, testimonials, trustedBy, type Testimonial } from "@/data/home";
import { caseStudies } from "@/lib/content";

export default async function HomePage() {
  const featured = (await caseStudies.list()).slice(0, 3);
  const half = Math.ceil(testimonials.length / 2);

  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[480px] max-w-[881px] rounded-full bg-accent/15 blur-3xl"
        />
        <Container className="relative py-24 text-center sm:py-32">
          <Reveal>
            <p className="mx-auto mb-6 inline-flex rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              Outbound · LinkedIn · Content
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-[881px] text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.05]">
              Stop prospecting. Start selling.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-[754px] text-lg text-muted">
              We plan, write and run your outbound, LinkedIn and founder content as one engine, and hand your
              sales team conversations with buyers who are ready to talk.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-3">
            <ApplyCta />
            <ButtonLink href="/case-studies" variant="secondary">
              See case studies
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section id="logos" aria-label="Trusted by" className="border-y border-border py-10">
        <p className="mb-6 text-center text-sm text-muted">Trusted by growing B2B teams (sample clients)</p>
        <Marquee duration={35}>
          {trustedBy.map((name) => (
            <span key={name} className="px-8 text-xl font-semibold tracking-tight text-muted/70">
              {name}
            </span>
          ))}
        </Marquee>
      </section>

      <section id="results" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Results"
            title="Pipeline you can measure"
            intro="Sample figures for a fictional agency, shown to illustrate the layout."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, i) => (
              <Reveal key={result.label} delay={i * 0.05} className="rounded-3xl border border-border bg-surface p-6">
                <p className="text-4xl font-semibold text-accent">{result.value}</p>
                <p className="mt-2 text-muted">{result.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featured.map((caseStudy, i) => (
              <Reveal key={caseStudy.slug} delay={i * 0.05}>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition hover:border-accent/50"
                >
                  <p className="text-sm text-muted">{caseStudy.industry}</p>
                  <h3 className="mt-2 text-lg font-semibold">{caseStudy.title}</h3>
                  <p className="mt-auto pt-6 text-3xl font-semibold text-accent">{caseStudy.metrics[0].value}</p>
                  <p className="text-sm text-muted">{caseStudy.metrics[0].label}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="testimonials" className="py-24">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="What clients say" />
        </Container>
        <div className="space-y-4">
          <Marquee duration={60}>
            {testimonials.slice(0, half).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          <Marquee duration={60} reverse>
            {testimonials.slice(half).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </section>

      <section id="services" className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Every channel, pulling in the same direction"
            intro="We run the whole top of funnel so each channel feeds the others."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.05} className="rounded-3xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted">{service.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="py-24">
        <Container>
          <SectionHeading eyebrow="Process" title="From kickoff to booked calls in four steps" />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05} className="rounded-3xl border border-border bg-surface p-6">
                <li className="list-none">
                  <span className="font-mono text-sm text-accent">{step.step}</span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section id="faq" className="py-24">
        <Container className="max-w-[800px]">
          <SectionHeading eyebrow="FAQ" title="Questions we hear often" />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-surface p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.question}
                  <span aria-hidden="true" className="text-accent transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="rounded-3xl border border-border bg-gradient-to-br from-surface-raised to-surface p-10 text-center sm:p-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-[38px]">Ready to hand off prospecting?</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-muted">
              Tell us about your offer and we&apos;ll show you what a Northbound system could look like for your team.
            </p>
            <div className="mt-8">
              <ApplyCta />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="w-[340px] shrink-0 rounded-3xl border border-border bg-surface p-6">
      <blockquote className="text-foreground/90">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar name={name} />
        <span>
          <span className="block text-sm font-semibold">{name}</span>
          <span className="block text-sm text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
