import React from "react";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import Expenses from "./Component/Expenses";
import ExpenseList from "./Component/ExpenseList";
import AddTransaction from "./Component/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <>
        <Header />
        <div className="container">
          <Balance />
          <Expenses />
          <ExpenseList />
          <AddTransaction />
        </div>
      </>
    </GlobalProvider>
  );
}
