const mongoose = require("mongoose");

let customerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    default: null,
  },
  todayDate: {
    type: Date,
    default: null,
  },
  birthday:{
    type: Date,
    default: null,
  },
  queue: {
    type: Number,
    default: null,
  },
  type: {
    type: String,
    default: null,
  }
});

module.exports = mongoose.model("Customer", customerSchema);
