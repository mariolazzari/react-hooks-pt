import { useRef, useState } from "react";
import "./UseRef.css";

const UseRef = () => {
  const [name, setName] = useState("Mario");
  const inputRef = useRef();

  const onChange = e => setName(e.target.value);

  const onClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    console.log(inputRef.current.placeholder);
  };

  return (
    <div>
      <h2>{name}</h2>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={onChange}
        placeholder="enter name"
      />
      <button onClick={onClick}>Focus name</button>
    </div>
  );
};

export default UseRef;
