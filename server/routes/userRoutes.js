const express = require('express');
const { createUser } = require('../controllers/userController');
const User = require('../models/User');

const router = express.Router();

router.post('/', createUser);

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;