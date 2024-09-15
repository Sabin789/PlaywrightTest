import {test,expect} from "@playwright/test"

test('Search Functionality', async ({ page }) => {
    await page.goto("https://qa-test.devops.dm.formpipe.dev/dm/dm.do");
    
    await expect(page.locator("text=Unauthorised access is prohibited!")).toBeVisible();


    await page.locator('#j_username').fill('sabin');
    // Add password here
    await page.locator('#j_password').fill('');

    await page.locator('#loginButton').click();

    await expect(page.locator("text=sabin")).toBeVisible();

    const element = page.locator('p.listName:text("Document Search")');
    await element.scrollIntoViewIfNeeded();
    await element.click({ force: true })

    await page.locator('#input1').fill('.');
    await page.locator('#_buttonSearch').click();
    
 
    expect(page.locator("text=error"))

})



