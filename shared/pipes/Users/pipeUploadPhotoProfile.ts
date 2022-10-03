import { User } from '@firebase/auth'
import { ref } from '@firebase/storage'
import { storage } from '../../../firebase'
import { newNamePhoto } from '../../../app/Users/Infra/rename'
import { appUploadPhoto } from '../../../app/Users/App/appUploadPhoto'
import { getResp } from '../../helpers/utilsResp'

interface payloadType { user: User, fileName: string, file: Blob }

export const pipeUploadPhotoProfile = async (payload: payloadType) => {
    try {
        const { user, fileName, file } = payload
        const renamePhoto = newNamePhoto(user.uid, fileName)
        const refNewPhoto = ref(storage, renamePhoto)
        const oldPhotoUrl = user.photoURL || ''
        const photoLink = await appUploadPhoto(user, file, refNewPhoto, oldPhotoUrl)
        return getResp(true, 'Foto foi atualizada e salva com sucesso', 201, photoLink)
    } catch (e: any) {
        console.log(e, 'error na pipe')
        const msgDefault = 'Ocorreu um erro, sentimos pelo desconforto. Se o erro permanecer por favor entre em contato com o nosso suporte'
        return getResp(false, msgDefault, 500)
    }
}
