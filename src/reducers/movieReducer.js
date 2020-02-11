import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../constants'

const initialState = {
  items: [],
  isFetching: false,
  error: null,
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      }
    case FETCH_MOVIES_FAILURE:
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
