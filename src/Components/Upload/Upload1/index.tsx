import { Upload } from 'antd'
import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { verifyUpload } from '../../../fns/Shared/UploadPhoto/verifyUpload'

type props = { title?: string, className?: string, uploadFn: any }

const Upload1: React.FC<props> = ({
    title = 'Foto',
    className = 'flex items-center',
    uploadFn
}) => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    return (
        <div className={className}>
            <p className="mb-2 text-gray-600">{title}</p>

            <Upload
                listType="picture-card"
                name="file"
                className="form-uploader ml-6"
                showUploadList={false}
                onChange={uploadFn(setImageUrl, setLoading)}
                beforeUpload={verifyUpload}
                headers= {{ authorization: 'authorization-text' }}
                maxCount={1}
            >
                {imageUrl
                    ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                    : <div>
                        {loading ? <LoadingOutlined /> : <PlusOutlined />}
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                }
            </Upload>
        </div>
    )
}
export default Upload1
