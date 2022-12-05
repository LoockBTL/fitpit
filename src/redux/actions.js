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
} from './constatns'

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  CallApi: 'http://localhost:3001/api/products',
})

export const loadOrder = () => ({
  type: LOAD_ORDER,
  CallApi: "http://localhost:3001/api/orders"
})

export const loadBusket = () => ({
  type: LOAD_BUSKET,
})

export const loadDeclarations = () => ({
  type: LOAD_DECLARATIONS,
  CallApi: "http://localhost:3001/api/declarations"
})

export const postOrder = (takenOrder) => ({
  type: POST_ORDER,
  CallApi: 'http://localhost:3001/api/add-order',
  paramsData: {
    method: 'POST',
    body: takenOrder,
  },
})

export const loadProviders = () => ({
  type: LOAD_PROVIDERS,
  CallApi: 'http://localhost:3001/api/providers',
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
