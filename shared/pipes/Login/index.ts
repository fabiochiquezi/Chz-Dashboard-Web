import { GoogleAuthProvider, User } from '@firebase/auth'
import { appGetCurrentUser } from '../../../app/Login/App/appGetCurrentUser'
import { appStateChanged } from '../../../app/Login/App/appStateChanged'
import { appResetPass } from '../../../app/Login/App/appResetPass'
import { appRegister } from '../../../app/Login/App/appRegister'
import { appSignin } from '../../../app/Login/App/appSignin'
import { appSigninGoogle } from '../../../app/Login/App/appSigninGoogle'
import { appSignout } from '../../../app/Login/App/appSignout'
import { getSuccess } from '../../config/successMessages'
import { getError } from '../../config/errorMessages'
import { getResp } from '../../helpers/utilsResp'

const app = async (payload: {email: string, password: string}) => {
    try {
        const { email, password } = payload
        await appSignin(email, password)
        const { message, code } = getSuccess('auth/signin')
        return getResp(true, message, code)
    } catch (error: any) {
        const { message, code } = getError(error.code, '/signin')
        return getResp(false, message, code)
    }
}

const google = async () => {
    try {
        const provider = new GoogleAuthProvider()
        await appSigninGoogle(provider)
        const { message, code } = getSuccess('auth/signin-google')
        return getResp(true, message, code)
    } catch (error: any) {
        const { message, code } = getError(error.code, '/signin')
        return getResp(false, message, code)
    }
}

const register = async (payload: {email: string, password: string, name: string}) => {
    try {
        const { name, email, password } = payload
        const user = await appRegister(name, email, password)
        const { message, code } = getSuccess('auth/register')
        return getResp(true, message, code, { user })
    } catch (error: any) {
        const { message, code } = getError(error.code, '/register')
        return getResp(false, message, code)
    }
}

const resetPass = async (payload: {email: string}) => {
    try {
        const { email } = payload
        await appResetPass(email)
        const { message, code } = getSuccess('auth/reset-pass')
        return getResp(true, message, code)
    } catch (error: any) {
        const { message, code } = getError(error.code, '/reset-pass')
        return getResp(false, message, code)
    }
}

const stateChanged = (treatRoutes: (user: User | null) => void) => {
    try {
        const user = appStateChanged(treatRoutes)
        const { message, code } = getSuccess('auth/state-changed')
        return getResp(true, message, code, user)
    } catch (error: any) {
        const { message, code } = getError('default', '/state-changed')
        return getResp(false, message, code)
    }
}

const signout = async () => {
    try {
        appSignout()
        const { message, code } = getSuccess('auth/signout')
        return getResp(true, message, code)
    } catch (error: any) {
        const { message, code } = getError('default', '/signout')
        return getResp(false, message, code)
    }
}

const getCurrentUser = () => {
    try {
        const user = appGetCurrentUser()
        const { message, code } = getSuccess('auth/get-current-user')
        return getResp(true, message, code, user)
    } catch (e) {
        const { message, code } = getError('default', '/get-current-user')
        return getResp(false, message, code)
    }
}

export const pipeLogin = {
    app,
    google,
    register,
    resetPass,
    stateChanged,
    signout,
    getCurrentUser
}
