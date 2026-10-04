import { expect, test } from "@playwright/test";

test("a Prospect can submit an Application", async ({ page }) => {
  await page.goto("/apply");

  await page.getByLabel("Name").fill("Ada Park");
  await page.getByLabel("Company").fill("Fieldnote");
  await page.getByLabel("Work email").fill("ada@fieldnote.io");
  await page.getByRole("button", { name: "Apply" }).click();

  await expect(page.getByRole("status")).toContainText("Application received");
});

test("an empty Application shows an error on every field", async ({ page }) => {
  await page.goto("/apply");

  await page.getByRole("button", { name: "Apply" }).click();

  await expect(page.getByText("Tell us your name.")).toBeVisible();
  await expect(page.getByText("Tell us your company.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
});
