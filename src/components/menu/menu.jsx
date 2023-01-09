import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../../redux/actions'
import Product from '../product/index'
import s from './menu.module.css'

const Menu = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts()
  }, []) // eslint-disable-line

  const [sortFunc, setSort] = useState('max')

  const sortSelection = (obj) => {
    let value = obj.target.value
    setSort(value)
  }

  const [maxValue, setMax] = useState(100000)
  const [minValue, setMin] = useState(0)

  if (products === null) return <div>Loading</div>
  return (
    <div className={s.app}>
      <div className={s.options}>
        <select onChange={(e) => sortSelection(e)}>
          <option value="max" selected>
            Макс. цена
          </option>
          <option value="min">Мин. цена</option>
        </select>
        <label>Минимальная цена</label>
        <input
          onChange={(e) => {
            console.log(e.target.value)
            e.preventDefault()
            setMin(e.target.value)
          }}
        />
        <label>Максимальная цена</label>
        <input
          onChange={(e) => {
            e.preventDefault()
            setMax(e.target.value)
          }}
        />
      </div>
      {products
        .filter((obj) => {
          const price = parseInt(obj.price)
          if (price >= minValue && price <= maxValue) {
            return obj
          } else {
            return false
          }
        })
        .sort(
          sortFunc === 'max'
            ? (a, b) => b.price - a.price
            : (a, b) => a.price - b.price
        )
        .map(({ _id, name, price }) => (
          <Product key={_id} name={name} price={price} id={_id} />
        ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
