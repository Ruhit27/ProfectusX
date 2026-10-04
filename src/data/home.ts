// Home page content. Every field maps to one text slot in the live Framer page,
// in page order. Replace the placeholder copy with the client's (see README).

export type Testimonial = { quote: string; name: string; role: string };
export type IconName = "search" | "target" | "layers" | "send" | "chart" | "people" | "money" | "gear";

export const hero = {
  heading: "Placeholder headline about acquisition systems that deliver leads every day",
  subheading:
    "Placeholder subheading: one or two sentences on how the Agency fills calendars while building the client's brand across channels.",
  cta: "Button label",
};

export const trustedBy = {
  label: "Logo strip label",
  // Logos: put SVG/PNG files in public/logos/ and set `src`; without it the name renders as a wordmark.
  logos: [
    { name: "Fieldnote" },
    { name: "Halcyon" },
    { name: "Ledgerline" },
    { name: "Quarry" },
    { name: "Tidewater" },
    { name: "Brightloop" },
    { name: "Sundial" },
    { name: "Orbit" },
  ] as { name: string; src?: string }[],
};

export const results = {
  heading: "Results heading",
  // Screenshots of results (calendars, inbox replies, analytics). Replace the placeholders in public/results/.
  images: [
    { src: "/results/placeholder-1.svg", alt: "Placeholder result screenshot 1" },
    { src: "/results/placeholder-2.svg", alt: "Placeholder result screenshot 2" },
    { src: "/results/placeholder-3.svg", alt: "Placeholder result screenshot 3" },
    { src: "/results/placeholder-4.svg", alt: "Placeholder result screenshot 4" },
  ],
};

export const testimonials: { heading: string; items: Testimonial[] } = {
  heading: "Testimonials heading",
  items: [
    { quote: "Placeholder testimonial. Two short sentences about the result the client saw.", name: "Client Name One", role: "Role at Company" },
    { quote: "Placeholder testimonial describing the leads generated and demo bookings that followed.", name: "Client Name Two", role: "Role at Company" },
    { quote: "Placeholder testimonial about the quality of the copywriting and attention to detail. Recommended.", name: "Client Name Three", role: "Role at Company" },
    { quote: "Placeholder testimonial about social content growth and the visibility it brought to the brand.", name: "Client Name Four", role: "Role" },
    { quote: "Placeholder testimonial about a deal closed through outreach on social channels.", name: "Client Name Five", role: "Role" },
    { quote: "Placeholder testimonial about revenue growth over a few months of working together.", name: "Client Name Six", role: "Role at Company" },
  ],
};

export const process = {
  heading: "Process heading",
  steps: [
    { icon: "search", title: "Step one title", body: "Placeholder description of the first step: auditing the client's current setup and goals." },
    { icon: "target", title: "Step two title", body: "Placeholder description of the second step: defining the ideal customer profile and the offer." },
    { icon: "layers", title: "Step three title", body: "Placeholder description of the third step: building the infrastructure and assets." },
    {
      icon: "send",
      title: "Step four title",
      points: [
        { label: "Point one:", body: "Placeholder detail for the first part of this step." },
        { label: "Point two:", body: "Placeholder detail for the second part of this step." },
        { label: "Point three:", body: "Placeholder detail for the third part of this step." },
      ],
    },
    { icon: "chart", title: "Step five title", body: "Placeholder description of the final step: launching, measuring and iterating." },
  ] as { icon: IconName; title: string; body?: string; points?: { label: string; body: string }[] }[],
};

export const why = {
  heading: "Why-us heading",
  features: [
    { icon: "people", title: "Feature one", body: "Placeholder line explaining the first reason to choose the Agency." },
    { icon: "money", title: "Feature two", body: "Placeholder line explaining the second reason to choose the Agency." },
    { icon: "gear", title: "Feature three", body: "Placeholder line explaining the third reason to choose the Agency." },
  ] as { icon: IconName; title: string; body: string }[],
};

export const caseStudiesPreview = {
  heading: "Case Studies",
  cardLink: "View More",
  allLink: "View More",
};

export const faq = {
  heading: "FAQ heading",
  items: [
    { question: "Placeholder question one?", answer: "Placeholder answer one." },
    { question: "Placeholder question two?", answer: "Placeholder answer two." },
    { question: "Placeholder question three?", answer: "Placeholder answer three." },
    { question: "Placeholder question four?", answer: "Placeholder answer four." },
    { question: "Placeholder question five?", answer: "Placeholder answer five." },
    { question: "Placeholder question six?", answer: "Placeholder answer six." },
    { question: "Placeholder question seven?", answer: "Placeholder answer seven." },
  ],
};

export const closingCta = {
  heading: "Closing call-to-action heading",
  body: "Placeholder line inviting the Prospect to talk. A second short line encouraging the next step.",
  cta: "Button label",
};
