# Udemy Playwright Course - Test Automation Suite

A comprehensive end-to-end test automation suite built with [Playwright](https://playwright.dev/) and TypeScript for testing web applications across multiple browsers.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Debugging & Troubleshooting](#debugging--troubleshooting)
- [CI/CD Integration](#cicd-integration)

## 📖 Overview

This project demonstrates best practices for test automation using:

- **Playwright** `^1.57.0` - Multi-browser testing framework
- **TypeScript** - Type-safe test scripting
- **Parallel Execution** - Efficient test runs across multiple browsers
- **HTML Reports** - Detailed test result visualization
- **Trace Collection** - Automatic trace recording on test failures

### Supported Browsers

- ✅ **Chromium** (Configured, headless mode disabled for visibility)
- ⏸️ **Firefox** (Commented out, uncomment in config to enable)
- ⏸️ **WebKit** (Commented out, uncomment in config to enable)

## ✅ Prerequisites

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** 7+ (included with Node.js)
- **Git** (optional, for cloning the repository)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/robbennett123/udemy_playwright_course.git
   cd udemy_playwright_course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs Playwright and all required browsers.

3. **Verify installation**
   ```bash
   npx playwright --version
   ```

## 📁 Project Structure

```
udemy_playwright_course/
├── tests/                      # All test files
│   ├── example.spec.ts        # Example test suite
│   └── home.spec.ts           # Home page tests
├── playwright-report/         # HTML test report (generated)
├── test-results/              # Detailed test results (generated)
├── playwright.config.ts       # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
└── README.md                 # This file
```

### Test File Convention

- Test files use the `.spec.ts` suffix (e.g., `home.spec.ts`)
- Each file groups related tests for a specific feature or page
- Tests are independent and can run in any order

## 🧪 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test File

```bash
npx playwright test tests/home.spec.ts
```

### Run Tests Matching a Pattern

```bash
npx playwright test -g "pattern-name"
```

Example:
```bash
npx playwright test -g "Verify heading text"
```

### Run Tests in UI Mode (Interactive)

```bash
npx playwright test --ui
```

This opens an interactive test runner where you can:
- Run individual tests
- Step through test execution
- Inspect elements in real-time
- View test results immediately

### Run Tests in Headed Mode (See Browser)

```bash
npx playwright test --headed
```

### Run with Debug Mode

```bash
npx playwright test --debug
```

This opens the Playwright Inspector for stepping through code line-by-line.

### View HTML Test Report

```bash
npx playwright show-report
```

## ⚙️ Configuration

All test configuration is defined in `playwright.config.ts`. Key settings:

| Setting | Value | Purpose |
|---------|-------|---------|
| `testDir` | `./tests` | Directory containing test files |
| `fullyParallel` | `true` | Run tests in parallel for faster execution |
| `retries` | `2` (CI only) | Retry failed tests on CI environments |
| `workers` | `1` (CI), `undefined` (local) | Number of parallel workers |
| `reporter` | `html` | Generate HTML report after test run |
| `trace` | `on-first-retry` | Collect browser trace on first retry |
| `use.headless` | `false` | Show browser window during test execution |

### Enabling Additional Browsers

To test on Firefox and WebKit, uncomment the browser configurations in `playwright.config.ts`:

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'], headless: false },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
]
```

### Setting a Base URL

Uncomment the `baseURL` option for shorter test URLs:

```typescript
use: {
  baseURL: 'http://localhost:3000',
}
```

Then in tests:
```typescript
await page.goto('/')  // Uses http://localhost:3000/
```

### Auto-Starting a Dev Server

Uncomment the `webServer` configuration to automatically start a development server before tests:

```typescript
webServer: {
  command: 'npm run start',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
},
```

## 📝 Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('should verify page title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

### Using Role-Based Selectors (Recommended)

Prefer role-based selectors for better accessibility coverage:

```typescript
// Get button by role and name
const submitButton = page.getByRole('button', { name: 'Submit' });
await submitButton.click();

// Get heading by text
const heading = page.getByRole('heading', { name: 'Welcome' });

// Get text input by label
const emailInput = page.getByLabel('Email');
await emailInput.fill('user@example.com');
```

### Example Test

```typescript
import { test, expect } from '@playwright/test';

test('should complete form submission', async ({ page }) => {
  // Navigate to page
  await page.goto('https://example.com/contact');

  // Fill form fields
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Message').fill('Hello!');

  // Submit form
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify success
  await expect(page.getByText('Thank you')).toBeVisible();
});
```

## 🐛 Debugging & Troubleshooting

### View Test Traces

When a test fails on CI, Playwright automatically collects a trace. View it locally:

```bash
npx playwright show-trace trace.zip
```

### Inspect Element Selectors

Use the Playwright Inspector to identify selectors:

```bash
npx playwright test --debug
```

### Check Test Results

HTML reports are generated after each test run:

```bash
npx playwright show-report
```

### Common Issues

| Issue | Solution |
|-------|----------|
| `Test timeout` | Increase `timeout` in test or config |
| `Element not found` | Verify selector using `--debug` mode |
| `Port already in use` | Change port or kill existing process |
| `Different results locally vs CI` | Check environment differences |

## 🔄 CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/tests.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
      
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

### CI Behavior

When `CI` environment variable is set:

- Tests run with 1 worker (sequential)
- Failed tests automatically retry 2 times
- `test.only()` is forbidden (prevents accidental test limiting)
- Traces are collected on first retry

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Guide](https://playwright.dev/docs/intro)
- [Selectors Best Practices](https://playwright.dev/docs/locators)
- [Debugging Guide](https://playwright.dev/docs/debug)
- [CI/CD Integration](https://playwright.dev/docs/ci)

## 📄 License

ISC

## 🤝 Contributing

This is a course project. For issues or questions, please refer to the [GitHub repository](https://github.com/robbennett123/udemy_playwright_course).
