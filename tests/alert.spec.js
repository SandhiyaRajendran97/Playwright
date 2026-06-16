import {test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message());
        expect(dialog.message("I am an alert box!"))

        await dialog.accept()
    })

    await page.locator('//button[@id="alertBtn"]').click()
    await page.pause()
})
