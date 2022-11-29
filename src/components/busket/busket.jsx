import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  loadBusket,
  loadProducts,
  increment,
  decrement,
} from '../../redux/actions'
import { busketOrders } from '../../redux/selector'
import s from './busket.module.css'

const Busket = ({
  busket,
  products,
  orderProducts,
  loadBusket,
  loadProducts,
  increment,
  decrement,
}) => {
  useEffect(() => {
    loadBusket()
    loadProducts()
  }, []) // eslint-disable-line

  if (busket.entities.length === 0) {
    return (
      <div className={s.error}>
        <p className={s.text}>Please, go back to the shop</p>
        <Link className={s.buyButton} to="/">Вернуться в магазин</Link>
      </div>
    )
  }

  let totalPrice = 0
  return (
    <div className={s.container}>
      <p className={s.title}>Busket</p>
      <div className={s.orders}>
        {orderProducts.map((item) => {
          totalPrice = totalPrice + item.total * item.price
          return (
            <div className={s.item} key={item.id}>
              <img
                alt="product"
                height="150px"
                src="https://images.prom.ua/171415690_w640_h640_olimp-vsaa-xplode.jpg"
              />
              <div className={s.info}>
                <p>{item.name}</p>
                <p>Цена: {item.total * item.price} $</p>
                <div className={s.buttons}>
                  <button onClick={() => increment(item.id)}>+</button>
                  <p className={s.count}>{item.total}</p>
                  <button onClick={() => decrement(item.id)}>-</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={s.total__info}>
        <p>Общая сумма заказа: {totalPrice} $</p>
        <Link to={`/order`} className={s.buyButton}>Buy</Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  busket: state.busket,
  products: state.products,
  orderProducts: busketOrders(state),
})

const mapDispatchToProps = {
  loadBusket,
  loadProducts,
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Busket)
