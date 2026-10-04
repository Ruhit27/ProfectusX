import { MDXRemote } from "next-mdx-remote/rsc";

export function Prose({ source }: { source: string }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-foreground/85 [&_a]:text-accent [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:text-base [&_blockquote]:text-muted [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      <MDXRemote source={source} />
    </div>
  );
}
