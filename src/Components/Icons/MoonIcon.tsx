import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .15s ease;

    &:active{
        transform: scale(0.7);
    }

    .active {
        fill: var(--main-color);
    }
`

type props = {
    onClick: () => void,
    mode: number
}

const MoonIcon: React.FC<props> = ({ onClick, mode, ...props }) => {
    return (
        <Button title="Switch Theme" onClick={onClick} { ...props } id="moon-icon">
            <svg className={'moon ' + (mode === 1 ? 'active' : 'inactive')} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </Button>
    )
}

export default MoonIcon
