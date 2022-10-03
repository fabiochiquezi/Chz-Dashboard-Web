import { errorMsgAuth } from './errorMsgAuth'

export const errMessages: Record<string, any> = {
    ...errorMsgAuth
}

export const getError = (errorCode: any, path = '') => {
    const errorName = errorCode + path
    const errorDefault = 'default' + path

    const message = errMessages[errorName]
        ? errMessages[errorName].message
        : errMessages[errorDefault].message

    const code = errMessages[errorName]
        ? errMessages[errorName].code
        : errMessages[errorDefault].code

    return { message, code }
}
