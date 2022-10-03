import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import { auth } from '../../../firebase'

export const appSigninGoogle = async (provider: GoogleAuthProvider) =>
    await signInWithPopup(auth, provider)
