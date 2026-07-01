import{test,expect } from '@playwright/test'

test ("Login into SwagLabs",async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()

    await page.locator("//div[text()='Sauce Labs Backpack']").click()
    const bag = "//div[text()='Sauce Labs Backpack']" 
    await expect(page.locator(bag)).toBeVisible()
    const prize = "//div[text()='29.99']"
    await expect(page.locator(prize)).toBeVisible()
    const cart ="//button[@id='add-to-cart']"
    await page.locator(cart).click()

    
    const back="//button[@id='back-to-products']"
    await page.locator(back).click()


    await page.locator("//div[text()='Sauce Labs Bike Light']").click() 
    const products = "//div[text()='Sauce Labs Bike Light']"
    await expect(page.locator(products)).toBeVisible()
    const paise = "//div[text()='9.99']"
    await expect(page.locator(paise)).toBeVisible()
    await page.locator(cart).click()

    await page.locator(back).click()

    await page.locator("//a[@class='shopping_cart_link']").click()
    await expect(page.locator(bag)).toBeVisible()
    await expect(page.locator(prize)).toBeVisible()
    await expect (page.locator(products)).toBeVisible()
    await expect(page.locator(paise)).toBeVisible()


    await page.locator("//button[@id='checkout']").click()

    await page.locator("//input[@id='first-name']").fill("sandhiya")
    await page.locator("//input[@id='last-name']").fill("Raj")
    await page.locator("//input[@id='postal-code']").fill("607 106")

    await page.locator("//input[@id='continue']").click()

    const payment ="//div[text()='SauceCard #31337']"
    await expect(page.locator(payment)).toBeVisible()

    const shipping ="//div[text()='Free Pony Express Delivery!']"
    await expect(page.locator(shipping)).toBeVisible()


    const total = "//div[text()='43.18']"
    await expect(page.locator(total)).toBeVisible()

    await page.locator("//button[@id='finish']").click()

    const image = "//img[@class='pony_express']"
    await expect (page.locator(image)).toBeVisible()

    const ending ="//h2[text()='Thank you for your order!']"
    await expect (page.locator(ending)).toBeVisible()

    await page.locator("//button[@id='back-to-products']").click()

    await page.locator("//button[@id='react-burger-menu-btn']").click()
    await page.locator("//a[@id='logout_sidebar_link']").click()


 await page.pause()
})