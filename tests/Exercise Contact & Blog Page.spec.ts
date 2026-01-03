import{test, expect}from'@playwright/test';

test.describe('submitContactForm', () => {
    test('submitContactFormAndVerifySuccessMessage', async ({ page }) => {

        // Navigate to the contact page
        await page.goto('https://practice.sdetunicorns.com/contact/');
        
        // Fill out the contact form
        await page.getByRole('textbox', { name: 'Name *' }).click();
        await page.getByRole('textbox', { name: 'Name *' }).fill('rob');
        await page.getByRole('textbox', { name: 'Email *' }).click();   
        await page.getByRole('textbox', { name: 'Email *' }).fill('rob@example.com');
        await page.getByRole('textbox', { name: 'Phone *' }).click();
        await page.getByRole('textbox', { name: 'Phone *' }).fill('1234567890');
        await page.getByRole('textbox', { name: 'Message' }).click();
        await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.');
        await page.getByRole('button', { name: 'Submit' }).click();


        await expect(page.getByRole('link', {name: 'CALL US NOW'})).toBeVisible();


        // Verify the success message
        await expect(page.getByRole('alert')).toContainText('Thanks for contacting us! We will be in touch with you shortly');
    })

    test('checkNumberOfBlogPosts', async ({ page }) => {
         // Navigate to the contact page
        await page.goto('https://practice.sdetunicorns.com/blog/');
        
    })
    
    
})
