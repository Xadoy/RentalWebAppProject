/* Transaction model */
"use strict";

const mongoose = require("mongoose");

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const TransactionSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "rented"
    },
    startAt: {
      type: Date,
      required: true
    },
    endAt: {
      type: Date,
      required: true
    },
    renter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item"
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);

// make a model using the Transaction schema
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
