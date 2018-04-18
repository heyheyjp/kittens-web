import socketCluster from 'socketcluster-client'

export const socket = socketCluster.connect()
socket.on('connect', () => console.log('Socket connected'))
socket.on('disconnect', () => console.log('Socket disconnected; trying to reconnect...'))
socket.on('connectAbort', () => null)
socket.on('error', error => console.warn(error.message))

export function subscribeToChannel(channelName, channelOptions) {
  if (socket && channelName) {
    const {onData = () => {}} = channelOptions || {}
    console.log(`Subscribing to results for ${channelName} ...`)
    const channel = socket.subscribe(channelName)
    channel.watch(results => onData(results))
  } else {
    console.error('Socket client not connected')
  }
}

export function unsubscribeFromChannel(channelName, channelOptions) {
  if (socket) {
    console.log(`Unsubscribing from results for ${channelName} ...`)
    socket.unwatch(channelName)
    socket.unsubscribe(channelName)
  } else {
    console.error('Socket client not connected')
  }
}
