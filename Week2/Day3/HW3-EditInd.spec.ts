import {test, expect} from '@playwright/test'

test("4.Edit Individual", async({page})=>{
    //navigate to url
    await page.goto("https://login.salesforce.com")
    //login
    await page.locator('//input[@id= "username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025")
    await page.click('//input[@id="Login"]')
    //app launcher- View All and click Individuals
    await page.click('//div[@class="slds-icon-waffle"]')
    await page.click('//button[@class="slds-button"]')
    await page.click('//p[text()="Individuals"]')
    await page.click('//span[text()="Individuals"][1]')
    //serach for last name in search
    const searchBox = page.locator('input[placeholder="Search this list..."]')
    await searchBox.fill("Asha")
    await searchBox.press('Enter')
    await page.waitForTimeout(2000)

    // Match with Last Name "Asha" and Empty first Name
    const rowAction = page.locator("//a[@title='Asha']/ancestor::tr//button[contains(@class,'slds-button')]").first()
    await rowAction.click()
    //await page.locator('//table//tr[contains(., "Asha")]//a[contains(@class, "slds-button")]').click();
    
    // Edit the resulted field
    await page.click('a[title="Edit"]');

    // Salutation as Mr. 
    await page.click('//div[contains(@class,"salutation")]')
    await page.click('//a[contains(text(),"Mr.")]')
    // await page.click('//span[contains(text(),"Show more actions"])[1]')
    // await page.click('//div[text()="Edit"][1]')
    // await page.click('//a[@class="select"][1]')
    // await page.click('//a[text()="Mr."]')
    await page.locator('//input[contains(@class,"firstName")]').fill("Dimple")
    await page.click('//span[text()="Save"]')
    //assert first name updated
    const successToast = page.locator('//span[contains(@class,"toastMessage")]')
    await expect(successToast).toBeVisible()
    await expect(successToast).toContainText('Individual "Dimple Asha" was saved.')

})