import React, { useState } from "react";

export default function Card({ addItem }) {
  const [inputValue, setInputValue] = useState(1);

  function changeValue(e) {
    setInputValue(parseInt(e.target.value));
  }

  return (
    <div className="card">
      <div className="img">PRODUCT</div>

      <input type="number" placeholder="1" onChange={changeValue}></input>
      <button onClick={event => addItem(inputValue)}>Add to cart</button>
    </div>
  );
}
