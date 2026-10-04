import { describe, expect, it } from "vitest";
import type { Application } from "./parse-application";
import type { ApplicationNotifier } from "./submit-application";
import { handleApplicationRequest } from "./handle-application-request";

function post(body: unknown) {
  return new Request("http://localhost/api/applications", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const recordingNotifier = () => {
  const received: Application[] = [];
  const notifier: ApplicationNotifier = { notify: async (a) => void received.push(a) };
  return { notifier, received };
};

describe("POST /api/applications", () => {
  it("accepts a valid Application with 200", async () => {
    const { notifier, received } = recordingNotifier();

    const response = await handleApplicationRequest(
      post({ name: "Ada Park", company: "Fieldnote", email: "ada@fieldnote.io" }),
      notifier,
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(received).toHaveLength(1);
  });

  it("rejects an invalid Application with 422 and field errors", async () => {
    const { notifier, received } = recordingNotifier();

    const response = await handleApplicationRequest(post({ name: "Ada" }), notifier);

    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({
      ok: false,
      errors: { company: "Tell us your company.", email: "Enter a valid email address." },
    });
    expect(received).toHaveLength(0);
  });

  it("rejects a body that is not JSON with 400", async () => {
    const { notifier } = recordingNotifier();

    const response = await handleApplicationRequest(post("name=Ada"), notifier);

    expect(response.status).toBe(400);
  });

  it("responds 502 when the Application cannot be delivered", async () => {
    const failing: ApplicationNotifier = {
      notify: async () => {
        throw new Error("Resend is down");
      },
    };

    const response = await handleApplicationRequest(
      post({ name: "Ada Park", company: "Fieldnote", email: "ada@fieldnote.io" }),
      failing,
    );

    expect(response.status).toBe(502);
  });
});
