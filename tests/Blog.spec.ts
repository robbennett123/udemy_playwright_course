import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {

    test('Verify recent blog posts', async ({ page }) => {

        // Navigate to the blog page
        await page.goto('https://practice.sdetunicorns.com/blog/');

        //Add a soft assertion on the title of the first blog post.Soft assertion allows the test to continue even if the assertion fails.
        await expect.soft(page.locator('#recent-posts-3 ul li').first()).toContainText('IFrame Sample');

        //If you have a number of soft assertions and you want the test to fail immediately if they get above a threshhold, you can use
        expect(test.info().errors.length).toBeLessThan(2);

        // Count the number of blog posts
        const blogPosts = page.locator('#recent-posts-3 ul li');
        const numberOfBlogPosts = await blogPosts.count();
        expect(numberOfBlogPosts).toBe(5);
        console.log(`Number of blog posts: ${numberOfBlogPosts}`);

        // Calculate and log the length of all the blog post titles
        for (const el of await blogPosts.elementHandles()) {
            expect((await el.textContent()).trim().length).toBeGreaterThan(10);


        }

    })


})
