import React from 'react'

export function setStorageUIConfig(
    setMode: React.Dispatch<React.SetStateAction<number>>,
    setMenuDesktop: React.Dispatch<React.SetStateAction<boolean>>
) {
    const storage = window.localStorage.getItem('localStorageUI')
    const storageJSON = storage ? JSON.parse(storage) : false

    if (!storageJSON) {
        const newStorage = { mode: 0, menuDesktop: false }
        const stringfyNewStorage = JSON.stringify(newStorage)
        window.localStorage.setItem('localStorageUI', stringfyNewStorage)
        setMode(0)
        setMenuDesktop(false)
        return
    }

    setMenuDesktop(storageJSON.menuDesktop)
    setMode(storageJSON.mode)
}
