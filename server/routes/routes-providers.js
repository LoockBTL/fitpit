const express = require('express');

const { getProvider, putProvider, deleteProvider, postProvider } = require('../controller/api-providers');

const router = express.Router();

router.get('/api/providers', getProvider);

router.post('/api/add-provider', postProvider)

router.put('/api/put-provider', putProvider);

router.delete('/api/delete-provider/:id', deleteProvider);

module.exports = router;
