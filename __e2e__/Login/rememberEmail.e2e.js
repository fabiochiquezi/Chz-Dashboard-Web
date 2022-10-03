const gen = require('../utils/genData')

const els = {
    inputEmail: '#login_email',
    inputPass: '#login_password',
    inputRemember: '#login_remember',
    btnSubmit: '.btn-send button'
}

module.exports = {
    '@tags': ['login', 'remember-email'],

    'Remember email false'(browser) {
        const page = browser.page.loginAct()
        const pass = gen.string(6)
        const dataGen = {
            pass: pass,
            name: gen.string(10),
            mail: gen.mail(10),
            confirmPass: pass
        }

        page
            .navigate()
            .register(dataGen)
                .waitForElementVisible('@avatar')
            .signOut()

        browser
            .expect.url().to.contain('/signin')

        browser
            .setValue(els.inputEmail, dataGen.mail)
            .setValue(els.inputPass, dataGen.pass)
            .click(els.inputRemember)
            .click(els.btnSubmit)
                .waitForElementVisible('.ant-avatar')

        page
            .signOut()

        browser
            .waitForElementVisible('.login-form')
            .assert.containsText(els.inputEmail, '')
    },

    'Remember email true'(browser) {
        const pass = gen.string(6)
        const dataGen = {
            pass: pass,
            name: gen.string(10),
            mail: gen.mail(10),
            confirmPass: pass
        }
        const page = browser.page.loginAct()

        page
            .navigate()
            .register(dataGen)
                .waitForElementVisible('@avatar')
            .signOut()
                .waitForElementVisible('.login-form')
            .signIn(dataGen)
                .waitForElementVisible('@avatar')
            .signOut()
                .waitForElementVisible('.login-form')

        browser
            .assert.valueContains(els.inputEmail, dataGen.mail)
    }
}
