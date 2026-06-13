import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CategoryCard({ name }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const item = {
      name,
      image: `/images/${name.toLowerCase()}.jpg`,
      price: 50 // You can customize price per category later
    };
    addToCart(item);
  };

  return (
    <div style={{ margin: '10px', padding: '20px', border: '1px solid black' }}>
      <h3>{name}</h3>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default CategoryCard;