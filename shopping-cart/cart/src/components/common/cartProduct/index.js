import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { FormGroup, Label, ListGroupItem, Media, Input } from 'reactstrap'
import CartItemPropType from '../../../propTypes/cartItem'
import './index.css'

const CartProduct = ({ item: cartItem, onDelete, onChangeQty }) => {
  const { item, quantity } = cartItem
  return (<Fragment>
    <ListGroupItem>
      <Media>
        <Media body>
          <Media heading>
            {item.title}
          </Media>
          <div>{item.description}</div>
          <FormGroup>
            <Label for="quantity">Quantity Selected</Label>
            <Input value={quantity} name="quantity" type="select" onChange={(e) => onChangeQty(item.id, e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </FormGroup>
        </Media>
        <Media right>
          <Media src={item.imageUrl} alt={item.title} className="cart-item-image" />
        </Media>
      </Media>
    </ListGroupItem>
  </Fragment>)
}

CartProduct.propTypes = {
  item: CartItemPropType.isRequired,
  onDelete: PropTypes.func,
  onChangeQty: PropTypes.func,
}

export default CartProduct
