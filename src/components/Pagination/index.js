import React from 'react'
import styled from 'styled-components'

const Wrap = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`


const NumberWrap = styled.li`
  display: flex;
  width: auto;
  background: #fff;
  height: 40px;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
  &:hover{
    color: #ff00ff;
  }
`

const Pagination = ({ currentPage, pageLimit, setCurrentPage, totalMovies}) => {

  const nextPage = (totalMovies > currentPage * pageLimit) ? currentPage + 1 : currentPage
  const prevPage = (currentPage * pageLimit > pageLimit) ? currentPage - 1 : currentPage
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalMovies / pageLimit); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <Wrap>
    <NumberWrap onClick={() => setCurrentPage(prevPage)}>Prev</NumberWrap>
      {pageNumbers.map((pageNumber, index) =>
      <NumberWrap
        key={index}
        onClick={() => setCurrentPage(pageNumber)}
      >
      { pageNumber }
      </NumberWrap>,
      )}
      <NumberWrap onClick={() => setCurrentPage(nextPage)}>Next</NumberWrap>
    </Wrap>
  )
}

export default Pagination
