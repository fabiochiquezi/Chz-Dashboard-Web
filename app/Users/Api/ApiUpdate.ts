import { updateProfile, User } from '@firebase/auth'
import { getDownloadURL, UploadResult } from 'firebase/storage'

export const updatePhoto = async (snapshot: UploadResult, user: User) => {
    const photoURL = await getDownloadURL(snapshot.ref)
    await updateProfile(user, { photoURL, displayName: user.displayName })
    return photoURL
}
