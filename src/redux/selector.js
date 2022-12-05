export const busketOrders = (state) => {
  const busket = state.busket.entities
  const products = state.products

  const productsObject = arrToObject(products)

  const order = Object.keys(busket)
    .filter((productID) => busket[productID] > 0)
    .map((productId) => productsObject[productId])
    .map((product) => ({
      ...product,
      total: busket[product._id],
    }))

  return order
}

function arrToObject(item) {
  let maneObject = {}

  for (let i = 0; i < item.length; i++) {
    const id = item[i]._id
    const itemToid = item[i]

    maneObject = { ...maneObject, [id]: itemToid }
  }
  return maneObject
}
