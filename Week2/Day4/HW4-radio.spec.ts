import {test, expect} from '@playwright/test'
test("Radio Buttons", async({page})=>{
    await page.goto("https://leafground.com/radio.xhtml")
    //const defaultBrowser= await page.locator('//label[contains(text(),"Safari")]')
    //Identify and assert the default selected radio button.
    const favSection = page.locator("//h5[text()='Your most favorite browser']/following-sibling::div");
    // 2. Define the Chrome Label RELATIVE to that section
    // NOTICE THE DOT '.' at the start of the XPath
    const chromeLabel = favSection.locator(".//label[text()='Chrome']");
    const chromeInput = favSection.locator(".//label[text()='Chrome']/preceding-sibling::div//input");
    // 3. Action: Click the label
    await chromeLabel.click();
    // 4. Assertion
    await expect(chromeInput).toBeChecked();
    await page.click('//label[text()="Bengaluru"]/parent::div')
    //await page.click('//label[contains(text(),"21-40 Years")]/preceding-sibling::div')
    const ageGroup = page.locator('//label[contains(text(),"21-40 Years")]/preceding-sibling::div//input')
    await expect(ageGroup).toBeChecked()
})