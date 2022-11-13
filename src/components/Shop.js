import React, { useState } from "react";
import Card from "./Card";

function Shop() {
  const [cart, setCart] = useState(0);

  function addItem(value) {
    setCart(cart + value);
  }

  return (
    <div>
      <div className="shop">

        <div className="cart-counter">
          <h1>Shop</h1>
          <button>Cart: {cart}</button>
        </div>

        <div className="shop-container">
            <Card addItem={addItem} />
            <Card addItem={addItem} />
            <Card addItem={addItem} />
            <Card addItem={addItem} />
            <Card addItem={addItem} />
            <Card addItem={addItem} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
