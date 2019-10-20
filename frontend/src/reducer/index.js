import { combineReducers } from "redux";
import authReducers from "./auth";
import Product from "./Products";

export default combineReducers({
  auth: authReducers,
  product: Product
});
