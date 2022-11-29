import { LOAD_ORDER } from "../constatns";

const initialOrder = {
  entities: []
}

const order = (state = initialOrder, action) => {
  const { type, takenOrder} = action;


  switch (type) {
    case LOAD_ORDER:
      return {...takenOrder}
    default:
      return state;
  }
}

export default order;