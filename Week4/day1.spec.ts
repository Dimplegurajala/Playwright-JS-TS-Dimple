//framelocator -  framelocator().locator().click()-like a page locator based
import {test,expect} from '@playwright/test'
test("Frames-Assesment", async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    let frame1= page.frameLocator('//iframe[@src="default.xhtml"]').locator('//button[@id="Click"]')
    await frame1.click()
    await expect(frame1).toHaveText("Hurray! You Clicked Me.")

    let frame4 = page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('//iframe[@id="frame2"]').locator('//button[@id="Click"]')
    await frame4.click()
    await expect(frame4).toHaveText("Hurray! You Clicked Me.")


})