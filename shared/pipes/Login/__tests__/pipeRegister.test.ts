// @ts-nocheck
import { appRegister } from './../../../../app/Login/App/appRegister'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appRegister')

describe('pipeLogin_register', () => {
    it('success', async () => {
        appRegister.mockImplementation(() => true)
        const send = await pipeLogin.register({})

        expect(send).toEqual({
            ok: true,
            message: 'Cadastro efetuado com sucesso',
            code: 201,
            data: { user: true},
            errors: null
        })
    })

    it('invalid email', async () => {
        appRegister.mockImplementation(() => { throw { code: 'auth/invalid-email' } })
        const send = await pipeLogin.register({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail inválido, por favor verifique se digitou corretamente',
            code: 400,
            data: null,
            errors: null
        })
    })

    it('email in use', async () => {
        appRegister.mockImplementation(() => { throw { code: 'auth/email-already-in-use' } })
        const send = await pipeLogin.register({})

        expect(send).toEqual({
            ok: false,
            message: 'Este e-mail já está em uso, por favor tente outro',
            code: 400,
            data: null,
            errors: null
        })
    })

    it('weak pass', async () => {
        appRegister.mockImplementation(() => { throw { code: 'auth/weak-password' } })
        const send = await pipeLogin.register({})

        expect(send).toEqual({
            ok: false,
            message: 'Senha inválida, por favor use uma senha mais forte',
            code: 400,
            data: null,
            errors: null
        })
    })

    it('pass', async () => {
        appRegister.mockImplementation(() => { throw { code: 'auth/internal-error' } })
        const send = await pipeLogin.register({})

        expect(send).toEqual({
            ok: false,
            message: 'Ocorreu um erro no servidor, se o erro persistir por favor contate nosso suporte',
            code: 500,
            data: null,
            errors: null
        })
    })
})
