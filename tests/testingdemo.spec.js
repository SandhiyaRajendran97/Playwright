import{test,expect} from '@playwright/test'

test ('Register',async({page})=>{
 await page.goto('https://demo.automationtesting.in/Register.html')
 await page.locator('//input[@placeholder="First Name"]').fill("Sandhiya")
 await page.locator('//input[@placeholder="Last Name"]').fill("Raj")

 await page.locator('//textarea[@ng-model="Adress"]').fill("Chennai")
 await page.locator('//input[@type="email"]').fill("sandhiyaraj@gmail.com")
 await page.locator('//input[@type="tel"]').fill('8754258396')

 await page.locator('//input[@value="FeMale"]').check()
 await page.locator('//input[@id="checkbox2"]').check()
 await page.locator('//div[@id="msdd"]').click()
 await page.locator('//a[text()="Arabic"]').click()
 await page.locator('//select[@id="Skills"]').selectOption("Javascript")
 await page.locator('//select[@id="countries"]').click()
 await page.locator('//span[@role="combobox"]').click()
 await page.locator('//Li[text()="India"]').click()

 await page.locator('//select[@id="yearbox"]').selectOption("1997")
 await page.locator('//select[@placeholder="Month"]').selectOption("November")
 await page.locator('//select[@id="daybox"]').selectOption("12")

 await page.locator('//input[@id="firstpassword"]').fill("Sandy1234@")
 await page.locator('//input[@id="secondpassword"]').fill("Sandy1234@")


 await page.locator('//input[@type="file"]').setInputFiles("C:/Users/ADMIN/Downloads/git hub image.png")
 await page.locator('//input[@onchange="uploadimg()"]').click()
 
 await page.locator('//button[@id="submitbtn"]').click()

 


//await page.pause()



})

test("single frame",async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleframe=await page.frames()
    console.log("frame count : ",singleframe.length)

    for(let i of singleframe){
       console.log("frame url :",i.url())

     }

    const iFrame=await page.frameLocator('//iframe[@name="SingleFrame"]')
    await iFrame.locator('(//input[@type="text"])[1]').fill("Hi hellow")

   // await page.pause()
})

test("Parent iframe",async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/')
    const parentFrame=await page.frames()
    console.log("frame count : ",parentFrame.length)

    for(let i of parentFrame){
        console.log("frame.url: ",i.url())
    }
    const iframe=await page.frameLocator('//iframe[@name="demo_parent_iframe"]')
    await iframe.locator('(//button[@onclick="myFunction()"])[1]').click()

   // await page.pause()

})


test('Nested frames', async ({ page }) => {

    await page.goto('https://www.dezlearn.com/nested-iframes-example/')
    const frames = page.frames()
    for (const frame of frames) {
        console.log(frame.name(), frame.url())
    }
    for (const frame of frames) {
        if (await frame.locator('#u_5_5').count() > 0) {
            await frame.locator('#u_5_5').click()
            console.log('Clicked Parent Frame Button')
        }
    }
    for (const frame of frames) {
        if (await frame.locator('#u_5_6').count() > 0) {
            await frame.locator('#u_5_6').click()
            console.log('Clicked Child Frame Button')
        }
    }
   // await page.pause();
})