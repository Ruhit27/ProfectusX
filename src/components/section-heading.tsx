import { Reveal } from "./reveal";

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-[754px] text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-[38px] sm:leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </Reveal>
  );
}
