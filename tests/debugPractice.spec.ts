import { test, expect } from '@playwright/test';

test.describe('Debug Practice', () => {
   test('Debug practice test', async ({ page }) => {
      //open url
      await page.goto('https://practice.sdetunicorns.com/');

      //verify title
      await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

      await page.pause();

      //Write some failing tests to see how debugging works in the Playwright Trace Viewer and using the terminal logs - test below has 'tarted' misspelled
      await expect(page.locator('#get-started')).toContainText('get tarted');
      //This test will fail because the text is incorrect and the following errors will be logged in the terminal
      //locator resolved to <a id="get-started" href="#get-started" class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow">…</a> +9ms
      //pw:api   unexpected value "

      //This test can be run from the terminal using npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
      //It can also be run in debug mode using the command $env:debug="pw:api"; npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
      //which will log out all Playwright API calls to the terminal

      //Can also trigger the playwright Inspector - either from the terminal using the command $env:pwdebug=1; npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
      //Or by adding the following line of code to the test to  await page.pause(); This will pause the test at that point in the test and open the Inspector
      //Note the code generator (Inspector) can be opened from the terminal using nxp playwright codegen

   });
}); 