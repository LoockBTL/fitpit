import s from './form.module.css'



function changeObj(table, item, arr, obj, e){

}

function createObj(table, item, arr, obj, e){

}

const Form = ({ type, table, item, arr, obj }) => {
  console.log(item, arr, obj)
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    switch(type){
      case 'change':
        changeObj(table, item, arr, obj, e);
        break;
      case "create":
        createObj(table, item, arr, obj, e);
        break;
      default:
        break
    }
  }
  switch (type) {
    case 'create':
      const object = Object.keys(table[0])
      return (
        <form className={s.from} onSubmit={onSubmit}>
          {object.map((obj) => {
            if (obj === '_id') return <></>
            return (
              <div className={s.label}>
                <label>{obj}</label>
                <input required value={obj} />
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
          <input type="text" placeholder={arr} value={obj._id}/>
          <input type="submit" value="submit" />
        </form>
      )
    default:
      break
  }
}



export default Form
