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

 


await page.pause()



})

