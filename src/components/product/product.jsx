import { Link } from 'react-router-dom'
import s from './product.module.css'

const Product = ({ id, name, price }) => {
  return (
    <Link to={`/product/${id}`} className={s.link}>
      <div className={s.container}>
        <img
          alt="product"
          height="150px"
          src="https://images.prom.ua/171415690_w640_h640_olimp-vsaa-xplode.jpg"
        />
        <div className={s.info}>
          <p className={s.name}>{name}</p>
          <p className={s.price}>{price} $</p>
          <p className={s.button}>Buy</p>
        </div>
      </div>
    </Link>
  )
}

export default Product
