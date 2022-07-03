import React from "react";

const Main = ({toggle}) => {
  return (
    <div className="Main">
      <h2>example context</h2>
      <button className="btn btn--success" onClick={toggle}>
        show alert
      </button>
    </div>
  );
};
export default Main;
