import {test, expect} from '@playwright/test'
test("Search product, apply filters, add to cart in Decathlon", async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await expect(page.getByText("Sign In")).toBeVisible
    //Search for shoes and verify the results and page title
    await page.getByText(/Search for/).first().click()
    const searchInput = page.getByPlaceholder(/Search For/i)
    await searchInput.fill("shoes")
    await searchInput.press("Enter")
    await page.waitForLoadState('networkidle')
    const pageTitle = await page.title()
    console.log(`The page title is ${pageTitle}`)
    //select- Runnin, Men and Uk- 10.5
    await page.locator('//span[contains(text(),"Running")]/parent::li').first().click({ force: true });
    await page.waitForLoadState('networkidle');
    await page.locator('//span[contains(text(),"Men")]/parent::li').first().click({ force: true });
    await page.waitForLoadState('networkidle');
    await page.locator('//span[contains(text(),"Uk 10.5 - eu 45")]/parent::li').first().click({ force: true });
    await page.waitForLoadState('networkidle');
    //select - sort- High to Low and click on first product from results
    await page.getByAltText("Sorting").last().click()
    await page.getByRole('link', { name: 'Price: High to Low' }).click();
    //click on the first product
    await page.getByText(/Men Running Shoes/).first().click()
    await page.getByText(/10.5 - EU 45/i).click()
    await page.getByRole('button', {name:"addToCart"}).click()
    await expect(page.getByText(/Product added to cart/)).toBeVisible
    await page.locator('//p[text()="Cart"]/parent::div').click()
    //total cart value and print the value
    const cartValue = await page.locator('//p[text()="Total"]/following::p/parent::div[@data-test-id = "cart:cart-checkout-total-cart-value"]').innerText()
    console.log(`The total cart value is ${cartValue}`)  
})