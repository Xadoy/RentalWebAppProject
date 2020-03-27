/* Student mongoose model */
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
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);

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
  comments: [CommentSchema]
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item };
