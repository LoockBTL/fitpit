import { products as info } from "../../database";
import { LOAD_PRODUCTS } from "../constatns";

const products = (state = info, action) => {
  const {type} = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return state
    default:
      return state
  }
}

export default products;