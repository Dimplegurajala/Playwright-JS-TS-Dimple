import {test, expect} from '@playwright/test'

test("Verify dynamic movie ticket booking flow in PVR Cinemas website", async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")
    await page.getByRole("heading",{name:"Bengaluru"} ).click()
    await page.getByText("Cinema").click()
    await page.getByRole('button', {name:"Select Cinema"}).click()
    await page.getByText("INOX Nexus Whitefield").click()
    //await page.getByText("Select Date").click()
    await page.getByText(/Tomorrow/i).click()
    

})