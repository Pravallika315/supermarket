const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: {
    street: String,
    door: String,
    area: String,
    district: String,
    pin: String
  }
});

module.exports = mongoose.model('User', userSchema);