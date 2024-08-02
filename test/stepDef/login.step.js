const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");

Given (/^I open the KasirAja website$/, async ()=>{
    await Page.open('/');
})

When (/^I login with valid credentials$/, async ()=>{
    await LoginPage.login('edhuherprabowo@gmail.com','Qwerty1')
}) 

Then (/^I should see the dashboard$/, async ()=>{
    await dashboardPage.assertDashboardUrl();
}) 
