import {test, expect} from '@playwright/test'

test("Create Lead- Playwright Locators", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole('textbox', {name:'Username'}).fill('Demosalesmanager')
    await page.getByRole('textbox', {name:'Password'}).fill('crmsfa')
    await page.getByRole('button', {name:'Login'}).click()
    await page.getByRole('link', {name:'CRM/SFA'}).click()
    await page.getByRole('link', {name:'Leads'}).click()
    await page.getByRole('link', {name:'Create Lead'}).click()
    await page.locator('#createLeadForm_companyName').fill('Test Leaf')
    await page.locator('#createLeadForm_firstName').fill('Dimple')
    await page.locator('#createLeadForm_lastName').fill('Asha')
    await page.locator('#createLeadForm_personalTitle').fill('Ms.')
    await page.locator('#createLeadForm_departmentName').fill('QA Automation')
    await page.locator('#createLeadForm_generalProfTitle').fill('Lead')
    await page.locator('#createLeadForm_annualRevenue').fill('10,00,000')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9441499879')
    await page.getByRole('button', {name:'Create Lead'}).click()

    await expect(page).toHaveURL(/viewLead/)
})