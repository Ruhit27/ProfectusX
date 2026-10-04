export const site = {
  name: "Northbound",
  tagline: "Pipeline studio for B2B teams",
  description:
    "Northbound plans, writes and runs outbound, LinkedIn and content for B2B sales teams, so reps spend their time with buyers instead of building lists.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@northbound.example",
  // Footer credit line, right-aligned.
  credit: "Designed by Your Studio",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case-Studies" },
  { href: "/our-blogs", label: "Our Blog" },
] as const;

// Section links of the live nav, shown in the mobile menu.
export const sectionNav = [
  { href: "/#why", label: "About Us" },
  { href: "/#results", label: "Results" },
  { href: "/#process", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQs" },
] as const;
