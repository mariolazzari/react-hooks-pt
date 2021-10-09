import { useReducer } from "react";
import "./UseReducer.css";

const initialState = {
  count: 0,
  showText: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + 1,
      };

    case "toggle":
      return {
        ...state,
        showText: !state.showText,
      };

    default:
      return state;
  }
};

const UseReduces = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = () => {
    dispatch({ type: "inc" });
    dispatch({ type: "toggle" });
  };

  return (
    <div className="container">
      <h2>{state.count}</h2>
      <button onClick={onClick}>Increment</button>
      {state.showText && <h2>This is a text</h2>}
    </div>
  );
};

export default UseReduces;
