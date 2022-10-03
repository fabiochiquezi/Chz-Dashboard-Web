import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

type props = {
    item: any,
    className?: string
}

const Div = styled.div`
    transition: all 250ms ease !important;

    button{
        width: 100%;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%) !important;
        border: none;
        height: 44px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
        /* box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.1); */
        transition: all 250ms ease !important;

        &:hover{
            opacity: 0.9;
            transform: scale(0.98);
        }

        &:active{
            transform: scale(0.85);
        }

        svg {
            transform: scale(0.9);
            position: relative;
        }
    }
`

const MainButton: React.FC<props> = ({ item, children, className }) => {
    return (
        <Div className={'login-form-button ' + className}>
            <Button
                type="primary"
                htmlType="submit"
                size="large"
                ref={item}
            >
                {children}
            </Button>
        </Div>
    )
}

export default MainButton
