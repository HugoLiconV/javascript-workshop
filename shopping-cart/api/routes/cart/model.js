const _ = require('lodash')

const defaultUserCart = {
  items: [],
  total: 0,
}

const CartStore = {
  //UserIds...
  /*
  items: [{ item: {}, qty: 1 }],
  total
   */
}

function findCartItem(cart, itemId) {

}

async function getCart(userId) {

}

async function removeItemFromCart(userId, itemId) {

}

async function addItemToCart(userId, itemId, amount = 1) {

}

async function updateItemQty(userId, itemId, amount) {

}

async function emptyCart(userId) {

}


module.exports = {
  getCart,
  removeItemFromCart,
  addItemToCart,
  updateItemQty,
  emptyCart,
}
