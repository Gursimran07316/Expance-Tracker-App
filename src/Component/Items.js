import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
const Item = ({ item }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const classname = item.amount > 0 ? "plus" : "minus";
  return (
    <li className={classname}>
      {item.text}{" "}
      <span>
        {item.amount > 0 ? `$${item.amount}` : `-$${Math.abs(item.amount)}`}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(item.id)}>
        x
      </button>
    </li>
  );
};
export default Item;
