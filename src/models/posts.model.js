const mongoose = require("mongoose");

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
    maxLength: 500,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    default: function () {
      return Math.round(Math.random() * 10 + 1);
    },
  },
});

module.exports = mongoose.model("posts", schema);
