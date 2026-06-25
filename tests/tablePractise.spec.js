import {test,expect} from '@playwright/test'

test("checkbox",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const column = page.locator('//table[@id="productTable"]/thead/tr/th')
    const rows = page.locator('//table[@id="productTable"]/tbody/tr')

    const locat = rows.filter({
        has:page.locator("td"),
        hasText:/Tablet |Smartwatch|Wireless Earbuds|Laptop|Smartphone/

    })
    const boxes = await locat.all()

    for(let i of boxes){
        await i.locator('//input[@type="checkbox"]').check()
    }

    await page.pause()
})