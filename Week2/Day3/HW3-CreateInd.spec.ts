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
    const newIndividualOption = page.locator("//span[text()='New Individual']")
    await expect(newIndividualOption).toBeVisible()
    await newIndividualOption.click()
    await page.locator('//input[contains(@class,"lastName")]').fill("Asha")
    await page.click('//span[text()="Save"]') 
    const successToast = page.locator('//span[contains(@class,"toastMessage"]')
    await expect(successToast).toBeVisible()
    await expect(successToast).toContainText('Individual "Asha" was created.')

})