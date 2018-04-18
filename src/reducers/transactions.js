import {
  WEB_3_RECEIVE_ACCOUNT,
  WEB_3_CHANGE_ACCOUNT,
  FIND_TRANSACTIONS_FOR_ACCOUNT,
  STATUS_SUCCESS,
} from 'utils/constants'

const initialState = {
  byHash: {},
  byAccountAddress: {},
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return initialState

    case FIND_TRANSACTIONS_FOR_ACCOUNT: {
      if (action.status === STATUS_SUCCESS && Array.isArray(action.value)) {
        const byHash = {}
        const byAccountAddress = {}
        action.value.forEach((result, tx) => {
          byHash[tx.hash] = tx
          const {fromAddress, toAddress} = tx
          if (fromAddress) {
            byAccountAddress[fromAddress] = byAccountAddress[fromAddress] || {}
            byAccountAddress[fromAddress][tx.hash] = tx
          }
          if (toAddress) {
            byAccountAddress[toAddress] = byAccountAddress[toAddress] || {}
            byAccountAddress[toAddress][tx.hash] = tx
          }
        })
        return {byHash, byAccountAddress}
      }

      return state
    }

    default:
      return state
  }
}
