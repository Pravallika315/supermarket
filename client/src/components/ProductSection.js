import React from 'react';
import ProductCard from './ProductCard';

function ProductSection({ title, subtitle, products }) {
  return (
    <section className="product-section">
      <div className="heading">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            image={p.image}
            weight={p.weight}
            price={p.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;