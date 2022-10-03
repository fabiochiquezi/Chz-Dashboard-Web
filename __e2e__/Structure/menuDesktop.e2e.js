const els = {
    iconDesktop: '.icon-show-menu-desktop span',
    sidebar: '.sidebar-structure',
    spanMenu: '.sidebar-structure .span-menu'
}

module.exports = {
    '@tags': ['login', 'structure-menu-desktop'],

    'Sign out'(browser) {
        const pageRegister = browser.page.loginAct()

        pageRegister
            .navigate()
            .register()
            .waitForElementVisible('.ant-avatar')

        browser
            .click(els.iconDesktop)
            .waitForElementVisible(els.spanMenu)
    },
}
