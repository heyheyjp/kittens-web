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
        <Box className="TransferItemLine">
          <strong>Tx:</strong> {transfer.txHash}
        </Box>
        <Box className="TransferItemLine">
          <strong>Sent to:</strong> {transfer.to}
        </Box>
        <Box className="TransferItemLine">
          <strong>Status:</strong> {transfer.status}
        </Box>
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
