import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth'
import { auth } from '../../../firebase'

export const appRegister = async (name: string, email: string, password: string) =>
    await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            await updateProfile(userCredential.user, { displayName: name })
            return userCredential.user
        })
