import{test, expect} from '@playwright/test'
test("File Upload Assesment", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole('textbox', {name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole('textbox', {name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole('button',{name: "Log In"}).click()

    await page.getByRole('button', {name:"App Launcher"}).click()
    await page.getByRole('button', {name:"View All Applications"}).click()
    await page.getByRole('combobox', {name:"Search apps or items..."}).fill("Accounts")
    await page.locator('//mark[text()="Accounts"]').click()
    await page.locator('//div[text()="New"]/parent::a[@role="button"]').click()
    //fill Account Name
    await page.getByRole('textbox', {name:"Account Name"}).fill("Dimple Asha")
    //select "Prospect" from "Type" dropdown
    await page.getByRole('combobox', {name:"Type"}).click()
    await page.getByRole('option', { name: "Prospect"}).click()
    //select "Banking" from "Industry" dropdown
    await page.getByRole('combobox', {name:"Industry"}).click()
    await page.getByRole('option', {name: "Banking"}).click()
    //save and assert the new account
    await page.getByRole('button', {name:"Save"}).last().click()
    const successToast = page.locator('.toastMessage')
    await expect(successToast).toBeVisible()
    await expect(successToast).toContainText("Dimple Asha")
    //upload File and assert the uploaded file
    await page.locator('input[type="file"]').setInputFiles('data/appu.png');
    await page.waitForTimeout(2000)
    const DoneBtn= page.getByRole('button',{name:"Done"})
    await expect(DoneBtn).toBeEnabled()
    await DoneBtn.click()
    const UploadSuccess = page.locator('//div[contains(@id, "toastDescription")]')
    await expect(UploadSuccess).toBeVisible()
    await expect(UploadSuccess).toContainText("1 file was added to the Account.")
})

 