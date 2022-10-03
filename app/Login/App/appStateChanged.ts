import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../../../firebase'

type callBackType = {
    (user: User | null): void
}

export const appStateChanged = (callback: callBackType) =>
    onAuthStateChanged(auth, (user) =>
        callback(user))
