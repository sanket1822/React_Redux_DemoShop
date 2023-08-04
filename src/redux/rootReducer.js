import { combineReducers } from "redux";
import  {productsReducer}  from './shop/shopReducers';
import  {selectedProductReducer}  from "./shop/shopReducers";

const rootReducer = combineReducers({
    allProducts: productsReducer,
    selectedProduct : selectedProductReducer
})

export default rootReducer;