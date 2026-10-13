# Playwright Learning Journey 🎭

I have 4 years of test automation experience with Selenium, and I'm now learning Playwright in public. I'm posting one topic every day on LinkedIn, and this repo holds the practice code.

🔗 LinkedIn: (https://www.linkedin.com/in/veeraragavan-j-484557102/)

## Progress

| Day | Topic | Code |
|-----|-------|------|
| 1 | Installation and first test | [mytest.spec.ts](e2e/mytest.spec.ts) |
| 2 | Locators (getByRole, getByLabel, getByPlaceholder, getByText, getByAltText, getByTitle, getByTestId) | [PWLocators.spec.ts](e2e/PWLocators.spec.ts) |
| 3 | XPath in Playwright | coming soon |

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
