import React, { useState, useEffect } from "react";
import Main from "./Main";
import "../assets/css/App.css";
import "../assets/css/buttons.css";
import Alert from "./alert/Alert";
export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);

  function toggleAlert() {
    setAlert((prev) => !prev);
  }

  return (
    <AlertContext.Provider value={alert}>
      <div className="app">
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
