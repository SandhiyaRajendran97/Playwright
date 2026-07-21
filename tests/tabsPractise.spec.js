import{test,expect, chromium} from '@playwright/test'
    test("Amazon",async()=>{
        const browser= await chromium.launch()
        const context=await browser.newContext()
        const page=await context.newPage()
        const newPage=await context.newPage()

    await page.goto("https://www.amazon.in/")
    console.log(await page.title())

    await page.waitForTimeout(3000)

    await newPage.goto("https://www.amazon.in/SHREIT")
    console.log(await newPage.title())

     await page.waitForTimeout(3000) 

})

test("page navigation",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(2000)

    await page.goto("https://www.flipkart.com/mobile-phones")
    await page.waitForTimeout(2000)

    await page.goBack()
    await page.waitForTimeout(2000)

    await page.goForward()
    await page.waitForTimeout(2000)


})
