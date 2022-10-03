import { getResp } from './../utilsResp'

describe('test getResp:', () => {
    it('exist', () => {
        expect(typeof getResp).toBe('function')
    })

    it('ok', () => {
        const resp1 = getResp(true, 'message', 200, 'data')
        expect(resp1).toEqual({
            ok: true,
            message: 'message',
            code: 200,
            data: 'data',
            errors: null
        })

        const resp2 = getResp(false, 'message', 400, null, ['error'])
        expect(resp2).toEqual({
            ok: false,
            message: 'message',
            code: 400,
            data: null,
            errors: ['error']
        })

        const resp3 = getResp(true, 'message')
        expect(resp3).toEqual({
            ok: true,
            message: 'message',
            code: null,
            data: null,
            errors: null
        })
    })
})
