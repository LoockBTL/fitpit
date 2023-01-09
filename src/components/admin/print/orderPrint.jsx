const OrderPrint = ({ order }) => {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Заказ: {order._id}</h1>
      <div>
        ФИО Заказчика: {order.name} {order.secondName} {order.thirdName}
      </div>
      <div>Номер телефона: {order.number}</div>
      <div>E-mail: {order.email}</div>
      <div>Дата заказа товара: {order.date}</div>
      <h2>Данные о заказе</h2>
      <div>
        <div>ID заказаного товара: {order.order.productID}</div>
        <div>Количество заказаного товара: {order.order.total}</div>
      </div>
    </div>
  )
}

export default OrderPrint
