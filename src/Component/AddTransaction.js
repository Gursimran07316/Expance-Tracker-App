import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit= (e) => {
    e.preventDefault();
    if (text !== "" && amount !== 0) {
      const item = {
        id: Math.floor(Math.random() * 1000),
        text,
        amount: +amount
      };
      addTransaction(item);
      setAmount(0);
      setText("");
    } else {
      alert("Fill all fileds");
    }
  };
  return (
    // <>
    //   <h3>Add new transaction</h3>
    //   <form  onSubmit={(e) => submitHandlder(e)}>
    //     <div className="form-control">
    //       <label htmlFor="text">Text</label>
    //       <input
    //         type="text"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //         placeholder="Enter text..."
    //       />
    //     </div>
    //     <div className="form-control">
    //       <label htmlFor="amount">
    //         Amount <br />
    //         (negative - expense, positive - income)
    //       </label>
    //       <input
    //         type="number"
    //         value={amount}
    //         onChange={(e) => setAmount(e.target.value)}
    //         placeholder="Enter amount..."
    //       />
    //     </div>
    //     <button className="btn">Add transaction</button>
    //   </form>
    // </>
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          {/* <label htmlFor="text">Text</label> */}
          <input type="text" value={text} name="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          {/* <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label> */}
          <input type="number" value={amount} name="amount" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
        <button className="btn">Add transaction</button>
        </div>
      </form>
    </>
  );
};
export default AddTransaction;
