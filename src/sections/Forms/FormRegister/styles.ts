import styled from 'styled-components'

export const Div = styled.div`
    .content {
        position: relative;
        width: 100%;
        display: flex;
        padding: 72px 24px 32px;
        flex-direction: column;
        align-items: center;
        background: #fff;
        position: absolute;

        @media (min-height: 640px) and (max-width: 768px){
            top: 50%;
            margin-top: -320px;
        }
        @media (min-height: 800px){
            box-shadow: 10px 0px 12px rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 770px) and (max-width: 1024px) and (min-height: 720px){
            height: 100vh;
        }

        @media (min-width: 1024px) and (min-height: 1360px){
            height: auto;
        }

        @media (min-width: 768px){
            width: 60%;
            margin: 0 auto;
        }

        @media (min-width: 1024px){
            margin: 0px;
            width: 50%;
            max-width: 580px;
            top: 0%;
            margin-top: 0px;
            box-shadow: 10px 0px 12px rgba(0, 0, 0, 0.2);
        }

        /* Tablet */
        @media (max-width: 1024px) and (min-height: 840px){
            border-radius: 20px;
            position: absolute;
            left: 50%;
            margin-left: -230px;
            top: 50%;
            margin-top: -317px;
            padding: 72px 42px 38px;
        }

        @media (min-width: 1025px) and (min-height: 630px){
            height: 100vh;
            justify-content: center;
        }
    }

    .inner-container{
        width: 100%;

        @media (min-width: 1024px){
            max-width: 450px;
            margin: 0 auto;
        }
    }

    .back-button{
        /* @media (max-width: 1024px) and (min-height: 630px){
            margin: 8px;
        } */

        p{
            margin: 0px !important;
            color: #bbb;
            transition: all .25s ease;
        }

        .back-icon{
            height: 40px;
            width: 40px;
            border-radius: 100px;
            display: flex;
            justify-items: center;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.05);
            transition: all .25s ease;

            svg{
                transition: all .25s ease;
            }
        }

        &:hover{
            transform: scale(0.98);

            svg{
                width: 0.9em;
                height: 0.9em;
            }

            p{
                /* opacity: 0.7; */
                color: rgba(0, 0, 0, 0.6);
            }
        }

        &:active{
            transform: scale(0.8);
        }
    }

    h1 {
        margin-bottom: 10px;
        font-size: 46px;
        line-height: 46px;
        font-weight: 600;
        text-align: center;
    }

    p {
        margin: 0 auto;
        margin-bottom: 24px;
        font-size: 16px;
        color: #bbb;
        max-width: 300px;
        text-align: center;
    }

    /* Form itens */
    .ant-form-item {
        width: 100%;
    }

    .end-form-options {
        margin-bottom: 0px;

        button{
            margin-bottom: 8px;

            @media (min-width: 768px){
                margin-bottom: 12px;
            }

            @media (min-width: 1024px){
                margin-bottom: 20px;
            }
        }

        .ant-form-item-control-input-content{
            display: flex;
            flex-direction: column;
        }
    }

    .login-form-button {
        width: 100%;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%) !important;
        border: none;
        height: 44px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

        @media (min-width: 768px){
            max-width: 160px;
            margin: 0 auto;
        }


        &:hover{
            opacity: 0.9;
            transform: scale(0.98);
        }

        &:active{
            transform: scale(0.85);
        }

        svg {
            /* margin-top: -5px; */
            transform: scale(0.9);
            position: relative;
        }
    }

    .ant-spin{
        margin-top: -2px;
    }

    .message-content{
        display: none;

        /* @media (min-width: 1024px){
            position: absolute;
            top: 50%;
            left: calc(50%);
            display: inline-block;
            width: 600px;
            margin-top: -220px;
            margin-left: -020px;
        }
        @media (min-width: 1280px){
            width: 800px;
            margin-top: -300px;
            margin-left: -60px;
        }
        @media (min-width: 1520px){
            width: 900px;
            margin-top: -320px;
            margin-left: -120px;
        } */
    }
/*
    .message-content{
        display: none;

        @media (min-width: 1024px){
            position: absolute;
            top: 50%;
            left: calc(50%);
            display: inline-block;
            margin-top: -400px;
            margin-left: -00px;

            svg{
                width: 600px;
            }
        }
    } */
`
