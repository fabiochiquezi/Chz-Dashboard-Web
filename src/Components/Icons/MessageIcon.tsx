import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border-radius: 4px 0 0 4px;
    position: absolute;
    right: 0;
    top: 58px;
    background-color: var(--message-btn);
    border: none;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    display: none;

    @media screen and (max-width: 520px) {
        top: 48px;
    }

    @media screen and (max-width: 880px) {
        display: flex;
    }
`

const MessageIcon: React.FC = () => {
  return (
    <Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    </Button>
  )
}

export default MessageIcon
