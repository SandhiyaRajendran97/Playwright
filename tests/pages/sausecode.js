import { expect } from "@playwright/test";

class Code{

 constructor(page){
    this.page=page;
    this.username="//input[@id='user-name']";
    this.password="//input[@id='password']";
    this.submit="//input[@id='login-button']";


    this.Backpack="//div[text()='Sauce Labs Backpack']";
   //  this.labs="//div[text()='Sauce Labs Backpack']";
    this.price="//div[text()='29.99']";
    this.add="//button[text()='Add to cart']";
    this.backtoproducts="//button[@id='back-to-products']";
    this.BikeLight="//div[text()='Sauce Labs Bike Light']";
    this.prize="//div[text()='9.99']";
    this.cart="//a[@class='shopping_cart_link']";
    this.checkout="//button[text()='Checkout']";
    


   
 }

 async login (uname,pword){
    await this.page.locator(this.username).fill(uname);
    await this.page.locator(this.password).fill(pword);
    await this.page.locator(this.submit).click()

 }

 async productOne(){
    await this.page.locator(this.Backpack).click();
    await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await this.page.locator(this.add).click()
    await this.page.locator(this.backtoproducts).click();


 }

 async productTwo(){
    await this.page.locator(this.BikeLight).click();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.prize)).toBeVisible();
    await this.page.locator(this.add).click()
    await this.page.locator(this.cart).click()


 }
   
 async carts(){

    await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.prize)).toBeVisible();
    await this.page.locator(this.checkout).click();

 }

   



}
export default Code;