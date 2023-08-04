import { createStore } from "redux";
import rootReducer from '../redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;

 