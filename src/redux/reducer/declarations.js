import { DELETE_DECLARATIONS, LOAD_DECLARATIONS, POST_DECLARATIONS, PUT_DECLARATIONS } from "../constatns";

const declarations = (state = {}, action) => {
  const {type, data} = action; 

  switch (type) {
    case LOAD_DECLARATIONS:
      return state = data;
    case POST_DECLARATIONS:
      return state;
    case PUT_DECLARATIONS:
      return state;
    case DELETE_DECLARATIONS:
      return state;
    default:
      return state;
  }
}

export default declarations;