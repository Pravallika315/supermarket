import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../CartContext';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    street: '',
    door: '',
    area: '',
    district: '',
    pin: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {

      if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      const userRes = await axios.post(
        'http://localhost:5000/api/users',
        {
          name: form.name,
          phone: form.phone,
          address: {
            street: form.street,
            door: form.door,
            area: form.area,
            district: form.district,
            pin: form.pin
          }
        }
      );

      const total = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      await axios.post(
        'http://localhost:5000/api/orders',
        {
          userId: userRes.data._id,
          items: cartItems,
          total
        }
      );

      navigate('/success');

    } catch (error) {
      console.error('Error placing order:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Enter Your Details</h2>

      <form className="checkout-form">
        {[
          'name',
          'phone',
          'street',
          'door',
          'area',
          'district',
          'pin'
        ].map(field => (
          <div className="form-group" key={field}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>

            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required
            />
          </div>
        ))}

        <button
          type="button"
          className="checkout-btn"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;