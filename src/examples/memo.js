import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

function complexComputed(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  let [number, setNumber] = useState(42);
  let [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({ color: colored ? "darkred" : "black" }),
    [colored]
  );

  const cumputed = useMemo(() => {
    return complexComputed(number);
  }, [number]);

  useEffect(() => {
    return () => {
      console.log("styles changed");
    };
  }, [styles]);

  return (
    <div style={styles}>
      <h2>{number}</h2>
      <button onClick={() => setNumber((prev) => prev + 1)}>add</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>rem</button>
      <button onClick={() => setColored((prev) => !prev)}>colored</button>
    </div>
  );
}

export default App;
