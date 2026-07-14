import { test } from '@playwright/test';

test('Frame', async ({ page }) => {

    await page.goto('https://letcode.in/frame');

    const frame = page.frameLocator('#firstFr');

    await frame.locator("input[name='fname']").fill('Sandhiya');
});

test.only('Enter Name', async ({ page }) => {

    await page.goto('https://letcode.in/frame');

    const frame = page.frameLocator('#firstFr');

    await frame.locator('input[name="fname"]').fill('Sandhiya');
    await frame.locator('input[name="lname"]').fill('Rajendran');

});