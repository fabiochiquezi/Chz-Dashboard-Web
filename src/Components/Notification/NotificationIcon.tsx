import React from 'react'
import styled from 'styled-components'
import PopOverNotification from './PopOverNotification'

const Button = styled.button`
    color: var(--main-color);
    padding: 0;
    border: 0;
    background-color: transparent;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg.active {
        fill: var(--main-color);
    }
`

const NotificationIcon: React.FC = () => {
    return (
        <PopOverNotification>
            <Button id="notification-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
            </Button>
        </PopOverNotification>
    )
}

export default NotificationIcon
