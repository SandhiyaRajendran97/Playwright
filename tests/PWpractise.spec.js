import { test, expect } from '@playwright/test';

test('Checkbox Count', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    await expect(page.locator('input[type="checkbox"]'))
        .toHaveCount(2);
});

test('Input Value', async ({ page }) => {
    await page.goto('https://letcode.in/edit');

    const name = page.locator('#fullName');

    await name.fill('Sandhiya');

    await expect(name).toHaveValue('Sandhiya');
});