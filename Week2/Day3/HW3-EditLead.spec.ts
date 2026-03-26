import {test, expect} from '@playwright/test'

test("2.Edit lead" , async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('//input[@id="username"]').fill("demosalesmanager")
    await page.locator('//input[@id="password"]').fill("crmsfa")
    await page.click('//input[@class="decorativeSubmit"]')
    await page.click('text=CRM/SFA')
    await page.click('//a[text()="Leads"]')
    await page.click('//a[text()="Create Lead"]')
    //entering details
    await page.locator('input[name="companyName"]').fill("Test Leaf")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Dimple")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Asha")
    await page.click('//input[@class="smallSubmit"]')
    //editing company name
    await page.click('//a[text()="Edit"]')
    await page.locator('input[name="companyName"]').fill("UMASS")
    await page.click('//input[@class="smallSubmit"]')

})