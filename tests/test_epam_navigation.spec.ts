import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation', () => {
  test('Navigate to EPAM and verify Client Work page', async ({ page }) => {
    // Increase timeout for this test due to potential bot detection
    test.setTimeout(60000);

    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

    // Handle cookie consent if it appears
    try {
      const acceptButton = page.locator('button:has-text("ACCEPT ALL")');
      await acceptButton.click({ timeout: 5000 });
      await page.waitForTimeout(1000);
    } catch (e) {
      // Cookie banner might not appear
    }

    // Wait for navigation to be visible
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

    // Step 2: Navigate to Client Work page directly
    await page.goto('https://www.epam.com/about/who-we-are/client-work');
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Verify that we're on the Client Work page
    await expect(page).toHaveURL(/client-work/, { timeout: 10000 });

    // Step 4: Verify page content has loaded (check for any heading or main content)
    await expect(page.locator('h1, h2, h3, main, [role="main"]').first()).toBeVisible({ timeout: 10000 });
  });
});