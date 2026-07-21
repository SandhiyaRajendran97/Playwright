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
    //await page.pause()
})


test("confirmation",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async confirm=>{
        console.log(confirm.type())
        console.log(confirm.message());
        expect(confirm.message("Press a button!"))

        await confirm.accept()
    })

    await page.locator('//button[@id="confirmBtn"]').click()
    //await page.pause()
})

    test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async confirm=>{
        console.log(confirm.type())
        console.log(confirm.message());
        expect(confirm.message("Press a button!"))

        await confirm.dismiss()
    })
     await page.locator('//button[@id="confirmBtn"]').click()
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")
   // await page.pause()
})
 
   test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async prompt=>{
        console.log(prompt.type())
        console.log(prompt.message());
        expect(prompt.message("Press a button!"))

        await prompt.accept("Playwright")
    })
     await page.locator('//button[@id="promptBtn"]').click()
    await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello Playwright! How are you today?")
   // await page.pause()
})

  test("prompt",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async prompt=>{
        console.log(prompt.type())
        console.log(prompt.message());
        expect(prompt.message("Press a button!"))

        await prompt.dismiss("Playwright")
    })
     await page.locator('//button[@id="promptBtn"]').click()
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")
   // await page.pause()
})

test('Simple Alert', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.locator("text=Click for JS Alert").click();

  await expect(page.locator("#result"))
    .toHaveText("You successfully clicked an alert");
});






