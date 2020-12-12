import React, { useState } from "react";
import Fade from "react-reveal/Fade";

function Cart({ cartItems, removeFromCart }) {
  const [showCheckOut, setShowCheckOut] = useState(false);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is Empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in your cart
        </div>
      )}
      <div className="cart">
        <Fade left cascade>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title.slice(0, 2)} />
                </div>
                <div className="cart-title">{item.title}</div>
                <div className="priceItem">
                  {item.price} x {item.count}{" "}
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  className="cart-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
      {cartItems.length !== 0 && (
        <div className="cart">
          <div className="total">
            <div className="total">
              Total: €{" "}
              {Math.round(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
            </div>
            <button
              onClick={() => setShowCheckOut(true)}
              className="button primary proceed"
            >
              Proceed{" "}
            </button>
          </div>
        </div>
      )}
      <Fade right cascade={true}>
        {showCheckOut && (
          <div className="form">
            <form>
              <h3>Enter The Below Details</h3>
              <ul className="form-container">
                <li>
                  <input placeholder="Enter Name" type="text" required />
                </li>
                <li>
                  <input
                    placeholder="Enter Phone Number"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Enter Address" type="text" required />
                </li>
                <li>
                  <button className="checkout">ORDER NOW</button>
                </li>
              </ul>
            </form>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Cart;
