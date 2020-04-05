/* ItemRequest model */
"use strict";

const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  image_id: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const ItemRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlegth: 1,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlegth: 1,
      trim: true
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    dailyCost: {
      type: Number,
      default: 1
    },
    totalNum: {
      type: Number,
      default: 0
    },
    image: imageSchema
  },
  { timestamps: { createdAt: "createdAt" } }
);

// make a model using the ItemRequest schema
const ItemRequest = mongoose.model("ItemRequest", ItemRequestSchema);
module.exports = ItemRequest;
