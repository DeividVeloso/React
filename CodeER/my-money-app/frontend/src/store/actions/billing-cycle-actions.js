import axios from "axios";
const BASE_URL = "http://localhost:3003/api";
import * as types from "./action-types";
export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: types.BILLING_CYCLES_FETCHED,
    payload: request
  };
};
