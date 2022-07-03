import React, { useState, useEffect } from "react";
import "../assets/css/App.css";
import "../assets/css/buttons.css";

function useLoger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clear = () => {
    setValue("");
  };
  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function App() {
  const input = useInput("");
  const inputLastName = useInput("");
  useLoger(input.value);

  return (
    <div className="app">
      <h3>{input.value}</h3>
      <input type="text" {...input.bind} />
      <h3>{inputLastName.value}</h3>
      <input type="text" {...inputLastName.bind} />

      <button onClick={() =>{input.clear();inputLastName.clear();} }>clear</button>
    </div>
  );
}

export default App;
