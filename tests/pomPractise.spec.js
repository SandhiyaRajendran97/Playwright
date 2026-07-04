import{test,expect} from '@playwright/test'
import Code from './pages/sausecode'
import Checkout from './pages/Product';
import cred from './test-data/sausecode.json'

test ("Login using sausecode",async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    let logincode = new Code (page);

   await logincode.login(cred.username,cred.password);
   await logincode.productOne()
   await logincode.productTwo()
   await logincode.carts()
   
   let logoutcode = new Checkout(page);

   await logoutcode.Detail(cred.firstname,cred.lastname,cred.PostalCode);
   await logoutcode.verify();
   await logoutcode.logouts();


    await page.pause()




})