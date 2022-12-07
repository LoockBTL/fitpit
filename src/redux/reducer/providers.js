import { DELETE_PROVIDERS, LOAD_PROVIDERS, POST_PROVIDERS, PUT_PROVIDERS } from "../constatns";

const providers = (state = [], action) => {
  const {type, data} = action;

  switch (type) {
    case LOAD_PROVIDERS:
      return state = data;
    case PUT_PROVIDERS:
      return state;
    case DELETE_PROVIDERS:
      return state;
    case POST_PROVIDERS:
      return state;
    default:
      return state
  }
}

export default providers;