const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const produkPage = require("../pages/produk.page");

Given (/^I access the product feature$/, async ()=>{
    await Page.open('/');
    await LoginPage.login('edhuherprabowo@gmail.com','Qwerty1')
})

When (/^I make a new product$/, async ()=>{
    await dashboardPage.product();
    await produkPage.tambahProduct();
    await produkPage.tambah('sinar dunia','disukai anak kecil','5000','10000','100');
}) 

Then (/^I should get new product$/, async ()=>{
    await produkPage.assertTextIsPresent();
}) 
