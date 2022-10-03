import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import FormLogin from '../../sections/Forms/FormLogin'

const Div = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--main-color);
    background: url('./bg/login/bg-16.jpg') no-repeat center center;
    background-size: cover;

    .overlay{
        display: none;
        background: rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`

const Signin: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chiquezi - Login</title>
                <meta name="description" content="Faça o login na sua conta" />
            </Head>

            <Div>
                <div className="overlay"></div>
                <FormLogin />
            </Div>
        </>
    )
}
export default Signin
