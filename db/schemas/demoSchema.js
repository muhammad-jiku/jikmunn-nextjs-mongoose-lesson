const mongoose = require('mongoose');

const demoSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = demoSchema;
