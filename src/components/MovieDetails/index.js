import React, { useEffect} from 'react'
import { useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import * as allActions from './actions'
import Container from '../Shared/Container'
import Loader from '../Shared/Loader'

const Image = styled.img`
  max-width: 100%;
`
const MovieTitle = styled.div`
  background: #fff;
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
`

const MovieOverview = styled.div`
  background: #fff;
  padding: 20px;
`

const MovieList = () => {
  const dispatch = useDispatch()
  const { movieId } = useParams()

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(allActions.fetchMovieDetails(movieId))
    return () => {
      abortController.abort()
    }
  }, [])

  const { movieDetails, movieDetailsIsFetching } = useSelector((state) => ({
    movieDetails: state.movieDetails.items,
    movieDetailsIsFetching: state.movieDetails.isFetching,
  }))

  return (
    <Container>
      {movieDetailsIsFetching && <Loader />}
      <Image src={`http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} />
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <MovieOverview>{movieDetails.overview}</MovieOverview>
    </Container>
  )
}

export default MovieList
