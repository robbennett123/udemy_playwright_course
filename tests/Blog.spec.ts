import{test, expect}from'@playwright/test';

test.describe('submitContactForm', () => {

    test('expectedBlogPosts', async ({ page }) => {
        const expectedblogPostList=[
            'IFrame Sample',
            'Successful Marketing Ads for Your Business',
            'Let’s Building Your Business from Scratch',
            'The Best Place to Invest Your Money',
            'The Big Seminar for Your Right Investment',
        ]
        //log blogPostList
        console.log(`Number of expected blog posts: ${expectedblogPostList.length}`);
     

         // Navigate to the contact page
        await page.goto('https://practice.sdetunicorns.com/blog/');
        
        // Count the number of blog posts
    const blogPosts = page.locator('#recent-posts-3 li');
    const count = await blogPosts.count();
    console.log(`Number of blog posts: ${count}`);

    console.log('Length of blog post 1 title:');

// 1. Get the first post using .first()
// 2. Extract the text content using .innerText()
// 3. Use .trim() to remove extra whitespace before counting length
    const firstPostTitle = await blogPosts.first().innerText();
    console.log(firstPostTitle.trim().length);
    

    
        //verify navLinks text
        //expect(await blogPosts.allTextContents()).toEqual(expectedblogPostList);
        
for (const post of await blogPosts.elementHandles()) {
    const textContent = await post.textContent();
    console.log(`Blog post title: ${textContent}`);
}

    })
    
    
})
