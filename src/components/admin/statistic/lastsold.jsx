const LastProduct = ({ product, products }) => {
  const { date, order } = product
  console.log(order)
  const soldProductID = order.productID.substr(0, 24)
  const countProduct = order.total.split(' ,')[0]
  const soldProduct = products.find((obj) => obj._id === soldProductID)
  return (
    <div style={{ margin: '20px' }}>
      <div>{date}</div>
      <div>Товар: {soldProduct.name}</div>
      Количество: {countProduct}
    </div>
  )
}

export default LastProduct
