export const site = {
  name: "Northbound",
  tagline: "Pipeline studio for B2B teams",
  description:
    "Northbound plans, writes and runs outbound, LinkedIn and content for B2B sales teams, so reps spend their time with buyers instead of building lists.",
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
