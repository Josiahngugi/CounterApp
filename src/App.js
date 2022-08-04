import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  }
  function minusCount() {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: count > 0 ? "green" : "red" }}
    >
      <h1>{count}</h1>
      <button onClick={addCount}>Increment</button>
      <button onClick={minusCount}>Decrement</button>
    </div>
  );
}
