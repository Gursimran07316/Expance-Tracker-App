import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Item from "./Items";
const ExpenseList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      {" "}
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
        {/* <li className="minus">
      Cash <span>-$400</span><button class="delete-btn">x</button> */}
        {/* </li>  */}
      </ul>{" "}
    </>
  );
};
export default ExpenseList;
