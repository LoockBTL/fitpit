import { combineReducers } from "redux";
import products from "./products";
import busket from "./busket";
import order from "./order";
import login from "./login";
import providers from './providers';
import declarations from './declarations'

export default combineReducers({
  products,
  busket,
  order,
  login,
  providers,
  declarations
});