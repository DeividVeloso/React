import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";

import * as types from "./action-types";
import { showTabs, selectTab } from "../actions/tab-action";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: types.BILLING_CYCLES_FETCHED,
    payload: request
  };
};

export const createCycle = values => dispatch => {
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then(response => {
      toastr.success("Sucesso", "Operação realizada com sucesso");
      dispatch(init());
    })
    .catch(error => {
      error.response.data.errors.forEach(error => {
        toastr.error("Error", error);
      });
    });
};

export const showUpdate = billingCycle => dispatch => {
  dispatch(showTabs("tabUpdate"));
  dispatch(selectTab("tabUpdate"));
  dispatch(initialize("billingCycleForm", billingCycle));
};

export const init = () => dispatch => {
  console.log("Entoru");
  dispatch(showTabs("tabList", "tabCreate"));
  dispatch(selectTab("tabList"));
  dispatch(getList());
  dispatch(initialize("billingCycleForm", INITIAL_VALUES));
};
