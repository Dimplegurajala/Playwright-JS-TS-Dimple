import {test, expect} from '@playwright/test'
test("Radio Buttons", async({page})=>{
    await page.goto("https://leafground.com/radio.xhtml")
    const defaultBrowser= await page.locator('//label[contains(text(),"Safari")]')
    //Identify and assert the default selected radio button.
    // const default = await page.locator
    await page.click('//label[text()="Chrome"][1]')
    const mostfavBrowser = page.locator('//label[text()="Chrome"][1]')
    await expect(mostfavBrowser).toBeChecked()
    await page.click('//label[text()="Bengaluru"]/parent::div')
    await page.click('//label[contains(text(),"21-40 Years")]/parent::div')
    const ageGroup = page.locator('//label[contains(text(),"21-40 Years")]/parent::div')
    await expect(ageGroup).toBeChecked()
})