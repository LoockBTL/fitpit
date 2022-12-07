const Product = require('../models/products')

const handleError = (res, error) => {
  res.status(500).send(error.message)
}

const getProducts = (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => handleError(res, error))
  console.log(`GET | Send Products`)
}

const putProducts = (req, res) => {
  const { _id, changing } = req.body
  Product.findByIdAndUpdate(_id, { ...changing }, { new: true })
    .then((products) => res.status(200).json(products))
    .catch((error) => handleError(res, error))
  console.log(`PUT | Product ${_id}`)
}

const postProduct = (req, res) => {
  const { name, amount, price, description, mass, providerId } = req.body
  const product = new Product({ name, amount, price, description, mass, providerId })
  product
    .save()
    .then((product) => res.status(200).json(product))
    .catch((error) => handleError(res, error))
  console.log('Created Product')
}

const deleteProduct = (req, res) => {
  const {id}  = req.params
  Product.findByIdAndDelete(id)
    .then((products) => res.status(200).json(id))
    .catch((error) => handleError(res, error))
  console.log(`DELETE | Product ${id}`)
}

module.exports = { getProducts, putProducts, deleteProduct, postProduct }
