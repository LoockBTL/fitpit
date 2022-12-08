import s from './form.module.css'
import { connect } from 'react-redux'
import {
  postDeclaration,
  postOrder,
  postProduct,
  postProvider,
} from '../../../../redux/actions'
import { useRef } from 'react'

import { arrayContains } from '../../../react-table/utils-form'

const Form = ({
  table,
  provider,
  products,
  postDeclaration,
  postOrder,
  postProduct,
  postProvider,
}) => {
  let keys = Object.keys(table[0])
  if (arrayContains('price', keys)) {
    return <ProductForm postFunction={postProduct} provider={provider} />
  } else if (arrayContains('companyName', keys)) {
    return <ProvidertForm postFunction={postProvider} />
  } else if (arrayContains('date', keys)) {
    return <OrderForm postFunction={postOrder} products={products} />
  } else {
    return (
      <DeclarationForm
        postFunction={postDeclaration}
        provider={provider}
        products={products}
      />
    )
  }
}

const ProductForm = ({ postFunction, provider }) => {
  const name = useRef()
  const amount = useRef()
  const price = useRef()
  const description = useRef()
  const mass = useRef()
  const providerId = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    postFunction({
      name: name.current.value,
      amount: amount.current.value,
      price: price.current.value,
      description: description.current.value,
      mass: mass.current.value,
      providerId: providerId.current.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Имя</p>
      <input type="text" ref={name} />
      <p>В наличие</p>
      <input type="text" ref={amount} />
      <p>Цена</p>
      <input type="text" ref={price} />
      <p>Описание</p>
      <input type="text" ref={description} />
      <p>Масса</p>
      <input type="text" ref={mass} />
      <p>Поставщик</p>
      <select ref={providerId}>
        {provider.map((obj) => (
          <option value={obj._id}>{obj.companyName}</option>
        ))}
      </select>
      <input type="submit" value="Submit" className={s.button} />
    </form>
  )
}
const ProvidertForm = ({ postFunction }) => {
  const companyName = useRef()
  const name = useRef()
  const secondName = useRef()
  const fathersName = useRef()
  const mail = useRef()
  const phone = useRef()
  const adress = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    postFunction({
      companyName: companyName.current.value,
      name: name.current.value,
      secondName: secondName.current.value,
      fathersName: fathersName.current.value,
      mail: mail.current.value,
      phone: phone.current.value,
      adress: adress.current.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Название компании</p>
      <input type="text" ref={companyName} />
      <p>Имя</p>
      <input type="text" ref={name} />
      <p>Фамилия</p>
      <input type="text" ref={secondName} />
      <p>Отчество</p>
      <input type="text" ref={fathersName} />
      <p>Почта</p>
      <input type="text" ref={mail} />
      <p>Телефон</p>
      <input type="text" ref={phone} />
      <p>Адресс</p>
      <input type="text" ref={adress} />
      <input type="submit" value="Submit" className={s.button} />
    </form>
  )
}
const OrderForm = ({ postFunction }) => {
  const name = useRef()
  const secondName = useRef()
  const thirdName = useRef()
  const email = useRef()
  const number = useRef()
  const date = useRef()
  const productID = useRef()
  const total = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    postFunction({
      name: name.current.value,
      secondName: secondName.current.value,
      thirdName: thirdName.current.value,
      email: email.current.value,
      number: number.current.value,
      date: date.current.value,
      entities: [
        {
          productID: productID.current.value,
          total: total.current.value,
        },
      ],
      createDeclaration: false
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Дата</p>
      <input type="datetime-local" ref={date} />
      <p>Почта</p>
      <input type="text" ref={email} />
      <p>Имя</p>
      <input type="text" ref={name} />
      <p>Фамилия</p>
      <input type="text" ref={secondName} />
      <p>Отчество</p>
      <input type="text" ref={thirdName} />
      <p>Номер</p>
      <input type="text" ref={number} />
      <p>ID заказаных продуктов</p>
      <input type="text" ref={productID} />
      <p>Количество заказаных продуктов</p>
      <input type="text" ref={total} />
      <input type="submit" value="Submit" className={s.button} />
    </form>
  )
}
const DeclarationForm = ({ postFunction, provider, products }) => {
  const providerID = useRef()
  const data = useRef()
  const productID = useRef()
  const orderAmount = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    postFunction({
      providerID: providerID.current.value,
      data: data.current.value,
      entities: {
        productID: productID.current.value,
        orderAmount: orderAmount.current.value,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Провайдер</p>
      <select ref={providerID}>
        {provider.map((obj) => (
          <option value={obj._id}>{obj.companyName}</option>
        ))}
      </select>
      <p>Дата</p>
      <input type="datetime-local" ref={data} />
      <p>Продукт</p>
      <select ref={productID}>
        {products.map((obj) => (
          <option value={obj._id}>{obj.name}</option>
        ))}
      </select>
      <p>Объем заказа</p>
      <input type="text" ref={orderAmount} />
      <input type="submit" value="Submit" className={s.button} />
    </form>
  )
}
const mapStateToProps = (state) => ({
  provider: state.providers,
  products: state.products,
})

const mapDispatchToProps = {
  postDeclaration,
  postOrder,
  postProduct,
  postProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
