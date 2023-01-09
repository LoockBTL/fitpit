import { connect } from 'react-redux'
import LastProduct from './lastsold'

const Statistics = ({ orders, products }) => {
  const lastProduct = orders.filter((obj) => {
    return new Date() - new Date(obj.date)
  })[0]
  return (
    <div style={{ margin: 'auto 10px' }}>
      <div>Statistics</div>
      <div>Последний проданные товары</div>
      {lastProduct ? (
        <LastProduct product={lastProduct} products={products} />
      ) : (
        'Нет инфы'
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  orders: state.order,
  products: state.products,
})

export default connect(mapStateToProps)(Statistics)
