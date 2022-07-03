import React, { useState, useEffect } from "react";

const ItemsList = ({getItems}) => {
  const [Items, setItems] = useState([])

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);


  return (
    <ul>
      {Items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );


};
export default ItemsList;
