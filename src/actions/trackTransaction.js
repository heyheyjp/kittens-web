import axios from 'axios'

import {TRACK_TRANSACTION, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE} from 'utils/constants'

export default function trackTransaction(transactionHash) {
  return async dispatch => {
    dispatch({type: TRACK_TRANSACTION, status: STATUS_REQUEST})
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/track-transaction/${transactionHash}`
      const result = await axios.get(url)
      dispatch({type: TRACK_TRANSACTION, status: STATUS_SUCCESS, value: result.data})
    } catch (err) {
      dispatch({type: TRACK_TRANSACTION, status: STATUS_FAILURE})
    }
  }
}
