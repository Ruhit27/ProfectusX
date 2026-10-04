import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

const title = "Apply";
const description = `Start an Application with ${site.name}. Tell us who you are and we'll reply within two business days.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/apply" },
  openGraph: { title: `${title} – ${site.name}`, description, url: "/apply" },
};

export default function ApplyPage() {
  return (
    <Container className="grid gap-12 py-20 md:grid-cols-2 md:items-start">
      <div className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Apply</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s see if we&apos;re a fit</h1>
        <p className="text-lg text-muted">
          We take on a small number of clients each quarter so every account gets senior attention.
          Send your details and we&apos;ll set up a short call to talk through your pipeline.
        </p>
        <p className="text-sm text-muted">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            {site.email}
          </a>
        </p>
      </div>
      <ApplicationForm />
    </Container>
  );
}
