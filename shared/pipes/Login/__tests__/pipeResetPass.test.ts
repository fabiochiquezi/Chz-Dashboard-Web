// @ts-nocheck
import { appResetPass } from './../../../../app/Login/App/appResetPass'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appResetPass')

describe('pipeLogin-resetPass', () => {
    it('success', async () => {
        appResetPass.mockImplementation(() => true)
        const send = await pipeLogin.resetPass({})

        expect(send).toEqual({
            ok: true,
            message: 'Foi encaminhado um e-mail para você para alterar a sua senha',
            code: 204,
            data: null,
            errors: null
        })
    })

    it('user not found', async () => {
        appResetPass.mockImplementation(() => { throw { code: 'auth/user-not-found' } })
        const send = await pipeLogin.resetPass({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail não encontrado, verifique se digitou corretamente por favor',
            code: 404,
            data: null,
            errors: null
        })
    })

    it('invalid email', async () => {
        appResetPass.mockImplementation(() => { throw { code: 'auth/invalid-email' } })
        const send = await pipeLogin.resetPass({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail inválido, por favor verifique se digitou corretamente',
            code: 400,
            data: null,
            errors: null
        })
    })

    it('invalid email', async () => {
        appResetPass.mockImplementation(() => { throw { code: 'auth/missing-email' } })
        const send = await pipeLogin.resetPass({})

        expect(send).toEqual({
            ok: false,
            message: 'E-mail não foi enviado, se o erro persistir por favor contate nosso suporte',
            code: 500,
            data: null,
            errors: null
        })
    })
})
