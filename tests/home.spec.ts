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

test('Verify home link is enabled using text and CSS selector', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //find home text\ locator
     const homeText = await page.locator('#zak-primary-menu >> text=Home')

     //verify headingText is visible
        await expect(homeText).toBeVisible();


})

test('Verify Search link is present', async ({ page }) => {
     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //find search link. I had to find thid lucator using .first() because there are two elements with the same class name. Couldn't get a better locator to work on the
     const searchLink = page.locator('.zak-header-search__toggle').first();

     //verify searchLink is visible
    await expect(searchLink).toBeVisible(); 

})

test('Verify text for all menu bar nav links', async ({ page }) => {
   const expectedLinks=[
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
     
   ]

     //open url
     await page.goto('https://practice.sdetunicorns.com');

     //find nav links 
     const navLinks = page.locator('#zak-primary-menu li[id*=menu]');

     //verify navLinks text
    expect(await navLinks.allTextContents()).toEqual(expectedLinks); 

})



})
    

 