// @ts-nocheck
import { appSigninGoogle } from './../../../../app/Login/App/appSigninGoogle'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appSigninGoogle')

describe('pipeLogin-google', () => {
    it('success', async () => {
        appSigninGoogle.mockImplementation(() => true)
        const send = await pipeLogin.google()

        expect(send).toEqual({
            ok: true,
            message: 'Login efetuado com sucesso',
            code: 200,
            data: null,
            errors: null
        })
    })

    it('error', async () => {
        appSigninGoogle.mockImplementation(() => { throw { code: 'default' } })
        const send = await pipeLogin.google()

        expect(send).toEqual({
            ok: false,
            message: 'Por favor, verifique se foram preechidos todos os dados corretamente',
            code: 400,
            data: null,
            errors: null
        })
    })
})
