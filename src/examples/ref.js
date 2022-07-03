import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(0);
  const prevValue = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();
  return (
    <div>
      <h2>quontity of renders: {renderCount.current}</h2>
      <h2>last state: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default App;
