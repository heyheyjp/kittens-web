import axios from 'axios'

import {TRACK_TRANSFER, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE} from 'utils/constants'

export default function trackTransfer(txHash) {
  return async dispatch => {
    console.log('trackTransfer:', txHash)
    dispatch({type: TRACK_TRANSFER, status: STATUS_REQUEST})
    try {
      if (!txHash) {
        throw new Error(`Invalid transaction hash: ${txHash}`)
      }
      const url = `${process.env.REACT_APP_API_BASE_URL}/transfers/${txHash}/track`
      const result = await axios.post(url)
      console.log('trackTransfer result:', result.data)
      dispatch({type: TRACK_TRANSFER, status: STATUS_SUCCESS, value: result.data})
    } catch (err) {
      dispatch({type: TRACK_TRANSFER, status: STATUS_FAILURE})
    }
  }
}
