import { Spin } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { pipeLogin } from '../../../shared/pipes/Login'
import { treatRoutes } from '../../fns/Structure/treatRoutes'

const Div = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;

    .spin{
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -20px;
        margin-top: -20px;
    }
`

const AuthStateChange: React.FC = ({ children }) => {
    const router = useRouter()
    const [verifyState, setVerifyState] = useState(false)
    const privateRoute = router.pathname !== '/signin' && router.pathname !== '/register'

    useEffect(() => {
        pipeLogin.stateChanged(treatRoutes(setVerifyState))
    }, [router.pathname])

    if (!verifyState && privateRoute) return <Div><Spin size="large" className="spin" /></Div>
    return <div>{children}</div>
}

export default AuthStateChange
