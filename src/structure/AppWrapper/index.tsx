import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styled from 'styled-components'
import { StructureProvider } from '../StructureContext'

const Div = styled.div`
    .app-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--app-container);
        transition: .2s;
        max-width: 1800px;

        button, input, optgroup, select, textarea {
            font-family: 'DM Sans', sans-serif;
        }
    }

    .app-content{
        display: flex;
        flex-direction: column;
        padding: 16px 24px 24px 0;


        @media (max-width: 520px){
            padding: 16px 12px 24px 12px;
        }

        @media (min-width: 1024px){
            flex-direction: row;
        }
    }
`

const AppWrapper: React.FC = ({ children }) => {
    return (
        <StructureProvider>
            <Div>
                <div className="app-container">
                    <Header />

                    <div className="app-content">
                        <Sidebar />

                        <div className="flex flex-row flex-wrap w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </Div>
        </StructureProvider>
    )
}

export default AppWrapper
