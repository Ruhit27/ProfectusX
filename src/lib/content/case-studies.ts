import { z } from "zod";
import { createContentLibrary } from "./collection";

export const caseStudySchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.coerce.date(),
  client: z.string().min(1),
  industry: z.string().min(1),
  metrics: z.array(z.object({ value: z.coerce.string(), label: z.string().min(1) })).min(1),
});

export function createCaseStudyLibrary(directory: string) {
  return createContentLibrary(directory, caseStudySchema);
}
