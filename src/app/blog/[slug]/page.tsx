import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export async function generateStaticParams() {
  return (await posts.list()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = await posts.get((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date.toISOString() },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = await posts.get((await params).slug);
  if (!post) notFound();

  return (
    <article className="py-20">
      <Container className="max-w-[754px]">
        <Link href="/blog" className="text-sm text-muted hover:text-foreground">
          <span aria-hidden="true">←</span> All posts
        </Link>
        <time dateTime={post.date.toISOString()} className="mt-8 block text-sm text-muted">
          {formatDate(post.date)}
        </time>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-muted">{post.summary}</p>
        <div className="mt-10">
          <Prose source={post.body} />
        </div>
      </Container>
    </article>
  );
}
