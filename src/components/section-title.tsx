import { Reveal } from "./reveal";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mb-14 text-center">
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.04em] text-heading sm:text-[38px]">
        {children}
      </h2>
    </Reveal>
  );
}
