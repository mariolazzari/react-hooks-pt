import { useState } from "react";
import "./App.css";
import UseState from "./UseState";
import UseReducer from "./UseReducer";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseLayoutEffect from "./UseLayoutEffect";
import UseImperativeHandle from "./UseImperativeHandle";
import UseContext from "./UseContext";

const hooks = [
  "useState",
  "useReducer",
  "useEffect",
  "useRef",
  "useLayoutEffect",
  "useImperativeHandle",
  "useContext",
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

      case 5:
        return <UseImperativeHandle />;

      case 6:
        return <UseContext />;

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
