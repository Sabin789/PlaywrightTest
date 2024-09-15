import {test,expect} from "@playwright/test"


test("Import Functionality",async ({page})=>{
  await page.goto('https://qa-test.devops.dm.formpipe.dev/dm/dm.do');
  await page.locator('#j_username').fill('sabin');
  // Add password here
  await page.locator('#j_password').fill('');
  await page.getByRole('button', { name: 'Click to Login' }).click();
  await page.getByRole('button', { name: 'Application ID: 4294967358 (' }).click();

  await page.getByText('Drag and drop files here, or').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.locator('div').filter({ hasText: /^Statement$/ }).click();

  await page.locator('xpath=//*[@id="root"]/div[2]/div[2]/div[2]/div[2]/div[2]/div[3]/div/div[3]/div[1]/div/div/div/div[2]/div/div[4]/div/input').fill('0002-03-31');

  await page.getByRole('button', { name: 'Import' }).click();

  await expect(page.locator("text=errors")).toBeVisible();
})




