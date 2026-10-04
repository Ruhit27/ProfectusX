import { z } from "zod";

const applicationSchema = z.object({
  name: z.string({ error: "Tell us your name." }).trim().min(1, "Tell us your name."),
  company: z.string({ error: "Tell us your company." }).trim().min(1, "Tell us your company."),
  email: z
    .string({ error: "Enter a valid email address." })
    .trim()
    .pipe(z.email("Enter a valid email address.")),
});

export type Application = z.infer<typeof applicationSchema>;

export type ApplicationField = keyof Application;

export type ApplicationErrors = Partial<Record<ApplicationField, string>>;

export type ParseApplicationResult =
  | { ok: true; application: Application }
  | { ok: false; errors: ApplicationErrors };

export function parseApplication(input: unknown): ParseApplicationResult {
  const result = applicationSchema.safeParse(input);
  if (result.success) return { ok: true, application: result.data };

  const errors: ApplicationErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as ApplicationField | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return { ok: false, errors };
}
