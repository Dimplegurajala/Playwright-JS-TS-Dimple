//Assignment 1- Create Lead
import {test, expect} from '@playwright/test'
test("1.Create Lead", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    //login
    await page.locator('//input[@id = "username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025")
    await page.click('//input[@id = "Login"]')
    //create lead
    await page.click('//*[@class= "slds-icon-waffle"]')
    await page.click('//*[@class ="slds-button"]')
    await page.click('//p[contains(text(),"Manage your sales")]')
    //await page.click('//p[@class="slds-truncate"][7]')
    await page.click('//span[text()="Leads"][1]')
    await page.click('//div[text()="New"]')
    await page.click('button[name="salutation"]')
    //await page.click('//button[contains(@class,"slds-combobox")][3]')
    //await page.click('//*[contains(@id,"combobox-button")][3]')
    await page.click('lightning-base-combobox-item span[title="Ms."]')
    

    await page.locator('input[name="lastName"]').fill("Asha")
    await page.locator('input[name="Company"]').fill("Test Leaf")
    await page.click('button[name="SaveEdit"]')
    //await page.click('//button[text()="Save"]')
    const successToast = page.locator('//span[contains(@class,"toastMessage")]');
    await expect(successToast).toBeVisible();
    await expect(successToast).toContainText('Lead "Ms. Asha" was created');

})