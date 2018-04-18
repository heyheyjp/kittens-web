import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Flex} from 'reflexbox'
import Tabs, {Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'

import './App.css'
import KittenGiftForm from 'components/KittenGiftForm'
import KittenListItem from 'components/KittenListItem'
import TransactionListItem from 'components/TransactionListItem'
import findKittensForOwner from 'actions/findKittensForOwner'
import findTransactionsForAccount from 'actions/findTransactionsForAccount'
import transferKittenToAccount from 'actions/transferKittenToAccount'
import subscribeToChannel from 'actions/subscribeToChannel'
import unsubscribeFromChannel from 'actions/unsubscribeFromChannel'

const TABS = {
  MY_KITTENS: 1,
  ACTIVITY: 2,
}

class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      selectedTab: TABS.MY_KITTENS,
      giftKittenId: null,
      giftKittenModalShowing: false,
    }
    this.handleKittenGiftSubmitted = this.handleKittenGiftSubmitted.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderAccountInfo = this.renderAccountInfo.bind(this)
    this.renderAccountKittenList = this.renderAccountKittenList.bind(this)
    this.renderAccountActivity = this.renderAccountActivity.bind(this)
    this.renderGiftKittenModal = this.renderGiftKittenModal.bind(this)
  }

  componentDidMount() {
    this.props.findKittensForOwner(this.props.currentAccountAddress)
    this.props.findTransactionsForAccount(this.props.currentAccountAddress)
    this.props.subscribeToTransactionUpdates(this.props.currentAccountAddress)
  }

  componentWillUnmount() {
    this.props.unsubscribeFromTransactionUpdates(this.props.currentAccountAddress)
  }

  handleKittenGiftSubmitted(selectedKitten, targetAccountAddress) {
    this.props.transferKittenToAccount(selectedKitten.id, targetAccountAddress)
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
      <div className="AccountInfo">
        <Tabs
          value={this.state.selectedTab}
          onChange={(e, value) => this.setState({selectedTab: value})}
          indicatorColor="primary">
          <Tab label="My Kittens" value={TABS.MY_KITTENS}>
            {this.renderAccountKittenList()}
          </Tab>
          <Tab label="Activity" value={TABS.ACTIVITY}>
            {this.renderAccountActivity()}
          </Tab>
        </Tabs>
      </div>
    )
  }

  renderAccountKittenList() {
    this.props.currentAccountKittens.map((kitten, i) => (
      <KittenListItem key={`kitten-${i}`} kitten={kitten} />
    ))
  }

  renderAccountActivity() {
    this.props.currentAccountTransactions.map((tx, i) => (
      <TransactionListItem key={`tx-${i}`} transaction={tx} />
    ))
  }

  renderGiftKittenModal(selectedKitten) {
    if (!this.state.giftKittenModalShowing) {
      return null
    }
    return <KittenGiftForm kitten={selectedKitten} />
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
  currentAccountTransactions: PropTypes.array.isRequired,
}

App.contextTypes = {
  web3: PropTypes.object,
}

function mapStateToProps(state) {
  const {app, kittens, transactions} = state
  const currentAccountAddress = app.currentAccountAddress
  const currentAccountKittens = Object.values(kittens.byOwnerAddress[currentAccountAddress] || {})
  const currentAccountTransactions = Object.values(
    transactions.byOwnerAddress[currentAccountAddress] || {},
  )
  return {
    currentAccountAddress,
    currentAccountKittens,
    currentAccountTransactions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findKittensForOwner: accountAddress => dispatch(findKittensForOwner(accountAddress)),
    findTransactionsForAccount: accountAddress =>
      dispatch(findTransactionsForAccount(accountAddress)),
    transferKittenToAccount: (kittenId, targetAccountAddress) =>
      dispatch(transferKittenToAccount(kittenId, targetAccountAddress)),
    subscribeToTransactionUpdates: accountAddress =>
      dispatch(subscribeToChannel('transactionUpdatesForAccount', accountAddress)),
    unsubscribeFromTransactionUpdates: accountAddress =>
      dispatch(unsubscribeFromChannel('transactionUpdatesForAccount', accountAddress)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
