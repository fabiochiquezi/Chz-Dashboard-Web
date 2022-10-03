import styled from 'styled-components'

type propsStyle = {
    menu: boolean,
    mode: number,
    menuDesktop: boolean
}

export const Div = styled.div<propsStyle>`
    padding: 92px 16px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    transition: all .25s ease;
    top: 0;
    background: ${props => props.mode === 1 ? '#1f1d2b' : '#fff'};
    left: ${props => props.menu ? '0' : '-100%'};
    animation: ${props => props.menu ? 'moveIn' : 'moveOut'} ${props => props.menu ? '.65s' : '.3s'};

    @keyframes moveIn {
        0% {
            left: -100%;
        }
        50% {
            left: 40px;
        }
        70%{
            left: -15px;
        }
        100%{
            left: 0px;
        }
    }

    @keyframes moveOut {
        0% {
            left: 0;
        }
        100%{
            left: -100%;
        }
    }

    span{
        color: ${props => props.mode === 1 ? '#fff' : '#1f1d2b'};
        position: relative;
        animation: spanShow 600ms ease;

        @media (min-width: 1024px){
            ${
                props => props.menuDesktop
                ? `
                    display: inline-block;
                    font-size: 14px;
                    margin-left: 12px;
                    margin-top: 3px;
                `
            : ''}
        }
    }

    @keyframes spanShow {
        0% {
            left: -50px;
            opacity: 0;
        }
        100%{
            left: 0px;
            opacity: 1;
        }
    }

    @media (min-width: 1024px){
        padding: 40px 16px;
        position: static;
        width: auto;
        height: auto;
        background: transparent;
        width:  ${props => props.menuDesktop ? '198px' : '80px'}
    }

    a{
        /* transition: padding 100ms ease; */

        .font-bold{
            transition: all .2s ease;
        }

        &:hover{
            .font-bold{
                margin-left: 10px;
                /* font-size: 13px; */
            }

            .app-sidebar-link {
                background-color: var(--link-color-hover);
                color: var(--main-color);
                transform: scale(0.92);
            }
        }

        &:active{
            .app-sidebar-link {
                transform: scale(0.7);
            }
        }
    }

    .app-sidebar-link {
        color: var(--main-color);
        margin: 16px 0;
        transition: .2s;
        border-radius: 50%;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            width: 20px;
        }

        &:hover {
            background-color: var(--link-color-hover);
            color: var(--main-color);
        }

        &.active {
            /* background-color: var(--link-color-active-bg) !important; */
            background-color: #00AB5F !important;
            color: var(--link-color-active) !important;
        }
    }

    .icon-show-menu-desktop{
        display: none;

        @media (min-width: 1024px){
            transition: all 150ms ease;
            cursor: pointer;
            display: flex;
            position: fixed;
            left: 24px;
            bottom: 0px;
            cursor: pointer;
        }

        &:hover{
            transform: scale(0.9);
        }
        &:active{
            transform: scale(0.6);
        }

        .app-sidebar-link.active{
            background-color: #6348B3 !important;
        }
    }
`
export const span = 'ml-4 text-xl w-40 font-bold lg:hidden span-menu'
export const link = 'flex items-center w-full'
