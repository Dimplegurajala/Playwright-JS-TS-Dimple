import{test,expect} from '@playwright/test'
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"

//let value:any[]=parse(fs.readFileSync("Day1-HW/hwLeaf.csv"),{columns:true, skip_empty_lines:true})
const filePath = path.join(__dirname, 'hwLeaf.csv');
let value: any[] = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true });
for(let data of value){
    test(`Data Paramtrization using .csv: ${data.TestcaseID}`, async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.getByRole('textbox',{name:"Username"}).fill(data.Username)
        await page.getByRole('textbox',{name:"Password"}).fill(data.Password)
        await page.getByRole('button',{name:"Login"}).click()
        await page.getByRole('link',{name:"CRM/SFA"}).click()
        await page.getByRole('link',{name:"Leads", exact:true}).click()
        await page.getByRole('link',{name:"Create Lead", exact:true}).click()
        //fill-company Name, First Name and Last Name--//to make the fields independent - await page.locator("...").fill(data.FirstName + Date.now());
        await page.locator("#createLeadForm_companyName").fill(data.CompanyName)
        await page.locator("#createLeadForm_firstName").fill(data.FirstName)
        await page.locator("#createLeadForm_lastName").fill(data.LastName)
        //select Source as Direct Mail using label
        await page.locator("#createLeadForm_dataSourceId").selectOption({label:data.Source})
        //select Marketing Campaign using label and count and print all values in its drop down
        await page.locator("#createLeadForm_marketingCampaignId").selectOption({label:data.MarketingCampaign})
        const MarketingDD = page.locator("#createLeadForm_marketingCampaignId option")
        const countMDD = await MarketingDD.count()
        console.log(`Number of items in Marketing drop down are: ${countMDD}`)
        const allOptionsMDD = await MarketingDD.allInnerTexts()
        console.log(`the list of options in Marketing Drop down are:`, allOptionsMDD.join(", "))
        //select Industry by Index-- as csv values are string-- we need to convert to number
        const IndustryIdx = parseInt(data.IndustryIndex, 10);
        await page.locator("#createLeadForm_industryEnumId").selectOption({index:IndustryIdx})
        //select Preferred currency as INR using Value from Drop Down
        await page.locator("#createLeadForm_currencyUomId").selectOption({value:data.PreferredCurrency})
        //select country as IND using value from Drop Down
        await page.locator("#createLeadForm_generalCountryGeoId").selectOption({value:data.Country})
        //select state from Drop down and count states and print all states to console
        await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:data.State})
        const StateDD = page.locator("#createLeadForm_generalStateProvinceGeoId option")
        const StateCount = await StateDD.count()
        console.log(`The total number of states are :${StateCount}`)
        const allOptionsState = await StateDD.allInnerTexts()
        console.log(`The list of states in Dropdown are :`,allOptionsState.join(", "))
    })
}