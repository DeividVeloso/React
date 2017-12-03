import * as types from "../actions/action-types";
const INITIAL_STATE = { selected: "", visible: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TAB_SELECTED:
      return { ...state, selected: action.payload };
    case types.TAB_SHOWED:
      return {
        ...state,
        visible: action.payload
      };
    default:
      return state;
  }
};
