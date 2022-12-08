const {Order } = require('../models/order')
const Product = require('../models/products')
const Declaration = require('../models/declaration')

const makeDeclaration = async (_id, amount, providerId) => {
  if (amount <= 50) {
    const declaration = new Declaration({
      providerID: providerId,
      data: new Date().toLocaleDateString(),
      entities: { productID: _id, orderAmount: 100 },
    })
    declaration.save().catch((error) => console.log(error))

    const product = await Product.findById(_id).exec()
    const { amount } = product
    const currentAmount = 100 + Number(amount)
    await Product.findByIdAndUpdate(
      _id,
      { amount: currentAmount },
      { new: true }
    )
    console.log(`Created Declaration for ${providerId}`)
  }
}

const uppdateAmount = (entities) => {
  entities.forEach(async ({ _id, total }) => {
    const product = await Product.findById(_id).exec()
    const { amount, providerId } = product
    const currentAmount = amount - total
    await Product.findByIdAndUpdate(
      _id,
      { amount: currentAmount },
      { new: true }
    )
    makeDeclaration(_id, currentAmount, providerId)
  })
}

const handleError = (res, error) => {
  res.status(500).send(error.message)
}

const getOrders = (req, res) => {
  Order.find()
    .then((order) => res.status(200).json(order))
    .catch((error) => handleError(res, error))
  console.log(`GET | Send Orders`)
}

const postOrder = (req, res) => {
  const { date, email, entities, name, number, secondName, thirdName, createDeclaration } =
    req.body
    if(createDeclaration){
      uppdateAmount(entities)
    }
  let idTotal = '', totalAmount = '';
  const plusId = (_id) => {
    idTotal += `${_id} ,`
  }
  const plusTotal = (total) => {
    totalAmount += `${total} ,` 
  }
  entities.forEach(({_id, total}) => {plusId(_id); plusTotal(total)}  )
  const busket = {productID: idTotal, total: totalAmount}
  const order = new Order({
    date,
    email,
    order: busket,
    name,
    number,
    secondName,
    thirdName,
  })
  order
    .save()
    .then((order) => res.status(200).json(order))
    .catch((error) => handleError(res, error))
  console.log('Created Order')
}

const putOrder = (req, res) => {
  const { _id, changing } = req.body
  Order.findByIdAndUpdate(_id, { ...changing }, { new: true })
    .then((order) => res.status(200).json(order))
    .catch((error) => handleError(res, error))
    console.log(`ID: ${_id}, changing: ${changing}, RASPARS: ${{...changing}}`)

  console.log(`PUT | Order ${_id}`)
}

const deleteOrder = (req, res) => {
  const {id}  = req.params
  Order
  .findByIdAndDelete(id)
  .then((order) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
  console.log(`DELETE | Order ${id}`)
}

module.exports = { getOrders, postOrder, putOrder, deleteOrder }
