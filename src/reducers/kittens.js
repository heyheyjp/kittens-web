import {
  WEB_3_RECEIVE_ACCOUNT,
  WEB_3_CHANGE_ACCOUNT,
  FIND_KITTENS_FOR_OWNER,
  STATUS_SUCCESS,
} from 'utils/constants'

const initialState = {
  byId: {},
  byOwnerAddress: {},
}

export default function kittens(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return initialState

    case FIND_KITTENS_FOR_OWNER: {
      if (action.status === STATUS_SUCCESS && Array.isArray(action.value)) {
        const byId = action.value.reduce((result, kitten) => {
          result[kitten.id] = kitten
          return result
        }, {})
        const byOwnerAddress = action.value.reduce((result, kitten) => {
          const {ownerAddress} = kitten
          if (ownerAddress) {
            byOwnerAddress[kitten.ownerAddress] = byOwnerAddress[kitten.ownerAddress] || {}
            byOwnerAddress[kitten.ownerAddress][kitten.hash] = kitten
          }
        })
        return {byId, byOwnerAddress}
      } else {
        return state
      }
    }

    default:
      return state
  }
}
