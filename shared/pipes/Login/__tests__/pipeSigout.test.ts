// @ts-nocheck
import { appSignout } from './../../../../app/Login/App/appSignout'
import { pipeLogin } from './../pipeLogin'

jest.mock('./../../../../app/Login/App/appSignout')

describe('pipeLogin-signout', () => {
    it('ok', async () => {
        appSignout.mockImplementation(() => true)
        const send = await pipeLogin.signout()

        expect(send).toEqual({
            ok: true,
            message: 'Usuário deslogado com sucesso',
            code: 204,
            data: null,
            errors: null
        })
    })

    it('error on deslog action', async () => {
        appSignout.mockImplementation(() => { throw new Error() })
        const send = await pipeLogin.signout('xxx@xxx.com')

        expect(send).toEqual({
            ok: false,
            message: 'Não foi possível deslogar da sua conta, ocorreu um erro no servidor, se precisar contate nosso suporte',
            code: 500,
            data: null,
            errors: null
        })
    })
})
