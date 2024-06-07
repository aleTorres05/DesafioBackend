const mongoose = require("mongoose");

const modelName = posts;

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  image: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 100,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(modelName, schema);
