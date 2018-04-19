import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Flex, Box} from 'reflexbox'
import Paper from 'material-ui/Paper'
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog'

import './App.css'
import KittenGiftForm from 'components/KittenGiftForm'
import KittenItem from 'components/KittenItem'
import TransferItem from 'components/TransferItem'
import findKittensForOwner from 'actions/findKittensForOwner'
import findTransfersForAccount from 'actions/findTransfersForAccount'
import transferKittenToAccount from 'actions/transferKittenToAccount'
import subscribeToChannel from 'actions/subscribeToChannel'
import unsubscribeFromChannel from 'actions/unsubscribeFromChannel'

class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      giftKitten: null,
      giftKittenModalShowing: false,
    }
    this.refreshData = this.refreshData.bind(this)
    this.handleSelectKittenToGift = this.handleSelectKittenToGift.bind(this)
    this.handleSubmitKittenGift = this.handleSubmitKittenGift.bind(this)
    this.handleCancelKittenGift = this.handleCancelKittenGift.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderAccountInfo = this.renderAccountInfo.bind(this)
    this.renderAccountKittens = this.renderAccountKittens.bind(this)
    this.renderAccountTransfers = this.renderAccountTransfers.bind(this)
    this.renderGiftKittenModal = this.renderGiftKittenModal.bind(this)
  }

  refreshData() {
    this.props.findKittensForOwner(this.props.currentAccountAddress)
    this.props.findTransfersForAccount(this.props.currentAccountAddress)
    this.props.subscribeToTransferUpdates(this.props.currentAccountAddress, {
      onData: this.refreshData,
    })
  }

  componentDidMount() {
    this.refreshData()
  }

  componentWillUnmount() {
    this.props.unsubscribeFromTransferUpdates(this.props.currentAccountAddress)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentAccountAddress !== this.props.currentAccountAddress) {
      this.props.unsubscribeFromTransferUpdates(this.props.currentAccountAddress)
      this.refreshData()
    }
  }

  handleSelectKittenToGift(selectedKitten) {
    this.setState({giftKitten: selectedKitten, giftKittenModalShowing: true})
  }

  handleSubmitKittenGift(selectedKitten, targetAccountAddress) {
    this.props
      .transferKittenToAccount(selectedKitten.id, targetAccountAddress)
      .then(() => this.setState({giftKitten: null, giftKittenModalShowing: false}))
  }

  handleCancelKittenGift() {
    this.setState({giftKitten: null, giftKittenModalShowing: false})
  }

  renderHeader() {
    return (
      <Flex column align="center">
        <h4>Welcome to CryptoKittens!</h4>
        <div className="Subtitle">Account: {this.props.currentAccountAddress}</div>
      </Flex>
    )
  }

  renderAccountInfo() {
    return (
      <Flex className="AccountInfo" justify="center" auto>
        <Box w={2 / 3}>{this.renderAccountKittens()}</Box>
        <Box w={1 / 3}>{this.renderAccountTransfers()}</Box>
      </Flex>
    )
  }

  renderAccountKittens() {
    const {currentAccountKittens} = this.props
    return (
      <Box>
        <h5>{`My Kittens (${currentAccountKittens.length})`}</h5>
        {currentAccountKittens.map((kitten, i) => (
          <KittenItem
            key={`kitten-${i}`}
            kitten={kitten}
            onSelectKittenToGift={this.handleSelectKittenToGift}
          />
        ))}
      </Box>
    )
  }

  renderAccountTransfers() {
    const {currentAccountTransfers} = this.props
    const transferContent = currentAccountTransfers.length ? (
      <div>
        {currentAccountTransfers.map((transfer, i) => (
          <TransferItem key={`transfer-${i}`} transfer={transfer} />
        ))}
      </div>
    ) : (
      <Box>No transfers recorded.</Box>
    )
    return (
      <Box>
        <h5>{`Transfers (${currentAccountTransfers.length})`}</h5>
        {transferContent}
      </Box>
    )
  }

  renderGiftKittenModal() {
    if (!this.state.giftKittenModalShowing || !this.state.giftKitten) {
      return null
    }
    return (
      <Dialog open={this.state.giftKittenModalShowing} fullWidth>
        <DialogTitle>
          Send {this.state.giftKitten.name || this.state.giftKitten.id} as a gift
        </DialogTitle>
        <DialogContent>
          <KittenGiftForm
            kitten={this.state.giftKitten}
            onCancelKittenGift={this.handleCancelKittenGift}
            onSubmitKittenGift={this.handleSubmitKittenGift}
          />
        </DialogContent>
      </Dialog>
    )
  }

  render() {
    return (
      <Paper className="App" elevation={0}>
        <Flex className="Content" column auto align="center">
          {this.renderHeader()}
          {this.renderGiftKittenModal()}
          {this.renderAccountInfo()}
        </Flex>
      </Paper>
    )
  }
}

App.propTypes = {
  currentAccountAddress: PropTypes.string,
  currentAccountKittens: PropTypes.array.isRequired,
  currentAccountTransfers: PropTypes.array.isRequired,
}

App.contextTypes = {
  web3: PropTypes.object,
}

function mapStateToProps(state) {
  const {app, kittens, transfers} = state
  const currentAccountAddress = app.currentAccountAddress
  const currentAccountKittens = Object.values(kittens.byId)
  const currentAccountTransfers = Object.values(transfers.byHash)
  return {
    currentAccountAddress,
    currentAccountKittens,
    currentAccountTransfers,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findKittensForOwner: accountAddress => dispatch(findKittensForOwner(accountAddress)),
    findTransfersForAccount: accountAddress => dispatch(findTransfersForAccount(accountAddress)),
    transferKittenToAccount: (kittenId, targetAccountAddress) =>
      dispatch(transferKittenToAccount(kittenId, targetAccountAddress)),
    subscribeToTransferUpdates: (accountAddress, options) =>
      dispatch(subscribeToChannel(`accountTransferUpdated-${accountAddress}`, options)),
    unsubscribeFromTransferUpdates: (accountAddress, options) =>
      dispatch(unsubscribeFromChannel(`accountTransferUpdated-${accountAddress}`, options)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
