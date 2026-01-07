import{test, expect}from'@playwright/test';
const path = require('path');

test.describe('', () => {
    
test('file upload', async ({ page }) => {

// Navigate to the cart page
    await page.goto('https://practice.sdetunicorns.com/cart/');

// store test file path
const filePath = path.resolve(__dirname, '../data/Rob Test Upload File.txt');


// Upload test file - QUESTION how is this locator being identified? Answer: 1. the # denotes id 
//2. input is the element type 3. upfile_1 is the id value
// This command would still run as 'await page.setInputFiles('#upfile_1', filePath);'
//id as an identifier is not the best practice, but we use it here because the field is hidden
await page.setInputFiles('input#upfile_1', filePath);


// click Submit button
await page.getByRole('button', { name: 'Upload File' }).click();

// Verify file upload success
    
})


})
