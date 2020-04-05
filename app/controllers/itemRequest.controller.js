// import the mongoose models
const { ItemRequest } = require("../models");
// to validate object IDs
const { ObjectID } = require("mongodb");

const cloudinary = require("cloudinary");
const config = require("../config");
const { cloud_name, api_key, api_secret } = config;
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

exports.getAllItemRequests = (req, res) => {
  ItemRequest.find().then(
    (itemRequests) => {
      res.send({ itemRequests });
    },
    (error) => {
      res.status(500).send(error); // server error
    }
  );
};

exports.addItemRequest = (req, res) => {
  const creator = req.user;
  const { name, description, totalNum, dailyCost, image } = req.body;
  const itemReq = new ItemRequest({
    name,
    description,
    creator,
    totalNum,
    dailyCost,
    image,
  });
  // Save the item
  itemReq.save().then(
    (itemRequest) => {
      res.send(itemRequest);
    },
    (error) => {
      if (error.name === "ValidationError") error = error.message;
      res.status(400).send(error); // 400 for bad request
    }
  );
};

exports.addItemRequestImage = (req, res) => {
  cloudinary.uploader.upload(
    req.files.image.path, // req.files contains uploaded files
    function (result) {
      // Create a new image using the Image mongoose model
      const image = {
        image_id: result.public_id, // image id on cloudinary server
        image_url: result.url,
      };
      res.send(image);
    }
  );
};

exports.delItemRequest = (req, res) => {
  const id = req.params.id;
  // Validate id
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }
  // Delete a student by their id
  ItemRequest.findByIdAndRemove(id)
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
