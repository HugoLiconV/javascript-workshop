import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap'
import { CartContext } from '../../contexts/cart'
import CartProductList from '../common/cartProductList'
import './index.css'

export default class Cart extends Component {
  static contextType = CartContext
  onChangeQuantity = (id, e) => {
    console.log(e.target.value)
  }

  onDeleteItem = id => {
    console.log(id)
  }

  render() {
    console.log(this.context)
    return (<div className="cart-container">
      <Row>
        <Col sm="6" md="8">
          <Card>
            <CardTitle>Products</CardTitle>
            <CardBody>
              <CartProductList
                items={this.context.items}
                onChangeQuantity={this.onChangeQuantity}
                onDelete={this.onDeleteItem}
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" md="4">
          <Card>
            <CardTitle>Totals</CardTitle>
            <CardBody>
              Total: ${this.context.total.toFixed(2)}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}
