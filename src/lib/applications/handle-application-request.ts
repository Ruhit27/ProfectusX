import { parseApplication } from "./parse-application";
import { submitApplication, type ApplicationNotifier } from "./submit-application";

export async function handleApplicationRequest(
  request: Request,
  notifier: ApplicationNotifier,
): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Expected a JSON body." }, { status: 400 });
  }

  const parsed = parseApplication(body);
  if (!parsed.ok) return Response.json({ ok: false, errors: parsed.errors }, { status: 422 });

  const submitted = await submitApplication(parsed.application, notifier);
  if (!submitted.ok) {
    return Response.json(
      { ok: false, message: "We couldn't send your Application. Please try again." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
