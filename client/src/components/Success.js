import React from 'react';
import './Success.css';

import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for shopping with <span className="brand">Super Market</span>.</p>
      <p>Your order is being processed and will be delivered soon.</p>
      <button className="home-btn" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default Success;