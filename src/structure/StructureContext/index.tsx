import { setStorageUIConfig } from '../../fns/Structure/fnSetStorage'
import { fnMenuDesktop } from '../../fns/Structure/fnMenuDesktop'
import { modeUI } from '../../fns/Structure/fnModeUI'
import React, { useState, useEffect } from 'react'

type contextType = {
    menuProvider: {
        menu: boolean,
        setMenu: React.Dispatch<React.SetStateAction<boolean>>
    },
    modeUI: {
        mode: number,
        setMode: React.Dispatch<React.SetStateAction<number>>
    }
    menuDesktopProvider: {
        menuDesktop: boolean,
        setMenuDesktop: React.Dispatch<React.SetStateAction<boolean>>
    },
}

const DEFAULT_PROVIDER = {
    menuProvider: {
        menu: false,
        setMenu: () => {}
    },
    modeUI: {
        mode: 0,
        setMode: () => {}
    },
    menuDesktopProvider: {
        menuDesktop: false,
        setMenuDesktop: () => {}
    }
}

export const StructureContext = React.createContext<contextType>(DEFAULT_PROVIDER)

export const StructureProvider: React.FC = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const [menuDesktop, setMenuDesktop] = useState(false)
    const [mode, setMode] = useState(0)

    useEffect(() => {
        setStorageUIConfig(setMode, setMenuDesktop)
    }, [])

    useEffect(() => { modeUI(mode) }, [mode])
    useEffect(() => { fnMenuDesktop(menuDesktop) }, [menuDesktop])

    return (
        <StructureContext.Provider value={{
            menuProvider: { menu, setMenu },
            menuDesktopProvider: { menuDesktop, setMenuDesktop },
            modeUI: { mode, setMode },
        }}>
            {children}
        </StructureContext.Provider>
    )
}
