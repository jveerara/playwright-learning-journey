import {test,expect} from '@playwright/test';
test('Playwright Locators',async ({page}) =>{

    //await page.goto('https://testautomationpractice.blogspot.com/');

    /*Locators

    page.getByaltText()-->to locate the element from image alt text
    page.getByrole-->
    */
    page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByText('Tabs')).toBeVisible();
    await page.getByRole('button',{name:'start'}).click();
    await page.goto('https://www.nopcommerce.com/en');
    await expect(page.getByTitle('José Lopez')).toBeVisible();

})

test('Other locatoers',async ({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    expect(page.getByText('multiple element filters')).toBeVisible();
    await page.getByTestId('form-forgot-password').click();
    await page.getByPlaceholder('Filter practice pages').fill('playwright');

})