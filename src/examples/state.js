import React, { useState } from "react";
import "./App.css";

function computerInitCounter() {
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(() => {return computerInitCounter()});

  function inc() {
    setCounter((prev) => prev + 1);
  }

  function dec() {
    setCounter((prev) => prev - 1);
  }


  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "new title",
      };
    });
  }


  const [state, setState] = useState({ title: "counter", date: Date.now() });

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}>add</button>
      <button onClick={dec}>rem</button>
      <button onClick={updateTitle}>change</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
