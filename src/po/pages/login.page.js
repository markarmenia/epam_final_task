const { browser, $ } = require('@wdio/globals');

class LoginPage {
    get inputUsername() { return $('input[data-test="username"]') }
    get inputPassword() { return $('input[data-test="password"]') }
    get btnLogin() { return $('input[data-test="login-button"]') }
    get errorMessage() { return $('h3[data-test="error"]') }
    get title() { return $('.title') }
    get titleDashboard() { return $('div.app_logo') }

    async open() {
        await browser.url('/')
    }

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