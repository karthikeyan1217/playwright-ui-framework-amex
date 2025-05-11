import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Load environment variables from the correct file based on ENV_NAME.
 * Defaults to `.env.prod` if ENV_NAME is not provided.
 */
dotenv.config({
  path: process.env.ENV_NAME
    ? `./env-files/.env.${process.env.ENV_NAME}`
    : `./env-files/.env.prod`
});

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: [['html', { outputFolder: 'report', open: 'always' }]],

  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
      },
    },

   // Uncomment below to enable other browsers
    // {
    //   name: 'chromium',
    //   //use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Optional viewport override
  // viewport: { width: 1920, height: 1080 },
});
