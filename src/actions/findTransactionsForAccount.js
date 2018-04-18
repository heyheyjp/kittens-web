import axios from 'axios'

import {
  FIND_TRANSACTIONS_FOR_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function findTransactionsForAccount(accountAddress) {
  return async dispatch => {
    dispatch({type: FIND_TRANSACTIONS_FOR_ACCOUNT, status: STATUS_REQUEST})
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/accounts/${accountAddress}/transactions`
      const transactions = await axios.get(url)
      dispatch({type: FIND_TRANSACTIONS_FOR_ACCOUNT, status: STATUS_SUCCESS, value: transactions})
    } catch (err) {
      dispatch({type: FIND_TRANSACTIONS_FOR_ACCOUNT, status: STATUS_FAILURE})
    }
  }
}
