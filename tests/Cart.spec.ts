import{test, expect}from'@playwright/test';
const path = require('path');

test.describe('', () => {
    
test('file upload', async ({ page }) => {

// Navigate to the cart page
    await page.goto('https://practice.sdetunicorns.com/cart/');

// store test file path
const filePath = path.resolve(__dirname, '../testData/pngFile.png');


// Upload test file - QUESTION how is this locator being identified? Answer: 1. the # denotes id 
//2. input is the element type 3. upfile_1 is the id value
// This command would still run as 'await page.setInputFiles('#upfile_1', filePath);'
//id as an identifier is not the best practice, but we use it here because the field is hidden
await page.setInputFiles('input#upfile_1', filePath);


// click Submit button
await page.getByRole('button', { name: 'Upload File' }).click();

// Verify file upload success
    await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('pngFile.png uploaded successfully');
})

test('file upload from hidden field', async ({ page }) => {

// Navigate to the cart page
    await page.goto('https://practice.sdetunicorns.com/cart/');

// store test file path
const filePath = path.resolve(__dirname, '../testData/pngFile.png');

//DOM manipulation to make the hidden field visible. This finds the hidden class for the hidden elements and removes it - making the element visible
await page.evaluate(() => {
    const visibleSelector = document.querySelector('#upfile_1');
    if (visibleSelector) {
        visibleSelector.className = '';
    }
});


// Upload test file - QUESTION how is this locator being identified? Answer: 1. the # denotes id 
//2. input is the element type 3. upfile_1 is the id value
// This command would still run as 'await page.setInputFiles('#upfile_1', filePath);'
//id as an identifier is not the best practice, but we use it here because the field is hidden
await page.setInputFiles('input#upfile_1', filePath);


// click Submit button
await page.getByRole('button', { name: 'Upload File' }).click();

// Verify file upload success
    await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('pngFile.png uploaded successfully');
})

})
