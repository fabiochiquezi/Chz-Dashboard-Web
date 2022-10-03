import styled from 'styled-components'

export const Button = styled.button`
    padding: 0;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: all .25s ease;

    &:active{
        img{
            transform: scale(0.9);
        }
    }

    &:hover{
        opacity: 0.6;
    }

    @media (min-width: 1024px){
        padding-left: 12px;
        border-left: 2px solid #ddd;
    }

    img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 4px;
        transition: all .25s ease;
    }

    span {
        color: var(--main-color);
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
    }
`
export const Ul = styled.div`
    padding: 8px 16px;

    li:last-child{
        border-top: 1px solid #eee;
    }

    /* li:last-child a{
        padding-bottom: 0px;
    }

    li:first-child a{
        padding-top: 0px;
    } */

    a{
       padding: 8px 0px;
       padding-left: 5px;
       font-size: 16px;
       color: #0C0F14;
       width: 100%;
       display: inline-block;

       &:hover{
           color: #7380F3;
       }
    }
`
