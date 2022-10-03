import React from 'react'
import { Popover } from 'antd'
import styled from 'styled-components'

const Div = styled.div`
    width: 160px;
    height: auto;
    padding: 24px 16px;
`

const content = (
    <Div className="mx-auto">
        <p className="text-center text-gray-500">Não há notificações novas no momento</p>
    </Div>
)

export const PopOverNotification: React.FC = ({ children }) => {
    return (
        <Popover
            content={content}
            placement="bottom"
            title="Novidades"
            trigger="click"
            id="notification-pop-over"
            onVisibleChange={(visible) => {
                const icon = document.querySelector('.feather-bell')
                const classList = icon?.classList

                if (classList?.contains('active')) {
                    icon?.classList.remove('active')
                } else {
                    icon?.classList.add('active')
                }
            }}
        >
            {children}
        </Popover>
    )
}

export default PopOverNotification
