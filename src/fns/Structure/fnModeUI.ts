export function modeUI(mode: number) {
    const getStorageUI = window.localStorage.getItem('localStorageUI')
    const storage = getStorageUI
        ? JSON.parse(getStorageUI)
        : { menuDesktop: false, mode: 0 }

    storage.mode = mode
    const stringfyStorage = JSON.stringify(storage)
    window.localStorage.setItem('localStorageUI', stringfyStorage)

    if (mode === 0) {
        document.documentElement.classList.remove('dark')
        return
    }

    document.documentElement.classList.add('dark')
}
