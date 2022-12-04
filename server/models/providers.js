const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: {
    type: String,
    required: true,
  },    
  companyName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;