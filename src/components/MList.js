import React, { useState } from "react";
import "./MenuItems.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import "./Modal.css";

function MList({ prod, addToCart }) {
  const [product, setProduct] = useState(null);
  console.log(prod);
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(null);
  };
  return (
    <div>
      <Fade bottom cascade={true}>
        <ul className="products">
          {prod.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                  <img src={product.image} alt={product.title} />

                  <p className="para">{product.title}</p>
                </a>
                <div className="product-price">
                  <div>€ {product.price}</div>
                  <button
                    onClick={() => addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
      {product && (
        <Modal
          contentClassName="modal"
          isOpen={true}
          onRequestClose={closeModal}
        >
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title} />
              <div className="product-details-description">
                <p>
                  <div className="ptitle">{product.title}</div>
                </p>

                <p> {product.description}</p>
                <div className="p-price">€ {product.price}</div>
                <button
                  className="button primary"
                  onClick={() => {
                    addToCart(product);
                    closeModal();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
}

export default MList;
