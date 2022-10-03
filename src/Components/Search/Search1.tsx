import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../Icons/SearchIcon'

const Div = styled.div`
    border-radius: 20px;
    background-color: var(--search-area-bg);
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--light-font);
    box-shadow: 0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1);
    overflow: hidden;

    .dark & { box-shadow: none; }

    .search-input {
        border: none;
        flex: 1;
        outline: none;
        height: 100%;
        padding: 0 20px;
        font-size: 16px;
        background-color: var(--search-area-bg);
        color: var(--main-color);

        &:placeholder {
            color: var(--main-color);
            opacity: .6;
        }

        @media screen and (max-width: 520px) {
            max-width: 120px;
        }
    }
`

const Search1: React.FC = () => {
  return (
    <Div>
        <input className="search-input" type="text" placeholder="Search" />
        <SearchIcon />
    </Div>
  )
}

export default Search1
