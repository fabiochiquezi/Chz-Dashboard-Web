import { Form } from 'antd'
import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'
import AppWrapper from '../../../structure/AppWrapper'
import React, { useRef, useState, useEffect } from 'react'
import FormUserData from '../../../sections/Forms/FormUserData'

const Div = styled.div`
    position: relative;
    padding: 24px 16px;
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.05);
`

const PersonalData: NextPage = () => {
    const [form] = Form.useForm()
    const buttonSubmit = useRef(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            <Head>
                <title>Chiquezi - Agência Digital</title>
                <meta name="description" content="Desenvolvimento de websites para sua empresa" />
            </Head>

            <AppWrapper>
                <Div className="form-personalData">
                    <h1 className="text-3xl font-bold text-color1 mb-1">Dados pessoais</h1>
                    <p className="text-gray-400 mb-6">É importante preencher todos os dados para melhor te atendermos, principalmente em questão de segurança como celular e endereço</p>

                    <FormUserData
                        form={form}
                        buttonSubmit={buttonSubmit}
                        loading={loading}
                    />
                </Div>
            </AppWrapper>
        </>
    )
}

export default PersonalData
