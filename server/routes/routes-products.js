const express = require('express');

const { getProducts } = require('../controller/api-products');

const router = express.Router();

router.get('/api/products', getProducts);

module.exports = router;
