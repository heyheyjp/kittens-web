import createPendingTransfer from './createPendingTransfer'
import {getKittensContractInstance} from 'clients/contract'
import {
  TRANSFER_KITTEN_TO_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function transferKittenToAccount(kittenId, fromAccountAddress, toAccountAddress) {
  return async dispatch => {
    dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_REQUEST})

    const CKContractInstance = getKittensContractInstance()
    CKContractInstance.transfer(toAccountAddress, kittenId, async (err, txHash) => {
      if (err) {
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_FAILURE, error: err})
      } else {
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_SUCCESS, value: txHash})
        dispatch(
          createPendingTransfer({txHash, kittenId, from: fromAccountAddress, to: toAccountAddress}),
        )
      }
    })
  }
}
