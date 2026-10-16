# Playwright Learning Journey 🎭

I have 4 years of test automation experience with Selenium, and I'm now learning Playwright in public. I post one topic every day on LinkedIn, and this repo holds the practice code.

🔗 LinkedIn: <paste your LinkedIn profile link>

## Progress

| Day | Topic | Code |
|-----|-------|------|
| 1 | Installation and first test | [mytest.spec.ts](e2e/mytest.spec.ts) |
| 2 | Locators: getByRole, getByLabel, getByPlaceholder, getByText, getByAltText, getByTitle, getByTestId | [PWLocators.spec.ts](e2e/PWLocators.spec.ts) |
| 3 | XPath: relative XPath, multiple elements, starts-with(), contains(), text(), last() | [xpath.spec.ts](e2e/xpath.spec.ts) |
| 4 | Dynamic elements: XPath with `or`, getByRole with a regex, CSS selector with a comma | [<day 4 file name>](e2e/<day-4-file-name>) |
| 5 | Coming soon | |

## What I've learned so far

- **Day 1:** Playwright installs with one command, runs tests in 3 browsers and auto-waits for elements.
- **Day 2:** Prefer user-facing locators (role, label, text) over CSS or XPath.
- **Day 3:** XPath works, but a locator that matches many elements causes a strict mode violation. Use `.first()`, `.nth(i)` or `allTextContents()`.
- **Day 4:** When an element's attributes change (like a button switching between start and stop), write one locator that matches every state: XPath `or`, a role regex such as `/start|stop/i`, or a CSS comma.

## How to run

```bash
npm install
npx playwright install
npx playwright test
```

Useful options: `--headed` to watch the browser, `--ui` for UI mode, and `npx playwright show-report` for the HTML report.

## Notes
- All tests run against public practice sites only.
- Built with Playwright Test and TypeScript.
