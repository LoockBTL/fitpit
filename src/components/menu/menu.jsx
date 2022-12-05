import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../../redux/actions'
import Product from '../product/index'
import s from './menu.module.css'

const Menu = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts()
  }, []) // eslint-disable-line

  return (
    <div className={s.app}>
      {products.map(({ _id, name, price }) => (
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
