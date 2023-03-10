import { test, expect } from "@playwright/test";

test.describe("Login / Logout Flow", () => {
  // Before Hook
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });
});
