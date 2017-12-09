import axios from "axios";
import { toastr } from "react-redux-toastr";
import * as types from "./action-types";

const BASE_URL = "http://localhost:3003/api";

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: types.BILLING_CYCLES_FETCHED,
    payload: request
  };
};

export const createCycle = values => {
  console.log("Values", values);
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then(response => {
      toastr.success("Sucesso", "Operação realizada com sucesso");
    })
    .catch(error => {
      error.response.data.errors.forEach(error => {
        toastr.error("Error", error);
      });
    });

  return {
    type: "TEMP"
  };
};
