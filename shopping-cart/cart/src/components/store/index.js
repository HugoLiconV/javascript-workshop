import React, { Component } from 'react'
import { ProductsContext } from '../../contexts/products'
import ProductList from '../common/productList'

export default class Store extends Component {
  static contextType = ProductsContext

  onAddProductToCart = id => {
    console.log(id)
  }

  render() {
    console.log(this.context)
    return (<div>
      <h1>Store</h1>
      <div>
        <ProductList
          products={this.context.products}
          onAddProduct={this.onAddProductToCart}
        />
      </div>
    </div>)
  }
}
