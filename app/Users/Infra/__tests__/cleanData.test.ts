import { cleanData } from './../cleanData'

describe('test cleanForm', () => {
    it('exist', () => expect(cleanData).toBeDefined())

    it('ok', () => {
        const data1: any = { phone: '(21) 9 1111-4444 aaaa' }
        expect(cleanData(data1)).toEqual({ phone: '+5521911114444' })

        const data2: any = { phone: 'aa  aaa  bb' }
        expect(cleanData(data2)).toEqual({ phone: '+55' })

        const data3: any = { phone: '1111111111' }
        expect(cleanData(data3)).toEqual({ phone: '+551111111111' })
    })
})

export {}
