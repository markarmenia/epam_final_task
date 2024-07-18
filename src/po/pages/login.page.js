const { browser, $ } = require('@wdio/globals');
const BasePage = require('./base.page');


class LoginPage extends BasePage {

    constructor() {
        super('/');  // Assuming the login page is at the root URL
    }

    get inputUsername() { return $('input[data-test="username"]') }
    get inputPassword() { return $('input[data-test="password"]') }
    get btnLogin() { return $('input[data-test="login-button"]') }
    get errorMessage() { return $('h3[data-test="error"]') }
    get title() { return $('.title') }
    get titleDashboard() { return $('div.app_logo') }

    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
    }

    async clearInputs() {
        await this.inputUsername.clearValue()
        await this.inputPassword.clearValue()
    }

}

module.exports = new LoginPage()