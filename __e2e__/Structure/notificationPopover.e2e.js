const els = {
    notificationIcon: '#notification-icon',
    popOver: '#notification-pop-over'
}

module.exports = {
    '@tags': ['login', 'structure-notification-popover'],

    'Sign out'(browser) {
        const pageRegister = browser.page.loginAct()

        pageRegister
            .navigate()
            .register()
            .waitForElementVisible('.ant-avatar')

        browser
            .click(els.notificationIcon)
            .waitForElementVisible(els.popOver)
    },
}
