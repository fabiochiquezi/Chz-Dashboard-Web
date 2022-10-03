export const saveRememberEmail =
(storage: Storage) =>
    (remember: boolean, email: string) => {
        const item = 'emailRemember'
        const getEmail = storage.getItem(item)

        if (remember) storage.setItem(item, JSON.stringify(email))
        if (!remember && getEmail) storage.removeItem('emailRemember')
}

export const getRememberEmail = (storage: Storage): string => {
    const itemStorage = storage.getItem('emailRemember')
    if (!itemStorage) return ''
    const parseItem: string = JSON.parse(itemStorage)
    return parseItem
}
