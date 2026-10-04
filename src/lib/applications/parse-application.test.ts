import { describe, expect, it } from "vitest";
import { parseApplication } from "./parse-application";

describe("parseApplication", () => {
  it("accepts a complete Application and trims whitespace", () => {
    const result = parseApplication({
      name: "  Ada Park ",
      company: " Fieldnote ",
      email: " ada@fieldnote.io ",
    });

    expect(result).toEqual({
      ok: true,
      application: { name: "Ada Park", company: "Fieldnote", email: "ada@fieldnote.io" },
    });
  });

  it("reports a field error for each missing or blank field", () => {
    const result = parseApplication({ name: "   ", company: "" });

    expect(result).toEqual({
      ok: false,
      errors: {
        name: "Tell us your name.",
        company: "Tell us your company.",
        email: "Enter a valid email address.",
      },
    });
  });

  it("rejects an email address without a domain", () => {
    const result = parseApplication({ name: "Ada", company: "Fieldnote", email: "ada@" });

    expect(result).toEqual({ ok: false, errors: { email: "Enter a valid email address." } });
  });

  it("rejects input that is not an object", () => {
    const result = parseApplication("name=Ada");

    expect(result.ok).toBe(false);
  });
});
