import{test, expect}from'@playwright/test';
const path = require('path');

test.describe('', () => {
    
test('file upload', async ({ page }) => {

// Navigate to the cart page
    await page.goto('https://practice.sdetunicorns.com/cart/');

// store test file path
const filePath = path.resolve(__dirname, '../data/Rob Test Upload File.txt');


// Upload test file - QUESTION how is this locator being identified?
await page.setInputFiles('input#upfile_1', filePath);

// click Submit button
await page.getByRole('button', { name: 'Upload File' }).click();

// Verify file upload success
    
})


})
