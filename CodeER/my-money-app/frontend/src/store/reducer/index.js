import { combineReducers } from "redux";
import dashboard from "./dashboard-reducer";
import tab from "./tab-reducer";
import billingCycle from "./billing-cycle-reducer";

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycle
});

export default rootReducer;
