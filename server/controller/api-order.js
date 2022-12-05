const Order = require('../models/order')
const Product = require('../models/products')
const Declaration = require('../models/declaration')

const makeDeclaration = async (_id,amount, providerId) => {
  if(amount <= 50) {
    const declaration = new Declaration({
        providerID: providerId,
        data: new Date().toLocaleDateString(),
        entities: {productID:_id, orderAmount: 100},
    })
    declaration
    .save()
    .catch((error) => console.log(error))

    const product = await Product.findById(_id).exec();
    const {amount} = product;
    const currentAmount = 100 + Number(amount);
    await Product.findByIdAndUpdate( _id, {amount: currentAmount}, { new: true });
    console.log(`Created Declaration for ${providerId}`)
  }
}

const uppdateAmount = (entities) => {
  entities.forEach(async ({_id, total}) => {
    const product = await Product.findById(_id).exec()
    const {amount, providerId} = product;
    const currentAmount = amount - total;
    await Product.findByIdAndUpdate( _id, {amount: currentAmount}, { new: true});
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
  const { date, email, entities, name, number, secondName, thirdName } =
    req.body
  uppdateAmount(entities)
  const order = new Order({
    date,
    email,
    entities,
    name,
    number,
    secondName,
    thirdName,
  })
  order
    .save()
    .then((order) => res.status(200).json(order))
    .catch((error) => handleError(res, error))
  console.log("Created Order")
}





module.exports = { getOrders, postOrder }
