class DashboardPage {
    //url website
    get dashboardPageUrl() {
        return 'https://kasirdemo.vercel.app/dashboard'
    }
    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl)
    }

    //locator button category
    get categoryButton(){
        return $('[href="/categories"]'); 
    }
    async category(){
        await this.categoryButton.click();
    }

    //locator button produk
    get productButton(){
        return $('[href="/products"]'); 
    }
    async product(){
        await this.productButton.click();
    }

}

module.exports = new DashboardPage();
