import { providers as info } from "../../database";
import { LOAD_PROVIDERS } from "../constatns";

const providers = (state = info, action) => {
  const {type} = action;

  switch (type) {
    case LOAD_PROVIDERS:
      return state
    default:
      return state
  }
}

export default providers;