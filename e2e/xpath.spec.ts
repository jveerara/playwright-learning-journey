import {test,expect,Locator} from '@playwright/test';

test('xpath practice',async({page})=>{

await page.goto('https://app.thetestingacademy.com/playwright/');


//1.Relative xpath
const playwrighttext:Locator=page.locator("//h1[@id='page-title']");
const count= await playwrighttext.count();
console.log('count of the element is', count); //validating the count of the element
await expect(playwrighttext).toBeVisible();// Validating the element is visible or not

})

//2.Multiple_elements_using_xpath

test('xpath practice_multipleelements',async({page})=>{

await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

const Productlink=page.locator("//a[@class='list-group-item']");
console.log(await Productlink.count());//12

//const productText:string|null=await Productlink.textContent();// We will get error(strict mode violation) because textContent() is not available for multiple elements. It is only available for single element.

//console.log("product's links are", productText);

//So we have to specify the element which required print or validate

console.log(await Productlink.first().textContent());//Login
console.log(await Productlink.last().textContent());//Newsletter
console.log(await Productlink.nth(2).textContent());//My Account

//using loop:
for (let i=0;i<await Productlink.count();i++){
    console.log(await Productlink.nth(i).textContent());
}

//To print all the elements we can use=>allTextContents() method:
let AllProductLinks: string[]=await Productlink.allTextContents();

// we can loop also here 

for (let plinks of AllProductLinks){
    console.log(plinks);
    
}


})

//3.startswith() and contains() method in x path


test('xpath practice_startswith_contains',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/');

const startswithlink=page.locator("//a[starts-with(@href,'/build')]")
let linkcount: number=await startswithlink.count();
console.log(' linkcount number is:',linkcount);
expect(linkcount).toBe(6); //validating the count of the element

//4.contains() method in x path

const computerlink=page.locator("//a[contains(@href,'computer')]");
const printcomputerlink: string[]=await computerlink.allTextContents();

for(let clinks of printcomputerlink){
    console.log(clinks);
}

//5.text() method in x path

const textLink = page.locator("//a[text()='log in']");
await expect(textLink).toBeVisible();

//6.last() method in x path
const lastLink = page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastLink).toHaveText('Google+');
})
