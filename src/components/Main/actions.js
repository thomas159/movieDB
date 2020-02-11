import {
  FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS,
} from '../../constants'

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' })
  try {
    const data = await (await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=03b8572954325680265531140190fd2a`)).json()
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: data })
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error })
  }
}


export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
})

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { ...movies },
})

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
})
