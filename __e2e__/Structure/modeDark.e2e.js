const els = {
    moonIcon: '#moon-icon',
    html: 'html'
}

module.exports = {
    '@tags': ['login', 'structure-mode-dark'],

    'Sign out'(browser) {
        const pageRegister = browser.page.loginAct()

        pageRegister
            .navigate()
            .register()
            .waitForElementVisible('.ant-avatar')

        browser
            .click(els.moonIcon)
            .assert.cssClassPresent(els.html, 'dark')
    }
}
