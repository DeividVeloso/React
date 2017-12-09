import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboard from "./dashboard-reducer";
import tab from "./tab-reducer";
import billingCycle from "./billing-cycle-reducer";

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycle,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
