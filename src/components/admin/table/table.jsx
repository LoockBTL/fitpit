import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  loadOrder,
  loadProducts,
  loadProviders,
  loadDeclarations,
} from '../../../redux/actions'
import ReactTable from '../../react-table/index'
// import Form from './form/index'
import s from './table.module.css'
import Styles from '../../style'
import Form from './form/form'


const Table = ({
  loadDeclarations,
  loadOrder,
  loadProducts,
  loadProviders,
  providers,
  product,
  orders,
  declarations,
}) => {
  useEffect(() => {
    loadDeclarations()
    loadOrder()
    loadProducts()
    loadProviders()
  }, []) // eslint-disable-line
  const [table, setTable] = useState(product)
  if (product.length === 0) return <div>loading</div>

  return (
    <div>
      <div className={s.main}>
        <div className={s.main__buttons}>
          <button
            onClick={() => {
              setTable(product)
            }}
          >
            Product
          </button>
          <button
            onClick={() => {
              setTable(providers)
            }}
          >
            Providers
          </button>
          <button
            onClick={() => {
              setTable(orders)
 
            }}
          >
            Orders
          </button>
          <button
            onClick={() => {
              setTable(declarations)
    
            }}
          >
            Declarations
          </button>
        </div>
        <div className={s.main__table}>
          <Styles>
            <ReactTable table={table} />
          </Styles>
        </div>
        <Form table={table}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.products,
  providers: state.providers,
  orders: state.order,
  declarations: state.declarations,
})

const mapDispatchToProps = {
  loadOrder,
  loadProducts,
  loadProviders,
  loadDeclarations,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
