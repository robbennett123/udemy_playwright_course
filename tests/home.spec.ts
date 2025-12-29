import{test, expect}from'@playwright/test';

test.describe('Home', () => {
   test('Open homepage and verify title', async ({ page }) => {
    //open url
    await page.goto('https://practice.sdetunicorns.com/');

    //verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
})

  test('Open About page and verify title', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com/about');

     //verify title
     await expect(page).toHaveTitle('About – Practice E-Commerce Site');
})

test('Click Get Started button using object id', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //click button
     await page.click("[id='get-started']");

     //verify URL has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');


})
test('Click Get Started button using CSS selector', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //click button
     await page.locator('#get-started').click();

     //verify URL has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');


})

test('Verify heading text is visible using text selector', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //find text locator - using text in "" so looking for exact match
     const headingText = await page.locator('text="Think different. Make different."')

     //verify headingText is visible
        await expect(headingText).toBeVisible();


})


})
    

 