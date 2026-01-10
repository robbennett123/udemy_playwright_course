import{test, expect}from'@playwright/test';

test.describe('Debug Practice', () => {
   test('Debug practice test', async ({ page }) => {
    //open url
    await page.goto('https://practice.sdetunicorns.com/');

    //verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    
    //Write some failing tests to see how debugging works in the Playwright Trace Viewer and using the terminal logs
    await expect(page.locator('#get-started')).toContainText('get started');
    //This test will fail because the text is incorrect and the following errors will be logged in the terminal
    //locator resolved to <a id="get-started" href="#get-started" class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow">…</a> +9ms
    //pw:api   unexpected value "
    
    //This test can be run from the terminal using npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
    //It can also be run in debug mode using the command $env:debug="pw:api"; npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
    //which will log out all Playwright API calls to the terminal
   });
});