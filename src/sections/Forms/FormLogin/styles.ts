import styled from 'styled-components'

export const Div = styled.div`
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        margin-left: -150px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 25px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
        opacity: 0;
        animation: showForm 0.6s forwards;
        z-index: 100;

        @media (min-width: 360px) {
            margin-left: -160px;
            width: 320px;
            padding: 32px;
        }

        @media (min-width: 768px) {
            margin-left: -175px;
            width: 350px;
            top: 50%;
        }
    }

    @keyframes showForm {
        to {
            margin-top: -243px;
            opacity: 1;
        }
    }

    h1 {
        margin-bottom: 8px;
        font-size: 46px;
        line-height: 46px;
        font-weight: 600;
    }

    p {
        margin-bottom: 24px;
        font-size: 16px;
        color: var(--gray-7);
    }

    /* Form itens */
    .ant-form-item {
        width: 100%;
    }

    .ant-spin{
        margin-top: -2px;
    }

    button.ant-btn-primary {
        &:focus {
            background-color: var(--blue-6) !important;
        }
    }

    .box-options-form {
        margin-bottom: 4px;

        .ant-form-item-control-input-content {
            display: flex;
            justify-content: space-between;

            button {
                padding: 0px;
                height: auto;
                line-height: auto;
            }
        }
    }

    .end-form-options {
        margin-bottom: 0px;

        button {
            margin-bottom: 8px;
        }
    }
`
