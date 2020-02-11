import {
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
} from '../constants'

const initialState = {
  items: [],
  isFetching: false,
  error: null,
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      }
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        items: [],
      }
    default:
      return state
  }
}
