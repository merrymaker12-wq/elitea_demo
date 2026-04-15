import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    headless: true,
    video: 'on',
  },
  reporter: [['list']],
  outputDir: 'testing',
};

export default config;

