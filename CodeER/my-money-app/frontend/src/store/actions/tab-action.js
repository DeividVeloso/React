import * as types from "./action-types";
export const selectTab = tabId => {
  console.log("TABID", tabId);
  return {
    type: types.TAB_SELECTED,
    payload: tabId
  };
};
