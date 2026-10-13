
import {test, expect} from '@playwright/test';

test("myorange", async({page})=>{



    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const orangetitle: String = await page.title();
    console.log(orangetitle);
    await expect(page).toHaveTitle('OrangeHRM');

})