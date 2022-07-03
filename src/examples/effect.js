import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    t: 0,
  });

  const mouseMoveHandler = (event) => {
    window.addEventListener("mousemove", (event) => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      });
    });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log("type change", type);
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>resorce:{type}</h1>
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("todos")}>todos</button>
      <button onClick={() => setType("posts")}>posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
