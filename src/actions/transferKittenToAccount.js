import {
  TRANSFER_KITTEN_TO_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'
import {getKittensContractInstance} from 'utils/contract'

export default function transferKittenToAccount(kittenId, targetAccountAddress) {
  return async dispatch => {
    dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_REQUEST})
    try {
      const CKContractInstance = getKittensContractInstance()
      const transaction = await CKContractInstance.transfer(targetAccountAddress, kittenId)
      dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_SUCCESS, value: transaction})
    } catch (err) {
      dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_FAILURE})
    }
  }
}
