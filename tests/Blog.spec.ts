import{test, expect}from'@playwright/test';

test.describe('Blog Page', () => {

    test('Verify recent blog posts', async ({ page }) => {

// Navigate to the blog page
    await page.goto('https://practice.sdetunicorns.com/blog/');
        
// Count the number of blog posts
    const blogPosts = page.locator('#recent-posts-3 ul li');
    const numberOfBlogPosts = await blogPosts.count();
    expect(numberOfBlogPosts).toBe(5);
    console.log(`Number of blog posts: ${numberOfBlogPosts}`);

// Calculate and log the length of all the blog post titles
    for (const el of await blogPosts.elementHandles()) {
    expect((await el.textContent()).length).toBeGreaterThan(0);
}

    })
    
    
})
