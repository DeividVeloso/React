import * as types from "./action-types";
export const selectTab = tabId => {
  return {
    type: types.TAB_SELECTED,
    payload: tabId
  };
};

export const showTabs = (...tabIds) => {
  const tabsToShow = {}; //Criando objeto
  tabIds.forEach(e => (tabsToShow[e] = true)); //atribuindo propriedades no objeto ex: "tabList" : true, "tabCreate": true

  return {
    type: types.TAB_SHOWED,
    payload: tabsToShow
  };
};
