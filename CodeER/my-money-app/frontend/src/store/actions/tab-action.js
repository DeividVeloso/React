import * as types from "./action-types";
export const selectTab = tabId => {
  return {
    type: types.TAB_SELECTED,
    payload: tabId
  };
};
