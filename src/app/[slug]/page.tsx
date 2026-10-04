import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AuthorLine } from "@/components/author-line";
import { PageTitle } from "@/components/page-title";
import { Prose } from "@/components/prose";
import { posts } from "@/lib/content";

// Posts live at the top level to keep the live site's URLs (docs/adr/0001-keep-live-url-structure.md).
export async function generateStaticParams() {
  return (await posts.list()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const post = await posts.get((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date.toISOString(),
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/[slug]">) {
  const post = await posts.get((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[740px] px-4 pb-32 pt-44">
      <PageTitle>{post.title}</PageTitle>
      <div className="mt-8">
        <AuthorLine author={post.author} avatar={post.authorAvatar} date={post.date} />
      </div>
      {post.cover && (
        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
          <Image src={post.cover} alt="" width={740} height={416} unoptimized className="w-full object-cover" />
        </div>
      )}
      <div className="mt-8">
        <Prose source={post.body} />
      </div>
    </article>
  );
}
