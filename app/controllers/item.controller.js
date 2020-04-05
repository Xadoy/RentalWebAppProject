// import the mongoose models
const { Item } = require("../models");
// to validate object IDs
const { ObjectID } = require("mongodb");

exports.getItem = (req, res) => {
  const id = req.params.id;
  Item.find({ _id: id, isRemoved: false })
    .populate("comments.creator", "userName -_id")
    .then(
      (item) => {
        item = item[0];
        res.send({ item });
      },
      (error) => {
        res.status(500).send(error); // server error
      }
    );
};
exports.getAllValidItemsWithKeyword = (req, res) => {
  const keyword = req.params.keyword;
  Item.find({ isRemoved: false }).then(
    (items) => {
      items = items.filter(
        (item) =>
          item.name.includes(keyword) ||
          item.description.includes(keyword) ||
          item.comments.some((comment) => comment.content.includes(keyword))
      );
      res.send({ items });
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

// For comments:
exports.addCommentToItem = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }

  // Otherwise, findById
  Item.findById(id)
    .then((item) => {
      if (!item) {
        res.status(404).send(); // could not find this restaurant
      } else {
        const comment = {
          content: req.body.content,
          creator: req.user,
        };
        item.comments.push(comment);
        item.save().then(
          (result) => {
            res.send(item);
          },
          (error) => {
            res.status(400).send(error); // 400 for bad request
          }
        );
      }
    })
    .catch((error) => {
      res.status(500).send(); // server error
    });
};

exports.getCommentsOfItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .populate("comments.creator", "userName -_id")
    .then((item) => {
      if (!item) {
        res.status(404).send(); // could not find this restaurant
      } else {
        res.send(item.comments);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(); // server error
    });
};
