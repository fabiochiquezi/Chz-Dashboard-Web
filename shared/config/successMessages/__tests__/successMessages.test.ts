import { getSuccess } from '../index'

describe('test utilsMessages:', () => {
    it('exist functions', () => {
        expect(typeof getSuccess).toBe('function')
    })

    it('success', () => {
        const get = getSuccess('auth/signin')
        expect(get).toEqual({
            message: 'Login efetuado com sucesso',
            code: 200
        })
    })
})
