/* User model */
"use strict";

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      minlength: 4,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 4
    },
    score: {
      type: Number,
      default: 10
    },
    balance: {
      type: Number,
      default: 0
    },
    transactions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction"
    }],
    isRemoved: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre("save", function(next) {
  const user = this; // binds this to User document instance

  // checks to ensure we don't hash password more than once
  if (user.isModified("password")) {
    // generate salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByUserNamePassword = function(userName, password) {
  const User = this; // binds this to the User model

  // First find the user by their userName
  return User.findOne({ userName: userName }).then(user => {
    if (!user) {
      return Promise.reject(); // a rejected promise
    }
    // if the user exists, make sure their password is correct
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

// make a model using the User schema
const User = mongoose.model("User", UserSchema);
module.exports = User;
