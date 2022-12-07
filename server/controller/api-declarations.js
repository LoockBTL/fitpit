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

const postDeclaration = (req, res) => {
  const { providerID, data, entities } = req.body
  const declaration = new Declaration({providerID, data, entities})
  declaration
    .save()
    .then((declaration) => res.status(200).json(declaration))
    .catch((error) => handleError(res, error))
  console.log('Created Declaration')
}

const deleteDeclaration = (req, res) => {
  const {id}  = req.params
  Declaration.findByIdAndDelete(id)
    .then((declaration) => res.status(200).json(id))
    .catch((error) => handleError(res, error))
  console.log(`DELETE | Declaration ${id}`)
}

const putDeclaration = (req, res) => {
  const { _id, changing } = req.body
  Declaration.findByIdAndUpdate(_id, { ...changing }, { new: true })
    .then((declaration) => res.status(200).json(declaration))
    .catch((error) => handleError(res, error))
  console.log(`PUT | Declaration ${_id}`)
}

module.exports = { getDeclaration, putDeclaration, deleteDeclaration, postDeclaration }
