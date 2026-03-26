import {test, expect} from '@playwright/test'

test("3.Create Individual", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.locator('//input[@id= "username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025")
    await page.click('//input[@id="Login"]')
    await page.click('//div[@class="slds-icon-waffle"]')
    await page.click('//*[@class="slds-button"]')
    await page.click('//p[text()="Individuals"]')
    await page.click('//span[text()="Individuals"][1]')
    await page.locator('//input[contains(@id,"input")])[1]').fill("Asha")
    await page.click('//input[contains(@id,"input")])[1]')
    


})