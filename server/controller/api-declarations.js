const Declaration = require('../models/declaration')

const handleError = (res, error) => {
  res.status(500).send(error.message)
}

const getDeclaration = (req, res) => {
  Declaration.find()
    .then((declaration) => res.status(200).json(declaration))
    .catch((error) => handleError(res, error))
  console.log(`GET | Send Declaration`)
}


module.exports = { getDeclaration }
