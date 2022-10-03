import React from 'react'
import { message } from 'antd'
import { store } from '../../store/store'
import { UploadChangeParam } from 'antd/lib/upload'
import { updatePhotoAct } from '../../store/userSlice'
import { UploadFile } from 'antd/lib/upload/interface'
import { pipeUser } from '../../../shared/pipes/Users'
import { pipeLogin } from '../../../shared/pipes/Login'
import { doneUploaded, startUploading } from '../Shared/UploadPhoto/processUploading'

interface props {
    (
        setImageUrl: React.Dispatch<React.SetStateAction<string>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ):
    (info: UploadChangeParam<UploadFile<any>>) => void
}

export const uploadPhotoUser:props = (setImageUrl, setLoading) => async (info) => {
    const isUploading = startUploading(info, setImageUrl, setLoading)
    if (isUploading) return

    const user = pipeLogin.getCurrentUser().data
    const file = info.file!.originFileObj
    const fileName = info.file.name

    if (file && user) {
        const uploadAction = await pipeUser.uploadPhoto({ user, file, fileName })
        doneUploaded(info, setImageUrl, setLoading, uploadAction.ok)

        if (uploadAction.ok) {
            store.dispatch(updatePhotoAct(uploadAction.data))
            return
        }
        message.error(uploadAction.message)
    } else {
        setImageUrl('')
        setLoading(false)
    }
}
