import { LOAD_PROVIDERS } from "../constatns";

const providers = (state = [], action) => {
  const {type, data} = action;

  switch (type) {
    case LOAD_PROVIDERS:
      return state = data
    default:
      return state
  }
}

export default providers;