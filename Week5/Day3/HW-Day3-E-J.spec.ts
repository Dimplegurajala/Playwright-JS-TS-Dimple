//env + JSON specific-- Data Parametrization
import{test,expect} from '@playwright/test'
import dotenv from "dotenv"
import fs from "fs"
import path from "path"

//import testdata from "./Day3/Leafdata-qa.json" - using data with path-- to load data file specific to env

let env = process.env.envfile || "prod"
dotenv.config({path:path.resolve(__dirname,'..',`Day3/${env}.env`)})

let datapath = path.resolve(__dirname,'data-Day3', `Leafdata-${env}.json`)
let rawData = fs.readFileSync(datapath,'utf-8')
let testdata = JSON.parse(rawData)


for(let data of testdata){
    test(`json data parametrization with env switching ${data.TestCaseID}`,async({page})=>{
        let URL = process.env.LF_URL as string
        await page.goto(URL)
        await page.getByRole('textbox', {name:"Username"}).fill(data.Username)
        await page.getByRole('textbox', {name:"Password"}).fill(data.Password)
        await page.getByRole('button', {name:"Login"}).click()
        await page.getByRole('link', {name:"CRM/SFA"}).click()
        await page.getByRole('link', {name:"Leads",exact:true}).click()
        await page.getByRole('link', {name:"Create Lead",exact:true}).click()

        //lead creation- enter Company, First and Last Name
        await page.locator("#createLeadForm_companyName").fill(data.CompanyName)
        await page.locator("#createLeadForm_firstName").fill(data.FirstName)
        await page.locator("#createLeadForm_lastName").fill(data.LastName)
        //select an option from Source Dropdown using label
        await page.locator("#createLeadForm_dataSourceId").selectOption({label:data.Source})
        //select option from Marketing DropDown- using label
        await page.locator("#createLeadForm_marketingCampaignId").selectOption({label:data.MarketingCampaign})
        //count and print all options from Marketing DropDown
        const MDD = page.locator("#createLeadForm_marketingCampaignId option")
        const CountMDD = await MDD.count()
        console.log(`The total number of options in Marketing Campaign dropdown are : ${CountMDD}`)
        const allOptionsMDD = await MDD.allInnerTexts()
        console.log(`All the options in Marketing Dropdown are :`, allOptionsMDD.join(", "))
        //click on Industry dropdown and select option based on index
        await page.locator("#createLeadForm_industryEnumId").selectOption({index:data.IndustryIndex})
        //select Preferred currency based on value
        await page.locator("#createLeadForm_currencyUomId").selectOption({value:data.PreferredCurrency})
        //select country from Dropdown based on value
        await page.locator("#createLeadForm_generalCountryGeoId").selectOption({value:data.Country})
        //select state based on value
        await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:data.State})
        //count and print all state in dropdown
        const StateDD = page.locator("#createLeadForm_generalStateProvinceGeoId option")
        const countSDD = await StateDD.count()
        console.log(`The number of options in state Dropdown are: ${countSDD}`)
        const allOptionsSDD = await StateDD.allInnerTexts()
        console.log(`All the states in dropdown for the selected country are:`, allOptionsSDD.join(", "))
    })
}



