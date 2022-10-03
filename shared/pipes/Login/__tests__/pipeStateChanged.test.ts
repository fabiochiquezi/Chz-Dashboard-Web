// @ts-nocheck
import { appStateChanged } from './../../../../app/Login/App/appStateChanged'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appStateChanged')

describe('pipeLogin-state-changed', () => {
    it('success', () => {
        appStateChanged.mockImplementation(() => true)
        const send = pipeLogin.stateChanged()

        expect(send).toEqual({
            ok: true,
            message: 'Estado do usuário alterado com sucesso',
            code: 200,
            data: true,
            errors: null
        })
    })

    it('user not found', async () => {
        appStateChanged.mockImplementation(() => { throw new Error() })
        const send = pipeLogin.stateChanged('xxx@xxx.com')

        expect(send).toEqual({
            ok: false,
            message: 'Houve um erro no servidor, entre em contato com nosso suporte se houver algum incomodo',
            code: 500,
            data: null,
            errors: null
        })
    })
})
