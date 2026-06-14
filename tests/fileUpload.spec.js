import {test,expect} from '@playwright/test'

test ("single file upload",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/ADMIN/Downloads")
    await page.locator('//button[contains(text(),"Single File"]').click()
    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single File Selected: img_one.webp")
    await page.pause()

})
