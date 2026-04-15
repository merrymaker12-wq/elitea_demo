# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Playwright test automation project demonstrating browser automation capabilities. The repository contains:
- A standalone landing page (`index.html`) showcasing an "Agentic IDE" concept with animated graphics
- Playwright tests that validate both external websites (EPAM) and the local landing page

## Running Tests

```bash
# Install dependencies
npm install

# Install Playwright browsers (if needed)
npx playwright install

# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/test_epam_navigation.spec.ts
npx playwright test tests/test_agentic_landing_video.spec.ts

# Run tests in UI mode (for debugging)
npx playwright test --ui

# Run tests in headed mode (show browser)
npx playwright test --headed

# Show test report
npx playwright show-report
```

## Project Structure

```
/
├── index.html                          # Landing page for "Agentic IDE is awesome"
├── tests/                              # Playwright test files
│   ├── test_epam_navigation.spec.ts   # External website navigation test
│   └── test_agentic_landing_video.spec.ts  # Local landing page test
├── testing/                            # Test artifacts directory (videos, reports)
├── playwright.config.ts                # Playwright configuration
└── tsconfig.json                       # TypeScript configuration
```

## Test Configuration Details

The Playwright configuration (`playwright.config.ts`) has these important settings:

- **Test directory**: `./tests`
- **Headless mode**: Enabled by default
- **Video recording**: Enabled for all tests (`video: 'on'`)
- **Output directory**: `./testing` (videos and artifacts stored here)
- **Reporter**: List format

## Test File Patterns

### External Website Tests
`test_epam_navigation.spec.ts` demonstrates navigation flow on external sites:
- Navigate to target URL
- Hover over menu items to trigger dropdowns
- Click navigation links
- Verify page content

### Local File Tests
`test_agentic_landing_video.spec.ts` demonstrates testing local HTML files:
- Constructs `file://` URLs using `path.resolve()` to load local HTML files
- Creates `testing` directory if it doesn't exist to ensure video artifacts have a destination
- Uses `page.waitForTimeout()` for video capture duration
- Validates specific page elements with `getByRole()` and `getByText()`

## TypeScript Configuration

- **Target**: ES2017
- **Module system**: CommonJS
- **Strict mode**: Enabled
- **Test files only**: TypeScript configuration includes only `tests/**/*.ts`

## Dependencies

- `@playwright/test` - Core testing framework
- `@executeautomation/playwright-mcp-server` - MCP server integration for Playwright
- `typescript` - TypeScript compiler

## Working with the Landing Page

The `index.html` file is a self-contained single-page application with:
- Embedded CSS (no external stylesheets)
- Inline JavaScript (no external scripts)
- Animated graphics and interactive elements
- Responsive design with mobile breakpoints

When modifying the landing page, note that all styles are in a `<style>` block in the `<head>` and all JavaScript is in a `<script>` block before the closing `</body>` tag.
