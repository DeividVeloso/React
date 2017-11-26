import * as types from "../actions/action-types";
const INITIAL_STATE = {
  summary: {
    credit: 0,
    debt: 0
  }
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.BILLING_SUMMARY_FETCHED: {
      return { ...state, summary: action.payload.data };
    }
    default:
      return state;
  }
};
