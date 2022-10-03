import { message } from 'antd'
import Router from 'next/router'
import { routes } from '../../../shared/config/routes'
import { pipeLogin } from '../../../shared/pipes/Login'

export async function fnSignout() {
    try {
        await pipeLogin.signout()
        Router.push(routes.signin)
    } catch (e) {
        console.log(e)
        message.error('Ocorreu um erro no processo de deslogar da plataforma, por favor entre em contato com nosso suporte')
    }
}
