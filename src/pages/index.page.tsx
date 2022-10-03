import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import AppWrapper from '../structure/AppWrapper'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Chiquezi - Agência Digital</title>
                <meta name="description" content="Desenvolvimento de websites para sua empresa" />
            </Head>

            <AppWrapper>
                <h1>Hello World!!!</h1>
            </AppWrapper>
        </>
    )
}

export default Home
