import { LOAD_PRODUCTS } from "../constatns";

const products = (state = [], action) => {
  const {type, data} = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return state = data
    default:
      return state
  }
}

export default products;