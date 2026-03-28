import {test, expect} from '@playwright/test'
test("Radio Buttons", async({page})=>{
    await page.goto("https://leafground.com/radio.xhtml")
    //const defaultBrowser= await page.locator('//label[contains(text(),"Safari")]')
    //Identify and assert the default selected radio button.
//problem with finding the default -- trying to solve//
    // const default = await page.locator
    await page.click('//label[text()="Chrome"][1]')
    //const mostfavBrowser = await page.locator('//td)]).innerText()
    //await expect(mostfavBrowser).toContainText('Chrome')
    await page.click('//label[text()="Bengaluru"]/parent::div')
    //await page.click('//label[contains(text(),"21-40 Years")]/preceding-sibling::div')
    const ageGroup = page.locator('//label[contains(text(),"21-40 Years")]/preceding-sibling::div//input')
    await expect(ageGroup).toBeChecked()
})