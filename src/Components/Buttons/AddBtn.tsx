import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    color: #fff;
    background-color: var(--button-bg);
    padding: 0;
    border: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 720px) {
        width: 20px;
        height: 20px;

        svg {
            width: 16px;
            height: 16px;
        }
    }

`

const AddBtn: React.FC = () => {
  return (
    <Button className="add-btn" title="Add New Project">
        <svg className="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    </Button>
  )
}

export default AddBtn
