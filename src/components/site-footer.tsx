import Link from "next/link";
import { primaryNav, sectionNav, site } from "@/lib/site";
import { Container } from "./container";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-muted">{site.description}</p>
          <a href={`mailto:${site.email}`} className="text-sm text-accent hover:underline">
            {site.email}
          </a>
        </div>
        <FooterLinks title="Pages" links={[...primaryNav, { href: "/apply", label: "Apply" }]} />
        <FooterLinks title="On this site" links={sectionNav} />
      </Container>
      <Container className="border-t border-border py-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. A fictional agency built as a portfolio project. All
        clients, figures and testimonials are sample data.
      </Container>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <ul className="space-y-2 text-sm text-muted">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
