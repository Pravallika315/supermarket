import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = 24.99;
  const delivery = 5.65;
  const promoDiscount = 50.00;
  const total = subtotal + tax + delivery - promoDiscount;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} width="80" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <p>Total: ₹{(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Tax: ₹{tax.toFixed(2)}</p>
            <p>Delivery: ₹{delivery.toFixed(2)}</p>
            <p>Promo Discount: -₹{promoDiscount.toFixed(2)}</p>
            <hr />
            <h2>Total: ₹{total.toFixed(2)}</h2>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;