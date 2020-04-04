/* Item mongoose model */
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlegth: 1,
      trim: true
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);

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

const ItemSchema = new mongoose.Schema({
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
  totalNum: {
    type: Number,
    default: 0
  },
  rentNum: {
    type: Number,
    default: 0
  },
  stockNum: {
    type: Number,
    default: 0
  },
  dueNum: {
    type: Number,
    default: 0
  },
  isRemoved: {
    type: Boolean,
    default: false
  },
  dailyCost: {
    type: Number,
    default: 1
  },
  comments: [CommentSchema],
  image: imageSchema
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
