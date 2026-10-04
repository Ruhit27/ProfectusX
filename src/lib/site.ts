export const site = {
  name: "ProfectusX",
  tagline: "Pipeline studio for B2B teams",
  description:
    "ProfectusX builds omnichannel lead generation systems that attract qualified prospects, strengthen your digital presence, and create a more consistent flow of sales opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Placeholder until the client confirms their contact address.
  email: "hello@profectusx.example",
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
