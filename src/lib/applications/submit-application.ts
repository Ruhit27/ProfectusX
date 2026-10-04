import type { Application } from "./parse-application";

export interface ApplicationNotifier {
  notify(application: Application): Promise<void>;
}

export type SubmitApplicationResult = { ok: true } | { ok: false; reason: "delivery-failed" };

export async function submitApplication(
  application: Application,
  notifier: ApplicationNotifier,
): Promise<SubmitApplicationResult> {
  try {
    await notifier.notify(application);
    return { ok: true };
  } catch (error) {
    console.error("Application delivery failed", error);
    return { ok: false, reason: "delivery-failed" };
  }
}
