import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'reflexbox'

import './TransferItem.css'

class TransferItem extends Component {
  render() {
    const {transfer} = this.props
    if (!transfer) {
      return null
    }
    return (
      <Flex className="TransferItem" justify="space-between" column>
        <Box className="TransferItemContent">{transfer.txHash}</Box>
        <Box className="TransferItemContent">{transfer.to}</Box>
        <Box className="TransferItemContent">{transfer.status}</Box>
      </Flex>
    )
  }
}

TransferItem.propTypes = {
  transfer: PropTypes.shape({
    txHash: PropTypes.string.isRequired,
    to: PropTypes.string,
    status: PropTypes.string.isRequired,
  }),
}

export default TransferItem
