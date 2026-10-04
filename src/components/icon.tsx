import type { IconName } from "@/data/home";

// Line icons in the live site's two-tone style: white strokes with an ember accent.
const paths: Record<IconName, { base: string; accent: string }> = {
  search: { base: "M4 20c0-4 3-6 6-6s6 2 6 6M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", accent: "M17 17l4 4M15.5 18.5a3 3 0 1 0 0-.01" },
  target: { base: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18", accent: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M12 12h.01" },
  layers: { base: "M12 3 3 8l9 5 9-5-9-5", accent: "M3 13l9 5 9-5M3 17.5l9 5 9-5" },
  send: { base: "M3 11 21 3l-8 18-2-8-8-2", accent: "M11 13l4-4" },
  chart: { base: "M3 21h18M5 21V10M10 21V4M15 21v-7", accent: "M20 21V8" },
  people: { base: "M3 21c0-4 3-6 6-6s6 2 6 6M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8", accent: "M15 5c1.5-2 4-1.5 4.5.5S18 9 15 11" },
  money: { base: "M6 9c-2 3-2 12 6 12s8-9 6-12M8 6l1-3 3 2 3-2 1 3", accent: "M14 12.5c-.5-1-3.5-1-3.5.5s4 1 3.5 3-3 1.5-3.5.5M12 11v1M12 17v1" },
  gear: { base: "M3 5h18v15H3zM3 8h18", accent: "M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 9.5v1M12 17.5v1M9.5 14h-1M15.5 14h1" },
};

export function Icon({ name, className = "size-16" }: { name: IconName; className?: string }) {
  const { base, accent } = paths[name];
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={base} stroke="white" />
      <path d={accent} stroke="var(--ember)" />
    </svg>
  );
}
