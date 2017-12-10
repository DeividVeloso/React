import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducer/";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(thunk, promise)(createStore)(
  reducers,
  devTools
);
