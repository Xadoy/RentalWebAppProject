// import the mongoose models
const { Item } = require("../models");
// to validate object IDs
const { ObjectID } = require("mongodb");

exports.getItem = (req, res) => {
  const id = req.params.id;
  Item.find({ _id: id, isRemoved: false }).then(
    (item) => {
      item = item[0];
      res.send({ item });
    },
    (error) => {
      res.status(500).send(error); // server error
    }
  );
};

exports.getAllValidItems = (req, res) => {
  Item.find({ isRemoved: false }).then(
    (items) => {
      res.send({ items });
    },
    (error) => {
      res.status(500).send(error); // server error
    }
  );
};

exports.addItem = (req, res) => {
  // Create a new item
  const { name, description, totalNum, image } = req.body;
  const comments = [];
  const item = new Item({
    name,
    description,
    totalNum,
    comments,
    image,
  });
  // Save the item
  item.save().then(
    (item) => {
      res.send(item);
    },
    (error) => {
      if (error.name === "ValidationError") error = error.message;
      res.status(400).send(error); // 400 for bad request
    }
  );
};
exports.delItem = (req, res) => {
  const id = req.params.id;
  // Validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }
  // Delete a student by their id
  Item.findOneAndUpdate(
    { _id: id },
    { $set: { isRemoved: true } },
    { new: true }
  )
    .then((item) => {
      if (!item) {
        res.status(404).send();
      } else {
        res.send(item);
      }
    })
    .catch((error) => {
      res.status(500).send(); // server error, could not delete.
    });
};
