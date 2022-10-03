import { message } from 'antd'

export function verifyUpload(file: Blob) {
    const isJpgOrPng =
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/jpg'
    if (!isJpgOrPng) message.error('É permitido somente arquivos JPG ou PNG')

    const isLt120k = file.size / 1024 / 1024 < 0.12
    if (!isLt120k) message.error('A imagem não pode ser maior que 120kb')

    return isJpgOrPng && isLt120k
}
