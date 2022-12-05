const express = require('express');

const { getOrders, postOrder } = require('../controller/api-order');

const router = express.Router();

router.get('/api/orders', getOrders);

router.post('/api/add-order', postOrder)

module.exports = router;
