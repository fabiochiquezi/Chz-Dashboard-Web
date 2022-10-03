import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import FormRegister from '../../sections/Forms/FormRegister'

export const Section = styled.section`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background: #fff;
    background-size: cover;

    @media (min-height: 640px){
        height: 100vh;
    }

    @media (min-height: 800px){
        background: url('./bg/login/bg-17.jpg') no-repeat center center;
        background-size: cover;
    }

    @media (min-width: 768px){
        background: url('./bg/login/bg-17.jpg') no-repeat center center;
        background-size: cover;
    }

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

const Register: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chiquezi - Register</title>
                <meta name="description" content="Faça seu cadastro na nossa plataforma" />
            </Head>

            <Section>
                <FormRegister />

                {/* <div className="message-content">
                    <img src="./bg/illustration/illustration-3.png" alt="" />
                </div> */}
            </Section>
        </>
    )
}

export default Register
