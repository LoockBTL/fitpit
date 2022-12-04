import { applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/login";
import reducer from "./reducer/index";
import getApi from "./middleware/getApi";

const store = createStore(reducer, applyMiddleware(logger, thunk, getApi));

export default store;