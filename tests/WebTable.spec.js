import {test,expect} from '@playwright/test'

test("Web Table",async({page})=>{
 await page.goto("https://www.dezlearn.com/webtable-example/")

 const row = await page.locator("//table[@class='tg']//tbody//tr");
 const column =await page.locator("//table[@class='tg']//tbody//tr//td");

 console.log("No of Rows :", await row.count()); //7
 console.log("No of columns :", await column.count());// 36










})

