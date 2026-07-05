    import {test,expect} from '@playwright/test'

    test ("single file upload",async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/ADMIN/Downloads/recent photograph (3) (1).jpg")
        await page.locator("//button[text()='Upload Single File']").click()
        await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: recent photograph")
        await page.pause()

    })

        test("Multiple file upload",async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/ADMIN/Downloads/recent photograph (3).jpg","C:/Users/ADMIN/Downloads/recent photograph (3) (1).jpg"])
        await page.locator("//button[text()='Upload Multiple Files']").click()
        await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected:")
        await page.pause()

    })

    test.only("Download file",async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download]=await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[text()="sample.xlsx"]').click()
        ])
            const filepath="C:/Users/ADMIN/Downloads/sample.xlsx"
            await download.saveAs(filepath)
    })
