import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from '../Shared/Container'
import Pagination from '../Pagination'

const Image = styled.img`
  max-height: 200px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const MovieWrap = styled.li`
  display: flex;
  flex-direction: row;
  background: #ff00ff;
  margin-top: 5px;
`

const MovieImg = styled.div`
  display: flex;
  justify-content: left;
`

const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1;
  background: #fff;
`

const MovieVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  justify-content: flex-end;
  background: #f9f9f9;
`

const StyledLink = styled(Link)`
  display: flex;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
`

const MovieList = ({ movies, searchValue }) => {
  const [pageLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const totalMovies = movies && movies.length
  const indexOfLastMovie = currentPage * pageLimit
  const indexOfFirstMovie = indexOfLastMovie - pageLimit

  const totalPages = Math.ceil(totalMovies / pageLimit)
  return (
    <Container>
      <List>
        {movies && movies.slice(indexOfFirstMovie, indexOfLastMovie)
          .filter((movie) => new RegExp(`^${searchValue.toLowerCase()}`).test(movie.title.toLowerCase()))
          .map((movie) =>
          <MovieWrap key={movie.id}>
            <StyledLink
              to={`/details/${movie.id}`}
              key={movie.id}
            >
              <MovieImg>
                <Image src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
              </MovieImg>
              <MovieTitle>
                {movie.title}
              </MovieTitle>
              <MovieVote>
                {movie.vote_average}
              </MovieVote>
            </StyledLink>
          </MovieWrap>,
        )}
      </List>
      <Pagination
        pageLimit={pageLimit}
        totalPages={totalPages}
        totalMovies={totalMovies}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  )
}

export default MovieList
