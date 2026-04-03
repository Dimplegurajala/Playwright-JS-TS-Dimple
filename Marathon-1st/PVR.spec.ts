import {test, expect} from '@playwright/test'

test("Verify dynamic movie ticket booking flow in PVR Cinemas website", async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")
    await page.getByRole("heading",{name:"Bengaluru"} ).click()
    await page.locator('//span[text()="Cinema"]').click()
    await page.locator('//div[@id="cinema"]//span[text()="Select Cinema"]').click()
    await page.getByText("INOX Nexus Whitefield").click()
    await page.getByText(/Tomorrow/i).click()
    //await page.locator('//div[@id="movie"]').click()
    await page.locator('//li[@class="p-dropdown-item"]').first().click()
    //await page.getByText("Select Timing").first().click()
    await page.locator('(//ul[@role="listbox"]//span/span[@class="mx-2"])[1]').click()
    await page.getByRole('button', {name:"Submit"}).click()
    await page.getByRole('button', {name:"Accept"}).click()
    const primeSeat = page.locator('span[id*="PRIME ROWS"].seat-current-pvr').first()
    const seatId = await primeSeat.getAttribute('id')
    if (seatId) {
        const clickedNumber = seatId.split('|')[1].replace(':', '');
        //.replace(/[^/w]+/g,'')
        console.log(`Successfully captured: ${clickedNumber}`);
        await primeSeat.click();
        const SeatInfo = page.locator('//div[@class= "seat-number"]/p')//.innerText()
        await expect(SeatInfo).toContainText(clickedNumber)
    } 
    else {
        throw new Error("CRITICAL FAILURE: The selected seat has no ID attribute!");
    }
    // verify if total is displayed
    await expect(page.getByText("Grand-Total")).toBeVisible
    const pageTitle = await page.title()
    console.log(`The page title is ${pageTitle}`)
    //proceed
    await page.getByRole('button',{name:"Proceed"}).click()





})