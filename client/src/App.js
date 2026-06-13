import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Success from './components/Success';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;