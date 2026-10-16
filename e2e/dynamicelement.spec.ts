import {test,expect,Locator} from '@playwright/test';

test('xpath practice_dynamic_elements',async({page})=>{
//when same element's are changing their attributes like name, id, class etc. then we can use dynamic xpath to locate the element.
    
page.goto('https://testautomationpractice.blogspot.com/');

    for (let i=0;i<5;i++){ //to click on start and stop button 5 times

    let dynamicbutton=page.locator("//button[@name='start'or @name='stop']"); //Dynamic x path for start and stop button
    await dynamicbutton.click();

    await page.waitForTimeout(3000);

    }


    //using getbyrole() method to locate the dynamic element

    for (let i=0;i<5;i++){
        let dynamicbuttongetbyrole=page.getByRole('button', {name:/start|stop/i}); //Dynamic x path for start and stop button
        await dynamicbuttongetbyrole.click();
        await page.waitForTimeout(3000);
    }

//      using CSS selector to locate the dynamic element
    for (let i=0;i<5;i++){

            let dynamicbuttoncss=page.locator('button[name="start"], button[name="stop"]'); //Dynamic x path for start and stop button
            await dynamicbuttoncss.click();
            await page.waitForTimeout(1000);
    }

})