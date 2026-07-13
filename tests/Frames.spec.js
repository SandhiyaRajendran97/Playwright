import { test } from '@playwright/test';

test('Frame', async ({ page }) => {

    await page.goto('https://letcode.in/frame');

    const frame = page.frameLocator('#firstFr');

    await frame.locator("input[name='fname']").fill('Sandhiya');
});