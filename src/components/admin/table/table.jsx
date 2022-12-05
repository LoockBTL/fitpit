import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadOrder, loadProducts, loadProviders, loadDeclarations } from '../../../redux/actions'
import Form from './form/index'
import TableItem from './table-item/index'
import s from './table.module.css'

const Table = ({
  loadDeclarations,
  loadOrder,
  loadProducts,
  loadProviders,
  providers,
  product,
  orders,
  declarations
}) => {
  useEffect(() => {
    loadDeclarations()
    loadOrder()
    loadProducts()
    loadProviders()
  },[]) // eslint-disable-line
  console.log(declarations)
  const [table, setTable] = useState(product)
  const [form, setForm] = useState(<></>)

  if(product.length === 0) return (<div>loading</div>)

  const deleteLine = (table) => {
    setForm(<Form table={table} type="delete" />)
  }

  const createLine = (table) => {
    setForm(<Form table={table} type="create" />)
  }

  return (
    <div>
      <div className={s.main}>
        <div className={s.main__buttons}>
          <button
            onClick={() => {
              setTable(product)
              setForm(<></>)
            }}
          >
            Product
          </button>
          <button
            onClick={() => {
              setTable(providers)
              setForm(<></>)
            }}
          >
            Providers
          </button>
          <button
            onClick={() => {
              setTable(orders)
              setForm(<></>)
            }}
          >
            Orders
          </button>
          <button
            onClick={() => {
              setTable(declarations)
              setForm(<></>)
            }}
          >
            Declarations
          </button>
        </div>
        <div className={s.main__table}>
          <TableItem table={table} setForm={setForm} />
          <div className={s.functions}>
            <div>
              <button onClick={() => deleteLine(table)}>Delete</button>
              <button onClick={() => createLine(table)}>Create</button>
            </div>
          </div>
        </div>
      </div>
      {form}
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.products,
  providers: state.providers,
  orders: state.order,
  declarations: state.declarations
})

const mapDispatchToProps = {
  loadOrder,
  loadProducts,
  loadProviders,
  loadDeclarations
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
