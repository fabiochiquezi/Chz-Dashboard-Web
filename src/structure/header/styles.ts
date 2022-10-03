import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 24px;
    position: relative;
    z-index: 100;

    @media (max-width: 520px) {
        padding: 16px 16px;
    }

    .app-header-left, .app-header-right {
        display: flex;
        align-items: center;
    }

    .app-header-right{
        order: 1;

        @media (min-width: 1024px){
            order: 2;
        }
    }

    .app-header-left {
        flex-grow: 1;
        order: 2;
        justify-content: flex-end;

        @media (min-width: 1024px){
            order: 1;
            justify-content: flex-start;
        }
    }
`
