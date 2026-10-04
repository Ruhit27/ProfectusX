import Link from "next/link";

const styles = {
  primary: "bg-accent text-accent-ink hover:brightness-110",
  secondary: "border border-border bg-surface text-foreground hover:bg-surface-raised",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
