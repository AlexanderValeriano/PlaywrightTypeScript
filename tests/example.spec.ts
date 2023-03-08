import { test, expect, selectors } from "@playwright/test";

test.describe("My first test suite", () => {
  test.only("simple basic test", async ({ page }) => {
    await page.goto("https://example.com");
    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
  });

  test("Clicking in elements", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/");
    await page.click("#signin_button");
    await page.click("text=Sign in");
    const errorMessage = await page.locator(".alert");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong."
    );
  });

  // selectors;
  // //Text
  // await page.click("text=some text");
  // //CSS selectors
  // await page.click("Button");
  // await page.click("#id");
  // await page.click(".Class");
  // //Only visible
  // await page.click("submit-button=visible");
  // //Combinations
  // await page.click("#username .first");
  // //Xpath
  // await page.click("//button");

  // npx playwright test --grep @tag
  test("assertions @tag", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveURL("https://example.com");
    await expect(page).toHaveTitle("Example Domain");

    const element = await page.locator("h1");
    await expect(element).toBeVisible();
    await expect(element).toHaveText("Example Domain");
    await expect(element).toHaveCount(1);

    const notExistingElement = await page.locator("h5");
    await expect(notExistingElement).not.toBeVisible();
  });
});

test("assertions2", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveURL("https://example.com");
  await expect(page).toHaveTitle("Example Domain");

  const element = await page.locator("h1");
  await expect(element).toBeVisible();
  await expect(element).toHaveText("Example Domain");
  await expect(element).toHaveCount(1);

  const notExistingElement = await page.locator("h5");
  await expect(notExistingElement).not.toBeVisible();
});
