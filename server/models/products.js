const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  }
}, { versionKey: '_somethingElse' }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;