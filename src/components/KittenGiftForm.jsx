import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import './KittenGiftForm.css'

class KittenGiftForm extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitKittenGift = this.handleSubmitKittenGift.bind(this)
  }

  handleSubmitKittenGift(e) {
    e.preventDefault()
    this.props.onSubmitKittenGift(this.props.kitten, this.state.inputValue)
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <div className="GiftKittenForm">
        <form noValidate autoComplete="off" onSubmit={this.handleSubmitKittenGift}>
          <Flex className="TextFieldContainer" justify="center">
            <TextField
              className="TextField"
              id="targetAccountAddress"
              label="Type or paste wallet address"
              placeholder="e.g.: 0x808aba808..."
              margin="normal"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              required
            />
          </Flex>
          <Flex justify="flex-end">
            <Button color="primary" onClick={this.props.onCancelKittenGift}>
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={this.handleSubmitKittenGift} autoFocus>
              Send
            </Button>
          </Flex>
        </form>
      </div>
    )
  }
}

KittenGiftForm.propTypes = {
  kitten: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onCancelKittenGift: PropTypes.func.isRequired,
  onSubmitKittenGift: PropTypes.func.isRequired,
}

export default KittenGiftForm
