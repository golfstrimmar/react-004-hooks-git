import React, { useState, useCallback } from "react";

import "../assets/css/App.css";
import "../assets/css/buttons.css";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  const styles = { color: colored ? "darkred" : "black" };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, index) => `element ${index + 1}`);
  }, [count]);

  return (
    <div className="app">
      <h2 style={styles}>quontity of elements: {count}</h2>
      <button
        className="btn btn--success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        add
      </button>
      <button
        className="btn btn--empty"
        onClick={() => setColored((prev) => !prev)}
      >
        change
      </button>
      <ItemsList getItems={generateItemsFromAPI}></ItemsList>
    </div>
  );
}

export default App;
