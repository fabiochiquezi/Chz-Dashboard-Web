import React from 'react'
import { FormInstance, message } from 'antd'
import { failedForm } from '../utils/failedForm'
import { pipeLogin } from '../../../shared/pipes/Login'

type props = {
    (
        form:FormInstance<any>,
        setVisible: React.Dispatch<React.SetStateAction<boolean>>,
        setConfirmLoading: React.Dispatch<React.SetStateAction<boolean>>
    ): void
}

export const fnLostPass: props = async (form, setVisible, setConfirmLoading) => {
    const valid = await form.validateFields().catch(() => failedForm(form))
    if (!valid) return

    setConfirmLoading(true)
    const { email } = form.getFieldsValue()
    const resp = await pipeLogin.resetPass(email)
    setConfirmLoading(false)
    if (resp.ok) {
        setVisible(false)
        message.success(resp.message)
        return
    }
    message.error(resp.message)
}
