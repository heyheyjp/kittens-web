import axios from 'axios'

import {
  FIND_KITTENS_FOR_OWNER,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function findKittensForOwner(accountAddress) {
  return async dispatch => {
    dispatch({type: FIND_KITTENS_FOR_OWNER, status: STATUS_REQUEST})
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/accounts/${accountAddress}/kittens`
      const result = await axios.get(url)
      dispatch({type: FIND_KITTENS_FOR_OWNER, status: STATUS_SUCCESS, value: result.data})
    } catch (err) {
      dispatch({type: FIND_KITTENS_FOR_OWNER, status: STATUS_FAILURE})
    }
  }
}
