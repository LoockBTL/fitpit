const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderProductsSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  }
})

const orderSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    order: orderProductsSchema,
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    thirdName: {
      type: String,
      required: true,
    },
  }, { versionKey: '_somethingElse' }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
