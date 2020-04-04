// import the mongoose models
const { Transaction } = require("../models");
// to validate object IDs
const { ObjectID } = require("mongodb");

exports.addTransaction = (req, res) => {
  
  const renter = req.user
  const {startAt, endAt, item} = req.body;
  const trans = new Transaction({
    startAt,
    endAt,
    renter,
    item,
  });
  // Save the user
  trans.save().then(
    trans => {
      res.send(trans);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
};

// exports.getAllValidUsers = (req, res) => {
//   User.find({ isRemoved: false }).then(
//     users => {
//       res.send({ users }); // can wrap in object if want to add more properties
//     },
//     error => {
//       res.status(500).send(error); // server error
//     }
//   );
// };

// exports.delUser = (req, res) => {
//   const id = req.params.id;
//   // Validate id
//   if (!ObjectID.isValid(id)) {
//     res.status(404).send();
//     return;
//   }
//   // Delete a student by their id
//   User.findOneAndUpdate(
//     { _id: id },
//     { $set: { isRemoved: true } },
//     { new: true }
//   )
//     .then(user => {
//       if (!user) {
//         res.status(404).send();
//       } else {
//         res.send(user);
//       }
//     })
//     .catch(error => {
//       res.status(500).send(); // server error, could not delete.
//     });
// };
