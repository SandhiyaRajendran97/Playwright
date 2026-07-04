import { expect } from "@playwright/test";

class Checkout{

 constructor(page){
    this.page=page;

    this.firstname="//input[@id='first-name']";
    this.secondname="//input[@id='last-name']";
    this.postal="//input[@id='postal-code']";
    this.continue="//input[@id='continue']";
    this.payment="//div[text()='SauceCard #31337']";
    this.shipping="//div[text()='Free Pony Express Delivery!']"
    this.total="//div[text()='43.18']"
    this.finish="//button[@id='finish']";
    this.img="//img[@data-test='pony-express']";
    this.thanks="//h2[text()='Thank you for your order!']";
    this.icon="//button[text()='Open Menu']";
    this.Logout="//a[text()='Logout']";
    this.Backpack="//div[text()='Sauce Labs Backpack']";
    this.price="//div[text()='29.99']";
    this.BikeLight="//div[text()='Sauce Labs Bike Light']";
    this.backtoproducts="//button[@id='back-to-products']";
    //button[text()='Back Home']


   
 }

 async Detail(fname,sname,postalno){
   
    await this.page.locator(this.firstname).fill(fname);
    await this.page.locator(this.secondname).fill(sname);
    await this.page.locator(this.postal).fill(postalno);
    await this.page.locator(this.continue).click();
 }


 async verify(){

  await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.payment)).toBeVisible();
    await expect(this.page.locator(this.shipping)).toBeVisible();
    await expect(this.page.locator(this.total)).toBeVisible();
    await this.page.locator(this.finish).click();

 } 

 async logouts(){

    await expect(this.page.locator(this.img)).toBeVisible();
    await expect(this.page.locator(this.thanks)).toBeVisible();
    await this.page.locator(this.backtoproducts).click();
    await this.page.locator(this.icon).click();
    await this.page.locator(this.Logout).click();

 }
 

}
export default Checkout;