import React from 'react'
import 'antd/dist/antd.css'
import '../styles/general.css'
import '../styles/tailwind.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import AuthStateChange from '../structure/AuthStateChange'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AuthStateChange>
                <Component {...pageProps} />
            </AuthStateChange>
        </Provider>
    )
}
export default MyApp
