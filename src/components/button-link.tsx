import Link from "next/link";

const styles = {
  // Dark pill with layered inset shadows (hero and closing CTA).
  primary: "button-3d h-14 rounded-2xl px-6 font-display text-lg font-semibold text-button-text",
  // Small dark button ("View More" under lists).
  secondary: "rounded-lg bg-button px-4 py-2.5 text-sm font-bold text-heading hover:bg-[rgb(44,46,48)]",
  // Plum button with sparkles (header "Get In Touch").
  glow: "relative overflow-hidden rounded-xl border border-violet/40 bg-plum px-6 py-2.5 font-bold text-white",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 transition hover:brightness-110 ${styles[variant]}`}
    >
      {variant === "glow" && <Sparkles />}
      <span className="relative">{children}</span>
    </Link>
  );
}

function Sparkles() {
  return (
    <span aria-hidden="true" className="absolute inset-0">
      {[
        [6, 22],
        [18, 78],
        [72, 10],
        [86, 70],
        [94, 30],
      ].map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute size-0.5 animate-pulse rounded-full bg-white/80"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
    </span>
  );
}
