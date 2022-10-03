import { storageFolders } from '../../../shared/config/storageFolders'
const { photoProfile } = storageFolders

export const newNamePhoto = (uid: string, name: string) => {
    const hash = String(Math.floor(Math.random() * 100000000))
    const brokenName = name.split('.')
    const length = brokenName.length
    const extension = brokenName[length - 1]
    const newNamePhoto = uid + '-' + hash + '.' + extension
    const newPath = photoProfile + newNamePhoto
    return newPath
}
