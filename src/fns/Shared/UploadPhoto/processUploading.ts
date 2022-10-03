import React from 'react'
import { getBase64 } from './getBase64'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'

interface processType {
    (info: UploadChangeParam<UploadFile<any>>,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    ok?: boolean) : boolean | void
}

export const startUploading: processType = (info, setImageUrl, setLoading) => {
    const isUploading = info.file.status === 'uploading'
    if (isUploading) {
        setImageUrl('')
        setLoading(true)
        return true
    }
    return false
}

export const doneUploaded: processType = (info, setImageUrl, setLoading, ok) => {
    const isDone = info.file.status === 'done'
    const fileObj = info.file.originFileObj

    if (ok && isDone && fileObj) {
        getBase64(fileObj, function(imageUrl: string) {
            setImageUrl(imageUrl)
            setLoading(false)
        })
    } else {
        setImageUrl('')
        setLoading(false)
    }
}
