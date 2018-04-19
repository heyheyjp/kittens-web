import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'
import Button from 'material-ui/Button'

import './KittenItem.css'

class KittenItem extends Component {
  constructor(props) {
    super(props)
    this.renderGiftButton = this.renderGiftButton.bind(this)
  }

  renderGiftButton() {
    if (!this.props.onSelectKittenToGift) {
      return null
    }
    return (
      <div className="GiftButtonContainer">
        <Button
          color="secondary"
          onClick={() => this.props.onSelectKittenToGift(this.props.kitten)}>
          <span>
            <i className="fa fa-gift" /> Gift
          </span>
        </Button>
      </div>
    )
  }

  render() {
    const {kitten} = this.props
    if (!kitten) {
      return null
    }
    return (
      <Flex className="KittenItem">
        <img src={kitten.image_url_cdn} alt="Kitten" />
        <Flex align="center">{kitten.name || kitten.id}</Flex>
        <Flex align="center">{this.renderGiftButton()}</Flex>
      </Flex>
    )
  }
}

KittenItem.propTypes = {
  kitten: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url_cdn: PropTypes.string,
    created_at: PropTypes.string,
  }),
  onSelectKittenToGift: PropTypes.func,
}

export default KittenItem
