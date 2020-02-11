import {
  FETCH_MOVIE_DETAILS_FAILURE, FETCH_MOVIE_DETAILS_REQUEST, FETCH_MOVIE_DETAILS_SUCCESS,
} from '../../constants'

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  dispatch({ type: 'FETCH_MOVIE_DETAILS_REQUEST' })
  try {
    const data = await (await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=03b8572954325680265531140190fd2a`)).json()
    dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: error })
  }
}

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIE_DETAILS_REQUEST,
})

export const fetchMoviesSuccess = (movieId) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload: { ...movieId },
})

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIE_DETAILS_FAILURE,
  payload: { error },
})
