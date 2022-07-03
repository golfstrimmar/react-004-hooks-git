import React, {useContext} from "react";
import {AlertContext} from "../App";


const Alert = () => {
  const alert = useContext(AlertContext);
  if (!alert) return null;
  return(
  <div className="alert">this is inportant message</div>
  );
};
export default Alert;
