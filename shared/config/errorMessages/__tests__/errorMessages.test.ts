import { getError } from '../index'

describe('test utilsMessages:', () => {
    it('exist functions', () => {
        expect(typeof getError).toBe('function')
    })

    it('error', () => {
        const get1 = getError('auth/too-many-requests/signin')
        expect(get1).toEqual({
            code: 400,
            message: 'Foram feitas muitas tentativas de login, seu sistema foi pausado, tente novamente mais tarde'
        })

        const get2 = getError('auth/user-not-found', '/signin')
        expect(get2).toEqual({
            code: 404,
            message: 'E-mail ou senha estão incorretos'
        })
    })
})
