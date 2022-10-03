import { signOut } from '@firebase/auth'
import { auth } from '../../../firebase'

export const appSignout = async () => await signOut(auth)
