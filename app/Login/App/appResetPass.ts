import { sendPasswordResetEmail } from '@firebase/auth'
import { auth } from '../../../firebase'

export const appResetPass = async (email: string) =>
    await sendPasswordResetEmail(auth, email)
