const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('./../../po/pages/login.page')
const { validUsers, invalidUsers } = require('../testData');


describe('Login functionality', () => {
    beforeEach(async () => {
        await LoginPage.open()
    })

    it('UC-1: should show error for empty credentials', async () => {
        await LoginPage.login('ilove', 'qa')
        await LoginPage.clearInputs()
        await LoginPage.btnLogin.click() 
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required')
    })

    it('UC-2: should show error for empty password', async () => {
        await LoginPage.inputUsername.setValue('ilove')
        await LoginPage.inputPassword.setValue('qa')
        await LoginPage.inputPassword.clearValue()
        await LoginPage.btnLogin.click()
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required')
    })

    validUsers.forEach(({ username, password }) => {
        it(`UC-3: should login successfully with valid credentials: ${username} ${password}`, async () => {
            console.log(`Testing with username: ${username}`)
            console.log(`Testing with password: ${password}`)
            await LoginPage.login(username, password)
            await LoginPage.btnLogin.click()
            await expect(browser).toHaveTitle('Swag Labs')
            await expect(LoginPage.titleDashboard).toHaveText('Swag Labs')
        })
    })
})


