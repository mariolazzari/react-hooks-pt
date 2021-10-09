import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const onNameChange = e => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>Counter: {count}</h2>
        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>

      <div className="container">
        <input
          type="text"
          placeholder="Enter name.."
          onChange={onNameChange}
          value={name}
        />
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default UseState;
