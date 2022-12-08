import React from 'react'
import { connect } from 'react-redux'
import { arrayContains } from './utils-form'
import {
  putDeclaration,
  putOrder,
  putProduct,
  putProvider,
} from '../../redux/actions'

const EditableCell = ({
  value: initialValue,
  row,
  column,
  putDeclaration,
  putOrder,
  putProduct,
  putProvider,
}) => {
  const { original } = row
  const { Header } = column
  const [value, setValue] = React.useState(initialValue)

  const keys = Object.keys(original)
  let thronwObject

  if (Header === 'productID' && arrayContains('totalAmount', keys)) {
    thronwObject = {
      _id: original._id,
      changing: { $set: { 'order.productID': value } },
    }
  } else if (Header === 'totalAmount' && arrayContains('totalAmount', keys)) {
    thronwObject = {
      _id: original._id,
      changing: { $set: { 'order.total': value } },
    }
  } else if (Header === 'productID' && arrayContains('orderAmount', keys)) {
    thronwObject = {
      _id: original._id,
      changing: { $set: { 'entities.productID': value } },
    }
  } else if (Header === 'orderAmount' && arrayContains('orderAmount', keys)) {
    thronwObject = {
      _id: original._id,
      changing: { $set: { 'entities.orderAmount': value } },
    }
  } else {
    thronwObject = { _id: original._id, changing: { [Header]: value } }
  }

  const putFunction = arrayContains('totalAmount', keys)
    ? putOrder
    : arrayContains('orderAmount', keys)
    ? putDeclaration
    : arrayContains('description', keys)
    ? putProduct
    : putProvider

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    putFunction(thronwObject)
    console.log(thronwObject)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  if (Header === '_id') {
    return value
  } else if (Header === 'object_id') {
    return value
  } else {
    return <input value={value} onChange={onChange} onBlur={onBlur} />
  }
}

const mapDispatchToProps = {
  putDeclaration,
  putOrder,
  putProduct,
  putProvider,
}

export default connect(null, mapDispatchToProps)(EditableCell)
