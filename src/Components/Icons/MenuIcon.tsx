import React from 'react'
import styled from 'styled-components'

type SpanStyleProps = {
    menu: boolean
}

const Span = styled.span<SpanStyleProps>`
    width: 26px;
    height: 2px;
    border-radius: 4px;
    position: relative;
    background-color: var(--main-color);
    background: linear-gradient(90deg, #5c67be 0%, #db5077 100%);
    order: 2;
    transition: all .15s ease;
    display: inline-block;
    top: -4px !important;
    left: 2px;

    @media (max-width: 1024px){
        height: ${props => props.menu ? '0px' : '2px'};
    }

    &:active{
        @media (max-width: 1024px){
            transform: scale(0.8);
        }
    }

    @media (min-width: 1024px){
        order: 1;
    }

    @media (max-width: 640px){
        margin-left: 8px;
        transform: scale(1.35);
    }


    &:before, &:after {
        content: '';
        position: absolute;
        width: 18px;
        height:2px;
        border-radius: 4px;
        background-color: var(--main-color);
        left: 50%;
        transform: translatex(-50%);
        background: linear-gradient(90deg, #5c67be 0%, #db5077 100%);
        transition: all .3s ease .05s;

        @media (max-width: 640px){
            width: 18px;
            height: 2px;
        }
    }

    &:before {
        top: -6px;

        @media (max-width: 1024px){
            top: ${props => props.menu ? '-2px' : '-6px'};
            left: ${props => props.menu ? '2px' : '50%'};
            transform: ${props => props.menu ? 'rotate(45deg)' : ''};
        }
    }
    &:after {
        bottom: -6px;

        @media (max-width: 1024px){
            bottom: ${props => props.menu ? '0px' : '-6px'};
            left: ${props => props.menu ? '2px' : '50%'};
            transform: ${props => props.menu ? 'rotate(-45deg)' : ''};
        }
    }
`

const P = styled.p`
    color: var(--main-color);
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-left: 8px;
    background: linear-gradient(90deg, #5c67be 0%, #db5077 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    order: 1;
    display: none;

    @media (min-width: 1024px){
        order: 2;
        display: inline-block;
    }
`

const Div = styled.div`
    cursor: pointer;
    padding: 4px;
`

type props = {
    device: string,
    handleClick: () => void,
    menu: boolean
}

const MenuIcon: React.FC<props> = ({ device, handleClick, menu }) => {
    return (
        <Div onClick={handleClick}>
            <Span menu={menu} className="app-icon mr-1"></Span>
            <P className="app-name">Chiquezi</P>
        </Div>
    )
}

export default MenuIcon
