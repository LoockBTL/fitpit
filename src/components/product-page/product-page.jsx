import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { increment, loadProducts } from '../../redux/actions'
import { useEffect } from 'react'
import s from './product-page.module.css'

const ProductPage = ({ products, increment, loadProducts }) => {
  useEffect(() => {
    loadProducts()
  }, []) // eslint-disable-line

  const { choisenId } = useParams()
  const element = products.find(({ _id }) => choisenId === _id)

  const { _id, name, amount, price, description, mass } = element
  return (
    <div className={s.container}>
      <img
        alt="product"
        height="500px"
        src="https://images.prom.ua/171415690_w640_h640_olimp-vsaa-xplode.jpg"
      />
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={s.amount}>В наличие: {amount} шт.</p>
        <p className={s.price}>{price}$</p>
        <p className={s.decription}>Описание: {description}</p>
        <p className={s.mass}>Масса: {mass}</p>
        <button onClick={() => increment(_id)} className={s.button}>
          Buy
        </button>
      </div>
    </div>
  )
}

// {
//   id_product: '1',
//   name: 'BCAA',
//   amount: '100',
//   price: '200',
//   description: 'Набор з основних амінокислот',
//   mass: '300',
// },

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
