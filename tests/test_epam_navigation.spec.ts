import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation', () => {
  test('Navigate to EPAM and verify Client Work page', async ({ page }) => {

    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    await page.hover('a[role="menuitem"][href="/services"]');

    // Step 3: Click the "Explore Our Client Work" link
    await page.click('a[href="/about/who-we-are/client-work"]');

    // Step 4: Verify that the "Client Work" text is visible on the page
    await expect(page.locator('text="Client Work"')).toBeVisible();
  });
});