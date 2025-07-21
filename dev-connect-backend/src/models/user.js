const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  emailId: { type: String, unique: true },
  password: { type: String },
  age: { type: Number, min: 18, max: 50 },
  gender: { type: String },
  about:{type: String, default:"Tell about yourself"},
  skills:{type: [String]}
});

const User = mongoose.model("User", userSchema); // model is like a class it will createuser added. instance whenever new 

module.exports = User;