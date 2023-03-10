import { test, expect } from "@playwright/test";

test.describe.parallel("Login / Logout Flow", () => {
  // Before Hook
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
  });
  //Negative Scenario
  test("Negative Scenario for login", async ({ page }) => {
    await page.click(".ico-login");
    await page.fill("#Email", "valerianoalexander@gmail.com");
    await page.fill("#Password", "petit_22");
    await page.getByRole("button", { name: "Log in" }).click();
    const errorMessage = await page.getByText("No customer account found");
    await expect(errorMessage).toBeVisible({ visible: true });
  });
  //Positive Scenario + Logout
  test("Positive Scenario with logout", async ({ page }) => {
    await page.click(".ico-login");
    await page.fill("#Email", "alexander.valeriano@sogeti.com");
    await page.fill("#Password", "Petit_22");
    await page.getByRole("button", { name: "Log in" }).click();
    const summaryTab = await page.getByRole("link", {
      name: "alexander.valeriano@sogeti.com",
    });
    await expect(summaryTab).toHaveText("alexander.valeriano@sogeti.com");
    await page.getByRole("link", { name: "Log out" }).click();
    const loginLink = await page.getByRole("link", { name: "Log in" });
    await expect(loginLink).toBeVisible();
  });
});
