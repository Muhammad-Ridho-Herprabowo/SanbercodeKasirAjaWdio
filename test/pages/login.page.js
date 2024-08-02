class LoginPage {
    //mendefinisikan locator element
    get emailInput(){
        return $('#email'); //locator field email
    }
    
    get passwordInput(){
        return $('#password'); //locator field password
    }
    
    get loginButton(){
        return $('//button[contains(text(), "login")]'); //locator button login
    }

    //mendefinisikan interaksi/action yang dilakukan pada elemen tersebut
    async login(email, password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();