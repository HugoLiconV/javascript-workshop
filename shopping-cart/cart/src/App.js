import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contexts from './contexts'
import Cart from './components/cart'
import Store from './components/store'
import './App.css'

const { ProductsContext } = Contexts

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        { id: 1, title: 'XPS 13', description: 'i7, 16Gb RAM, 256Gb SSD', price: 1560.6, imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9370/global_spi/notebook-xps-13-9370-campaign-hero-504x350-ng.psd?fmt=jpg' }
      ],
    }
  }

  updateProducts = products => {
    this.setState({
      products,
    })
  }

  render() {
    return (
      <div className="App">
        <ProductsContext.Provider value={{products: this.state.products, updateProducts: this.updateProducts}}>
          <Router>
            <Switch>
              <Route path="/cart" exact component={Cart} />
              <Route path="/" component={Store} />
            </Switch>
          </Router>
        </ProductsContext.Provider>
      </div>
    )
  }
}

export default App
