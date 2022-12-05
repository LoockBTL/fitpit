import { LOAD_ORDER, POST_ORDER } from "../constatns";


const order = (state = {}, action) => {
  const { type, data } = action;


  switch (type) {
    case POST_ORDER:
      return state;
    case LOAD_ORDER:
      return data;
    default:
      return state;
  }
}

export default order;