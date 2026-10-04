import { MDXRemote } from "next-mdx-remote/rsc";

// Long-form body of a Case Study or Post: 18px muted text on a 2x line height, as on the live site.
export function Prose({ source }: { source: string }) {
  return (
    <div className="text-lg leading-[2] tracking-[-0.02em] text-muted [&_a]:text-link [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-purple [&_blockquote]:pl-4 [&_h2]:mb-2 [&_h2]:mt-12 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:leading-snug [&_h2]:text-heading [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-text [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_strong]:font-bold [&_strong]:text-text [&_ul]:list-disc [&_ul]:pl-6">
      <MDXRemote source={source} />
    </div>
  );
}
