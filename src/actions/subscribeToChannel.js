import {subscribeToChannel as socketSubscribeToChannel} from 'utils/socket'
import {STATUS_REQUEST, SUBSCRIBE_TO_CHANNEL} from 'utils/constants'

export default function subscribeToChannel(channel) {
  return dispatch => {
    dispatch({type: SUBSCRIBE_TO_CHANNEL, status: STATUS_REQUEST})
    socketSubscribeToChannel(channel)
  }
}
