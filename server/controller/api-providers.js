const Provider = require('../models/providers');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getProvider = (req, res) => {
  Provider.find().then((providers) => res.status(200).json(providers))
  .catch((error) => handleError(res, error));
  console.log(`GET | Send Providers`)
}

module.exports = {getProvider}