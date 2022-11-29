import s from '../table.module.css'
import { v4 as uuid } from 'uuid'
import Form from '../form/index'

const TableItem = ({ table, setForm }) => {
  if (table === undefined) return <div className={s.empty}>Empry Table</div>
  const colonsName = Object.keys(table[0])
  console.log(table)

  return (
    <table className={s.table}>
      <tr key={uuid()}>
        {colonsName.map((item) => (
          <th className={s.tagName} key={uuid()}>
            {item}
          </th>
        ))}
      </tr>
      <tr key={uuid()}>
        {colonsName.map((item) => (
          <td className={s.td} key={uuid()}>
            {table.map((obj) => (
              <ArrayObj obj={obj} item={item} setForm={setForm} />
            ))}
          </td>
        ))}
      </tr>
    </table>
  )
}

const ArrayObj = ({ obj, item, setForm }) => {
  if (Array.isArray(obj[item])) {
    return (
      <div className={s.objArray} key={uuid()}>
        {obj[item].map((arr) => (
          <p
            className={s.obj}
            key={uuid()}
            onDoubleClick={() =>
              setForm(<Form type="change" obj={obj} item={item} arr={arr} />)
            }
          >
            {arr}
          </p>
        ))}
      </div>
    )
  } else {
    return (
      <p
        className={s.obj}
        key={uuid()}
        onDoubleClick={() =>
          setForm(<Form type="change" item={item} obj={obj} arr={obj[item]}/>)
        }
      >
        {obj[item]}
      </p>
    )
  }
}

export default TableItem
