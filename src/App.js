import { useState } from "react";
import "./App.css";
import UseState from "./UseState/UseState";
import UseEffect from "./UseEffect/UseEffect";

const hooks = [
  { id: 1, label: "useState" },
  { id: 2, label: "useEffect" },
];

function App() {
  const [selected, setSelected] = useState(1);

  const renderHook = () => {
    switch (selected) {
      case 1:
        return <UseState />;

      case 2:
        return <UseEffect />;

      default:
        return null;
    }
  };

  return (
    <div className="root">
      <div className="list">
        <h2>React hooks</h2>
        <ul>
          {hooks.map(hook => (
            <li
              key={hook.id}
              className={hook.id === selected ? "selected" : null}
              onClick={() => setSelected(hook.id)}
            >
              {hook.label}
            </li>
          ))}
        </ul>
      </div>

      {renderHook()}
    </div>
  );
}

export default App;
