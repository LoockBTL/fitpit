const express = require('express');

const { getDeclaration } = require('../controller/api-declarations');

const router = express.Router();

router.get('/api/declarations', getDeclaration);

module.exports = router;
