import {test,expect} from '@playwright/test'

test ("Keyboard action", async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.locator('//textarea[@name="text1"]').fill("Playwright")
    await page.keyboard.press('Control+A')
     await page.keyboard.press('Control+C')
      await page.keyboard.press('Tab')
       await page.keyboard.press('Control+V') //Arrow up

       await expect(page.locator('//textarea[@name="text2"]')).toHaveValue("Playwright")
       await page.locator('//button[@id="recaptcha"]').click()

       await page.pause()
})

test("hover",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator('//button[@class="dropbtn"]').hover()
 await page.pause()
})

test("Right Click",async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator('//span[@class="context-menu-one btn btn-neutral"]').click({button:'right'})
    await page.pause()
})

test("double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="field1"]').fill('Playwright')
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await expect(page.locator('//input[@id="field2"]')).toHaveValue("Playwright")
    await page.pause()
})

test("Scroll",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//awaitpage.mouse.wheel(0,2000)

await page.locator('//div[@id="footer-2-1"]').scrollIntoViewIfNeeded()
await page.pause()

})

test("drag and drop",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const source = page.locator('//div[@id="draggable"]')
    const target = page.locator('//div[@id="droppable"]')

    //await source.dragTo(target)
     
    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))

    await page.pause()

})