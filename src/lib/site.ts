export const site = {
  name: "Northbound",
  tagline: "B2B lead generation agency",
  description:
    "Northbound designs outbound and inbound acquisition systems for B2B teams, so qualified sales conversations show up on the calendar every week.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@northbound.example",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
] as const;

export const sectionNav = [
  { href: "/#results", label: "Results" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
] as const;
