import { DELETE_PRODUCTS, LOAD_PRODUCTS, POST_PRODUCTS, PUT_PRODUCTS } from "../constatns";

const products = (state = [], action) => {
  const {type, data} = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return state = data
    case POST_PRODUCTS:
      return state;
    case PUT_PRODUCTS:
      return state;
    case DELETE_PRODUCTS:
      return state;
    default:
      return state
  }
}

export default products;