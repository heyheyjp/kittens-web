import axios from 'axios'

import {
  CREATE_PENDING_TRANSFER,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function createPendingTransfer(values) {
  return async dispatch => {
    dispatch({type: CREATE_PENDING_TRANSFER, status: STATUS_REQUEST})
    try {
      const url = `//${process.env.REACT_APP_API_HOST}/pending-transfers`
      const result = await axios.post(url, values)
      dispatch({type: CREATE_PENDING_TRANSFER, status: STATUS_SUCCESS, value: result.data})
    } catch (err) {
      dispatch({type: CREATE_PENDING_TRANSFER, status: STATUS_FAILURE})
    }
  }
}
