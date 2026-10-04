import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="flex items-center">
      <Image src="/logo.svg" alt={site.name} width={48} height={32} priority unoptimized />
    </Link>
  );
}
