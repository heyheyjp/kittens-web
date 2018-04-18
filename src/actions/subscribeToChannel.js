import {subscribeToChannel as socketSubscribeToChannel} from 'utils/socket'
import {SUBSCRIBE_TO_CHANNEL} from 'utils/constants'

export default function subscribeToChannel(channel) {
  return dispatch => {
    socketSubscribeToChannel(channel)
    dispatch({type: SUBSCRIBE_TO_CHANNEL})
  }
}
