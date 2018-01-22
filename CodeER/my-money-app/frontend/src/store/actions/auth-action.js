import { toastr } from "react-redux-toastr";
import axios from "axios";
const env = require("../../.env");

export const login = values => {
  return submit(values, `${env.OAPI_URL}/login`);
};

export const signup = values => {
  return submit(values, `${env.OAPI_URL}/signup`);
};

const submit = (values, url) => {
  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        console.log("LOGOU", resp.data)
        dispatch({ type: "USER_FETCHED", payload: resp.data });
      })
      .catch(e => {
        e.response.errors.forEach(error => toastr.error("Error", error));
      });
  };
};

export const logout = () => {
  return {
    type: "TOKEN_VALIDATED",
    payload: false
  };
};

export const validateToken = token => {
  return dispatch => {
    if (token) {
      axios
        .post(`${env.OAPI_URL}/validateToken`, { token })
        .then(resp => {
          dispatch({ type: "TOKEN_VALIDATED", payload: resp.data.valid });
        })
        .catch(e => dispatch({ type: "TOKEN_VALIDATED", payload: false }));
    } else {
      dispatch({ type: "TOKEN_VALIDATED", payload: false });
    }
  };
};
