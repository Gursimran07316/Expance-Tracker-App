import React, { createContext, useReducer } from "react";
import AppReducer from "./Appreducer";
const initialState = {
  transactions: []
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DEL-ITEM",
      payload: id
    });
  };
  const addTransaction = (item) => {
    dispatch({
      type: "ADD-ITEM",
      payload: item
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
