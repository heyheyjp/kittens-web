import {
  TRANSFER_KITTEN_TO_ACCOUNT,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
} from 'utils/constants'
import {getKittensContractInstance} from 'utils/contract'

export default function transferKittenToAccount(kittenId, targetAccountAddress) {
  return async dispatch => {
    console.log(
      'transferKittenToAccount ::',
      'kittenId:',
      kittenId,
      'targetAccountAddress:',
      targetAccountAddress,
    )
    dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_REQUEST})

    const CKContractInstance = getKittensContractInstance()
    CKContractInstance.transfer(targetAccountAddress, kittenId, (err, result) => {
      if (err) {
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_FAILURE, error: err})
      } else {
        console.log('transaction:', result)
        dispatch({type: TRANSFER_KITTEN_TO_ACCOUNT, status: STATUS_SUCCESS, value: result})
      }
    })
  }
}
