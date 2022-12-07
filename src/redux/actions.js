import {
  INCREMENT,
  DECREMENT,
  LOAD_PRODUCTS,
  LOAD_BUSKET,
  POST_ORDER,
  LOAD_PROVIDERS,
  LOGIN,
  LOAD_ORDER,
  LOAD_DECLARATIONS,
  POST_PRODUCTS,
  POST_PROVIDERS,
  POST_DECLARATIONS,
  PUT_PRODUCTS,
  PUT_PROVIDERS,
  PUT_ORDER,
  PUT_DECLARATIONS,
  DELETE_PRODUCTS,
  DELETE_PROVIDERS,
  DELETE_ORDER,
  DELETE_DECLARATIONS,
} from './constatns'

//LOAD
export const loadProducts = () => async (dispatch) => {
  try {
    const data = await fetch("/api/products").then((res) => res.json());
    dispatch({
      type: LOAD_PRODUCTS,
      data
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const loadOrder = () => async (dispatch) => {
  try {
    const data = await fetch("/api/orders").then((res) => res.json());
    dispatch({
      type: LOAD_ORDER,
      data
    })
  } catch (error) {
    console.log(error.message)
  }
}
export const loadProviders = () => async (dispatch) => {
  try {
    const data = await fetch("/api/providers").then((res) => res.json());
    dispatch({
      type: LOAD_PROVIDERS,
      data
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const loadDeclarations = () => async (dispatch) => {
  try {
    const data = await fetch("/api/declarations").then((res) => res.json());
    dispatch({
      type: LOAD_DECLARATIONS,
      data
    })
  } catch (error) {
    console.log(error.message)
  }
}


//POST
export const postOrder = (takenObj) => ({
  type: POST_ORDER,
  CallApi: '/api/add-order',
  paramsData: {
    method: 'POST',
    body: takenObj,
  },
})

export const postProduct = (takenObj) => ({
  type: POST_PRODUCTS,
  CallApi: "/api/add-product",
  paramsData: {
    method: "POST",
    body: takenObj
  }
})

export const postProvider = (takenObj) => ({
  type: POST_PROVIDERS,
  CallApi: "/api/add-provider",
  paramsData: {
    method: "POST",
    body: takenObj
  }
})

export const postDeclaration = (takenObj) => ({
  type: POST_DECLARATIONS,
  CallApi: "/api/add-declaration",
  paramsData: {
    method: "POST",
    body: takenObj
  }
})

//PUT

export const putProduct = (puttedObj) => ({
  type: PUT_PRODUCTS,
  CallApi: "/api/put-product",
  paramsData: {
    method: "PUT",
    body: puttedObj
  }
})

export const putProvider = (puttedObj) => ({
  type: PUT_PROVIDERS,
  CallApi: "/api/put-provider",
  paramsData: {
    method: "PUT",
    body: puttedObj
  }
})

export const putOrder = (puttedObj) => ({
  type: PUT_ORDER,
  CallApi: "/api/put-order",
  paramsData: {
    method: "PUT",
    body: puttedObj
  }
})

export const putDeclaration = (puttedObj) => ({
  type: PUT_DECLARATIONS,
  CallApi: "/api/put-declaration",
  paramsData: {
    method: "PUT",
    body: puttedObj
  }
})

//DELETE

export const deleteProduct = (deleteObj) => ({
  type: DELETE_PRODUCTS,
  CallApi: `/api/delete-product/${deleteObj}`,
  paramsData: {
    method: "DELETE",
  }
})

export const deleteProvider = (deleteObj) => ({
  type: DELETE_PROVIDERS,
  CallApi: `/api/delete-provider/${deleteObj}`,
  paramsData: {
    method: "DELETE",
  }
})

export const deleteOrder = (deleteObj) => ({
  type: DELETE_ORDER,
  CallApi: `/api/delete-order/${deleteObj}`,
  paramsData: {
    method: "DELETE",
  }
})

export const deleteDeclaration = (deleteObj) => ({
  type: DELETE_DECLARATIONS,
  CallApi: `/api/delete-order/${deleteObj}`,
  paramsData: {
    method: "DELETE",
  }
})

//OTHER

export const loadBusket = () => ({
  type: LOAD_BUSKET,
})

export const login = (userData) => ({
  type: LOGIN,
  userData,
})

export const increment = (id) => ({
  type: INCREMENT,
  id,
})

export const decrement = (id) => ({
  type: DECREMENT,
  id,
})
