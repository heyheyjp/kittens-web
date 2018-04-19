import {
  WEB_3_RECEIVE_ACCOUNT,
  WEB_3_CHANGE_ACCOUNT,
  FIND_TRANSFERS_FOR_ACCOUNT,
  CREATE_PENDING_TRANSFER,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

const initialState = {
  hasLoaded: false,
  isLoading: false,
  byHash: {},
}

export default function transfers(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return initialState

    case FIND_TRANSFERS_FOR_ACCOUNT: {
      if (action.status === STATUS_REQUEST) {
        return {...state, isLoading: true}
      }
      if (action.status === STATUS_FAILURE) {
        return {...state, hasLoaded: true, isLoading: false}
      }
      if (action.status === STATUS_SUCCESS) {
        let newState = {...state, hasLoaded: true, isLoading: false}
        if (Array.isArray(action.value)) {
          newState.byHash = action.value.reduce((result, transfer) => {
            result[transfer.transactionHash] = transfer
            return result
          }, {})
        }
        return newState
      }
      return state
    }

    case CREATE_PENDING_TRANSFER: {
      if (action.status === STATUS_SUCCESS && action.value) {
        const byHash = {...state.byHash, [action.value.txHash]: action.value}
        return {...state, byHash}
      }
      return state
    }

    default:
      return state
  }
}
