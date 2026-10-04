import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes on outbound, deliverability, content and B2B pipeline from the Northbound team.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const entries = await posts.list();

  return (
    <Container className="py-20">
      <header className="mb-12 max-w-[754px]">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Notes on building pipeline</h1>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition hover:border-accent/50"
            >
              <time dateTime={post.date.toISOString()} className="text-sm text-muted">
                {formatDate(post.date)}
              </time>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-muted">{post.summary}</p>
              <span className="mt-auto pt-6 text-sm font-semibold text-accent">
                Read post <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
