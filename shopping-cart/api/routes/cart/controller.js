const Cart = require('./model')

async function getCart(req, res) {
  const userId = req.get('userId')
  //
  return res.sendStatus(400)
}

async function addToCart(req, res) {
  const userId = req.get('userId')
  //
  return res.sendStatus(400)
}

async function updateCartItem(req, res) {
  const userId = req.get('userId')
  //
  return res.sendStatus(400)
}

async function deleteFromCart(req, res) {
  const userId = req.get('userId')
  //
  return res.sendStatus(400)
}

async function emptyCart(req, res) {
  const userId = req.get('userId')
  //
  return res.sendStatus(400)
}

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  deleteFromCart,
  emptyCart,
}
