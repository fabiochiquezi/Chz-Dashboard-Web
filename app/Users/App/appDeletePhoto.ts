import { storage } from '../../../firebase'
import { ref, deleteObject } from 'firebase/storage'
import { storageFolders } from '../../../shared/config/storageFolders'

export const appDeletePhoto = async (oldPhotoUrl: string) => {
    const urlBroken1 = oldPhotoUrl?.split('/photoProfile%2F')[1]
    const urlBroken2 = urlBroken1?.split('?')[0]
    const oldImagePath = storageFolders.photoProfile + urlBroken2
    const oldImage = ref(storage, oldImagePath)
    await deleteObject(oldImage)
}
