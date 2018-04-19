import {
  WEB_3_RECEIVE_ACCOUNT,
  WEB_3_CHANGE_ACCOUNT,
  FIND_TRANSFERS_FOR_ACCOUNT,
  STATUS_SUCCESS,
} from 'utils/constants'

const initialState = {
  byHash: {},
}

export default function transfers(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return initialState

    case FIND_TRANSFERS_FOR_ACCOUNT: {
      if (action.status === STATUS_SUCCESS && Array.isArray(action.value)) {
        const byHash = action.value.reduce((result, transfer) => {
          result[transfer.transactionHash] = transfer
          return result
        }, {})
        return {byHash}
      }

      return state
    }

    default:
      return state
  }
}
