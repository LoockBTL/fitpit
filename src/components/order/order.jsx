import { useRef } from 'react'
import { connect } from 'react-redux'
import { loadOrder } from '../../redux/actions'
import { busketOrders } from '../../redux/selector'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import s from './order.module.css'

const Order = ({ order, orderProducts, loadOrder }) => {
  const name = useRef()
  const secondName = useRef()
  const thirdName = useRef()
  const email = useRef()
  const number = useRef()
  const date = new Date().toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault()
    loadOrder({
      id: uuidv4(),
      name: name.current.value,
      secondName: secondName.current.value,
      thirdName: thirdName.current.value,
      email: email.current.value,
      number: number.current.value,
      date,
      entities: orderProducts,
    })
  }

  if (orderProducts.length === 0)
    return (
      <div className={s.error}>
        <p className={s.text}>Выберите покупки</p>
        <Link className={s.buyButton} to="/">
          Вернуться в магазин
        </Link>
      </div>
    )

  return (
    <div>
      <p className={s.title}>Order</p>
      <div className={s.content}>
        <div className={s.block}>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Имя</p>
              <input type="text" id="name" ref={name} className={s.input} />
              <p>Фамилия</p>
              <input
                type="text"
                id="secondName"
                ref={secondName}
                className={s.input}
              />
              <p>Отчество</p>
              <input
                type="text"
                id="thirdName"
                ref={thirdName}
                className={s.input}
              />
              <p>Почта</p>
              <input type="email" id="email" ref={email} className={s.input} />
              <p>Телефон</p>
              <input
                type="number"
                id="number"
                ref={number}
                className={s.input}
              />
            </div>
            <input type="submit" value="Submit" className={s.button} />
          </form>
        </div>
        <div className={s.block__item}>
          {orderProducts.map((item) => {
            return (
              <div key={item.id} className={s.orderitem}>
                <img
                  alt="product"
                  height="150px"
                  src="https://images.prom.ua/171415690_w640_h640_olimp-vsaa-xplode.jpg"
                />
                <div className={s.info}>
                  <p>{item.name}</p>
                  <p>Цена: {item.total * item.price}$</p>
                  <p className={s.count}>Число: {item.total}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  order: state.order,
  orderProducts: busketOrders(state),
})
const mapDispatchToProps = {
  loadOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
