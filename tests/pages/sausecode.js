import { expect } from "@playwright/test";

class code{

 constructor(page){
    this.page=page;
    //this.username="//input[@id='user-name']";
    //this.password="//input[@id='password']";
    this.submit="//input[@id='login-button']";
    this.Backpack="//div[text()='Sauce Labs Backpack']";
    //this.labs="//div[text()='Sauce Labs Backpack']";
    this.price="//div[text()='29.99']";
    this.add="//button[text()='Add to cart']";
    this.backtoproducts="//button[@id='back-to-products']";
    this.BikeLight="//div[text()='Sauce Labs Bike Light']";
    this.prize="//div[text()='9.99']";
    this.cart="//a[@class='shopping_cart_link']";
    this.checkout="//button[text()='Checkout']";
    //this.firstname="//input[@id='first-name']";
    //this.secondname="//input[@id='last-name']";
    //this.postal="//input[@id='postal-code']";
    this.continue="//input[@id='continue']";
    this.payment="//div[text()='SauceCard #31337']";
    this.shipping="//div[text()='Free Pony Express Delivery!']"
    this.total="//div[text()='43.18']"
    this.finish="//button[@id='finish']";
    this.img="//img[@data-test='pony-express']";
    this.thanks="//h2[text()='Thank you for your order!']";
    this.icon="//button[text()='Open Menu']";
    this.Logout="//a[text()='Logout']";


   
 }

 async login (username,password,firstname,secondname,postal){
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.submit).click()
    await this.page.locator(this.Backpack).click();
    await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await this.page.locator(this.add).click()
    await this.page.locator(this.backtoproducts).click();
    await this.page.locator(this.BikeLight).click();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.prize)).toBeVisible();
    await this.page.locator(this.add).click()
    await this.page.locator(this.cart).click()
    await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.prize)).toBeVisible();
    await this.page.locator(this.checkout).click();
    await this.page.locator(this.firstname).fill(firstname);
    await this.page.locator(this.secondname).fill(secondname);
    await this.page.locator(this.postal).fill(postal);
    await this.page.locator(this.continue).click();
    await expect(this.page.locator(this.Backpack)).toBeVisible();
    await expect(this.page.locator(this.price)).toBeVisible();
    await expect(this.page.locator(this.BikeLight)).toBeVisible();
    await expect(this.page.locator(this.payment)).toBeVisible();
    await expect(this.page.locator(this.shipping)).toBeVisible();
    await expect(this.page.locator(this.total)).toBeVisible();
    await this.page.locator(this.finish).click();
    await expect(this.page.locator(this.img)).toBeVisible();
    await expect(this.page.locator(this.thanks)).toBeVisible();
    await this.page.locator(this.backtoproducts).click();
    await this.page.locator(this.icon).click();
    await this.page.locator(this.Logout).click();









 }





}
export default code;