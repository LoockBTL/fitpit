const Provider = require('../models/providers')

const handleError = (res, error) => {
  res.status(500).send(error.message)
}

const getProvider = (req, res) => {
  Provider.find()
    .then((providers) => res.status(200).json(providers))
    .catch((error) => handleError(res, error))
  console.log(`GET | Send Providers`)
}

const postProvider = (req, res) => {
  const { companyName, name, secondName, fathersName, mail, phone, adress } =
    req.body
  const provider = new Provider({
    companyName,
    name,
    secondName,
    fathersName,
    mail,
    phone,
    adress,
  })
  provider
    .save()
    .then((provider) => res.status(200).json(provider))
    .catch((error) => handleError(res, error))
  console.log('Created Provider')
}

const putProvider = (req, res) => {
  const { _id, changing } = req.body
  Provider.findByIdAndUpdate(_id, { ...changing }, { new: true })
    .then((providers) => res.status(200).json(providers))
    .catch((error) => handleError(res, error))
  console.log(`PUT | Provider ${_id}`)
}

const deleteProvider = (req, res) => {
  const {id}  = req.params
  Provider.findByIdAndDelete(id)
    .then((providers) => res.status(200).json(id))
    .catch((error) => handleError(res, error))
  console.log(`DELETE | Provider ${id}`)
}

module.exports = { getProvider, putProvider, deleteProvider, postProvider }
