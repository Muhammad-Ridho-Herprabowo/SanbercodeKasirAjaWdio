const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const categoryPage = require("../pages/category.page");

Given (/^I access the category feature$/, async ()=>{
    await Page.open('/');
    await LoginPage.login('edhuherprabowo@gmail.com','Qwerty1')
})

When (/^I make a new category$/, async ()=>{
    await dashboardPage.category();
    await categoryPage.tambahCategory();
    await categoryPage.tambah('buku','untuk menulis');
}) 

Then (/^I should get new categories$/, async ()=>{
    await categoryPage.assertTextIsPresent();
}) 
