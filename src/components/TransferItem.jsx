import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'

import './TransferItem.css'

class TransferItem extends Component {
  render() {
    const {transfer} = this.props
    if (!transfer) {
      return null
    }
    return (
      <Flex className="TransferItem" justify="space-between">
        {transfer.txHash}
        {transfer.to}
        {transfer.status}
      </Flex>
    )
  }
}

TransferItem.propTypes = {
  transfer: PropTypes.shape({
    txHash: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
}

export default TransferItem
