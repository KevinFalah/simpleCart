import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../product";
import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

export const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { cartItems, getTotalAmount, checkout } = useContext(ShopContext);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const closeModal = () => {
    setShowModal(false);
    checkout();
    navigate("/");
  };

  const totalAmount = getTotalAmount()

  console.log(getTotalAmount())
  return (
    <>
      <ReactModal isOpen={showModal} style={customStyles}>
        <div className="modalBody">
          <h1>SUCCESS!</h1>
          <button onClick={() => closeModal()}>Ok</button>
        </div>
      </ReactModal>
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount != 0 ? (
          <div className="checkout">
            <p>
              Subtotal : <b>Rp.{totalAmount}</b>
              
              </p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <code>You haven't chosen anything</code>
        )}
      </div>
    </>
  );
};
