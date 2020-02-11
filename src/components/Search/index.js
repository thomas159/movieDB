import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #282828;
  height: 40px;
`

const SearchBar = styled.form`
  width: 300px;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-family: 'FontAwesome';
    content: '\f002';
    background: $color;
    text-align: center;
    color: $iconColor;
    border-radius: 5px;
    -webkit-font-smoothing: subpixel-antialiased;
    font-smooth: always;
  }
}
`

const SearchTerm = styled.input`
  width: 100%;
  padding: 0 10px 0 50px;
  border: 0;
  height: 30px;
  outline: none;
}`

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  width: auto;
  border-left: 10px solid #282828;
  height: 30px;
  background: #ff00ff;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
}`

const Search = ({ searchValue, setSearchValue }) => (
    <Wrap>
      <SearchBar>
        <SearchTerm value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <SearchButton type="submit">Search</SearchButton>
      </SearchBar>
    </Wrap>
)

export default Search
