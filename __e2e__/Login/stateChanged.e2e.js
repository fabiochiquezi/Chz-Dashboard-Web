module.exports = {
    '@tags': ['login', 'state-changed'],

    'Private Route'(browser) {
        browser
            .url('http://localhost:3000/')
                .waitForElementVisible('.login-form')
    },

    'Redirect to the system when was logged'(browser) {
        const pageRegister = browser.page.loginAct()

        pageRegister
            .navigate()
            .register()

        browser
                .assert.urlEquals('http://localhost:3000/')
            .url('http://localhost:3000/signin')
                .waitForElementVisible('.app-content')
    },
}
