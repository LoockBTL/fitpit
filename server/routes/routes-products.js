const express = require('express');

const { getProducts, putProducts, deleteProduct, postProduct } = require('../controller/api-products');

const router = express.Router();

router.get('/api/products', getProducts);

router.post('/api/add-product', postProduct)

router.put('/api/put-product', putProducts);

router.delete('/api/delete-product/:id', deleteProduct);

module.exports = router;
