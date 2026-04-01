//

import {test, expect} from '@playwright/test'

test("Auto-Waiting", async({page})=>{
    await page.goto("https://leafground.com/waits.xhtml")
    await page.getByText('Click').first().click()
    await expect(page.getByText("I am here")).toBeVisible({ timeout: 15000})
    await page.getByText('Click').nth(1).click()
    await expect(page.getByText('I am about to hide')).toBeHidden({ timeout: 15000})
    await page.getByText('Click First Button').click()
    await expect(page.getByText('Click Second')).toBeEnabled({ timeout: 15000})
    await expect(page.getByText('I am going to change!')).toBeVisible()
    await page.getByText('Click').last().click()

    await expect(page.getByText('Did you notice?')).toBeVisible({timeout:15000})

})
