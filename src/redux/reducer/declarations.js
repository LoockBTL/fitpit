import { LOAD_DECLARATIONS } from "../constatns";

const declarations = (state = {}, action) => {
  const {type, data} = action; 

  switch (type) {
    case LOAD_DECLARATIONS:
      return state = data;
    default:
      return state;
  }
}

export default declarations;