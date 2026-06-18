import {test,expect} from '@playwright/test'

test("handling frames",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const frame=await page.frames()
    console.log("frame count : ",frame.length);

    for(let i of frame){
        console.log("frame url :",i.url())
    }

    //frame=> name,src
    //iframelocator=> css | xpath | built-in locator

    const iFrame=await page.frame({name:"iframe-name"})
    const iFrames=await page.frame({url:"https://legacy.rahulshettyacademy.com/"})

    //const iFrame=await page.frameLocator('//iframe[@id="courses-iframe"]')
    //await iFrame.locator('(//a[text()="Learning paths"])[1]').click()

    await page.pause()

})