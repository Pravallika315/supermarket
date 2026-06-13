import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="top-bar">
        <div className="left-links">
          <a href="#">Contact</a>
          <a href="#">Sitemap</a>
          <a href="#">Bookmark</a>
        </div>
        <div className="right-links">
          <button onClick={() => navigate('/cart')}>Cart</button>
          <button onClick={() => navigate('/checkout')}>Login</button>
        </div>
      </header>

      <header className="main-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
        <h1 className="logo">
          <span className="logo-yellow">Super</span>
          <span className="logo-green">Market</span>
        </h1>
      </header>
    </>
  );
}

export default Header;