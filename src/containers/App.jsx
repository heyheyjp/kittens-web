import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Flex} from 'reflexbox'
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

  refreshData(overrides) {
    const {accountAddress = this.props.currentAccountAddress} = overrides || {}
    this.props.findKittensForOwner(accountAddress)
    this.props.findTransfersForAccount(accountAddress)
    this.props.subscribeToTransferUpdates(accountAddress, {
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
      this.refreshData({accountAddress: nextProps.currentAccountAddress})
    }
  }

  handleSelectKittenToGift(selectedKitten) {
    this.setState({giftKitten: selectedKitten, giftKittenModalShowing: true})
  }

  handleSubmitKittenGift(selectedKitten, targetAccountAddress) {
    this.props
      .transferKittenToAccount(
        selectedKitten.id,
        this.props.currentAccountAddress,
        targetAccountAddress,
      )
      .then(() => this.setState({giftKitten: null, giftKittenModalShowing: false}))
  }

  handleCancelKittenGift() {
    this.setState({giftKitten: null, giftKittenModalShowing: false})
  }

  renderAccountTransfers() {
    const {currentAccountTransfers, hasInitialized} = this.props
    if (!hasInitialized) {
      return <div>Loading...</div>
    }
    if (currentAccountTransfers.length) {
      return (
        <Flex className="AccountTransfers" column>
          {currentAccountTransfers.map((transfer, i) => (
            <TransferItem key={`transfer-${i}`} transfer={transfer} />
          ))}
        </Flex>
      )
    }
    return <Flex>No pending transfers recorded.</Flex>
  }

  renderAccountKittens() {
    const {currentAccountKittens, currentAccountTransfers, hasInitialized} = this.props
    if (!hasInitialized) {
      return <div>Loading...</div>
    }
    return (
      <Flex column>
        {currentAccountKittens.map((kitten, i) => {
          // TODO: make way more efficient; this is silly
          const hasPendingTransaction = currentAccountTransfers.find(
            transfer => transfer.kittenId === kitten.id && transfer.status === 'PENDING',
          )
          return (
            <KittenItem
              key={`kitten-${i}`}
              kitten={kitten}
              onSelectKittenToGift={this.handleSelectKittenToGift}
              giftDisabled={hasPendingTransaction}
            />
          )
        })}
      </Flex>
    )
  }

  renderAccountInfo() {
    const {currentAccountKittens, currentAccountTransfers, hasInitialized} = this.props
    const kittenCount = hasInitialized ? `(${currentAccountKittens.length})` : ''
    const transferCount = hasInitialized ? `(${currentAccountTransfers.length})` : ''
    return (
      <Flex className="AccountInfo" justify="center" auto>
        <Flex className="AccountInfoColumn" column>
          <h5 className="SectionTitle">{`My Kittens ${kittenCount}`}</h5>
          {this.renderAccountKittens()}
        </Flex>
        <Flex className="AccountInfoColumn" column>
          <h5 className="SectionTitle">{`Transfers ${transferCount}`}</h5>
          {this.renderAccountTransfers()}
        </Flex>
      </Flex>
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

  renderHeader() {
    return (
      <Flex column align="center">
        <h4>Welcome to CryptoKittens!</h4>
        <div className="Subtitle">Account: {this.props.currentAccountAddress}</div>
      </Flex>
    )
  }

  render() {
    return (
      <Paper className="App" elevation={0}>
        <Flex className="Content" align="center" column auto>
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
  hasInitialized: PropTypes.bool.isRequired,
}

App.contextTypes = {
  web3: PropTypes.object,
}

function mapStateToProps(state) {
  const {app, kittens, transfers} = state
  const currentAccountAddress = app.currentAccountAddress
  const currentAccountKittens = Object.values(kittens.byId)
  const currentAccountTransfers = Object.values(transfers.byHash)
  const hasInitialized = Boolean(kittens.hasLoaded && transfers.hasLoaded)
  return {
    currentAccountAddress,
    currentAccountKittens,
    currentAccountTransfers,
    hasInitialized,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findKittensForOwner: accountAddress => dispatch(findKittensForOwner(accountAddress)),
    findTransfersForAccount: accountAddress => dispatch(findTransfersForAccount(accountAddress)),
    transferKittenToAccount: (kittenId, fromAccountAddress, targetAccountAddress) =>
      dispatch(transferKittenToAccount(kittenId, fromAccountAddress, targetAccountAddress)),
    subscribeToTransferUpdates: (accountAddress, options) =>
      dispatch(subscribeToChannel(`accountTransferUpdated-${accountAddress}`, options)),
    unsubscribeFromTransferUpdates: (accountAddress, options) =>
      dispatch(unsubscribeFromChannel(`accountTransferUpdated-${accountAddress}`, options)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
