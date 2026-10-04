import { expect, test } from "@playwright/test";

// Every URL pattern of the live site must keep resolving after the migration (ADR 0001).
const liveUrlPatterns = [
  "/",
  "/case-studies",
  "/cs/fieldnote-outbound-relaunch",
  "/our-blogs",
  "/warm-up-is-not-a-strategy",
  "/quote",
];

for (const path of liveUrlPatterns) {
  test(`${path} resolves`, async ({ request }) => {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(200);
  });
}

test("an unknown top-level slug is a 404, not a Post", async ({ request }) => {
  const response = await request.get("/not-a-real-post");
  expect(response.status()).toBe(404);
});
