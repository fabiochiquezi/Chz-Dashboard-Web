import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { link, span, Div } from './styles'
import { StructureContext } from '../StructureContext'

import { routes } from '../../../shared/config/routes'
import HomeIcon from '../../Components/Icons/HomeIcon'
import ChartIcon from '../../Components/Icons/ChartIcon'
import CalendarIcon from '../../Components/Icons/CalendarIcon'
import ConfigIcon from '../../Components/Icons/ConfigIcon'
import MenuExpand from '../../Components/Icons/MenuExpand'

const Sidebar: React.FC = () => {
    const { menuProvider, modeUI, menuDesktopProvider } =
        useContext(StructureContext)
    const { home } = routes
    const router = useRouter()
    const pathName = router.pathname

    function handleMenuDesktop() {
        menuDesktopProvider.setMenuDesktop(!menuDesktopProvider.menuDesktop)
    }

    return (
        <Div
            menu={menuProvider.menu}
            mode={modeUI.mode}
            menuDesktop={menuDesktopProvider.menuDesktop}
            className="sidebar-structure"
        >
            <Link href={home}>
                <a className={link}>
                    <span
                        className={
                            'app-sidebar-link ' +
                            (pathName === home ? ' active' : '')
                        }
                    >
                        <HomeIcon />
                    </span>
                    <span className={span}>Home</span>
                </a>
            </Link>

            <Link href="/relatorios">
                <a className={link}>
                    <span
                        className={
                            'app-sidebar-link ' +
                            (pathName === '/relatorios' ? ' active' : '')
                        }
                    >
                        <ChartIcon />
                    </span>
                    <span className={span}>Relatórios</span>
                </a>
            </Link>

            <Link href="/calendario">
                <a className={link}>
                    <span
                        className={
                            'app-sidebar-link ' +
                            (pathName === '/calendario' ? ' active' : '')
                        }
                    >
                        <CalendarIcon />
                    </span>
                    <span className={span}>Calendário</span>
                </a>
            </Link>

            <Link href="/configuracoes">
                <a className={link}>
                    <span
                        className={
                            'app-sidebar-link ' +
                            (pathName === '/configuracoes' ? ' active' : '')
                        }
                    >
                        <ConfigIcon />
                    </span>
                    <span className={span}>Configurações</span>
                </a>
            </Link>

            <div onClick={handleMenuDesktop}>
                <div className="icon-show-menu-desktop">
                    <span
                        className={
                            'app-sidebar-link ' +
                            (menuDesktopProvider.menuDesktop ? ' active' : '')
                        }
                    >
                        <MenuExpand />
                    </span>
                </div>
            </div>
        </Div>
    )
}

export default Sidebar
