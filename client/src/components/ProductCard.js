import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function ProductCard({ name, image, weight, price }) {
  const {
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const cartItem = cartItems.find(item => item.name === name);

  return (
    <article className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <h4>{weight}</h4>

      <p>₹{price}</p>

      {cartItem ? (
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(name)}>
            -
          </button>

          <span>{cartItem.quantity}</span>

          <button onClick={() => increaseQuantity(name)}>
            +
          </button>
        </div>
      ) : (
        <button
          className="add-cart-btn"
          onClick={() =>
            addToCart({
              name,
              image,
              price
            })
          }
        >
          Add to Cart
        </button>
      )}
    </article>
  );
}

export default ProductCard;