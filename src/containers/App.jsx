import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Flex} from 'reflexbox'
import Paper from 'material-ui/Paper'
import Tabs, {Tab} from 'material-ui/Tabs'
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

const TABS = {
  MY_KITTENS: 1,
  TRANSFERS: 2,
}

class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      selectedTab: TABS.MY_KITTENS,
      giftKitten: null,
      giftKittenModalShowing: false,
    }
    this.handleSelectKittenToGift = this.handleSelectKittenToGift.bind(this)
    this.handleSubmitKittenGift = this.handleSubmitKittenGift.bind(this)
    this.handleCancelKittenGift = this.handleCancelKittenGift.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderAccountInfo = this.renderAccountInfo.bind(this)
    this.renderAccountKittens = this.renderAccountKittens.bind(this)
    this.renderAccountTransfers = this.renderAccountTransfers.bind(this)
    this.renderGiftKittenModal = this.renderGiftKittenModal.bind(this)
  }

  componentDidMount() {
    this.props.findKittensForOwner(this.props.currentAccountAddress)
    this.props.findTransfersForAccount(this.props.currentAccountAddress)
    this.props.subscribeToTransferUpdates(this.props.currentAccountAddress)
  }

  componentWillUnmount() {
    this.props.unsubscribeFromTransferUpdates(this.props.currentAccountAddress)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentAccountAddress !== this.props.currentAccountAddress) {
      this.props.unsubscribeFromTransferUpdates(this.props.currentAccountAddress)

      this.props.findKittensForOwner(nextProps.currentAccountAddress)
      this.props.findTransfersForAccount(nextProps.currentAccountAddress)
      this.props.subscribeToTransferUpdates(nextProps.currentAccountAddress)
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
    const {selectedTab} = this.state
    const {currentAccountKittens = [], currentAccountTransfers = []} = this.props
    return (
      <Flex className="AccountInfo" justify="center" column>
        <Tabs
          value={selectedTab}
          onChange={(e, value) => this.setState({selectedTab: value})}
          indicatorColor="primary">
          <Tab label={`My Kittens (${currentAccountKittens.length})`} value={TABS.MY_KITTENS} />
          <Tab label={`Transfers (${currentAccountTransfers.length})`} value={TABS.TRANSFERS} />
        </Tabs>
        <div className="AccountInfoTabContent">
          {selectedTab === TABS.MY_KITTENS && this.renderAccountKittens()}
          {selectedTab === TABS.TRANSFERS && this.renderAccountTransfers()}
        </div>
      </Flex>
    )
  }

  renderAccountKittens() {
    return (
      <div>
        {this.props.currentAccountKittens.map((kitten, i) => (
          <KittenItem
            key={`kitten-${i}`}
            kitten={kitten}
            onSelectKittenToGift={this.handleSelectKittenToGift}
          />
        ))}
      </div>
    )
  }

  renderAccountTransfers() {
    const {currentAccountTransfers} = this.props
    if (currentAccountTransfers.length === 0) {
      return <div>No transfers recorded.</div>
    }
    return (
      <div>
        {currentAccountTransfers.map((transfer, i) => (
          <TransferItem key={`transfer-${i}`} transfer={transfer} />
        ))}
      </div>
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
    subscribeToTransferUpdates: accountAddress =>
      dispatch(subscribeToChannel('transferUpdatesForAccount', accountAddress)),
    unsubscribeFromTransferUpdates: accountAddress =>
      dispatch(unsubscribeFromChannel('transferUpdatesForAccount', accountAddress)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
