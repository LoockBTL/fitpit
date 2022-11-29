import { applyMiddleware, legacy_createStore as createStore} from "redux";
import logger from "./middleware/login";
import reducer from "./reducer/index";

const store = createStore(reducer, applyMiddleware(logger));

export default store;