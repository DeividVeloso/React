import { combineReducers } from "redux";
import dashboard from "./dashboard-reducer";
import tab from "./tab-reducer";

const rootReducer = combineReducers({
  dashboard,
  tab
});

export default rootReducer;
