const gen = require('../utils/genData')

const data = {
    pass: gen.string(6),
    name: gen.string(10),
    mail: gen.mail(10)
}
const errorsField = {
    name: '.ant-form-item:nth-child(4) .ant-form-item-explain div',
    email: '.ant-form-item:nth-child(5) .ant-form-item-explain div',
    pass: '.ant-form-item:nth-child(6) .ant-form-item-explain div',
    confirmPass: '.ant-form-item:nth-child(7) .ant-form-item-explain div'
}
const els = {
    inputName: '#registerForm_name',
    inputMail: '#registerForm_email',
    inputPass: '#registerForm_password',
    inputConfirmPass: '#registerForm_confirm',
    btnSubmit: 'button[type="submit"]',
    antMsg: '.ant-message-custom-content span:last-child'
}
const url = {
    register: 'http://localhost:3000/register',
    home: 'http://localhost:3000/'
}

module.exports = {
    '@tags': ['login', 'register'],

    'Register'(browser) {
        browser
            .url(url.register)
            .setValue(els.inputName, data.name)
            .setValue(els.inputMail, data.mail)
            .setValue(els.inputPass, data.pass)
            .setValue(els.inputConfirmPass, data.pass)
            .click(els.btnSubmit)
                .assert.urlEquals('http://localhost:3000/', 'user create')
    },

    'Error data'(brw) {
        const errorsMsg = {
            mail: 'E-mail inválido',
            pass1: 'A senha deve ter no mínimo 6 caracteres',
            pass2: 'Senha inválida, não pode haver acentos ou espaços',
            confirmPass: 'A confirmação da senha deve ser exatamente igual ao campo de senha'
        }
        brw
            .url(url.register)
            .setValue(els.inputName, data.name)
            .setValue(els.inputMail, 'testError')
            .setValue(els.inputPass, 'error')
            .setValue(els.inputConfirmPass, 'err')
            .click('body')
                .assert.containsText(errorsField.email, errorsMsg.mail)
                .assert.containsText(errorsField.pass, errorsMsg.pass1)
                .assert.containsText(errorsField.confirmPass, errorsMsg.confirmPass)
            .setValue(els.inputPass, 'error ááá')
            .click('body')
                .assert.containsText(errorsField.pass, errorsMsg.pass2)
    },

    'Error miss data'(brw) {
        const errorsMsg = {
            name: 'Este item é obrigatório',
            mail: 'E-mail é obrigatório!',
            pass: 'Senha obrigatória!',
            confirmPass: 'Por favor confirme sua senha'
        }
        brw
            .url(url.register)
            .setValue(els.inputName, '')
            .setValue(els.inputMail, '')
            .setValue(els.inputPass, '')
            .setValue(els.inputConfirmPass, '')
            .click('body')
                .assert.containsText(errorsField.name, errorsMsg.name)
                .assert.containsText(errorsField.email, errorsMsg.mail)
                .assert.containsText(errorsField.pass, errorsMsg.pass)
                .assert.containsText(errorsField.confirmPass, errorsMsg.confirmPass)
    },

    'Error register - email was in use'(browser) {
        const dataGen = {
            pass: gen.string(6),
            name: gen.string(10),
            mail: gen.mail(10)
        }

        browser
            .url(url.register)
            .setValue(els.inputName, dataGen.name)
            .setValue(els.inputMail, dataGen.mail)
            .setValue(els.inputPass, dataGen.pass)
            .setValue(els.inputConfirmPass, dataGen.pass)
            .click(els.btnSubmit)
                .assert.urlEquals('http://localhost:3000/')
            .url(url.register)
            .setValue(els.inputName, dataGen.name)
            .setValue(els.inputMail, dataGen.mail)
            .setValue(els.inputPass, dataGen.pass)
            .setValue(els.inputConfirmPass, dataGen.pass)
            .click(els.btnSubmit)
                .assert.containsText(els.antMsg, 'Este e-mail já está em uso, por favor tente outro')
    },
}
