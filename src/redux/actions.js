import { INCREMENT, DECREMENT, LOAD_PRODUCTS, LOAD_BUSKET, LOAD_ORDER, LOAD_PROVIDERS, LOGIN } from "./constatns";

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

export const loadBusket = () => ({
  type: LOAD_BUSKET
})

export const loadOrder = (takenOrder) => ({
  type: LOAD_ORDER,
  takenOrder
})

export const loadProviders = () => ({
  type: LOAD_PROVIDERS,
})

export const login = (userData) => ({
  type: LOGIN,
  userData
})

export const increment = (id) => ({
  type: INCREMENT,
  id,
});

export const decrement = (id) => ({
  type: DECREMENT,
  id,
})