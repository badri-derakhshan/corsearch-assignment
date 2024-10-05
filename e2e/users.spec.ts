import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/users');
  await page.waitForLoadState('networkidle');
});

test.describe('search users', () => {
  test('search not found', async ({ page }) => {
    await page.getByTestId('search-input').click();
    await page
      .getByTestId('search-input')
      .fill(`some-random-impossibe-text-${Math.random()}`);
    const container = await page.getByTestId('cards-container');
    expect(await container.getByTestId('card-item').count()).toBe(0);
  });

  test('search first item name', async ({ page }) => {
    const title = await page.getByTestId('card-item-name').nth(0).innerText();
    await page.getByTestId('search-input').fill(title);
    const container = await page.getByTestId('cards-container');
    expect(await container.getByTestId('card-item').count()).toBe(1);
  });

  test('search first item email', async ({ page }) => {
    const email = await page.getByTestId('card-item-email').nth(0).innerText();
    await page.getByTestId('filter-button').click();
    await page.getByRole('menuitemradio', { name: 'email' }).click();
    await page.getByTestId('search-input').fill(email);
    const container = await page.getByTestId('cards-container');
    expect(await container.getByTestId('card-item').count()).toBe(1);
  });
});
