// @ts-nocheck
import { appGetCurrentUser } from './../../../../app/Login/App/appGetCurrentUser'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appGetCurrentUser')

describe('pipeLogin-getCurrentUser', () => {
    it('ok', () => {
        appGetCurrentUser.mockImplementation(() => true)
        const send = pipeLogin.getCurrentUser()

        expect(send).toEqual({
            ok: true,
            message: 'Dados do usuário retornados com sucesso',
            code: 200,
            data: true,
            errors: null
        })
    })

    it('error on deslog action', () => {
        appGetCurrentUser.mockImplementation(() => { throw new Error() })
        const send = pipeLogin.getCurrentUser()

        expect(send).toEqual({
            ok: false,
            message: 'Houve um erro no servidor, entre em contato com nosso suporte se houver algum incomodo',
            code: 500,
            data: null,
            errors: null
        })
    })
})
