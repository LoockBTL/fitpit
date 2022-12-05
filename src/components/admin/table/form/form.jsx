import s from './form.module.css'

const Form = ({ type, table, item, arr, obj }) => {
  console.log(item, arr, obj)
  const onSubmit = (e) => {
    e.preventDefault()
  }
  switch (type) {
    case 'delete':
      return (
        <form className={s.from} onSubmit={onSubmit}>
          {table.map((obj) => {
            return (
              <div>
                <label>{obj.name}</label>
                <input type="checkbox" id={obj.id}/>
              </div>
            )
          })}
          <input type="submit" value="submit" />
        </form>
      )
    case 'create':
      const object = Object.keys(table[0])
      return (
        <form className={s.from} onSubmit={onSubmit}>
          {object.map((obj) => {
            if (obj === '_id') return <></>
            return (
              <div className={s.label}>
                <label>{obj}</label>
                <input required id={obj} />
              </div>
            )
          })}
          <input type="submit" value="submit" />
        </form>
      )
    case 'change':
      if (item === '_id') {
        return <div>Нельзя менять</div>
      }
      return (
        <form className={s.from} onSubmit={onSubmit}>
          <label>{arr}</label>
          <input type="text" placeholder={arr} />
          <input type="submit" value="submit" />
        </form>
      )
    default:
      break;
  }
}

export default Form
