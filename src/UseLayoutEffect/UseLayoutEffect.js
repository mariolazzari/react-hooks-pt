import { useEffect, useLayoutEffect, useRef } from "react";
import "./UseLayoutEffect.css";

const UseLayoutEffect = () => {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    inputRef.current.value = "useEffect";
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" value="Mario" />
    </div>
  );
};

export default UseLayoutEffect;
