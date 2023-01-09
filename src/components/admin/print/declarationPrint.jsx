const DeclarationsPrint = ({ declaration }) => {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Декларация: {declaration._id}</h1>
      <div>ID Провайдера: {declaration.providerID}</div>
      <div>Дата заказа товара: {declaration.data}</div>
      <h2>Данные о заказе</h2>
      <div>
        ID Продукта:{declaration.entities.productID} Количество заказа:
        {declaration.entities.orderAmount}
      </div>
    </div>
  )
}

export default DeclarationsPrint
