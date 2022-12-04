const Product = require('../models/products');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getProducts = (req, res) => {
  Product.find().then((products) => res.status(200).json(products))
  .catch((error) => handleError(res, error));
}

module.exports = {getProducts}