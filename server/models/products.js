const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
  },    
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
  }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;