import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 24 24" className="size-6 text-accent" aria-hidden="true">
        <path fill="currentColor" d="M12 1.5 14.6 9.4 22.5 12l-7.9 2.6L12 22.5l-2.6-7.9L1.5 12l7.9-2.6z" />
      </svg>
      <span className="text-lg">{site.name}</span>
    </Link>
  );
}
