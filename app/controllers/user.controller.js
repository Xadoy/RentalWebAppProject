// import the mongoose models
const { User } = require("../models");
// to validate object IDs
const { ObjectID } = require("mongodb");

exports.addUser = (req, res) => {
  // Create a new user
  const user = new User({
    userName: req.body.userName,
    password: req.body.password
  });
  // Save the user
  user.save().then(
    user => {
      res.send(user);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
};

exports.getAllValidUsers = (req, res) => {
  User.find({ isRemoved: false }).then(
    users => {
      res.send({ users }); // can wrap in object if want to add more properties
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
};

exports.delUser = (req, res) => {
  const id = req.params.id;
  // Validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }
  // Delete a student by their id
  User.findOneAndUpdate(
    { _id: id },
    { $set: { isRemoved: true } },
    { new: true }
  )
    .then(user => {
      if (!user) {
        res.status(404).send();
      } else {
        res.send(user);
      }
    })
    .catch(error => {
      res.status(500).send(); // server error, could not delete.
    });
};
