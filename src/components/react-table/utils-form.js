
export function deleteObj(obj, func) {
  let id = obj._id
    return <button onClick={() => func(id)}>{`Delete Line`}</button>
  
}

export function objToArray(objMain) {
  let keys = Object.keys(objMain[0])

  if (arrayContains('order', keys)) {
    return objMain.map((obj) => {
      return {
        _id: obj._id,
        providerID: obj.providerID,
        date: obj.date,
        email: obj.email,
        name: obj.name,
        number: obj.number,
        secondName: obj.secondName,
        thirdName: obj.thirdName,
        productID: obj.order._id,
        totalAmount: obj.order.total,
      }
    })
  } else if (arrayContains('entities', keys)) {
    return objMain.map((obj) => {
      return {
        _id: obj._id,
        date: obj.date,
        providerID: obj.providerID,
        data: obj.data,
        productID: obj.entities.productID,
        orderAmount: obj.entities.orderAmount,
        object_id: obj.entities._id,
      }
    })
  } else return objMain
}

export function arrayContains(word, source_array) {
  return source_array.indexOf(word) > -1
}
