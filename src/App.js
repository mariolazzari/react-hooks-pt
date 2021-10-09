import { useState } from "react";
import "./App.css";
import UseState from "./UseState/UseState";
import UseReducer from "./UseReducer/UseReducer";
import UseEffect from "./UseEffect/UseEffect";
import UseRef from "./UseRef/UseRef";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";

const hooks = [
  "useState",
  "useReducer",
  "useEffect",
  "useRef",
  "useLayoutEffect",
];

function App() {
  const [selected, setSelected] = useState(1);

  const renderHook = () => {
    switch (selected) {
      case 0:
        return <UseState />;

      case 1:
        return <UseReducer />;

      case 2:
        return <UseEffect />;

      case 3:
        return <UseRef />;

      case 4:
        return <UseLayoutEffect />;

      default:
        return null;
    }
  };

  return (
    <div className="root">
      <div className="list">
        <h2>React hooks</h2>
        <ul>
          {hooks.map((hook, i) => (
            <li
              key={i}
              className={i === selected ? "selected" : null}
              onClick={() => setSelected(i)}
            >
              {hook}
            </li>
          ))}
        </ul>
      </div>

      {renderHook()}
    </div>
  );
}

export default App;
