import React, { Component } from "react";
import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 1500);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
