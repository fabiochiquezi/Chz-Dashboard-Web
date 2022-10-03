const gen = require('../utils/genData')

const pass = gen.string(6)
const dataGen = {
    pass: pass,
    name: gen.string(10),
    mail: gen.mail(10),
    confirmPass: pass
}
const els = {
    inputEmail: '#lostPass #lostPass_email',
    btnOpenModal: '.login-form-forgot',
    btnSubmit: '.ant-modal-footer button:last-child',
    errorField: '.ant-modal .ant-form-item .ant-form-item-explain div',
    antMessage: '.ant-message-custom-content span:last-child'
}

module.exports = {
    '@tags': ['login', 'reset-pass'],

    'Form miss data'(browser) {
        const antMessage = 'Por favor, verifique se foram preechidos todos os dados corretamente'
        const errorFieldMessage = 'E-mail é obrigatório!'

        browser
            .url('http://localhost:3000/signin')
            .click(els.btnOpenModal)
                .waitForElementVisible('.ant-modal')
            .setValue(els.inputEmail, '')
            .click(els.btnSubmit)
                .waitForElementVisible(els.errorField)
                .assert.containsText(els.errorField, errorFieldMessage)
                .assert.containsText(els.antMessage, antMessage)
    },

    'Form invalid Data'(browser) {
        const antMessage = 'Por favor, verifique se foram preechidos todos os dados corretamente'
        const errorFieldMessage = 'E-mail inválido'

        browser
            .url('http://localhost:3000/signin')
            .click(els.btnOpenModal)
                .waitForElementVisible('.ant-modal')
            .setValue(els.inputEmail, 'invalidmail')
            .click(els.btnSubmit)
                .waitForElementVisible(els.errorField)
                .assert.containsText(els.errorField, errorFieldMessage)
                .assert.containsText(els.antMessage, antMessage)
    },

    'Form error: e-mail not found'(browser) {
        const antMessage = 'E-mail não encontrado, verifique se digitou corretamente por favor'

        browser
            .url('http://localhost:3000/signin')
            .click(els.btnOpenModal)
                .waitForElementVisible('.ant-modal')
            .setValue(els.inputEmail, 'invalidmail@invalidmail.com')
            .click(els.btnSubmit)
                .assert.containsText(els.antMessage, antMessage)
    },

    'Send success email to redefine pass'(browser) {
        const page = browser.page.loginAct()
        const successMessage = 'Foi encaminhado um e-mail para você para alterar a sua senha'

        page
            .navigate()
            .register(dataGen)
            .waitForElementVisible('@avatar')
            .signOut()

        browser
            .expect.url().to.contain('/signin', 'verify if in signin route')

        browser
            .click(els.btnOpenModal)
                .waitForElementVisible('.ant-modal')
            .setValue(els.inputEmail, dataGen.mail)
            .click(els.btnSubmit)
                .assert.containsText(els.antMessage, successMessage)
    }
}
