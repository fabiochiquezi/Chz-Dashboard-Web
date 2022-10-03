import { sucMsgAuth } from './sucMsgAuth'

export const successMessages: Record<string, any> = {
    ...sucMsgAuth,
}

export const getSuccess = (name: string) => {
    const message = successMessages[name].message
    const code = successMessages[name].code

    return { message, code }
}
