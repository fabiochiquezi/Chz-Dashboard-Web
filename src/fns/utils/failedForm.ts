import { message } from 'antd'

export const failedForm = (formData: unknown): void => {
    const errorDefault = 'Por favor, verifique se foram preechidos todos os dados corretamente'
    message.warning(errorDefault)
    console.log(formData)
}
