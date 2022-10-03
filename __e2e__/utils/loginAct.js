const gen = require('./genData')

module.exports = {
    url: 'http://localhost:3000/register',
    elements: {
        // FormRegister
            registerInputName: '#registerForm_name',
            registerInputEmail: '#registerForm_email',
            registerInputPass: '#registerForm_password',
            registerInputConfirPass: '#registerForm_confirm',
            registerBtnSubmit: 'button[type="submit"]',

        // Avatar popUp System
            avatar: '.ant-avatar',
            btnSignout: '#ant-avatar-signout',

        // FormSignin
            singinInputEmail: '#login_email',
            singinInputPass: '#login_password',
            singinBtnSubmit: '.btn-send button'
    },
    commands: [{
        register(user) {
            const data = {
                pass: gen.string(6),
                name: gen.string(10),
                mail: gen.mail(10)
            }

            return this
                .setValue('@registerInputName', user ? user.name : data.name)
                .setValue('@registerInputEmail', user ? user.mail : data.mail)
                .setValue('@registerInputPass', user ? user.pass : data.pass)
                .setValue('@registerInputConfirPass', user ? user.confirmPass : data.pass)
                .click('@registerBtnSubmit')
        },
        signOut() {
            return this
                .click('@avatar')
                .waitForElementVisible('@btnSignout')
                .click('@btnSignout')
        },
        signIn(user) {
            return this
            .setValue('@singinInputEmail', '')
            .setValue('@singinInputPass', user.pass)
            .setValue('@singinInputEmail', user.mail)
                .click('@singinBtnSubmit')
        }
    }]
}
