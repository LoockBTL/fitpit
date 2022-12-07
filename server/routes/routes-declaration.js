const express = require('express');

const { getDeclaration, putDeclaration, deleteDeclaration, postDeclaration } = require('../controller/api-declarations');

const router = express.Router();

router.get('/api/declarations', getDeclaration);

router.put('/api/put-declaration', putDeclaration);

router.delete('/api/delete-declaration/:id', deleteDeclaration);

router.post('/api/add-declaration', postDeclaration);

module.exports = router;
