const gen = require('../utils/genData')

const pass = gen.string(6)
const dataGen = {
    pass: pass,
    name: gen.string(10),
    mail: gen.mail(10),
    confirmPass: pass
}

const els = {
    inputEmail: '#login_email',
    inputPass: '#login_password',
    btnSubmit: '.btn-send button',
    antMessage: '.ant-message-custom-content span:last-child'
}
const errorsField = {
    email: '.ant-form-item:nth-child(3) .ant-form-item-explain div',
    pass: '.ant-form-item:nth-child(4) .ant-form-item-explain div',
}

module.exports = {
    '@tags': ['login', 'signin'],

    'Error miss data'(brw) {
        const antMsg = 'Por favor, verifique se foram preechidos todos os dados corretamente'
        const errMsgs = {
            mail: 'E-mail é obrigatório!',
            pass: 'Senha obrigatória!'
        }
        brw
            .url('http://localhost:3000/signin')
            .setValue(els.inputEmail, '')
            .setValue(els.inputPass, '')
            .click(els.btnSubmit)
                .waitForElementVisible(errorsField.email)
                .waitForElementVisible(errorsField.pass)
                .assert.containsText(errorsField.email, errMsgs.mail)
                .assert.containsText(errorsField.pass, errMsgs.pass)
                .assert.containsText(els.antMessage, antMsg)
    },

    'Error data default-signin'(brw) {
        const antMsg = 'Por favor, verifique se foram preechidos todos os dados corretamente'
        const errMsgs = {
            mail: 'E-mail inválido',
            pass1: 'A senha deve ter no mínimo 6 caracteres',
            pass2: 'Senha inválida, não pode haver acentos ou espaços'
        }
        brw
            .url('http://localhost:3000/signin')
            .setValue(els.inputEmail, 'testError')
            .setValue(els.inputPass, 'error')
            .click(els.btnSubmit)
                .waitForElementVisible(errorsField.email)
                .waitForElementVisible(errorsField.pass)
                .assert.containsText(errorsField.email, errMsgs.mail)
                .assert.containsText(errorsField.pass, errMsgs.pass1)
            .setValue(els.inputPass, 'error ááá')
            .click(els.btnSubmit)
                .assert.containsText(errorsField.pass, errMsgs.pass2)
                .assert.containsText(els.antMessage, antMsg)
    },

    'Default Signin'(browser) {
        const page = browser.page.loginAct()

        page
            .navigate()
            .register(dataGen)
                .waitForElementVisible('@avatar')
            .signOut()

        browser
            .expect.url().to.contain('/signin', 'verify if in signin route')

        browser
            .setValue(els.inputEmail, dataGen.mail)
            .setValue(els.inputPass, dataGen.pass)
            .click(els.btnSubmit)
                .waitForElementVisible('.ant-avatar')
    }
}
