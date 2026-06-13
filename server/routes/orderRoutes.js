const express = require('express');
const { createOrder } = require('../controllers/orderController');
const Order = require('../models/Order');

const router = express.Router();

router.post('/', createOrder);

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;