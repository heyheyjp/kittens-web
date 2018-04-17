import {WEB_3_RECEIVE_ACCOUNT, WEB_3_CHANGE_ACCOUNT} from 'utils/constants'

const initialState = {
  currentAccountAddress: null,
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case WEB_3_RECEIVE_ACCOUNT:
    case WEB_3_CHANGE_ACCOUNT:
      return {...state, currentAccountAddress: action.address}

    default:
      return state
  }
}
