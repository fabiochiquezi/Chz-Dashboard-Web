export function fnMenuDesktop(menuDesktop: boolean) {
    const getStorageUI = window.localStorage.getItem('localStorageUI')
    const storage = getStorageUI
        ? JSON.parse(getStorageUI)
        : { menuDesktop: false, mode: 0 }

    storage.menuDesktop = menuDesktop
    const stringfyStorage = JSON.stringify(storage)
    window.localStorage.setItem('localStorageUI', stringfyStorage)
}
