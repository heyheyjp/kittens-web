import {
  WEB_3_RECEIVE_ACCOUNT,
  WEB_3_CHANGE_ACCOUNT,
  FIND_KITTENS_FOR_OWNER,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

const initialState = {
  hasLoaded: false,
  isLoading: false,
  byId: {},
}

export default function kittens(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return initialState

    case FIND_KITTENS_FOR_OWNER: {
      if (action.status === STATUS_REQUEST) {
        return {...state, isLoading: true}
      }
      if (action.status === STATUS_FAILURE) {
        return {...state, hasLoaded: true, isLoading: false}
      }
      if (action.status === STATUS_SUCCESS) {
        let newState = {...state, hasLoaded: true, isLoading: false}
        if (Array.isArray(action.value)) {
          newState.byId = action.value.reduce((result, kitten) => {
            result[kitten.id] = kitten
            return result
          }, {})
        }
        return newState
      }
      return state
    }

    default:
      return state
  }
}
