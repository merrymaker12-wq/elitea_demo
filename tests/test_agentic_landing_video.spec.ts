import { test, expect } from '@playwright/test';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

test.describe('Agentic IDE Landing Screen', () => {
  test('open landing page and capture short video', async ({ page }) => {
    const projectRoot = path.resolve(__dirname, '..');
    const landingPath = path.resolve(projectRoot, 'index.html');
    const fileUrl = `file://${landingPath}`;

    // Ensure testing folder exists so video artifacts have a clear home.
    const testingDir = path.resolve(projectRoot, 'testing');
    if (!existsSync(testingDir)) {
      mkdirSync(testingDir);
    }

    await page.goto(fileUrl);
    await page.waitForTimeout(4000);

    await expect(page.getByRole('heading', { name: /Agentic IDE is/i })).toBeVisible();
    await expect(
      page.getByText(/Ship ambitious ideas faster with an IDE that doesn’t just autocomplete/i)
    ).toBeVisible();
  });
});

