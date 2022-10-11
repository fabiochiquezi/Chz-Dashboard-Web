import { message } from 'antd'
import Router from 'next/router'
import { store } from '../../store/store'
import { setUser } from '../../store/userSlice'
import { routes } from '../../../shared/config/routes'
import { pipeLogin } from './../../../shared/pipes/Login'

type props = {
    (buttonSubmit: any, setLoading: any): (formData: {
        email: string
        password: string
        name: string
    }) => void
}

export const fnRegister: props =
    (buttonSubmit, setLoading) => async formData => {
        const { email, password, name } = formData
        buttonSubmit.current!.disabled = true
        setLoading(true)

        const resp = await pipeLogin.register({ name, email, password })

        if (resp.ok) {
            const { uid } = resp.data.user
            // @ts-ignore
            store.dispatch(setUser({ name, email, uid }))
            Router.push(routes.home)
            return
        }

        setLoading(false)
        message.error(resp.message)
        buttonSubmit.current!.disabled = false
    }
