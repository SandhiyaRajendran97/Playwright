import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('sandhiya@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('safhiya');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByText('Explore the things you love.')).toBeVisible();
  await expect(page.locator('path').first()).toBeVisible();
});