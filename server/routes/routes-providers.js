const express = require('express');

const { getProvider } = require('../controller/api-providers');

const router = express.Router();

router.get('/api/providers', getProvider);

module.exports = router;
