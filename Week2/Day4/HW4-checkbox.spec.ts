import {test,expect} from '@playwright/test'
test("Check-Box", async({page})=> {
    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.click('//span[@class= "ui-chkbox-label"][1]')
    await page.click('//span[text()="Ajax"]/parent::div')
    const notification = page.locator('//span[text()="Checked"]')
    //Verify that the expected message is displayed.
    await expect(notification).toBeVisible()
    //await page.click(checkbox-python)
    await page.click('//label[text()="Python"]/parent::td')
    //await page.click(checkbox-javascript)
    await page.click('//label[text()="Javascript"]/parent::td')
    //tristate checkbox
    await page.click('//span[contains(@class,"ui-chkbox-icon ui-c")]/parent::div')
    //Verify which tri-state option has been chosen.
    const triStateValue = await page.locator('//p[contains(text(),"State")]').innerText()
    console.log("triStateValue: ", `${triStateValue}`)

    await page.click('//div[contains(@class,"ui-toggleswitch-slider")]')
    const toggleSwitchValue = page.locator('//span[text()="Checked"]') 
    await expect(toggleSwitchValue).toBeVisible()
    //Verify that the expected message is displayed.
    //await expect('//span[text()="Disabled"]')
    const chkboxDisabled = page.locator('//span[text()="Disabled"]/ancestor::div[contains(@class,"ui-chkbox")]//input')
    await expect(chkboxDisabled).toBeDisabled();
    await page.click('//span[contains(@class, "ui-icon-triangle")]')
    await page.click('//label[text()="London"]/parent::li')
    await page.click('//label[text()="Amsterdam"]/parent::li')
})