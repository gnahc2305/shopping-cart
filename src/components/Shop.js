import React, { useState } from "react";
import Card from "./Card";

function Shop() {
  const [cart, setCart] = useState(0);

  function addItem(e) {
    setCart(cart + 1);
  }

  return (
    <div>
      <div className="shop">

        <div className="cart-counter">
          <h1>Shop</h1>
          <button onClick={addItem}>Cart: {cart}</button>
        </div>

        <div className="shop-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </div>
  );
}

export default Shop;
