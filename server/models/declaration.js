const mongoose = require('mongoose')
const Schema = mongoose.Schema

const declarationProductsSchema = new Schema({
  productID: {
    type: String,
    required: true,
  },
  orderAmount: {
    type: String,
    required: true,
  }
})

const declarationSchema = new Schema(
  {
    providerID: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    entities: declarationProductsSchema,
  }, { versionKey: '_somethingElse' }
)

const Declaration = mongoose.model('Declaration', declarationSchema)

module.exports = Declaration;
