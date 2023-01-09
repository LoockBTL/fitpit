import { useMemo } from 'react'
import React from 'react'
import { useTable, useRowSelect, useGlobalFilter } from 'react-table'
import { arrayContains, objToArray, deleteObj } from './utils-form'
import { connect } from 'react-redux'
import { GlobalFilter } from './GlobalFilter'
import EditableCell from './EditabelCell'
import {
  deleteDeclaration,
  deleteOrder,
  deleteProduct,
  deleteProvider,
} from '../../redux/actions'
import Checkbox from './Checkbox'

const declarationsColomns = [
  {
    Header: '_id',
    accessor: '_id',
  },
  {
    Header: 'providerID',
    accessor: 'providerID',
  },
  {
    Header: 'data',
    accessor: 'data',
  },
  {
    Header: 'entities',
    columns: [
      {
        Header: 'productID',
        accessor: 'productID',
      },
      {
        Header: 'orderAmount',
        accessor: 'orderAmount',
      },
    ],
  },
]
const orderColomns = [
  {
    Header: '_id',
    accessor: '_id',
  },
  {
    Header: 'date',
    accessor: 'date',
  },
  {
    Header: 'email',
    accessor: 'email',
  },
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'number',
    accessor: 'number',
  },
  {
    Header: 'secondName',
    accessor: 'secondName',
  },
  {
    Header: 'thirdName',
    accessor: 'thirdName',
  },
  {
    Header: 'order',
    columns: [
      {
        Header: 'productID',
        accessor: 'productID',
      },
      {
        Header: 'totalAmount',
        accessor: 'totalAmount',
      },
    ],
  },
]

const ReactTable = ({
  table,
  deleteDeclaration,
  deleteOrder,
  deleteProduct,
  deleteProvider,
  updateMyData,
}) => {
  const tableKeys = Object.keys(table[0])
  const newTable = useMemo(() => objToArray(table), [table])
  console.log(newTable)
  const productColomns = useMemo(
    () =>
      newTable[0]
        ? Object.keys(newTable[0]).map((key) => {
            if (key === 'price') {
              return { Header: key, accessor: key }
            }
            return { Header: key, accessor: key }
          })
        : [],
    [newTable]
  )

  const productData = useMemo(() => [...newTable], [newTable])

  const tableColomns = arrayContains('entities', tableKeys)
    ? declarationsColomns
    : arrayContains('order', tableKeys)
    ? orderColomns
    : productColomns

  const defaultColumn = {
    Cell: EditableCell,
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: tableColomns,
      data: productData,
      defaultColumn,
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const { globalFilter } = state

  return (
    <div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {selectedFlatRows.map((d) => {
        let keys = Object.keys(d.original)
        let created
        if (arrayContains('description', keys)) {
          //Product
          created = deleteObj(d.original, deleteProduct)
          return created
        } else if (arrayContains('fathersName', keys)) {
          created = deleteObj(d.original, deleteProvider)
          return created
        } else if (arrayContains('thirdName', keys)) {
          // Orders
          created = deleteObj(d.original, deleteOrder)
          return created
        } else if (arrayContains('data', keys)) {
          //Declarations
          created = deleteObj(d.original, deleteDeclaration)
          return created
        } else return created
      })}
    </div>
  )
}

const mapDispatchToProps = {
  deleteDeclaration,
  deleteOrder,
  deleteProduct,
  deleteProvider,
}
export default connect(null, mapDispatchToProps)(ReactTable)
