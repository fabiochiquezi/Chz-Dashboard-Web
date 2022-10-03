import { Div } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Avatar1 from '../../components/Avatar/Avatar1'
import MoonIcon from '../../components/Icons/MoonIcon'
import MenuIcon from '../../components/Icons/MenuIcon'
import { StructureContext } from '../StructureContext'
import { routes } from '../../../shared/config/routes'
import { getDevice } from '../../../shared/helpers/device'
import React, { useEffect, useState, useContext } from 'react'
import NotificationIcon from '../../components/Notification/NotificationIcon'

const Header: React.FC = () => {
    const [device, setDevice] = useState('')
    const user = useSelector((state: RootState) => state.user)
    const { modeUI, menuProvider } = useContext(StructureContext)

    function handleMode() {
        modeUI.mode ? modeUI.setMode(0) : modeUI.setMode(1)
    }

    function handleMenu() {
        menuProvider.setMenu(!menuProvider.menu)
    }

    useEffect(() => {
        setDevice(getDevice())
    }, [])

    return (
        <Div>
            <div className="app-header-left">
                <MenuIcon
                    handleClick={handleMenu}
                    device={device}
                    menu={
                        device === 'mobile' ||
                        device === 'tablet'
                        ? menuProvider.menu
                        : false
                    }
                />
            </div>

            <div className="app-header-right">
                <div className="order-1 lg:order-3 lg:ml-4">
                    <Avatar1
                        name={user.userAuth.displayName}
                        photo={user.userAuth.photoURL}
                        menu={[
                            { link: routes.userData, item: 'Dados pessoais' },
                            { link: routes.home, item: 'Custos' }
                        ]}
                    />
                </div>

                <div className="order-2 ml-3 lg:ml-4">
                    <MoonIcon mode={modeUI.mode} onClick={handleMode} />
                </div>

                <div className="order-3 lg:order-1 ml-3 lg:ml-0">
                    <NotificationIcon />
                </div>
            </div>

        </Div>
    )
}

export default Header
