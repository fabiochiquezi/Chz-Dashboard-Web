import { User } from '@firebase/auth'
import { updatePhoto } from './../Api/ApiUpdate'
import { appDeletePhoto } from './appDeletePhoto'
import { StorageReference, uploadBytes } from 'firebase/storage'

type props = {
    (user: User,
    file: Blob,
    refNewPhoto:
    StorageReference,
    oldPhotoUrl: string): Promise<string>
}
export const appUploadPhoto: props = async (user, file, refNewPhoto, oldPhotoUrl) => {
    const uploadData = await uploadBytes(refNewPhoto, file)
    const updatedPhoto = await updatePhoto(uploadData, user)

    if (oldPhotoUrl) {
        await appDeletePhoto(oldPhotoUrl)
            .catch(e => console.log(e, 'delete old photo uploaded user'))
    }

    return updatedPhoto
}
