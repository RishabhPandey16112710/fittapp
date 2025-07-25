const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  goals: Object,
  roadmap: Array,
});

module.exports = mongoose.model('User', userSchema);
