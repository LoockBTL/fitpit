import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadOrder, loadProducts, loadProviders } from '../../../redux/actions'
import Form from './form/index'
import TableItem from './table-item/index'
import s from './table.module.css'

const Table = ({
  loadOrder,
  loadProducts,
  loadProviders,
  providers,
  product,
}) => {
  useEffect(() => {
    loadOrder()
    loadProducts()
    loadProviders()
  })

  const [table, setTable] = useState(product)
  const [form, setForm] = useState(<></>)

  if(providers===null || product===null) return (<div>loading</div>)

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
})

const mapDispatchToProps = {
  loadOrder,
  loadProducts,
  loadProviders,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
