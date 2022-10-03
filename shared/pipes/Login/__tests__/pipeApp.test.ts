// @ts-nocheck
import { appSignin } from './../../../../app/Login/App/appSignin'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appSignin')

describe('pipeLogin_signin', () => {
    it('success', async () => {
        appSignin.mockImplementation(() => true)
        const send = await pipeLogin.app({})

        expect(send).toEqual({
            ok: true,
            message: 'Login efetuado com sucesso',
            code: 200,
            data: null,
            errors: null
        })
    })

    it('error undefined', async () => {
        appSignin.mockImplementation(() => { throw { code: 'default' } })
        const send = await pipeLogin.app({})

        expect(send).toEqual({
            ok: false,
            message: 'Por favor, verifique se foram preechidos todos os dados corretamente',
            code: 400,
            data: null,
            errors: null
        })
    })

    it('invalid mail', async () => {
        appSignin.mockImplementation(() => { throw { code: 'auth/invalid-email' } })
        const send = await pipeLogin.app({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail inválido, por favor verifique se digitou corretamente',
            code: 400,
            data: null,
            errors: null
        })
    })


    it('user not found', async () => {
        appSignin.mockImplementation(() => { throw { code: 'auth/user-not-found' } })
        const send = await pipeLogin.app({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail ou senha estão incorretos',
            code: 404,
            data: null,
            errors: null
        })
    })

    it('wrong pass', async () => {
        appSignin.mockImplementation(() => { throw { code: 'auth/wrong-password' } })

        const send = await pipeLogin.app({})
        expect(send).toEqual({
            ok: false,
            message: 'E-mail ou senha estão incorretos',
            code: 404,
            data: null,
            errors: null
        })
    })

    it('none pass', async () => {
        appSignin.mockImplementation(() => { throw { code: 'auth/internal-error' } })
        const send = await pipeLogin.app({})

        expect(send).toEqual({
            ok: false,
            message: 'Ocorreu um erro no servidor, se o erro persistir por favor contate nosso suporte',
            code: 500,
            data: null,
            errors: null
        })
    })
})
