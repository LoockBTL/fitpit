import { DELETE_ORDER, LOAD_ORDER, POST_ORDER, PUT_ORDER } from "../constatns";


const order = (state = {}, action) => {
  const { type, data } = action;


  switch (type) {
    case POST_ORDER:
      return state;
    case LOAD_ORDER:
      return state = data;
    case PUT_ORDER:
      return state;
    case DELETE_ORDER:
      return state;
    default:
      return state;
  }
}

export default order;