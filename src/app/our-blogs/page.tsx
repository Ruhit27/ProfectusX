import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AuthorLine } from "@/components/author-line";
import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/content";
import { site } from "@/lib/site";

const title = "Our Blog";
const description = `Posts from the ${site.name} team.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/our-blogs" },
  openGraph: { title: `${title} – ${site.name}`, description, url: "/our-blogs" },
};

export default async function PostsPage() {
  const entries = await posts.list();

  return (
    <div className="mx-auto max-w-[740px] space-y-20 px-4 pb-32 pt-36">
      {entries.map((post) => (
        <Reveal key={post.slug}>
          <Link href={`/${post.slug}`} className="group block">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface">
              {post.cover && (
                <Image
                  src={post.cover}
                  alt=""
                  width={740}
                  height={416}
                  unoptimized
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <h2 className="mt-6 text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-heading">{post.title}</h2>
          </Link>
          <div className="mt-4">
            <AuthorLine author={post.author} avatar={post.authorAvatar} date={post.date} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
