import{test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.screenshot({path:"tests/ScreenShot.spec.js/"+"automation.png"})
    //await page.screenshot({path:"tests/ScreenShot.spec.js/"+"fullpage.png", fullPage:true})
    await page.locator('//td[@class="first columns-cell"]').screenshot({path:"tests/ScreenShot.spec.js/"+"form.png"})




})