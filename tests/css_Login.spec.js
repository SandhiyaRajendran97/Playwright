import {test,expect} from '@playwright/test';
test ("login to orangeHRMs",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[type="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(5000)
})
    

test ("login to orangeHRM",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@type="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(5000)
})


test("Login to Practise Test Automate",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//input[@id="password"]').fill("Password123")
    await page.locator('//button[@id="submit"]').click()

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    const textLocator='//h1[@class="post-title"]'
    await expect(page.locator(textLocator)).toHaveText("Logged In Successfully")
    await expect(page.locator(textLocator)).toContainText("Logged In")
    await expect(page.locator('//a[@style="color:#ffffff"]')).toBeVisible()
})



test("Login to Practise Test Automationss",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("incorrectUser")
    await page.locator('//input[@id="password"]').fill("Password123")
    await page.locator('//button[@id="submit"]').click()
    await expect(page.locator('//div[@id="error"]')).toBeVisible()
    const ContainText ='//div[@id="error"]'
    await expect(page.locator(ContainText)).toContainText("invalid!")
})


test("Login to Practise Test Auto",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//input[@id="password"]').fill("incorrectPassword")
    await page.locator('//button[@id="submit"]').click()
    await expect(page.locator('//div[@id="error"]')).toBeVisible()
    const ContainText ='//div[@id="error"]'
    await expect(page.locator(ContainText)).toContainText("invalid!")
})


test("Login to Practise Test Automation",async({page})=>{
    await page.goto("https://practice.expandtesting.com/login")

    await page.locator('//input[@name="username"]').fill("practice")
    await page.locator('//input[@name="password"]').fill("SuperSecretPassword!")
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://practice.expandtesting.com/secure')
     await expect(page.locator('//b[contains(text(),"You logged")]')).toBeVisible()
    await expect(page.locator('//div[@class="container"]/descendant::i')).toBeVisible()

})


test("Login to Practise Test Automations",async({page})=>{
    await page.goto("https://practice.expandtesting.com/login")

    await page.locator('//input[@name="username"]').fill("wrongUser")
    await page.locator('//input[@name="password"]').fill("SuperSecretPassword!")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('//b[contains(text(),"invalid")]')).toBeVisible()
    await expect(page).toHaveURL("https://practice.expandtesting.com/login")
})


test("Login to Practised Test Automation",async({page})=>{
    await page.goto("https://practice.expandtesting.com/login")

    await page.locator('//input[@name="username"]').fill("practice")
    await page.locator('//input[@name="password"]').fill("WrongPassword!")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('//b[contains(text(),"invalid")]')).toBeVisible()
    await expect(page).toHaveURL("https://practice.expandtesting.com/login")
})


test("radioo button",async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.locator('//input[@id="yes"]').check()
    await expect(page.locator('//input[@id="yes"]')).toBeChecked()
})


test("radio buttton",async({page})=>{
    await page.goto('https://letcode.in/radio')
    const button=page.locator('//input[@id="nobug"]')
    await page.locator('//input[@id="two"]').check()
    await expect(page.locator('//input[@id="two"]')).toBeChecked()
})

test("radio buttonn",async({page})=>{
    await page.goto('https://letcode.in/radio')
    const nobug=page.locator('//input[@id="nobug"]')
    const bug=page.locator('//input[@id="bug"]')

    await nobug.check()
    await bug.check()
    await expect(page.locator(nobug)).toBeChecked()
    await expect(page.locator('bug')).not.toBeChecked()
})

     test("radios",async({page})=>{
     await page.goto('https://letcode.in/radio')
     await expect(page.locator('//input[@id="maybe"]')).toBeVisible()
     await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()

})



    test("radio buttons",async({page})=>{
    await page.goto('https://letcode.in/radio')
    const button = page.locator('//label[text()="Find if the checkbox is selected?"]/following-sibling::label/child::input')
    await expect(button).toBeEnabled()

  })

  
    test("radio button",async({page})=>{
    await page.goto('https://letcode.in/radio')
    const button = page.locator('//label[text()="Accept the T&C"]/following-sibling::label/child::input')
    await button.click()
    await expect(button).toBeEnabled()

  // await page.pause()

    })
   
    test ("radio",async({page})=>{
    await page.goto('https://letcode.in/dropdowns')   
    const single = page.locator('//select[@id="fruits"]')       
    await single.selectOption("Apple")
    const double = page.locator('//select[@id="superheros"]')
    await double.selectOption(["Ant-Man","Aquaman","The Avengers"])
    const triple= page.locator('//select[@id="lang"]')
    await triple.selectOption("C#")
    const lang=page.locator(["JavaScript","Java","Python","Swift","C#"])
    console.log("Print all selected value:",lang)
    const value= page.locator('//select[@id="country"]')
    await value.selectOption("India")
    const country=page.locator(["India"])
    console.log("selected value:",country)
})



test("file upload",async({page})=>{
await page.goto('https://demoqa.com/upload-download')
await page.locator('//input[@id="uploadFile"]').setInputFiles("C:/Users/ADMIN/Downloads/recent photograph (3) (1).jpg")
await page.locator('//input[@id="uploadFile"]').click()
 await expect(page.locator('//p[@id="uploadedFilePath"]')).toContainText("recent photograph")
//await page.pause()
})



    test("simple alert",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message());
        expect(dialog.message("I am an alert box!"))

        await dialog.accept()
    })

         await page.locator('//button[@class="btn btn-danger"]').click()
         //await page.pause()
})

test("confirmation",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on('dialog',async confirm=>{
        console.log(confirm.type())
        console.log(confirm.message());
        expect(confirm.message("Press a Button!"))

        await confirm.accept()
    })

    await page.locator("//a[contains(text(),'Alert with OK & Cancel')]").click()
    await page.locator('//button[@onclick="confirmbox()"]').click()
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Ok")

    //await page.pause()
})





