import React, { useState } from "react";
import { products } from "../data.js";
import "./MenuItems.css";
import MList from "./MList";
import Cart from "./Cart";

function MenuItems() {
  const [prod, setProd] = useState(products);
  let [cartItems, setCartItems] = useState([]);
  let removeFromCart = (product) => {
    cartItems = cartItems.slice();
    setCartItems(cartItems.filter((x) => x.id !== product.id));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  let addToCart = (product) => {
    cartItems = cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCartItems(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  return (
    <>
      <main>
        <div className="content">
          <div className="main">
            <p className="items-heading">WE SERVE YOU HOT AND FRESH</p>

            <MList prod={prod} addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </main>
    </>
  );
}

export default MenuItems;
