const express = require('express');

const { getOrders, postOrder, putOrder, deleteOrder } = require('../controller/api-order');

const router = express.Router();

router.get('/api/orders', getOrders);

router.post('/api/add-order', postOrder)

router.put('/api/put-order', putOrder);

router.delete('/api/delete-order/:id', deleteOrder);

module.exports = router;
