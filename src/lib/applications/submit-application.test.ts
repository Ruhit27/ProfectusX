import { describe, expect, it } from "vitest";
import type { Application } from "./parse-application";
import { submitApplication, type ApplicationNotifier } from "./submit-application";

const application: Application = { name: "Ada Park", company: "Fieldnote", email: "ada@fieldnote.io" };

describe("submitApplication", () => {
  it("hands the Application to the notifier", async () => {
    const received: Application[] = [];
    const notifier: ApplicationNotifier = { notify: async (a) => void received.push(a) };

    const result = await submitApplication(application, notifier);

    expect(result).toEqual({ ok: true });
    expect(received).toEqual([application]);
  });

  it("reports a delivery failure instead of throwing", async () => {
    const notifier: ApplicationNotifier = {
      notify: async () => {
        throw new Error("Resend is down");
      },
    };

    const result = await submitApplication(application, notifier);

    expect(result).toEqual({ ok: false, reason: "delivery-failed" });
  });
});
