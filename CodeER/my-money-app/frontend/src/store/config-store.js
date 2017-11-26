import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import reducers from "./reducer/";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(promise)(createStore)(reducers, devTools);
