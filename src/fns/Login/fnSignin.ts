import { message } from 'antd'
import Router from 'next/router'
import { saveRememberEmail } from './fnRememberEmail'
import { routes } from '../../../shared/config/routes'
import { pipeLogin } from '../../../shared/pipes/Login'

type formProps = { email: string, password: string, remember: boolean }
type props = {
    (buttonSubmit: any, setLoading: any):
        (formData: formProps) => void
}

export const fnSignin: props = (buttonSubmit, setLoading) => async formData => {
    const { email, password, remember } = formData
    const storage = window.localStorage
    const saveEmailFn = saveRememberEmail(storage)
    buttonSubmit.current!.disabled = true
    setLoading(true)

    const sendForm = await pipeLogin.app({ email, password })
    if (sendForm.ok) {
        saveEmailFn(remember, email)
        Router.push(routes.home)
        return
    }

    setLoading(false)
    message.error(sendForm.message)
    buttonSubmit.current!.disabled = false
}

export const fnSigninGoogle = async () => await pipeLogin.google()
