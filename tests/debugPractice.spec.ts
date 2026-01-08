import{test, expect}from'@playwright/test';

test.describe('Debug Practice', () => {
   test('Debug practice test', async ({ page }) => {
    //open url
    await page.goto('https://practice.sdetunicorns.com/');

    //verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

})


});

//This test can be run from the terminal using npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
//It can also be run in debug mode using the command $env:debug="pw:api"; npx playwright test "debugPractice.spec.ts" -g "Debug\s+Practice\s+\S+"
//which will log out all Playwright API calls to the terminal
    

 