module.exports = {
    '@tags': ['login', 'signout'],

    'Sign out'(browser) {
        const pageRegister = browser.page.loginAct()

        pageRegister
            .navigate()
            .register()

        browser
            .click('.ant-avatar')
            .waitForElementVisible('#ant-avatar-signout')
            .click('#ant-avatar-signout')
            .expect.url().to.contain('/signin')

        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('.login-form')
    },
}
