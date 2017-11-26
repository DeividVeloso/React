import axios from "axios";
import * as types from "./action-types";
const BASE_URL = "http://localhost:3003/api";

export const getSummary = () => {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  return {
    type: types.BILLING_SUMMARY_FETCHED,
    payload: request
  };
};
