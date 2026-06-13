import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import ProductSection from './ProductSection';
import products from '../data/products.json';

function Home() {
  return (
    <>
      <Header />
      <Hero />

      <ProductSection
        title="Fresh Vegetables"
        subtitle="A farmer's pick for you"
        products={products.vegetables}
      />

      <ProductSection
        title="Fresh Fruits"
        subtitle="From baskets to your doorsteps"
        products={products.fruits}
      />

      <ProductSection
        title="Dairy Products"
        subtitle="Creamy delights from farm to fridge"
        products={products.dairy}
      />

      <ProductSection
        title="Namkeens"
        subtitle="Crunchy snacks for every mood"
        products={products.namkeens}
      />

      <ProductSection
        title="Beverages"
        subtitle="Refresh your day with chilled drinks"
        products={products.beverages}
      />

      <ProductSection
        title="Chocolates"
        subtitle="Sweet treats to brighten your day"
        products={products.chocolates}
      />

      <Footer />
    </>
  );
}

export default Home;