import axios from 'axios'

import {
  FIND_TRANSFERS_FOR_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function findTransfersForAccount(accountAddress) {
  return async dispatch => {
    dispatch({type: FIND_TRANSFERS_FOR_ACCOUNT, status: STATUS_REQUEST})
    try {
      const url = `//${process.env.REACT_APP_API_HOST}/accounts/${accountAddress}/transfers`
      const result = await axios.get(url)
      dispatch({type: FIND_TRANSFERS_FOR_ACCOUNT, status: STATUS_SUCCESS, value: result.data})
    } catch (err) {
      dispatch({type: FIND_TRANSFERS_FOR_ACCOUNT, status: STATUS_FAILURE})
    }
  }
}
