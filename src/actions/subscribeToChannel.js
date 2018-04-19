import {subscribeToChannel as socketSubscribeToChannel} from 'clients/socket'
import {STATUS_REQUEST, SUBSCRIBE_TO_CHANNEL} from 'utils/constants'

export default function subscribeToChannel(channel, options) {
  return dispatch => {
    dispatch({type: SUBSCRIBE_TO_CHANNEL, status: STATUS_REQUEST})
    socketSubscribeToChannel(channel, options)
  }
}
