import type { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { site } from "@/lib/site";

const title = "Get In Touch";
const description = `Start an Application with ${site.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quote" },
  openGraph: { title: `${title} – ${site.name}`, description, url: "/quote" },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col items-center px-4 pb-32 pt-40">
      <ApplicationForm />
      <h2 className="mt-14 text-2xl font-medium tracking-[-0.03em] text-heading">Or email us directly</h2>
      <a
        href={`mailto:${site.email}`}
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-button px-3 py-2 text-sm text-heading hover:bg-[rgb(44,46,48)]"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        {site.email}
      </a>
    </div>
  );
}
