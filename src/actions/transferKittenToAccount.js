import trackTransfer from './trackTransfer'
import {getKittensContractInstance} from 'clients/contract'
import {
  TRANSFER_KITTEN_TO_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'

export default function transferKittenToAccount(kittenId, targetAccountAddress) {
  return async dispatch => {
    dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_REQUEST})

    const CKContractInstance = getKittensContractInstance()
    CKContractInstance.transfer(targetAccountAddress, kittenId, async (err, txHash) => {
      if (err) {
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_FAILURE, error: err})
      } else {
        console.log('transaction:', txHash)
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_SUCCESS, value: txHash})
        dispatch(trackTransfer(txHash))
      }
    })
  }
}
