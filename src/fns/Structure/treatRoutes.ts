import { routes } from '../../../shared/config/routes'
import { setUser } from '../../store/userSlice'
import { store } from '../../store/store'
import { User } from '@firebase/auth'
import Router from 'next/router'
import React from 'react'

export const treatRoutes = (setVerifyState: React.Dispatch<React.SetStateAction<boolean>>) => (user: User | null) => {
    const privateRoute = Router.pathname !== '/signin' && Router.pathname !== '/register'
    const loginRoute = Router.pathname === '/signin'
    const desloggedAndPrivateRoute = !user && privateRoute
    if (desloggedAndPrivateRoute) {
        Router.push(routes.signin)
        return
    }

    if (user) {
        const dataUser = {
            name: user.displayName || '',
            email: user.email || '',
            uid: user.uid || '',
            photoURL: user.photoURL || ''
        }
        store.dispatch(setUser(dataUser))
        setVerifyState(true)
        if (loginRoute) Router.push(routes.home)
    }
}
